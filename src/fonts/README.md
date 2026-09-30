# Fontes

Fontes servidas pelo próprio site, sem baixar nada do Google no build (o build falhava quando a rede do CI oscilava).

| Arquivo | Fonte | Pesos usados | Licença |
| --- | --- | --- | --- |
| `bricolage-grotesque.woff2` | Bricolage Grotesque (variável) | 500 a 800 | SIL Open Font License 1.1 |
| `ibm-plex-sans.woff2` | IBM Plex Sans (variável) | 400 a 600 | SIL Open Font License 1.1 |
| `jetbrains-mono.woff2` | JetBrains Mono (variável) | 400 a 700 | SIL Open Font License 1.1 |

Só o subconjunto `latin` (cobre português, inglês e francês). Origem: Google Fonts (fonts.gstatic.com), baixadas em 2026-09-30. Para atualizar, baixe o CSS da família no Google Fonts e pegue o arquivo do bloco `latin`.

A OFL permite uso, cópia e redistribuição junto com o software, inclusive comercial, desde que o nome da fonte não seja vendido isoladamente. Os arquivos são fontes, não dependências do npm, então não entram na checagem de licenças do `package.json`.
