import localFont from "next/font/local";

// Fontes servidas pelo próprio site (arquivos em src/fonts), sem baixar nada do Google no build.
// Veja src/fonts/README.md, specs/007-fontes-locais.md e specs/011-identidade-visual.md.
export const display = localFont({
  src: [
    { path: "../fonts/newsreader.woff2", weight: "400 500", style: "normal" },
    { path: "../fonts/newsreader-italic.woff2", weight: "400 500", style: "italic" },
  ],
  display: "swap",
  variable: "--font-display",
});

export const body = localFont({
  src: "../fonts/ibm-plex-sans.woff2",
  weight: "400 600",
  display: "swap",
  variable: "--font-body",
});

export const mono = localFont({
  src: [
    { path: "../fonts/ibm-plex-mono-400.woff2", weight: "400", style: "normal" },
    { path: "../fonts/ibm-plex-mono-500.woff2", weight: "500", style: "normal" },
  ],
  display: "swap",
  variable: "--font-mono",
});
