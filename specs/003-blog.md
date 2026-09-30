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

## Arquivos principais
`src/posts/`, `src/components/admin/Admin.jsx`, `src/app/[lang]/blog/`, `src/app/[lang]/opengraph-image.jsx`, `src/app/sitemap.js`
