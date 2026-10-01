import posts from "@/posts/posts";
import { alternatesFor } from "@/i18n/metadata";
import { locales } from "@/i18n/config";

// Gerado no build: inclui automaticamente cada novo artigo do blog, em todos os idiomas.
export default function sitemap() {
  const latestPost = posts.reduce((latest, p) => (p.date > latest ? p.date : latest), "");

  const pages = [
    { path: "/", changeFrequency: "monthly", priority: 1 },
    { path: "/privacy", changeFrequency: "yearly", priority: 0.3 },
    { path: "/quality", changeFrequency: "monthly", priority: 0.5 },
    { path: "/blog", lastModified: latestPost || undefined, changeFrequency: "weekly", priority: 0.8 },
    ...posts.map((post) => ({
      path: `/blog/${post.slug}`,
      lastModified: post.date,
      changeFrequency: "yearly",
      priority: 0.6,
    })),
  ];

  return pages.flatMap(({ path, ...entry }) =>
    locales.map((lang) => {
      const { canonical, languages } = alternatesFor(lang, path);
      return { url: canonical, alternates: { languages }, ...entry };
    })
  );
}
