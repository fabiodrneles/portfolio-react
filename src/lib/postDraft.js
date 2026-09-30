// Regras do rascunho de artigo do /admin. Veja specs/003-blog.md.

export const SEO_TITLE_MAX = 43; // o <title> inteiro (com o sufixo abaixo) fica em até 60
export const SEO_DESCRIPTION_MAX = 160;
export const PAGE_TITLE_MAX = 60;
export const TITLE_SUFFIX = " | Fabio Dorneles";

export const LANG_NAMES = { pt: "português", en: "inglês", fr: "francês" };

export function slugify(text) {
  return text
    .toString()
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

// o Quill converte espaços em &nbsp; ao colar; isso impede a quebra de linha no artigo
export const cleanHtml = (html) => html.replace(/&nbsp;/g, " ");

// o Quill vazio devolve <p><br></p>; só conta como conteúdo se houver texto ou imagem.
// O DOMParser lê o texto sem executar nada e sem depender de regex para remover tags.
export const hasContent = (html) => {
  const body = new DOMParser().parseFromString(html, "text/html").body;
  return Boolean(body.querySelector("img")) || body.textContent.replace(/\u00a0/g, " ").trim().length > 0;
};

const isFilled = (t) => Boolean(t.title.trim()) && hasContent(t.contentHtml);
const isEmpty = (t) => !t.title.trim() && !hasContent(t.contentHtml);

/** Avisos antes de publicar. `texts` tem pt, en e fr, cada um com title, excerpt, seoTitle, seoDescription e contentHtml. */
export function collectWarnings(texts) {
  const warnings = [];
  if (!isFilled(texts.pt)) warnings.push("O texto em português precisa de título e conteúdo.");

  ["en", "fr"].forEach((l) => {
    if (isEmpty(texts[l])) {
      warnings.push(
        `Falta a tradução em ${LANG_NAMES[l]}: um artigo só em português não pode ir para produção (regra do projeto).`
      );
    } else if (!isFilled(texts[l])) {
      warnings.push(`A tradução em ${LANG_NAMES[l]} está incompleta: precisa de título e conteúdo. Ela ficou de fora do código.`);
    }
  });

  ["pt", "en", "fr"].forEach((l) => {
    const t = texts[l];
    if (!isFilled(t)) return;
    const name = LANG_NAMES[l];
    const seoTitle = t.seoTitle.trim();
    const seoDescription = t.seoDescription.trim();
    if (seoTitle.length > SEO_TITLE_MAX) {
      warnings.push(`Título para buscadores em ${name} com ${seoTitle.length} caracteres (máximo ${SEO_TITLE_MAX}).`);
    }
    if (!seoTitle && (t.title.trim() + TITLE_SUFFIX).length > PAGE_TITLE_MAX) {
      warnings.push(
        `Sem título para buscadores em ${name}: o título da página ficaria com ${(t.title.trim() + TITLE_SUFFIX).length} caracteres (máximo ${PAGE_TITLE_MAX}) e o teste de SEO falha.`
      );
    }
    if (seoDescription.length > SEO_DESCRIPTION_MAX) {
      warnings.push(`Descrição para buscadores em ${name} com ${seoDescription.length} caracteres (máximo ${SEO_DESCRIPTION_MAX}).`);
    }
    if (!seoDescription && (t.excerpt.trim().length > SEO_DESCRIPTION_MAX || !t.excerpt.trim())) {
      warnings.push(
        `Sem descrição para buscadores em ${name}: o resumo ${t.excerpt.trim() ? `tem ${t.excerpt.trim().length} caracteres` : "está vazio"} (máximo ${SEO_DESCRIPTION_MAX}).`
      );
    }
  });
  return warnings;
}

const seoLines = (t, indent) =>
  [
    t.seoTitle.trim() && `${indent}seoTitle: ${JSON.stringify(t.seoTitle.trim())},`,
    t.seoDescription.trim() && `${indent}seoDescription: ${JSON.stringify(t.seoDescription.trim())},`,
  ]
    .filter(Boolean)
    .map((line) => `${line}\n`)
    .join("");

/** Código do artigo para colar em src/posts/posts.js. */
export function buildPostCode(texts, date = new Date().toISOString().slice(0, 10)) {
  const pt = texts.pt;
  const slug = slugify(pt.title || "novo-artigo");

  const translated = ["en", "fr"].filter((l) => isFilled(texts[l]));
  const translations = translated.length
    ? `    translations: {\n${translated
        .map(
          (l) => `      ${l}: {
        title: ${JSON.stringify(texts[l].title.trim())},
        excerpt: ${JSON.stringify(texts[l].excerpt)},
${seoLines(texts[l], "        ")}        contentHtml: ${JSON.stringify(cleanHtml(texts[l].contentHtml))},
      },\n`
        )
        .join("")}    },\n`
    : "";

  return `  {
    slug: "${slug}",
    title: ${JSON.stringify(pt.title.trim())},
    date: "${date}",
    excerpt: ${JSON.stringify(pt.excerpt)},
${seoLines(pt, "    ")}    contentHtml: ${JSON.stringify(cleanHtml(pt.contentHtml))},
${translations}  },`;
}
