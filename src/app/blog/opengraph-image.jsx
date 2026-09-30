import { ogSize, renderOgImage } from "@/lib/og";

export const alt = "Artigos — Fabio Dorneles";
export const size = ogSize;
export const contentType = "image/png";

export default function Image() {
  return renderOgImage({
    eyebrow: "$ ls blog/",
    title: "Artigos",
    subtitle: "Desenvolvimento web, testes e qualidade de software — Fabio Dorneles",
  });
}
