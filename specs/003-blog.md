# 003 Blog

- **Status:** implementada
- **Atualizada em:** 2026-09-30

## Objetivo
Publicar artigos técnicos, legíveis e compartilháveis nos três idiomas, com SEO correto.

## Comportamento
- Artigos em `src/posts/posts.js`; `localize.js` escolhe o idioma. Artigo novo exige `translations` EN e FR.
- Cada artigo: título único, metadados, imagem Open Graph (PNG), JSON-LD `BlogPosting`, entrada no sitemap.
- Botões de compartilhar (LinkedIn, X e outros) com `rel` seguro em links `target=_blank`.
- SEO: o que aparece no buscador vem de `seoTitle` (até 43 caracteres, pois a página acrescenta " | Fabio Dorneles" e o `<title>` inteiro fica em até 60) e `seoDescription` (até 160), por artigo e por idioma. Sem eles valem `title` e `excerpt`. O título e o resumo exibidos no site não mudam.
- `/admin`: cada idioma tem os campos "Título para buscadores" (até 43) e "Descrição para buscadores" (até 160), com contador de caracteres. O código gerado inclui `seoTitle` e `seoDescription`, troca `&nbsp;` por espaço nos três idiomas e o painel avisa quando falta tradução EN ou FR, quando o SEO passa do limite ou quando o título sem `seoTitle` ultrapassa 43 caracteres. Os limites ficam em `src/lib/postDraft.js`.
- Feed RSS 2.0 por idioma: `/feed.xml` (pt), `/en/feed.xml` e `/fr/feed.xml`, gerados no build por `src/lib/feed.js` com todos os artigos (mais novo primeiro), texto completo em `content:encoded` e autor `Fábio D. Dorneles` (`FEED_AUTHOR` em `src/lib/site.js`; nome decidido pelo dono em 2026-09-30, só para o feed). Cada página declara os três feeds com `<link rel="alternate" type="application/rss+xml" title="...">` (o do idioma da página primeiro, para um leitor que parte da raiz oferecer a escolha de idioma); a lista do blog tem um link "RSS" e o rodapé de todas as páginas também (aponta para o feed do idioma da página).
- Blocos de código: o HTML do Quill (`<pre data-language="plain">`) é exibido com quebra de linha (`white-space: pre-wrap`), sem barra de rolagem, para não criar região rolável sem foco de teclado (axe). O editor do `/admin` tem o botão de bloco de código (`</>`), o botão de código em linha e um guia "Como inserir código" logo acima do editor.

## Critérios de aceite
| # | Critério | Teste que prova |
| --- | --- | --- |
| 1 | Home leva a um artigo e volta | `cypress/e2e/smoke.cy.js` |
| 2 | Todos os artigos existem nos 3 idiomas | `cypress/e2e/i18n.cy.js` |
| 3 | JSON-LD, links de compartilhar e sitemap com todos os artigos | `cypress/e2e/content.cy.js` |
| 4 | Títulos únicos e imagem de compartilhamento PNG | `cypress/e2e/uiux.cy.js` |
| 5 | `<title>` com até 60 caracteres e `meta description` com até 160, em todos os artigos e idiomas | `cypress/e2e/seo.cy.js` (novo) |
| 6 | Artigo com bloco de código exibe o código e não gera violação de acessibilidade | `cypress/e2e/code-blocks.cy.js` (novo) |
| 7 | `/admin` gera `seoTitle`/`seoDescription` nos três idiomas, conta caracteres e avisa tradução faltando | `cypress/e2e/admin.cy.js` (novo) |
| 8 | Feed RSS válido por idioma, com autor `Fábio D. Dorneles`, todos os artigos e link de descoberta | `cypress/e2e/feed.cy.js` (novo) |
| 9 | O rodapé de toda página tem o link RSS do idioma, com alvo de toque de pelo menos 24px | `cypress/e2e/feed-footer.cy.js` (novo) |
| 10 | Toda página anuncia os 3 feeds no cabeçalho, com título por idioma e o do idioma da página primeiro | `cypress/e2e/feed-discovery.cy.js` (novo) |

## Arquivos principais
`src/posts/`, `src/components/admin/Admin.jsx`, `src/app/[lang]/blog/`, `src/app/[lang]/opengraph-image.jsx`, `src/app/sitemap.js`
