# 009 Qualidade deste site

- **Status:** implementada
- **Atualizada em:** 2026-10-01

## Objetivo
Mostrar a quem avalia o portfólio, de forma modesta e verificável, como o site é testado. A autoridade vem do repositório público, não de adjetivos.

## Comportamento
- Página `/quality` (e `/en/quality`, `/fr/quality`), sem rota localizada, com link no menu do topo (marcado como página atual quando aberta), no rodapé e no sitemap.
- Texto só com fatos do repositório: testes Cypress, acessibilidade (axe, Pa11y), segurança, privacidade, desempenho (Lighthouse CI), interface, método por specs e uma seção de limites.
- Dois números lidos no build (`src/lib/quality.js`): especificações Cypress e pipelines. Nunca ficam desatualizados.
- Links para o repositório público e para os workflows, com `rel="noopener noreferrer"`.
- Não promete notas nem números que não estejam no repositório.

## Fora do escopo
Selos, notas externas e medições com usuários reais.

## Critérios de aceite
| # | Critério | Teste que prova |
| --- | --- | --- |
| 1 | A página existe nos 3 idiomas, com um h1, os dois números e links seguros para o repositório | `cypress/e2e/quality.cy.js` (novo) |
| 2 | Está no sitemap nos 3 idiomas, no rodapé e no menu do topo | `cypress/e2e/quality.cy.js` (novo) |

## Decisões
Tom modesto e seção "Limites" explícita, por pedido do dono de não exagerar.

## Arquivos principais
`src/app/[lang]/quality/`, `src/lib/quality.js`, `src/app/sitemap.js`, dicionários (`quality`)
