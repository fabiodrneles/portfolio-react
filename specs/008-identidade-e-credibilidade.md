# 008 Identidade e credibilidade

- **Status:** aprovada
- **Atualizada em:** 2026-09-30

## Objetivo
Deixar a primeira leitura do site coerente e verificável para recrutadores e buscadores: sem link de teste, com a formação visível no HTML e dados estruturados que identificam a pessoa. Só entra o que já está confirmado no código; o que depende do dono (posicionamento, nome, cargos, foto) fica de fora.

## Comportamento
- **Redes sociais:** só aparecem perfis reais (GitHub e LinkedIn). O YouTube fica escondido até existir um canal, porque o endereço era o placeholder `https://www.youtube.com` (`socialLinks` em `src/data/portfolio.js`).
- **Formação:** a aba Formação da trajetória está no HTML inicial, dentro de uma lista com `hidden`; o clique só alterna a visibilidade (`Journey.jsx`). Crawlers e leitores sem JavaScript veem as duas listas.
- **Disponibilidade e contato:** o selo do cabeçalho diz "aberto a oportunidades" nos três idiomas (antes: "open to work" em EN e "disponível para projetos" em PT/FR), o botão principal da home é neutro ("Entrar em contato") e o texto do contato fala de vaga, projeto ou dúvida técnica. Serviços e o restante do texto não mudam.
- **Dados estruturados** (scripts JSON-LD separados, sem `@graph`):
  - `Person` ganha `@id` (`https://fabiodorneles.com.br/#person`) e `knowsAbout` (vem da lista `stack`, sem inventar). `name`, `jobTitle` e `sameAs` ficam como estão.
  - `WebSite` novo, com `publisher` apontando para o `@id` da pessoa.
  - Artigos: o autor do `BlogPosting` aponta para o mesmo `@id`, e um `BreadcrumbList` (Início, Blog, artigo) é publicado.
- Não existe mais a pasta vazia `portfolio-react` na raiz (era uma referência de submódulo sem `.gitmodules`).

## Fora do escopo
Posicionamento do título, forma do nome ("Fabio D. Dorneles"), `worksFor`, `alumniOf`, `image`, página Sobre, hubs de conteúdo, cargos e datas da trajetória, texto do artigo de pagamentos. Dependem de decisão ou de dados do dono (veja o journal).

## Critérios de aceite
| # | Critério | Teste que prova |
| --- | --- | --- |
| 1 | Nenhum link do YouTube na home, nos 3 idiomas | `cypress/e2e/identity.cy.js` (novo) |
| 2 | A formação está no HTML inicial e a aba continua alternando | `cypress/e2e/identity.cy.js` (novo) |
| 3 | O selo de disponibilidade fala de oportunidades nos 3 idiomas | `cypress/e2e/identity.cy.js` (novo) |
| 4 | Person com `@id` e `knowsAbout`, WebSite e BreadcrumbList nos artigos | `cypress/e2e/identity.cy.js` (novo) |
| 5 | Nenhum teste existente foi alterado | pipelines existentes |

## Decisões
- YouTube: esconder (opção C) em vez de remover, porque o dono pediu o ícone para um canal futuro. Para reativar, basta devolver a entrada em `socialLinks` com a URL real.
- JSON-LD em scripts separados porque `content.cy.js` procura o `Person` e o `BlogPosting` como objetos soltos.

## Arquivos principais
`src/data/portfolio.js`, `src/components/home/Journey.jsx`, `src/app/[lang]/layout.jsx`, `src/app/[lang]/blog/[slug]/page.jsx`, `src/lib/site.js`, `src/i18n/dictionaries/*.js`
