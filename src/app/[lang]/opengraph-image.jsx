import { ogSize, renderOgImage } from "@/lib/og";
import { getDictionary } from "@/i18n/dictionaries";
import { locales } from "@/i18n/config";

export const alt = "Fabio Dorneles — QA Engineer & Full Stack Developer";
export const size = ogSize;
export const contentType = "image/png";

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export default async function Image({ params }) {
  const { lang } = await params;
  return renderOgImage({
    eyebrow: "$ cypress run  # all specs passed",
    title: "Fabio Dorneles",
    subtitle: getDictionary(lang).meta.ogSubtitle,
  });
}
