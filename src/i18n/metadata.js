import { SITE_URL } from "@/lib/site";
import { defaultLocale, localeInfo, localePath, locales } from "./config";

const absolute = (lang, path) => {
  const localized = localePath(lang, path);
  return `${SITE_URL}${localized === "/" ? "/" : localized}`;
};

/** URL canônica da página no idioma atual + as versões nos outros idiomas (hreflang). */
export const alternatesFor = (lang, path = "/") => ({
  canonical: absolute(lang, path),
  languages: {
    ...Object.fromEntries(locales.map((l) => [localeInfo[l].htmlLang, absolute(l, path)])),
    "x-default": absolute(defaultLocale, path),
  },
});
