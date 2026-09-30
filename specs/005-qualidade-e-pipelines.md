# 005 Qualidade e pipelines

- **Status:** implementada
- **Atualizada em:** 2026-09-30

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

## Arquivos principais
`cypress/e2e/`, `.github/workflows/`, `lighthouserc.*.json`, `.pa11yci.json`, `next.config.mjs` (CSP e cabeçalhos)
