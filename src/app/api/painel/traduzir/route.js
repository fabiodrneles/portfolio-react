import { NextResponse } from "next/server";
import { SESSION_COOKIE, lerSessao } from "@/lib/painelAuth";
import { traduzirArtigo } from "@/lib/traduzir";
import { sanitizeServer } from "@/lib/sanitizeServer";

export async function POST(request) {
  if (!lerSessao(request.cookies.get(SESSION_COOKIE)?.value)) {
    return NextResponse.json({ erro: "Não autorizado." }, { status: 401 });
  }

  // A tradução automática é opcional: sem a chave, o inglês e o francês são escritos à mão no painel.
  if (!process.env.ANTHROPIC_API_KEY) {
    return NextResponse.json({ erro: "Tradução automática desligada. Escreva o inglês e o francês à mão." }, { status: 503 });
  }

  const corpo = await request.json().catch(() => null);
  if (!corpo?.title || !corpo?.contentHtml) {
    return NextResponse.json({ erro: "Preencha título e conteúdo em português antes de traduzir." }, { status: 400 });
  }

  try {
    const pt = {
      title: String(corpo.title),
      excerpt: String(corpo.excerpt ?? ""),
      seoTitle: String(corpo.seoTitle ?? ""),
      seoDescription: String(corpo.seoDescription ?? ""),
      contentHtml: sanitizeServer(corpo.contentHtml),
    };
    return NextResponse.json(await traduzirArtigo(pt));
  } catch (erro) {
    // A mensagem não traz a chave nem detalhes internos; o painel mostra só o aviso.
    return NextResponse.json({ erro: erro.message || "Não foi possível traduzir agora." }, { status: 502 });
  }
}
