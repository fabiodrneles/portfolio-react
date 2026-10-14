# 013 Dashboard de administração (rascunho)

- **Status:** rascunho
- **Atualizada em:** 2026-10-14

## Objetivo
Editar o site inteiro por um painel em `/admin`: textos, seções, projetos, experiência e artigos. Sem banco de dados: cada publicação é um commit no GitHub, e a Vercel reconstrói o site.

## Decisões do dono (2026-10-14)
- **Armazenamento:** commits no repositório pela API do GitHub. Histórico completo e reversível.
- **Login:** só a conta GitHub do dono entra (OAuth). Nenhuma senha guardada no projeto.
- **Publicação:** "Salvar rascunho" fica fora do site; "Publicar" vai para o ar após a reconstrução.
- **Traduções:** o dono escreve uma única vez, em português. O sistema traduz para inglês e francês na publicação, e o site entrega a versão do idioma escolhido pelo leitor (regra do `CLAUDE.md`: todo artigo sai com EN e FR).

## Comportamento
- Login com GitHub, restrito ao usuário do dono. Sem sessão válida, `/admin` responde 404.
- Editor de artigos: um único formulário em português (título, resumo, SEO e corpo). Salvar rascunho guarda em `content/drafts/`. Publicar traduz o artigo para EN e FR, mostra as traduções para revisão e só então move o artigo para `src/posts/` e faz o commit.
- Tradução na publicação: o servidor chama a API da Anthropic uma vez por idioma, preservando HTML, links, código e nomes próprios. O resultado é gravado em `translations.en` e `translations.fr` do artigo. O dono pode editar qualquer aba antes de confirmar. Se a tradução falhar, nada é publicado e a mensagem de erro aparece.
- Editor de conteúdo: textos da home (`src/i18n/dictionaries/`), projetos e experiência (`src/data/portfolio.js`). Cada alteração vira um commit.
- Adicionar, editar e excluir: projetos, linhas da trajetória, serviços e artigos. Exclusão pede confirmação.
- Depois de publicar, o painel mostra o estado da reconstrução (em andamento, no ar ou falhou) lendo o status do deploy.

## Fora do escopo
- Editor visual de layout (mover blocos, trocar cores). Cores e fontes continuam no código.
- Upload de fotos, enquanto o dono decidir não usar fotos.
- Múltiplos usuários e permissões.

## Critérios de aceite
| # | Critério | Teste que prova |
| --- | --- | --- |
| 1 | `/admin` responde 404 para quem não está logado com a conta do dono | novo teste: `cypress/e2e/admin-auth.cy.js` |
| 2 | Artigo sem tradução EN ou FR não pode ser publicado, e a publicação gera as duas traduções a partir do português | novo teste: `cypress/e2e/admin-publish.cy.js` |
| 3 | Publicar um artigo cria o commit com o arquivo do artigo, e ele aparece na lista após a reconstrução | novo teste: `cypress/e2e/admin-publish.cy.js` |
| 4 | Excluir pede confirmação e só então faz o commit | novo teste: `cypress/e2e/admin-content.cy.js` |
| 5 | A tradução roda só no servidor: a chave da API nunca aparece no navegador nem na resposta | novo teste: `cypress/e2e/admin-translate.cy.js` |

## Requisitos de configuração (o dono faz no painel da Vercel)
- Um aplicativo OAuth no GitHub, com o ID e o segredo nas variáveis de ambiente.
- Um token do GitHub limitado a este repositório, com permissão de escrita no conteúdo, também nas variáveis de ambiente.
- Uma chave da API da Anthropic (`ANTHROPIC_API_KEY`) para a tradução automática. Custa por uso, e fica só no servidor.
- Nenhum deles vai para o navegador nem para o repositório.

## Decisões técnicas (a confirmar na implementação)
- Sessão em cookie assinado, `HttpOnly` e `SameSite=Strict`.
- Cada publicação faz uma reconstrução na Vercel, que leva cerca de 2 minutos.
- O `/admin` atual (que gera código para colar) é substituído por este fluxo.

## Arquivos principais
`src/app/[lang]/admin/`, `src/components/admin/`, `src/lib/postDraft.js`, `src/posts/posts.js`, `src/data/portfolio.js`, `src/i18n/dictionaries/`
