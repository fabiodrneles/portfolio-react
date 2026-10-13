# 012 Troca de idioma sem salto de rolagem

- **Status:** implementada
- **Atualizada em:** 2026-10-13

## Objetivo
Quem está lendo no meio da página e troca o idioma continua exatamente no mesmo ponto. Sem o salto para o topo, a pessoa não perde onde estava.

## Comportamento
- Trocar PT, EN ou FR pelo seletor do cabeçalho mantém a posição de rolagem (`scrollY`) da página.
- A página abre no mesmo conteúdo, só que no idioma escolhido (rota `/`, `/en` ou `/fr`).
- Os links de navegação normais (menu, rodapé, artigos) continuam levando ao topo ou à seção, como antes.

## Fora do escopo
Manter a posição ao trocar de página pelo menu ou pelo blog.

## Critérios de aceite
| # | Critério | Teste que prova |
| --- | --- | --- |
| 1 | Ao trocar de idioma no meio da página, `scrollY` continua o mesmo (tolerância de 2 px) | `cypress/e2e/language-scroll.cy.js` (novo) |
| 2 | A troca continua levando à mesma página no outro idioma | `cypress/e2e/i18n.cy.js` (existente) |

## Decisões
- O seletor usa `scroll={false}` no `Link` do Next.js, que impede o `scrollTo(0, 0)` automático da navegação. A posição restante vem do próprio documento, que não é recriado na troca.

## Arquivos principais
`src/components/header/LanguageSwitcher.jsx`
