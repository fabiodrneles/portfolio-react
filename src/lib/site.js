import { localeInfo } from "@/i18n/config";

export const SITE_URL = "https://fabiodorneles.com.br";
export const SITE_NAME = "Fabio Dorneles";
/** Nome de autor usado no feed RSS (decisão do dono, 2026-09-30). */
export const FEED_AUTHOR = "Fábio D. Dorneles";

/** Formata datas "YYYY-MM-DD" no idioma da página, sem sofrer deslocamento de fuso horário. */
export const formatPostDate = (date, lang = "pt") =>
  new Date(date).toLocaleDateString(localeInfo[lang]?.htmlLang ?? "pt-BR", {
    day: "2-digit",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  });

/** Formata "AAAA-MM" como "jan. 2025" (ou só o ano, quando não há mês). */
export const formatMonth = (value, lang = "pt") => {
  if (!value.includes("-")) return value;
  return new Date(`${value}-01`).toLocaleDateString(localeInfo[lang]?.htmlLang ?? "pt-BR", {
    month: "short",
    year: "numeric",
    timeZone: "UTC",
  });
};
