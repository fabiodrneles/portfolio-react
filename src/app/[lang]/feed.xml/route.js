import { notFound } from "next/navigation";
import { feedResponse } from "@/lib/feed";
import { defaultLocale, hasLocale, locales } from "@/i18n/config";

export const dynamic = "force-static";
export const dynamicParams = false;

// /en/feed.xml e /fr/feed.xml; o português é /feed.xml (app/feed.xml).
export function generateStaticParams() {
  return locales.filter((lang) => lang !== defaultLocale).map((lang) => ({ lang }));
}

export async function GET(_request, { params }) {
  const { lang } = await params;
  if (!hasLocale(lang) || lang === defaultLocale) notFound();
  return feedResponse(lang);
}
