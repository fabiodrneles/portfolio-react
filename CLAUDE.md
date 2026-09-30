@AGENTS.md

# Regras do dono do projeto (valem sempre)

## Testes do Cypress são intocáveis sem perguntar
- **Nunca altere, enfraqueça, remova ou contorne um teste do Cypress** (`cypress/`) para fazê-lo passar, nem para "ficar mais robusto", sem perguntar ao dono antes e receber um sim explícito.
- Um teste que falha é um aviso de que o produto está errado. Corrija o **código do site**, não o teste.
- Criar testes novos é permitido; mudar os existentes, não.

## Cada leitor lê o artigo no idioma dele
- O site tem PT, EN e FR. Quem abre um artigo em francês deve ler em francês, e em inglês, em inglês, mesmo que o artigo tenha sido escrito em português.
- Todo artigo novo do blog deve ser publicado **com as traduções EN e FR** (`translations` em `src/posts/posts.js`). Um artigo só em português não pode ir para produção.
