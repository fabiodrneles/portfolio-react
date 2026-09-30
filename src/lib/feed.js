import posts from "@/posts/posts";
import { localizePost } from "@/posts/localize";
import { getDictionary } from "@/i18n/dictionaries";
import { localeInfo, localePath } from "@/i18n/config";
import { feedUrl } from "@/i18n/metadata";
import { FEED_AUTHOR, SITE_URL } from "@/lib/site";

const escapeXml = (text) =>
  String(text).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;");

// CDATA não pode conter "]]>": quebra a sequência em dois blocos
const cdata = (html) => `<![CDATA[${String(html).replace(/]]>/g, "]]]]><![CDATA[>")}]]>`;

// Datas dos artigos são "AAAA-MM-DD"; o RSS pede RFC 822 (ao meio-dia UTC, sem deslocar o dia)
const rfc822 = (date) => new Date(`${date}T12:00:00Z`).toUTCString();

/** Feed RSS 2.0 com todos os artigos no idioma pedido (texto completo em content:encoded). */
export function buildFeed(lang) {
  const dict = getDictionary(lang).blog;
  const home = `${SITE_URL}${localePath(lang, "/blog")}`;
  const sorted = [...posts].sort((a, b) => (a.date < b.date ? 1 : a.date > b.date ? -1 : 0));
  const latest = sorted[0]?.date;

  const items = sorted.map((original) => {
    const post = localizePost(original, lang);
    const link = `${SITE_URL}${localePath(lang, `/blog/${post.slug}`)}`;
    const summary = post.seoDescription || post.excerpt || "";
    return `    <item>
      <title>${escapeXml(post.title)}</title>
      <link>${escapeXml(link)}</link>
      <guid isPermaLink="true">${escapeXml(link)}</guid>
      <pubDate>${rfc822(post.date)}</pubDate>
      <dc:creator>${escapeXml(FEED_AUTHOR)}</dc:creator>
      <description>${escapeXml(summary)}</description>${post.contentHtml ? `\n      <content:encoded>${cdata(post.contentHtml)}</content:encoded>` : ""}
    </item>`;
  });

  return `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:content="http://purl.org/rss/1.0/modules/content/" xmlns:dc="http://purl.org/dc/elements/1.1/">
  <channel>
    <title>${escapeXml(dict.feed.title)}</title>
    <link>${escapeXml(home)}</link>
    <description>${escapeXml(dict.feed.description)}</description>
    <language>${localeInfo[lang].htmlLang}</language>
    <copyright>${escapeXml(`© ${new Date().getUTCFullYear()} ${FEED_AUTHOR}`)}</copyright>${latest ? `\n    <lastBuildDate>${rfc822(latest)}</lastBuildDate>` : ""}
    <atom:link href="${escapeXml(feedUrl(lang))}" rel="self" type="application/rss+xml" />
${items.join("\n")}
  </channel>
</rss>
`;
}

export const feedResponse = (lang) =>
  new Response(buildFeed(lang), {
    headers: { "Content-Type": "application/rss+xml; charset=utf-8" },
  });
