# 001 Idiomas e rotas

- **Status:** implementada
- **Atualizada em:** 2026-09-30

## Objetivo
O visitante lê o site (e cada artigo) no idioma dele: português, inglês ou francês.

## Comportamento
- Português sem prefixo (`/`, `/blog`); inglês em `/en`; francês em `/fr`.
- `src/proxy.js` escolhe o idioma pelo cookie `lang` e, sem cookie, por `Accept-Language`, e reescreve para `/pt/...` quando preciso.
- O seletor de idioma grava o cookie `lang` (SameSite=Lax, cerca de 1 ano). É o único cookie do site.
- Textos ficam em `src/i18n/dictionaries/{pt,en,fr}.js`; as três chaves devem ter a mesma estrutura.
- Todo artigo novo do blog traz `translations` EN e FR (regra do dono, `CLAUDE.md`).
- `/admin` existe só em português e é `noindex`.

## Fora do escopo
Mais idiomas; detecção por IP.

## Critérios de aceite
| # | Critério | Teste que prova |
| --- | --- | --- |
| 1 | Cada idioma serve o conteúdo no idioma certo, inclusive artigos | `cypress/e2e/i18n.cy.js` |
| 2 | Só o cookie `lang` é gravado, após a troca de idioma | `cypress/e2e/security.cy.js`, `compliance.cy.js` |
| 3 | hreflang e sitemap cobrem os três idiomas | `cypress/e2e/compliance.cy.js` |

## Arquivos principais
`src/proxy.js`, `src/i18n/`, `src/app/[lang]/layout.jsx`, `src/components/header/LanguageSwitcher.jsx`
