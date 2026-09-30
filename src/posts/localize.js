import { defaultLocale } from "@/i18n/config";

/**
 * Versão do artigo no idioma pedido. Sem tradução, devolve o texto em português
 * com `translated: false`, para a página mostrar o aviso.
 */
export const localizePost = (post, lang) => {
  const translation = lang === defaultLocale ? null : post.translations?.[lang];
  if (!translation) {
    return { ...post, lang: defaultLocale, translated: lang === defaultLocale };
  }
  return {
    ...post,
    title: translation.title,
    excerpt: translation.excerpt,
    content: translation.content,
    contentHtml: translation.contentHtml,
    lang,
    translated: true,
  };
};
