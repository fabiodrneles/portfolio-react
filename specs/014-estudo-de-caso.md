# 014 Estudo de caso de projeto

- **Status:** implementada
- **Atualizada em:** 2026-10-14

## Objetivo
Mostrar a quem avalia o portfólio, com fatos verificáveis, como um projeto foi pensado, construído, testado e levado a produção. Hoje há três: o sdd-kit, o Go Release Manager e o CV Craft. O cartão da área de projetos diz o quê; o estudo de caso diz como e com que resultado.

## Comportamento
- Uma página por projeto em `/projects/<id>` (e `/en/...`, `/fr/...`), sem rota localizada, no sitemap nos 3 idiomas: `/projects/sdd-kit`, `/projects/go-release-manager` e `/projects/cv-craft`.
- Na área de projetos, o cartão de um projeto com estudo de caso abre a página do estudo, na mesma aba. Os outros cartões continuam abrindo o GitHub em nova aba.
- Conteúdo: o problema, a solução, a saída real da ferramenta (texto, não imagem), como a qualidade é garantida, as decisões técnicas, o resultado em produção, os limites e um convite para contato.
- Números só com a fonte e a data da medição (2026-10-14). Seção "Limites" explícita.
- Três links por projeto (repositório, documentação e releases ou demonstração), com `rel="noopener noreferrer"`.
- O sdd-kit entra na lista de projetos, em primeiro lugar.

## Fora do escopo
Estudos de caso dos demais projetos (o modelo fica pronto para eles) e números lidos em tempo real de outro repositório.

## Critérios de aceite
| # | Critério | Teste que prova |
| --- | --- | --- |
| 1 | Cada página existe nos 3 idiomas, com um h1, os números, a saída da ferramenta e links seguros para o repositório | `cypress/e2e/case-study.cy.js`, `cypress/e2e/case-study-sdd-kit.cy.js`, `cypress/e2e/case-study-cv-craft.cy.js` |
| 2 | O cartão do projeto na página inicial leva ao estudo de caso no idioma da página | os três acima |
| 3 | Está no sitemap nos 3 idiomas | os três acima |
| 4 | Sem violações do axe (WCAG 2.2 AA) no desktop e no celular, e sem rolagem horizontal em 320px | os três acima |

## Decisões
- Tom modesto, como na página de qualidade: o que convence é o repositório público, não adjetivos.
- A saída da ferramenta vai como texto num bloco de código que quebra a linha (sem região rolável, que o axe exigiria focável) e sem imagem, que pesaria no Lighthouse.
- O conteúdo fica nos dicionários (`caseStudies`), um item por projeto, para o próximo estudo de caso ser só texto.
- Um arquivo de teste por estudo de caso, para não alterar o teste de um estudo já publicado ao acrescentar outro.
- A saída do sdd-kit fica em português, porque os scripts falam o idioma do dono; as versões em inglês e francês avisam isso na legenda.

## Arquivos principais
`src/app/[lang]/projects/[slug]/`, `src/data/portfolio.js` (`caseStudy`), `src/components/home/Work.jsx`, `src/app/sitemap.js`, dicionários (`caseStudies`, `work.openCase`)
