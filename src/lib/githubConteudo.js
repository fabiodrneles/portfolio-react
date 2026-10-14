// Lê e grava arquivos do conteúdo pela API do GitHub. Cada gravação é um commit; a Vercel reconstrói o site depois.
// Artigos publicados: content/posts/<slug>.json. Rascunhos: content/drafts/<slug>.json. Veja specs/013.
const REPO = process.env.GITHUB_REPO || "fabiodrneles/portfolio-react";
const API = `https://api.github.com/repos/${REPO}/contents`;

const cabecalhos = () => ({
  Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
  Accept: "application/vnd.github+json",
  "X-GitHub-Api-Version": "2022-11-28",
});

const url = (caminho) => `${API}/${caminho}`;

/** Lista os arquivos de uma pasta. Pasta inexistente devolve []. */
export async function listarPasta(pasta) {
  const resposta = await fetch(url(pasta), { headers: cabecalhos() });
  if (resposta.status === 404) return [];
  if (!resposta.ok) throw new Error(`GitHub respondeu ${resposta.status}`);
  const itens = await resposta.json();
  return itens.filter((item) => item.type === "file" && item.name.endsWith(".json"));
}

/** Lê um arquivo JSON do repositório. Devolve { dados, sha } ou null se não existir. */
export async function lerArquivo(caminho) {
  const resposta = await fetch(url(caminho), { headers: cabecalhos() });
  if (resposta.status === 404) return null;
  if (!resposta.ok) throw new Error(`GitHub respondeu ${resposta.status}`);
  const { content, sha } = await resposta.json();
  return { dados: JSON.parse(Buffer.from(content, "base64").toString("utf8")), sha };
}

/** Cria ou atualiza um arquivo JSON (com `sha` para atualizar). Gera um commit. */
export async function gravarArquivo(caminho, dados, { sha, mensagem }) {
  const resposta = await fetch(url(caminho), {
    method: "PUT",
    headers: { ...cabecalhos(), "Content-Type": "application/json" },
    body: JSON.stringify({
      message: mensagem,
      content: Buffer.from(JSON.stringify(dados, null, 2) + "\n").toString("base64"),
      ...(sha ? { sha } : {}),
    }),
  });
  if (!resposta.ok) throw new Error(`GitHub respondeu ${resposta.status}`);
}

/** Apaga um arquivo. Gera um commit. O `sha` garante que é a versão lida. */
export async function apagarArquivo(caminho, { sha, mensagem }) {
  const resposta = await fetch(url(caminho), {
    method: "DELETE",
    headers: { ...cabecalhos(), "Content-Type": "application/json" },
    body: JSON.stringify({ message: mensagem, sha }),
  });
  if (!resposta.ok) throw new Error(`GitHub respondeu ${resposta.status}`);
}

/** Cria o artigo publicado. Devolve "existe" se o endereço já estiver ocupado (nada é sobrescrito). */
export async function salvarArtigo(artigo) {
  const caminho = `content/posts/${artigo.slug}.json`;
  if (await lerArquivo(caminho)) return "existe";
  await gravarArquivo(caminho, artigo, { mensagem: `Artigo: ${artigo.title}` });
  return "criado";
}
