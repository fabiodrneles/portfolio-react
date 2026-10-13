# 011 Identidade visual: papel, tinta e precisão

- **Status:** implementada
- **Atualizada em:** 2026-10-13

## Objetivo
O site é onde o dono vende o próprio nome. Ele precisa parecer o trabalho de um especialista, feito à mão, e não um tema de desenvolvedor nem algo gerado por IA. Pedido do dono: limpo, japonês, cores marcantes mas equilibradas, poucas cores, tradição e modernidade ("entre o samurai e o cyberpunk").

## Comportamento
- **Tradição:** fundo de papel washi (`#F5F2EC`), texto em tinta sumi (`#1C1B19`), títulos em serifa (Newsreader), muito espaço vazio, linhas finas de 1 px no lugar de cartões.
- **Modernidade:** painéis em tinta quase preta (`#141412`) para o que é técnico (ficha de inspeção, rodapé), dados em IBM Plex Mono, rótulos verticais como na escrita japonesa.
- **Um único destaque:** vermelho shu (`#B5352B`, carimbo hanko). A marca "FD" é um carimbo quadrado. Nenhuma outra cor de destaque.
- **Formatos:** cantos de 2 a 3 px, botão principal retangular em tinta, ação secundária como link sublinhado.
- **Sem fotos por enquanto** (decisão do dono, 2026-10-13). No lugar do retrato, a ficha de inspeção com carimbo.
- **Removido por parecer template ou IA:** verde neon, janela de terminal falsa com código, grade de fundo, brilho borrado, ponto pulsando, rótulos `//` e `01 /`, cartões com ícone e selo, frases "não X, é Y", bloco de contato colorido gigante.
- Textos do cargo e do "Sobre" não mudam (decisão do dono de 2026-10-01). Seções, filtros, idiomas, SEO, formulário e páginas continuam iguais em comportamento.

## Fora do escopo
Fotos, página Sobre separada, tema escuro alternativo, mudança de nome da marca.

## Critérios de aceite
| # | Critério | Teste que prova |
| --- | --- | --- |
| 1 | Todos os testes existentes continuam passando, sem alteração | todos os workflows do CI |
| 2 | Contraste WCAG AA em todas as páginas, PT/EN/FR, desktop e celular | `cypress/e2e/a11y.cy.js` |
| 3 | Fontes novas servidas pelo próprio site | `cypress/e2e/fonts.cy.js` |
| 4 | A paleta do tema usa um único destaque cromático e nenhuma cor neon | novo teste: `cypress/e2e/visual-identity.cy.js` |
| 5 | Sem os padrões removidos (terminal falso, rótulos `//`, ponto pulsando, grade de fundo) | novo teste: `cypress/e2e/visual-identity.cy.js` |
| 6 | Notas do Lighthouse não caem | `lighthouserc.*.json` |

## Decisões
- Light como tema único: papel e tinta comunicam ofício; o escuro aparece só em painéis técnicos, para o contraste entre tradição e tecnologia.
- Newsreader fixada em tamanho ótico 48 e pesos 400 a 500 para pesar cerca de 38 KB por arquivo (spec 007).
- A ficha de inspeção mantém os textos que os testes conferem ("Todos os testes passaram" e traduções).

## Arquivos principais
`src/app/globals.css`, `src/lib/fonts.js`, `src/components/home/*`, `src/components/header/*`, `src/components/contact/*`, `src/components/footer/*`
