# Onde fica cada coisa do site

Guia para quem edita o site. Os caminhos são a partir da pasta raiz do projeto.

## Textos e conteúdo

| O que você quer mudar | Onde fica | Para que serve |
| --- | --- | --- |
| Textos da página inicial (português, inglês e francês) | `src/i18n/dictionaries/pt.js`, `en.js`, `fr.js` | Todo o texto que aparece no site, nos três idiomas. Cada idioma tem o seu arquivo. |
| Projetos, experiência e dados de currículo | `src/data/portfolio.js` | Lista de projetos e de trajetória que alimenta as seções do site. |
| Artigos do blog | `src/posts/posts.js` | Cada artigo é um bloco com título, resumo, texto e traduções em inglês e francês. |
| Nome, endereço do site e autor | `src/lib/site.js` | Dados gerais usados em feeds, buscadores e compartilhamento. |
| Fotos e imagens | `public/` | Arquivos estáticos do site. Hoje o site não usa fotos. |

## Telas

| Tela | Onde fica | Para que serve |
| --- | --- | --- |
| Página inicial | `src/components/home/` | Seções da home: início, serviços, projetos, trajetória, processo e formulário. |
| Menu e cabeçalho | `src/components/header/` | Menu de navegação e troca de idioma. |
| Rodapé | `src/components/footer/` | Rodapé do site. |
| Lista e página de artigo | `src/components/blog/` e `src/app/[lang]/blog/` | Como os artigos aparecem. |
| Página de qualidade | `src/app/[lang]/quality/` | Página sobre qualidade. |
| Página de privacidade | `src/app/[lang]/privacy/` | Política de privacidade. |
| Página 404 | `src/components/notfound/` e `src/app/global-not-found.jsx` | Página de endereço não encontrado. |

## Aparência

| O que você quer mudar | Onde fica |
| --- | --- |
| Cores, espaçamentos e tipografia | `src/app/globals.css` (as cores estão no início, em `:root`) |
| Estilo da página inicial | `src/components/home/home.css` |
| Estilo do cabeçalho | `src/components/header/header.css` |
| Fontes | `src/fonts/` e `src/lib/fonts.js` |

## Como publicar um artigo hoje

1. Abra `/admin` no site (pelo endereço `fabiodorneles.com.br/admin`).
2. Escreva o artigo em português e preencha o inglês e o francês.
3. Clique em **Gerar código do artigo** e copie o código.
4. Abra `src/posts/posts.js`, cole o código no lugar indicado no próprio arquivo e salve.
5. Envie a alteração para o GitHub. A Vercel reconstrói o site sozinha.

O `/admin` só gera o código. Ele não grava nada no site.

## Outras pastas

| Pasta | Para que serve |
| --- | --- |
| `cypress/` | Testes automáticos do site. Não edite sem pedir antes. |
| `specs/` | Descrição de cada funcionalidade e o que ela deve fazer. |
| `docs/` | Documentação e imagens usadas no README. |
| `src/app/api/painel/` e `src/components/painel/` | Painel de publicação, ainda não ativo. Você não precisa mexer aqui. |
