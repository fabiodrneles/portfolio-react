# Journal do projeto

Diário de sessões: fonte de memória permanente, ao lado do `CLAUDE.md` (regras) e de `specs/` (comportamento). Entradas novas vão **no topo**. Horários em UTC. Sem segredos nem dados pessoais de terceiros.

Modelo de entrada:

```
## AAAA-MM-DD HH:MM–HH:MM UTC · título curto
- **Pedido:** ...
- **Feito:** ... (PR, commit)
- **Decisões:** ...
- **Pendências:** ...
- **Medições:** ...
```

---

## 2026-09-30 08:53 UTC · Spec-driven, journal e nota máxima
- **Pedido:** responder se o site tem nota máxima em avaliadores externos; criar specs para desenvolver guiado por spec e economizar tokens; criar este journal; registrar tudo de hoje.
- **Feito:** pasta `specs/` (README, modelo, 001 a 006), regras de SDD e de journal no `CLAUDE.md`, este arquivo.
- **Decisões:** specs curtas (uma tela), cada critério aponta para o teste que o prova; leitura do journal no início e escrita no fim de toda sessão.
- **CI da master (dde53bd):** ci.yml, Segurança e UI/UX verdes. Conformidade falhou 1 teste novo (campo do formulário desabilitado no instante da digitação, corrida na hidratação; passou no PR) e Pa11y falhou no `npm run build` ao baixar a fonte do Google (rede do runner). Corrigi a espera nos meus testes novos (`should("not.be.disabled")`) e re-executei o Pa11y uma vez.
- **Pendências:** medir o site publicado no PageSpeed Insights, Mozilla Observatory, securityheaders.com, SSL Labs e W3C (spec 006); revisão da política de privacidade por advogado ou encarregado de dados.
- **Medições:** ver spec 006 (Lighthouse a11y, boas práticas e SEO em 100; desempenho celular 91 a 93, desktop 100).

## 2026-09-30 08:20–08:52 UTC · Pipelines de qualidade (PR #10 e #11)
- **Pedido:** registrar no `CLAUDE.md` que os testes são soberanos; analisar como tornar os testes mais robustos; criar pipelines de acessibilidade, segurança, conformidade (LGPD e ISO) e UI/UX, seguindo normas e leis.
- **Feito:** PR #10 (`0784ead`, regra dos testes soberanos). PR #11 (`dde53bd`): 4 workflows novos, 6 specs Cypress novas (a11y, security, compliance, uiux, contact-flow, content), política de privacidade LGPD em PT/EN/FR, CSP, HSTS, COOP, `security.txt`, `SECURITY.md`, Dependabot, link "pular para o conteúdo", landmark `<main>`, rótulos acessíveis, `docs/compliance/README.md`.
- **Decisões:** ISO usada como referência de boas práticas, não como certificação; teste novo é permitido, alterar existente não; licenças LGPL do libvips (via sharp) aceitas como exceção justificada.
- **Erros e correções:** o teste novo `/admin` visitava `/en/admin` (404, o admin só existe em PT); corrigido no teste novo (`a257b76`), sem tocar em teste existente. Uma primeira versão do CI da PR tinha 1 falha, só esse teste.
- **Pendências:** conferir o CI da master após o merge; renovar `security.txt` até 2027-09-29.
- **Medições:** axe 0 violações (12 páginas × 2 telas); Pa11y 0 erros; CSP sem violações em 13 páginas; 16 links internos únicos todos 200.

## 2026-09-30 07:57–08:23 UTC · Artigo "O teto técnico do QA" e regras do dono (PR #8, #9)
- **Pedido:** publicar o artigo; depois, corrigir o rumo: o teste i18n estava certo e eu o tinha enfraquecido.
- **Feito:** artigo publicado (`156b548`); teste i18n restaurado exatamente; artigo traduzido para EN e FR (`7af2238`); com autorização, o teste dependente de ordem foi trocado por dois testes independentes de ordem (`4ae1944`); regras do dono no `CLAUDE.md` (`14ebc4b`).
- **Decisões (regras permanentes):** testes do Cypress não se alteram sem perguntar; cada leitor lê o artigo no idioma dele; todo artigo novo sai com EN e FR.
- **Lição:** nunca "consertar" teste para passar; corrigir o código do site.

## 2026-09-30 05:27–05:50 UTC · Redesign e traduções (PR #6, #7, outra sessão)
- **Feito:** tema escuro, suporte a PT/EN/FR (`18b28de`); remoção de travessões e tradução dos artigos (`2d810a7`). Registrado a partir do histórico do git.

## 2026-09-30 03:45–03:59 UTC · Melhorias e botões de compartilhar (PR #4, #5)
- **Pedido:** auditar o repositório atrás de melhorias; botões de compartilhar em cada artigo (LinkedIn, X).
- **Feito:** segurança, SEO, desempenho e acessibilidade (`6d8f616`); botões de compartilhar (`595b5bb`).
- **Contexto:** o dono pediu economia de tokens como prioridade; recusou o ClaudeTokenSAP por medo de perder qualidade; Token Shield foi sugerido.

## 2026-09-30 03:12–03:31 UTC · Formulário mais seguro (PR #2, #3)
- **Pedido:** o dono ficou receoso com o formulário ("alguém hackearia meu e-mail pelo repositório?").
- **Feito:** hardening do formulário (honeypot, tempo mínimo, intervalo entre envios, limites de tamanho) e cabeçalhos HTTP (`541d564`); correção do erro React #418 de hidratação no `<head>` que quebrava o Cypress no CI (`0f1d134`), movendo estilos e JSON-LD para o body.
- **Lição:** a chave do EmailJS é pública por natureza (`NEXT_PUBLIC_*`); a proteção real é limitar abuso e configurar domínios/limites no painel do EmailJS.

## 2026-09-30 02:34–03:03 UTC · Migração para Next.js (PR #1, #2)
- **Pedido:** migrar de React CRA para Next.js sem quebrar nada; trocar o ícone do Instagram por YouTube; trocar as fotos da home e do About por arte de código.
- **Feito:** App Router com rotas `[lang]` (`cde9b10`); YouTube no lugar do Instagram e arte da home com teste Cypress (`10291d4`); arte do About com struct em Go (`c2ef507`).
- **Stack atual:** Next.js 16.3.7, React 19, Cypress 13.17, EmailJS, deploy na Vercel.
- **Atenção:** `AGENTS.md` avisa que este Next.js tem mudanças incompatíveis; ler `node_modules/next/dist/docs/` antes de mexer em APIs.

## Antes de 2026-09-30 · Histórico anterior (do git)
- 2026-09-26: SEO, Open Graph, JSON-LD, 404, sitemap/robots, favicon, honeypot, troca do Instagram por YouTube na versão CRA.
- 2026-09-27: manifest, verificação do Google Search Console, primeiro artigo.
