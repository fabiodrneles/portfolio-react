import { NextResponse } from "next/server";
import { SESSION_COOKIE, lerSessao } from "@/lib/painelAuth";
import { sanitizeServer } from "@/lib/sanitizeServer";
import { slugify } from "@/lib/slug";
import { gravarArquivo, lerArquivo, listarPasta } from "@/lib/githubConteudo";

const PASTA = "content/drafts";

const entrar = (request) => lerSessao(request.cookies.get(SESSION_COOKIE)?.value);
const naoAutorizado = () => NextResponse.json({ erro: "Não autorizado." }, { status: 401 });

/** Sem ?slug: lista os rascunhos (título e data). Com ?slug: devolve o rascunho completo para reabrir. */
export async function GET(request) {
  if (!entrar(request)) return naoAutorizado();
  const slug = request.nextUrl.searchParams.get("slug");
  try {
    if (slug) {
      const lido = await lerArquivo(`${PASTA}/${slugify(slug)}.json`);
      if (!lido) return NextResponse.json({ erro: "Rascunho não encontrado." }, { status: 404 });
      return NextResponse.json(lido.dados);
    }
    const arquivos = await listarPasta(PASTA);
    const rascunhos = await Promise.all(
      arquivos.map(async (arquivo) => {
        const lido = await lerArquivo(`${PASTA}/${arquivo.name}`);
        return { slug: lido.dados.slug, title: lido.dados.pt?.title || "(sem título)", atualizado: lido.dados.atualizado };
      })
    );
    return NextResponse.json({ rascunhos });
  } catch {
    return NextResponse.json({ erro: "Não foi possível ler os rascunhos agora." }, { status: 502 });
  }
}

/** Salva o rascunho. Não publica nada. Cada salvamento gera um commit. */
export async function POST(request) {
  if (!entrar(request)) return naoAutorizado();

  const corpo = await request.json().catch(() => null);
  const titulo = String(corpo?.pt?.title ?? "").trim();
  if (!titulo) return NextResponse.json({ erro: "Dê um título em português para salvar o rascunho." }, { status: 400 });

  const slug = slugify(titulo);
  if (!slug) return NextResponse.json({ erro: "O título precisa ter letras ou números." }, { status: 400 });

  const caminho = `${PASTA}/${slug}.json`;
  try {
    const existente = await lerArquivo(caminho);
    const rascunho = {
      slug,
      pt: { ...corpo.pt, contentHtml: sanitizeServer(corpo.pt.contentHtml) },
      en: corpo.en ? { ...corpo.en, contentHtml: sanitizeServer(corpo.en.contentHtml) } : null,
      fr: corpo.fr ? { ...corpo.fr, contentHtml: sanitizeServer(corpo.fr.contentHtml) } : null,
      atualizado: new Date().toISOString(),
    };
    await gravarArquivo(caminho, rascunho, {
      sha: existente?.sha,
      mensagem: `Rascunho: ${titulo}`,
    });
    return NextResponse.json({ slug, status: "salvo" });
  } catch {
    return NextResponse.json({ erro: "Não foi possível salvar o rascunho agora." }, { status: 502 });
  }
}
