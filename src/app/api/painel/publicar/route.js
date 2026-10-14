import { NextResponse } from "next/server";
import { SESSION_COOKIE, lerSessao } from "@/lib/painelAuth";
import { sanitizeServer } from "@/lib/sanitizeServer";
import { slugify } from "@/lib/slug";
import { salvarArtigo } from "@/lib/githubConteudo";

const pronto = (t) => Boolean(t?.title?.trim()) && Boolean(t?.contentHtml?.trim());

const montarTexto = (t) => ({
  title: String(t.title).trim(),
  excerpt: String(t.excerpt ?? "").trim(),
  seoTitle: String(t.seoTitle ?? "").trim(),
  seoDescription: String(t.seoDescription ?? "").trim(),
  contentHtml: sanitizeServer(t.contentHtml),
});

export async function POST(request) {
  if (!lerSessao(request.cookies.get(SESSION_COOKIE)?.value)) {
    return NextResponse.json({ erro: "Não autorizado." }, { status: 401 });
  }

  const corpo = await request.json().catch(() => null);
  // Regra do projeto: um artigo só sai com português, inglês e francês.
  if (!pronto(corpo?.pt) || !pronto(corpo?.en) || !pronto(corpo?.fr)) {
    return NextResponse.json(
      { erro: "Para publicar, o artigo precisa de título e conteúdo em português, inglês e francês." },
      { status: 400 }
    );
  }

  const pt = montarTexto(corpo.pt);
  const slug = slugify(pt.title);
  if (!slug) return NextResponse.json({ erro: "O título precisa ter letras ou números." }, { status: 400 });

  const artigo = {
    slug,
    ...pt,
    date: new Date().toISOString().slice(0, 10),
    translations: { en: montarTexto(corpo.en), fr: montarTexto(corpo.fr) },
  };

  try {
    const resultado = await salvarArtigo(artigo);
    if (resultado === "existe") {
      return NextResponse.json({ erro: "Já existe um artigo com esse endereço. Mude o título." }, { status: 409 });
    }
    return NextResponse.json({ slug, status: "publicado" });
  } catch {
    return NextResponse.json({ erro: "Não foi possível gravar no GitHub agora." }, { status: 502 });
  }
}
