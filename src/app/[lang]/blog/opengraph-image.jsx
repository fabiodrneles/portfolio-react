import { ogSize, renderOgImage } from "@/lib/og";
import { getDictionary } from "@/i18n/dictionaries";
import { locales } from "@/i18n/config";

export const alt = "Fabio Dorneles — Blog";
export const size = ogSize;
export const contentType = "image/png";

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export default async function Image({ params }) {
  const { lang } = await params;
  const { title, description } = getDictionary(lang).blog;
  return renderOgImage({ eyebrow: "$ ls blog/", title, subtitle: description });
}
