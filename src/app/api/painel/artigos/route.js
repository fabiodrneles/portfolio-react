import { NextResponse } from "next/server";
import { SESSION_COOKIE, lerSessao } from "@/lib/painelAuth";
import { apagarArquivo, lerArquivo, listarPasta } from "@/lib/githubConteudo";
import { slugify } from "@/lib/slug";

const entrar = (request) => lerSessao(request.cookies.get(SESSION_COOKIE)?.value);
const naoAutorizado = () => NextResponse.json({ erro: "Não autorizado." }, { status: 401 });

/** Lista os artigos publicados pelo painel (título e data). */
export async function GET(request) {
  if (!entrar(request)) return naoAutorizado();
  try {
    const arquivos = await listarPasta("content/posts");
    const artigos = await Promise.all(
      arquivos.map(async (arquivo) => {
        const lido = await lerArquivo(`content/posts/${arquivo.name}`);
        return { slug: lido.dados.slug, title: lido.dados.title, date: lido.dados.date };
      })
    );
    return NextResponse.json({ artigos: artigos.sort((a, b) => b.date.localeCompare(a.date)) });
  } catch {
    return NextResponse.json({ erro: "Não foi possível ler os artigos agora." }, { status: 502 });
  }
}

/**
 * Exclui um artigo publicado. Exige o slug duas vezes (na URL e no corpo, `confirmar`),
 * para que um clique acidental não apague nada.
 */
export async function DELETE(request) {
  if (!entrar(request)) return naoAutorizado();
  const slug = slugify(request.nextUrl.searchParams.get("slug") || "");
  const corpo = await request.json().catch(() => null);
  if (!slug || corpo?.confirmar !== slug) {
    return NextResponse.json({ erro: "Confirme o endereço do artigo para excluir." }, { status: 400 });
  }

  const caminho = `content/posts/${slug}.json`;
  try {
    const lido = await lerArquivo(caminho);
    if (!lido) return NextResponse.json({ erro: "Artigo não encontrado." }, { status: 404 });
    await apagarArquivo(caminho, { sha: lido.sha, mensagem: `Excluir artigo: ${lido.dados.title}` });
    return NextResponse.json({ slug, status: "excluido" });
  } catch {
    return NextResponse.json({ erro: "Não foi possível excluir agora." }, { status: 502 });
  }
}
