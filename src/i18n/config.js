// Idiomas do site. O português é o padrão e fica sem prefixo na URL (/),
// os demais ganham prefixo (/en, /fr).
export const locales = ["pt", "en", "fr"];
export const defaultLocale = "pt";

/** Nome do cookie que guarda a escolha manual do visitante (vale mais que o idioma do navegador). */
export const LOCALE_COOKIE = "lang";

/** Cabeçalho interno com o idioma da requisição, definido pelo proxy. */
export const LOCALE_HEADER = "x-site-locale";

/** Metadados de cada idioma: rótulo curto do seletor, nome completo, `lang` do HTML e locale do Open Graph. */
export const localeInfo = {
  pt: { short: "PT", name: "Português (Brasil)", htmlLang: "pt-BR", og: "pt_BR" },
  en: { short: "EN", name: "English", htmlLang: "en", og: "en_US" },
  fr: { short: "FR", name: "Français", htmlLang: "fr", og: "fr_FR" },
};

export const hasLocale = (value) => locales.includes(value);

/** Monta o caminho de `path` no idioma `lang` ("/blog" → "/en/blog"; em pt continua "/blog"). */
export const localePath = (lang, path = "/") => {
  if (lang === defaultLocale) return path;
  return path === "/" ? `/${lang}` : `/${lang}${path}`;
};

/** Tira o prefixo de idioma de um caminho do navegador ("/en/blog" → "/blog"). */
export const stripLocale = (pathname) => {
  const [, first, ...rest] = pathname.split("/");
  if (!hasLocale(first)) return pathname || "/";
  return rest.length ? `/${rest.join("/")}` : "/";
};

/** Idioma de um caminho do navegador (sem prefixo = português). */
export const localeFromPath = (pathname) => {
  const first = pathname.split("/")[1];
  return hasLocale(first) ? first : defaultLocale;
};

/**
 * Escolhe o idioma a partir do cabeçalho Accept-Language ("fr-CA,fr;q=0.9,en;q=0.8").
 * Considera só a língua principal de cada item e respeita os pesos `q`;
 * se nada bater com os idiomas do site, fica no padrão.
 */
export const matchAcceptLanguage = (header) => {
  if (!header) return defaultLocale;
  const ranked = header
    .split(",")
    .map((part, index) => {
      const [tag, ...params] = part.trim().split(";");
      const q = params.map((p) => p.trim()).find((p) => p.startsWith("q="));
      return { lang: tag.trim().toLowerCase().split("-")[0], q: q ? Number(q.slice(2)) : 1, index };
    })
    .filter((item) => item.lang && item.q > 0)
    .sort((a, b) => b.q - a.q || a.index - b.index);
  return ranked.find((item) => hasLocale(item.lang))?.lang ?? defaultLocale;
};
