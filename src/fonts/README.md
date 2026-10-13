# Fontes

Fontes servidas pelo próprio site, sem baixar nada do Google no build (o build falhava quando a rede do CI oscilava).

| Arquivo | Fonte | Pesos usados | Licença |
| --- | --- | --- | --- |
| `newsreader.woff2` | Newsreader (variável, tamanho ótico fixo em 48) | 400 a 500 | SIL Open Font License 1.1 |
| `newsreader-italic.woff2` | Newsreader Italic (variável, tamanho ótico fixo em 48) | 400 a 500 | SIL Open Font License 1.1 |
| `ibm-plex-sans.woff2` | IBM Plex Sans (variável) | 400 a 600 | SIL Open Font License 1.1 |
| `ibm-plex-mono-400.woff2` | IBM Plex Mono | 400 | SIL Open Font License 1.1 |
| `ibm-plex-mono-500.woff2` | IBM Plex Mono | 500 | SIL Open Font License 1.1 |

Só o subconjunto `latin` (cobre português, inglês e francês). Origem: Google Fonts (fonts.gstatic.com). IBM Plex Sans baixada em 2026-09-30; Newsreader e IBM Plex Mono em 2026-10-13.

A Newsreader original traz o eixo de tamanho ótico (`opsz`) e pesa cerca de 130 KB por arquivo. Para ficar leve, ela foi fixada em `opsz=48` e pesos 400 a 500 com o `fontTools`, e recortada no conjunto latino:

```bash
python3 -m fontTools.varLib.instancer newsreader.woff2 opsz=48 wght=400:500 -o newsreader.ttf
pyftsubset newsreader.ttf --unicodes="U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+2000-206F,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD" --layout-features='*' --flavor=woff2 --output-file=newsreader.woff2
```

A OFL permite uso, cópia, modificação e redistribuição junto com o software, inclusive comercial, desde que o nome da fonte não seja vendido isoladamente. Os arquivos são fontes, não dependências do npm, então não entram na checagem de licenças do `package.json`.
