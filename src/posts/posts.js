/**
 * @typedef {{ slug: string, title: string, date: string, excerpt: string, content?: string, contentHtml?: string }} Post
 * @type {Post[]}
 */
const posts = [
  {
    slug: "como-organizei-minha-area-de-artigos",
    title: "Como organizei minha área de artigos",
    date: "2026-09-26",
    excerpt: "Um resumo rápido de como funciona a nova seção de artigos do site.",
    contentHtml: "<p>Este é um <strong>artigo de exemplo</strong>, criado para eu lembrar o <em>formato</em> a seguir da próxima vez que escrever algo.</p><h2>O que essa seção faz</h2><p>Cada artigo é um item dentro do array <code>posts</code>, com estes campos:</p><ul><li><strong>slug</strong>: parte da URL, sem espaços nem acentos</li><li><strong>title</strong>: título do artigo</li><li><strong>date</strong>: data no formato AAAA-MM-DD</li><li><strong>excerpt</strong>: resumo curto, aparece na listagem</li><li><strong>contentHtml</strong>: o texto formatado, gerado pelo dashboard em <code>/admin</code></li></ul><blockquote>Basta escrever no dashboard, clicar em \"Gerar código\" e colar aqui dentro.</blockquote><p>Pronto — é só isso.</p>",
  },
  {
    slug: "primeiro-post",
    title: "Meu primeiro artigo técnico",
    date: "2026-09-25",
    excerpt: "Testando a área de artigos do site.",
    content: `
# Meu primeiro artigo técnico

Este é o primeiro post da minha área de artigos.

## Por que criei essa seção

Queria um lugar simples para escrever sobre o que aprendo no dia a dia.
    `,
  },
];

export default posts;
