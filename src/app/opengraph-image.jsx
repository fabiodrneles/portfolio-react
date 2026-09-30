import { ogSize, renderOgImage } from "@/lib/og";

export const alt = "Fabio Dorneles — QA Engineer & Full Stack Developer";
export const size = ogSize;
export const contentType = "image/png";

export default function Image() {
  return renderOgImage({
    eyebrow: "$ cypress run  # all specs passed",
    title: "Fabio Dorneles",
    subtitle: "QA Engineer & Full Stack Developer — projetos, portfólio e artigos técnicos",
  });
}
