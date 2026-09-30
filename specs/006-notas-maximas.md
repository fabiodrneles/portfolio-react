# 006 Notas máximas em avaliadores externos

- **Status:** rascunho
- **Atualizada em:** 2026-09-30

## Objetivo
Chegar à nota máxima nas ferramentas públicas que avaliam sites, para o portfólio ser referência.

## Situação (o que foi medido e o que não foi)
| Ferramenta | Situação | Fonte |
| --- | --- | --- |
| Lighthouse: acessibilidade, boas práticas, SEO | 100 em todas as páginas | medido localmente e no CI |
| Lighthouse: desempenho | celular 91 a 93, desktop 100 | medido localmente (laboratório) |
| axe-core e Pa11y (WCAG 2.2 AA) | 0 violações | CI |
| CSP, HSTS, COOP e demais cabeçalhos | ativos e testados | `security.cy.js` |
| PageSpeed Insights (dados reais de usuários) | não medido | precisa do site publicado |
| Mozilla Observatory, securityheaders.com | não medido; `script-src 'unsafe-inline'` deve custar pontos | precisa do site publicado |
| SSL Labs | não medido; depende da Vercel | precisa do site publicado |
| W3C Validator, WAVE, WebPageTest | não medido | precisa do site publicado |

## Lacunas conhecidas
1. **Desempenho no celular abaixo de 100.** Investigar LCP e o peso do JavaScript.
2. **CSP com `'unsafe-inline'` em scripts.** Tirá-lo exige nonces (renderização dinâmica, que piora o desempenho) ou hashes; avaliar o custo antes.
3. **Ferramentas externas sem medição.** Rodar cada uma no site publicado e registrar a nota no `docs/journal.md`.

## Critérios de aceite
| # | Critério | Teste que prova |
| --- | --- | --- |
| 1 | Lighthouse desempenho ≥ 95 no celular | `lighthouserc.celular.json` (subir a meta só depois de atingir) |
| 2 | Observatory e securityheaders com nota A ou melhor | medição manual registrada no journal |
| 3 | Nenhuma queda das notas já atingidas | pipelines existentes |

## Decisões
Nota 100 em tudo nem sempre é possível nem desejável: ferramentas discordam entre si e mudam de critério. A meta é a maior nota que não sacrifique segurança, acessibilidade ou conteúdo.
