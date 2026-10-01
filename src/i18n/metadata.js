import { SITE_URL } from "@/lib/site";
import { defaultLocale, localeInfo, localePath, locales } from "./config";
import { getDictionary } from "./dictionaries";

const absolute = (lang, path) => {
  const localized = localePath(lang, path);
  return `${SITE_URL}${localized === "/" ? "/" : localized}`;
};

/** Endereço do feed RSS no idioma (pt: /feed.xml; en e fr: /en/feed.xml, /fr/feed.xml). */
export const feedUrl = (lang) => absolute(lang, "/feed.xml");

/**
 * Os três feeds RSS, com o do idioma da página primeiro. Declarar todos permite que um leitor de
 * feeds que parte da raiz do site mostre a escolha (Português, English, Français).
 */
const feedLinks = (lang) =>
  [lang, ...locales.filter((l) => l !== lang)].map((l) => ({
    url: feedUrl(l),
    title: `${getDictionary(l).blog.feed.title} (${localeInfo[l].name.split(" (")[0]})`,
  }));

/** URL canônica da página no idioma atual + as versões nos outros idiomas (hreflang). */
export const alternatesFor = (lang, path = "/") => ({
  canonical: absolute(lang, path),
  languages: {
    ...Object.fromEntries(locales.map((l) => [localeInfo[l].htmlLang, absolute(l, path)])),
    "x-default": absolute(defaultLocale, path),
  },
  types: { "application/rss+xml": feedLinks(lang) },
});
