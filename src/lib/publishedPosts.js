// Artigos publicados pelo painel (/painel): um arquivo JSON por artigo em content/posts/.
// Só roda no servidor, durante o build e nas rotas do site.
import fs from "node:fs";
import path from "node:path";

export function carregarArtigosPublicados() {
  const pasta = path.join(process.cwd(), "content", "posts");
  if (!fs.existsSync(pasta)) return [];
  return fs
    .readdirSync(pasta)
    .filter((arquivo) => arquivo.endsWith(".json"))
    .map((arquivo) => JSON.parse(fs.readFileSync(path.join(pasta, arquivo), "utf8")));
}
