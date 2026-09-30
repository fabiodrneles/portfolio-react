# 002 Formulário de contato

- **Status:** implementada
- **Atualizada em:** 2026-09-30

## Objetivo
Receber mensagens sem expor o e-mail do dono a spam nem coletar mais dados que o necessário.

## Comportamento
- Campos: nome, e-mail e mensagem, com `maxlength` (`LIMITS`). Nada mais é coletado.
- Envio por EmailJS, com chaves em `NEXT_PUBLIC_EMAILJS_*`. Sem as chaves, o envio falha sem rede.
- Anti-spam: campo isca (honeypot `website`), tempo mínimo de preenchimento (3 s) e intervalo mínimo entre envios (60 s, em `sessionStorage`).
- Se o servidor falhar, os dados digitados permanecem no formulário.
- Antes do botão de enviar, aviso de privacidade com link para a política (LGPD).
- Nada é enviado antes do clique; sem cookies nem armazenamento antes da ação.

## Fora do escopo
Banco de dados próprio; CAPTCHA de terceiros (traria rastreadores).

## Critérios de aceite
| # | Critério | Teste que prova |
| --- | --- | --- |
| 1 | Validação sem enviar e-mail | `cypress/e2e/smoke.cy.js` |
| 2 | Bot rápido e honeypot são barrados; falha do servidor mantém os dados | `cypress/e2e/contact-flow.cy.js` |
| 3 | Sucesso e intervalo mínimo (exigem chaves falsas de CI) | `cypress/e2e/contact-flow.cy.js` |
| 4 | Só nome, e-mail e mensagem; aviso de privacidade; sem chamada antes do envio | `cypress/e2e/compliance.cy.js` |

## Arquivos principais
`src/components/contact/ContactForm.jsx`, `src/components/contact/Contact.jsx`, `src/data/`
