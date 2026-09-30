# 004 Privacidade e LGPD

- **Status:** implementada
- **Atualizada em:** 2026-09-30

## Objetivo
Cumprir a LGPD (Lei 13.709/2018) com transparência e o mínimo de dados.

## Comportamento
- Política em `/privacy` (PT), `/en/privacy`, `/fr/privacy`, com 12 seções: controlador, dados coletados, finalidades, base legal (art. 7º, I e V), compartilhamento (EmailJS, Vercel), transferência internacional (art. 33), retenção, direitos (art. 18), ANPD, crianças, segurança e alterações.
- Ligada no rodapé e no formulário; entrada no sitemap.
- Sem rastreadores, análise ou publicidade.
- Contato do titular: fabiodrneles@gmail.com.
- Limite honesto: o texto precisa de revisão de advogado ou encarregado de dados.

## Critérios de aceite
| # | Critério | Teste que prova |
| --- | --- | --- |
| 1 | Política completa nos 3 idiomas, com e-mail e direitos | `cypress/e2e/compliance.cy.js` |
| 2 | Nenhum rastreador nem storage antes da ação | `cypress/e2e/compliance.cy.js` |
| 3 | `security.txt` (RFC 9116) válido por mais de 30 dias | `cypress/e2e/security.cy.js` |

## Manutenção
Renovar `public/.well-known/security.txt` todo ano (vence em 2027-09-29) e `SECURITY.md`. Revisar a política ao mudar de provedor ou coletar algo novo.

## Arquivos principais
`src/app/[lang]/privacy/`, `src/i18n/dictionaries/*.js` (chave `privacy`), `docs/compliance/README.md`
