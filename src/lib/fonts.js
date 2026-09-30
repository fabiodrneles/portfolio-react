import localFont from "next/font/local";

// Fontes servidas pelo próprio site (arquivos em src/fonts), sem baixar nada do Google no build.
// Veja src/fonts/README.md e specs/007-fontes-locais.md.
export const display = localFont({
  src: "../fonts/bricolage-grotesque.woff2",
  weight: "500 800",
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
  src: "../fonts/jetbrains-mono.woff2",
  weight: "400 700",
  display: "swap",
  variable: "--font-mono",
});
