export const SITE_URL = "https://fabiodorneles.com.br";
export const SITE_NAME = "Fabio Dorneles";
export const DEFAULT_TITLE = "Fabio Dorneles — QA Engineer & Full Stack Developer";

/** Formata datas "YYYY-MM-DD" em pt-BR sem sofrer deslocamento de fuso horário. */
export const formatPostDate = (date) =>
  new Date(date).toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  });
