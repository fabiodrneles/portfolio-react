# 007 Fontes locais

- **Status:** implementada
- **Atualizada em:** 2026-10-13

## Objetivo
O build e o site não dependem do Google Fonts. Hoje o CI caiu 3 vezes com `next/font/google` sem conseguir baixar a fonte (rede do runner).

## Comportamento
- As três famílias (Newsreader, IBM Plex Sans, IBM Plex Mono, escolhidas na spec 011) vêm de `src/fonts/*.woff2`, via `next/font/local`, definidas uma vez em `src/lib/fonts.js`.
- Só o subconjunto `latin` (cobre PT, EN e FR). A Newsreader tem um arquivo normal e um itálico; a Plex Mono, um por peso.
- As variáveis CSS continuam as mesmas (`--font-display`, `--font-body`, `--font-mono`).
- Licença SIL OFL 1.1 (uso e redistribuição livres). Detalhes em `src/fonts/README.md`.

## Fora do escopo
Trocar de fonte ou de pesos.

## Critérios de aceite
| # | Critério | Teste que prova |
| --- | --- | --- |
| 1 | O build funciona sem acesso ao Google Fonts | CI (`npm run build` em todos os workflows) |
| 2 | Nenhuma requisição a `fonts.googleapis.com` ou `fonts.gstatic.com` | `cypress/e2e/compliance.cy.js` (recursos de terceiros) e `security.cy.js` (mesma origem) |
| 3 | O CSP continua liberando só o próprio site (`font-src 'self' data:`) | `cypress/e2e/security.cy.js` |
| 4 | Notas do Lighthouse não caem | `lighthouserc.*.json` |

## Arquivos principais
`src/lib/fonts.js`, `src/fonts/`, `src/app/[lang]/layout.jsx`, `src/app/global-not-found.jsx`
