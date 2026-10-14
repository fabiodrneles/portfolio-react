// Tradução de artigos do português para inglês e francês, pela API da Anthropic.
// Roda só no servidor: a chave ANTHROPIC_API_KEY nunca vai para o navegador. Veja specs/013.
import { sanitizeServer } from "./sanitizeServer";

const MODELO = "claude-sonnet-5-5";
const IDIOMAS = { en: "inglês", fr: "francês" };
const CAMPOS = ["title", "excerpt", "seoTitle", "seoDescription", "contentHtml"];

const instrucao = (idioma) => `Você traduz artigos de blog do português do Brasil para ${IDIOMAS[idioma]}.
Regras:
- Mantenha as tags HTML, os atributos, os links, os trechos de código e os nomes próprios exatamente como estão.
- Não acrescente nem remova conteúdo. Não explique nada.
- Responda somente um objeto JSON com as chaves: title, excerpt, seoTitle, seoDescription, contentHtml. Todas são strings.`;

/** Traduz um texto do artigo para `idioma` ("en" ou "fr"). Lança erro se a resposta não vier no formato esperado. */
export async function traduzirTexto(texto, idioma) {
  const resposta = await fetch("https://api.anthropic.com/v1/messages", {
    method: "POST",
    headers: {
      "x-api-key": process.env.ANTHROPIC_API_KEY,
      "anthropic-version": "2023-06-01",
      "content-type": "application/json",
    },
    body: JSON.stringify({
      model: MODELO,
      max_tokens: 8000,
      system: instrucao(idioma),
      messages: [{ role: "user", content: JSON.stringify(texto) }],
    }),
  });
  if (!resposta.ok) throw new Error(`Tradução indisponível (${resposta.status}).`);

  const { content } = await resposta.json();
  const texto_resposta = content?.find((bloco) => bloco.type === "text")?.text ?? "";
  const inicio = texto_resposta.indexOf("{");
  const fim = texto_resposta.lastIndexOf("}");
  if (inicio < 0 || fim < inicio) throw new Error("A tradução veio fora do formato esperado.");

  const traduzido = JSON.parse(texto_resposta.slice(inicio, fim + 1));
  if (!CAMPOS.every((campo) => typeof traduzido[campo] === "string")) {
    throw new Error("A tradução veio sem todos os campos.");
  }
  return { ...traduzido, contentHtml: sanitizeServer(traduzido.contentHtml) };
}

/** Traduz os campos em português para inglês e francês, em paralelo. */
export async function traduzirArtigo(pt) {
  const texto = Object.fromEntries(CAMPOS.map((campo) => [campo, pt[campo] ?? ""]));
  const [en, fr] = await Promise.all([traduzirTexto(texto, "en"), traduzirTexto(texto, "fr")]);
  return { en, fr };
}
