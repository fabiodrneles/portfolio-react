# 010 Currículo por idioma

- **Status:** implementada
- **Atualizada em:** 2026-10-01

## Objetivo
Dar a cada recrutador o currículo no idioma dele, em PDF de coluna única com texto selecionável (formato que os sistemas de triagem, ATS, leem melhor).

## Comportamento
- O botão "Baixar currículo" da seção Sobre baixa `public/CV-FABIO-DARCI-DORNELES.pdf` (página em português) ou `public/CV-FABIO-DARCI-DORNELES-EN.pdf` (páginas en e fr). Lógica em `cvUrl(lang)`, `src/data/portfolio.js`.
- Os dois PDFs têm 2 páginas, com Visa, Pismo e demais cargos conforme o LinkedIn do dono (datas do LinkedIn, decisão do dono em 2026-10-01).
- A trajetória do site segue as mesmas datas: Visa/Pismo desde 2025-02; Stone Co. de 2024-02 a 2024-11 (estágio encerrado).
- O nome `CV-FABIO-DARCI-DORNELES.pdf` não muda: um teste existente (`content.cy.js`) o consulta.

## Fora do escopo
Versão em francês do currículo.

## Critérios de aceite
| # | Critério | Teste que prova |
| --- | --- | --- |
| 1 | Cada idioma aponta para o PDF certo e o PDF responde 200 como `application/pdf` | `cypress/e2e/cv.cy.js` (novo) |
| 2 | O PDF em português continua disponível | `cypress/e2e/content.cy.js` |

## Decisões
- Dono confirmou em 2026-10-01: datas do LinkedIn, estágio da Stone encerrado, telefone público, Go e Cypress como Proficiente, bacharelado na Estácio (CV e trajetória do site).
- Fonte do conteúdo: LinkedIn do dono. Habilidades e níveis são julgamento do dono e podem ser ajustados no gerador do CV.

## Arquivos principais
`public/*.pdf`, `src/data/portfolio.js`, `src/components/home/AboutWriting.jsx`
