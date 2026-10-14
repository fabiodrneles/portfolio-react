# 014 Estudo de caso de projeto

- **Status:** implementada
- **Atualizada em:** 2026-10-14

## Objetivo
Mostrar a quem avalia o portfólio, com fatos verificáveis, como um projeto foi pensado, construído, testado e levado a produção. O primeiro é o Go Release Manager. O cartão da área de projetos diz o quê; o estudo de caso diz como e com que resultado.

## Comportamento
- Página `/projects/go-release-manager` (e `/en/...`, `/fr/...`), sem rota localizada, no sitemap nos 3 idiomas.
- Na área de projetos, o cartão de um projeto com estudo de caso abre a página do estudo, na mesma aba. Os outros cartões continuam abrindo o GitHub em nova aba.
- Conteúdo: o problema, a solução, a saída real da ferramenta (texto, não imagem), como a qualidade é garantida, as decisões técnicas, o resultado em produção, os limites e um convite para contato.
- Números só com a fonte e a data da medição (release v1.2.0, 2026-10-14). Seção "Limites" explícita.
- Links para o repositório, o README e as releases, com `rel="noopener noreferrer"`.

## Fora do escopo
Estudos de caso dos outros projetos (o modelo fica pronto para eles) e números lidos em tempo real de outro repositório.

## Critérios de aceite
| # | Critério | Teste que prova |
| --- | --- | --- |
| 1 | A página existe nos 3 idiomas, com um h1, os números, a saída da ferramenta e links seguros para o repositório | `cypress/e2e/case-study.cy.js` (novo) |
| 2 | O cartão do projeto na página inicial leva ao estudo de caso no idioma da página | `cypress/e2e/case-study.cy.js` (novo) |
| 3 | Está no sitemap nos 3 idiomas | `cypress/e2e/case-study.cy.js` (novo) |
| 4 | Sem violações do axe (WCAG 2.2 AA) no desktop e no celular, e sem rolagem horizontal em 320px | `cypress/e2e/case-study.cy.js` (novo) |

## Decisões
- Tom modesto, como na página de qualidade: o que convence é o repositório público, não adjetivos.
- A saída da ferramenta vai como texto num bloco de código que quebra a linha (sem região rolável, que o axe exigiria focável) e sem imagem, que pesaria no Lighthouse.
- O conteúdo fica nos dicionários (`caseStudies`), um item por projeto, para o próximo estudo de caso ser só texto.

## Arquivos principais
`src/app/[lang]/projects/[slug]/`, `src/data/portfolio.js` (`caseStudy`), `src/components/home/Work.jsx`, `src/app/sitemap.js`, dicionários (`caseStudies`, `work.openCase`)
