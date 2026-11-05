# 005 Qualidade e pipelines

- **Status:** implementada
- **Atualizada em:** 2026-11-05

## Objetivo
Toda regressão de qualidade, acessibilidade, segurança ou conformidade derruba o CI.

## Comportamento
Os testes são soberanos (`CLAUDE.md`). Pipelines em `.github/workflows`, a cada push e toda segunda-feira:

| Pipeline | Arquivo | O que roda |
| --- | --- | --- |
| Geral | `ci.yml` | Todos os testes do Cypress |
| Acessibilidade | `accessibility.yml` | axe-core (WCAG 2.2 AA) e Pa11y |
| Segurança | `security.yml` | npm audit, dependency-review, CodeQL, Gitleaks, cabeçalhos |
| Conformidade | `compliance.yml` | LGPD e licenças |
| UI/UX | `uiux.yml` | interface, formulário, conteúdo e Lighthouse CI |

Metas do Lighthouse: celular (desempenho ≥ 80, demais ≥ 95, LCP ≤ 4,0 s), desktop (desempenho ≥ 90, LCP ≤ 2,5 s); CLS ≤ 0,1.

## Regras
- Nunca alterar, enfraquecer ou remover teste existente sem autorização explícita do dono.
- Teste novo é bem-vindo.
- Mapa de leis e normas por teste: `docs/compliance/README.md`. Não é certificação ISO.
- Os jobs do Cypress usam `cypress-io/github-action@v7` (roda em Node 24). A v6 quebrou quando o GitHub passou a forçar o Node 24 nas actions de Node 20 (02/11/2026): o `wait-on` falhava com `Socket closed before the connection was established` antes de qualquer teste. A troca de versão foi autorizada pelo dono em 2026-11-05; nenhum teste mudou.
- Botão "voltar ao topo" (`src/components/scrollup/ScrollUp.jsx`): fica dentro de uma região nomeada para o axe não acusar `region` depois de rolar a página; teste novo `cypress/e2e/scrollup.cy.js`.

## Arquivos principais
`cypress/e2e/`, `.github/workflows/`, `lighthouserc.*.json`, `.pa11yci.json`, `next.config.mjs` (CSP e cabeçalhos)
