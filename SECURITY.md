# Política de segurança

## Como relatar uma vulnerabilidade

Se você encontrou uma falha de segurança neste site ou neste repositório, **não abra uma issue pública**. Use um destes canais:

- E-mail: fabiodrneles@gmail.com (assunto: "Vulnerabilidade")
- Relato privado no GitHub: aba **Security** do repositório, opção "Report a vulnerability"

Inclua o que você encontrou, como reproduzir e o impacto que imagina. Respondo em até 7 dias e mantenho você informado até a correção.

## Escopo

Vale para o site (fabiodorneles.com.br), o código deste repositório e os pipelines em `.github/workflows`. Ataques de negação de serviço, engenharia social e testes em serviços de terceiros (Vercel, EmailJS) estão fora do escopo.

## Como o projeto se protege

- Pipeline de segurança a cada push e toda semana: auditoria de dependências, CodeQL, detecção de segredos e testes dos cabeçalhos HTTP
- Dependabot mantém dependências e Actions atualizadas
- Cabeçalhos: CSP, HSTS, X-Content-Type-Options, X-Frame-Options, Referrer-Policy, Permissions-Policy e COOP
- Chaves do EmailJS são públicas por definição; a proteção fica no painel do EmailJS (domínios permitidos e limite de envios)

O arquivo `public/.well-known/security.txt` (RFC 9116) expira em 29/09/2027 e precisa ser renovado antes disso. O teste de segurança avisa quando faltar pouco.
