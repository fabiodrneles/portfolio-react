# Conformidade, qualidade e segurança

Este documento liga cada norma e lei ao teste automático que verifica o controle técnico correspondente. Os testes são soberanos: se um deles falha, o site está errado (veja `CLAUDE.md`).

## O que isto prova, e o que não prova

- **Prova** que os controles técnicos listados abaixo estão ativos em cada commit e que qualquer regressão derruba o pipeline.
- **Não é certificação.** Certificar ISO/IEC 27001, 27701 ou 9001 exige um sistema de gestão auditado por organismo acreditado, o que não se aplica a um site pessoal. Aqui as normas ISO são usadas como referência de boas práticas.
- **Não substitui revisão jurídica.** A política de privacidade em `src/i18n/dictionaries/*.js` (chave `privacy`) é uma base séria, mas deve ser revisada por advogado ou encarregado de dados antes de ser considerada definitiva.
- **Acessibilidade automática cobre só parte da WCAG** (o axe encontra cerca de 30% a 50% dos problemas). Teste manual com leitor de tela (NVDA, VoiceOver) e só com teclado continua necessário antes de mudanças grandes de layout.

## Pipelines

| Pipeline | Arquivo | O que roda |
| --- | --- | --- |
| Acessibilidade | `.github/workflows/accessibility.yml` | axe-core (`cypress/e2e/a11y.cy.js`) e Pa11y/HTML_CodeSniffer (`.pa11yci.json`) |
| Segurança | `.github/workflows/security.yml` | `npm audit`, revisão de dependências, CodeQL, Gitleaks, cabeçalhos e superfície (`cypress/e2e/security.cy.js`) |
| Conformidade | `.github/workflows/compliance.yml` | LGPD e privacidade (`cypress/e2e/compliance.cy.js`) e licenças de código aberto (`.license-allowlist`) |
| UI/UX | `.github/workflows/uiux.yml` | interface, formulário e conteúdo (`uiux`, `contact-flow`, `content`) e Lighthouse CI (`lighthouserc.*.json`) |
| Testes gerais | `.github/workflows/ci.yml` | todos os testes do Cypress a cada push |

Todos rodam a cada push e toda segunda-feira (para pegar vulnerabilidades novas em dependências antigas).

## Mapa de controles

### Lei Geral de Proteção de Dados (Lei nº 13.709/2018)

| Exigência | Como é atendida | Teste |
| --- | --- | --- |
| Transparência e informação clara (arts. 6º, VI, e 9º) | Política de privacidade em PT, EN e FR, ligada no rodapé e no formulário | `compliance.cy.js` (política completa, rodapé, aviso no formulário) |
| Finalidade e necessidade (art. 6º, I e III) | O formulário coleta só nome, e-mail e mensagem | `compliance.cy.js` (minimização) |
| Base legal e consentimento (arts. 7º e 8º) | Aviso antes do botão de enviar; nada é enviado antes do clique | `compliance.cy.js` |
| Direitos do titular (art. 18) e canal do responsável | Política lista os direitos e o e-mail de contato | `compliance.cy.js` |
| Transferência internacional (art. 33) | Política informa EmailJS e Vercel | `compliance.cy.js` |
| Sem rastreamento não declarado | Sem cookies, storage, análise nem publicidade antes da ação do visitante | `compliance.cy.js`, `security.cy.js` (cookies) |
| Segurança (art. 46) | Cabeçalhos, CSP, HTTPS, auditoria de dependências | `security.cy.js`, `security.yml` |

### Acessibilidade

| Referência | Como é atendida | Teste |
| --- | --- | --- |
| Lei Brasileira de Inclusão (Lei nº 13.146/2015), art. 63 | Site acessível, com WCAG 2.2 AA como critério | `a11y.cy.js`, Pa11y, Lighthouse |
| eMAG e WCAG 2.2 AA (ISO/IEC 40500 corresponde à WCAG 2.0) | axe com as regras WCAG 2.0, 2.1 e 2.2 | `a11y.cy.js` |
| WCAG 1.3.1, 2.4.1, 2.4.7, 3.1.1, 3.3.2, 4.1.3, 1.4.10, 2.5.3, 2.5.8 | Landmark `<main>`, link de pular conteúdo, foco visível, idioma, rótulos, região de status, reflow em 320px, rótulo contém o texto visível, alvos de toque | `a11y.cy.js`, `uiux.cy.js` |

### ISO/IEC 27001:2022 (Anexo A, como referência)

| Controle | Como é atendido | Teste ou pipeline |
| --- | --- | --- |
| A.8.8 Gestão de vulnerabilidades técnicas | Dependabot, `npm audit`, revisão de dependências | `security.yml`, `.github/dependabot.yml` |
| A.8.12 Prevenção de vazamento de dados | Detecção de segredos | `security.yml` (Gitleaks) |
| A.8.24 Uso de criptografia | HTTPS, HSTS por 1 ano, `upgrade-insecure-requests` | `security.cy.js` |
| A.8.28 Codificação segura | CodeQL, CSP, sem `eval`, sem source maps | `security.yml`, `security.cy.js` |
| A.5.34 Privacidade e proteção de dados pessoais | Política de privacidade e minimização | `compliance.cy.js` |
| A.5.24 a A.5.26 Gestão de incidentes | `SECURITY.md` e `/.well-known/security.txt` (RFC 9116) | `security.cy.js` |
| A.5.32 Propriedade intelectual | Só licenças permissivas nas dependências | `compliance.yml` |

### ISO/IEC 25010 (qualidade de produto) e ISO 9241-11 (usabilidade)

| Característica | Como é verificada |
| --- | --- |
| Adequação funcional | `smoke`, `i18n`, `contact-flow`, `content` |
| Eficiência de desempenho | Lighthouse CI: nota mínima e limites de LCP, CLS e TBT |
| Compatibilidade e portabilidade | Cinco larguras de tela, três idiomas, `uiux.cy.js` |
| Usabilidade e acessibilidade (ISO 9241-11: eficácia, eficiência e satisfação) | `a11y.cy.js`, `uiux.cy.js`, Lighthouse |
| Confiabilidade | Todos os pipelines a cada push e toda semana |
| Segurança | `security.yml`, `security.cy.js` |
| Manutenibilidade | ESLint, Dependabot, testes soberanos |

## Metas do Lighthouse

| Medida | Celular | Desktop |
| --- | --- | --- |
| Desempenho | 80 ou mais | 90 ou mais |
| Acessibilidade, boas práticas e SEO | 95 ou mais | 95 ou mais |
| LCP | até 4,0 s | até 2,5 s |
| CLS | até 0,1 | até 0,1 |

Notas medidas na criação: acessibilidade, boas práticas e SEO em 100 em todas as páginas; desempenho de 91 a 93 no celular e 100 no desktop.

## Manutenção

- **Renovar `public/.well-known/security.txt` todo ano** (campo `Expires`). O teste de segurança falha 30 dias antes do vencimento, como lembrete. Atualize também o `SECURITY.md`.
- **Revisar a política de privacidade** quando o site passar a coletar algo novo, trocar de provedor ou a cada ano.
- Uma dependência nova com licença fora da lista (`.license-allowlist`) derruba o pipeline de conformidade. Analise a licença antes de ampliar a lista.
- O CSP libera só o próprio site e o `api.emailjs.com`. Se o site passar a carregar algo de terceiros, o teste de segurança vai apontar.
