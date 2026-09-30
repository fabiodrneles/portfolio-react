# 003 Blog

- **Status:** implementada
- **Atualizada em:** 2026-09-30

## Objetivo
Publicar artigos técnicos, legíveis e compartilháveis nos três idiomas, com SEO correto.

## Comportamento
- Artigos em `src/posts/posts.js`; `localize.js` escolhe o idioma. Artigo novo exige `translations` EN e FR.
- Cada artigo: título único, metadados, imagem Open Graph (PNG), JSON-LD `BlogPosting`, entrada no sitemap.
- Botões de compartilhar (LinkedIn, X e outros) com `rel` seguro em links `target=_blank`.
- Excerpt: ideal em torno de 160 caracteres (o do artigo do QA tem cerca de 220; encurtar é sugestão pendente).

## Critérios de aceite
| # | Critério | Teste que prova |
| --- | --- | --- |
| 1 | Home leva a um artigo e volta | `cypress/e2e/smoke.cy.js` |
| 2 | Todos os artigos existem nos 3 idiomas | `cypress/e2e/i18n.cy.js` |
| 3 | JSON-LD, links de compartilhar e sitemap com todos os artigos | `cypress/e2e/content.cy.js` |
| 4 | Títulos únicos e imagem de compartilhamento PNG | `cypress/e2e/uiux.cy.js` |

## Arquivos principais
`src/posts/`, `src/app/[lang]/blog/`, `src/app/[lang]/opengraph-image.jsx`, `src/app/sitemap.js`
