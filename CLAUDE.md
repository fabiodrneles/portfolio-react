@AGENTS.md

# Regras do dono do projeto (valem sempre)

## Os testes são soberanos
- **Os testes são a verdade absoluta.** Eles ditam se a aplicação está ou não de acordo. Se o código e um teste discordam, o teste está certo e o código está errado.
- **Nenhum teste existente pode ser modificado, enfraquecido, removido ou contornado sem autorização prévia e explícita do dono.** Isso vale para o Cypress e para qualquer outro teste ou pipeline de verificação (acessibilidade, segurança, conformidade, UI/UX).
- Sempre que possível, adicione testes novos (isso é bem-vindo); nunca afrouxe os que já existem.

## Testes do Cypress são intocáveis sem perguntar
- **Nunca altere, enfraqueça, remova ou contorne um teste do Cypress** (`cypress/`) para fazê-lo passar, nem para "ficar mais robusto", sem perguntar ao dono antes e receber um sim explícito.
- Um teste que falha é um aviso de que o produto está errado. Corrija o **código do site**, não o teste.
- Criar testes novos é permitido; mudar os existentes, não.

## Cada leitor lê o artigo no idioma dele
- O site tem PT, EN e FR. Quem abre um artigo em francês deve ler em francês, e em inglês, em inglês, mesmo que o artigo tenha sido escrito em português.
- Todo artigo novo do blog deve ser publicado **com as traduções EN e FR** (`translations` em `src/posts/posts.js`). Um artigo só em português não pode ir para produção.

## Desenvolvimento guiado por spec (SDD)
- Antes de mexer em qualquer área, leia só a spec dela em `specs/` (índice em `specs/README.md`). Isso economiza tokens: não explore o repositório inteiro à toa.
- Mudança nova ou de comportamento: crie ou atualize a spec primeiro (modelo em `specs/_template.md`), implemente até os critérios de aceite passarem e feche atualizando a spec.
- Toda feature nova ganha uma spec numerada. Spec curta, uma tela.
- A spec nunca autoriza mexer em teste existente: os testes seguem soberanos.

## Journal (memória permanente, fora do repositório)
- O journal é um documento do Claude Docs chamado "Journal: memória permanente do Claude" (vale para todos os projetos), **não um arquivo do repositório**: https://claude.ai/code/artifact/9da325e8-cf18-48fb-9c6c-b213de3ab107
- No **início** de toda sessão, leia esse doc com as ferramentas do Claude Docs (`read`; nunca com web fetch): as pendências e as últimas entradas do histórico.
- No **fim** de toda sessão, e a cada entrega importante, acrescente uma entrada no topo do histórico: data e horário em UTC, o que foi pedido, o que foi feito (com PRs e commits), decisões, pendências e medições. Mantenha a lista de pendências em dia.
- Registre decisões e regras novas do dono também no doc, não só no `CLAUDE.md`.
- Nunca registre segredos, chaves ou dados pessoais de terceiros no journal.
- Nunca crie um `journal.md` no repositório.
