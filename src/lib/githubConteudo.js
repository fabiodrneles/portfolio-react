// Grava artigos no repositório pela API do GitHub. Cada artigo vira um arquivo em content/posts/<slug>.json
// e um commit; a Vercel reconstrói o site depois. Veja specs/013.
const REPO = process.env.GITHUB_REPO || "fabiodrneles/portfolio-react";
const caminho = (slug) => `content/posts/${slug}.json`;

const cabecalhos = () => ({
  Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
  Accept: "application/vnd.github+json",
  "X-GitHub-Api-Version": "2022-11-28",
});

/** Cria o arquivo do artigo. Devolve "existe" se já houver um artigo com o mesmo endereço (nada é sobrescrito). */
export async function salvarArtigo(artigo) {
  const url = `https://api.github.com/repos/${REPO}/contents/${caminho(artigo.slug)}`;

  const existente = await fetch(url, { headers: cabecalhos() });
  if (existente.status === 200) return "existe";
  if (existente.status !== 404) throw new Error(`GitHub respondeu ${existente.status}`);

  const gravacao = await fetch(url, {
    method: "PUT",
    headers: { ...cabecalhos(), "Content-Type": "application/json" },
    body: JSON.stringify({
      message: `Artigo: ${artigo.title}`,
      content: Buffer.from(JSON.stringify(artigo, null, 2) + "\n").toString("base64"),
    }),
  });
  if (!gravacao.ok) throw new Error(`GitHub respondeu ${gravacao.status}`);
  return "criado";
}
