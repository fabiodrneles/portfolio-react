import { SITE_URL } from "@/lib/site";
import { defaultLocale, localeInfo, localePath, locales } from "./config";

const absolute = (lang, path) => {
  const localized = localePath(lang, path);
  return `${SITE_URL}${localized === "/" ? "/" : localized}`;
};

/** Endereço do feed RSS no idioma (pt: /feed.xml; en e fr: /en/feed.xml, /fr/feed.xml). */
export const feedUrl = (lang) => absolute(lang, "/feed.xml");

/** URL canônica da página no idioma atual + as versões nos outros idiomas (hreflang). */
export const alternatesFor = (lang, path = "/") => ({
  canonical: absolute(lang, path),
  languages: {
    ...Object.fromEntries(locales.map((l) => [localeInfo[l].htmlLang, absolute(l, path)])),
    "x-default": absolute(defaultLocale, path),
  },
  types: { "application/rss+xml": feedUrl(lang) },
});
