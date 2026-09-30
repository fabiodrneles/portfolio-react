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
