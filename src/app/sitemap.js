import posts from "@/posts/posts";
import { SITE_URL } from "@/lib/site";

// Gerado no build: inclui automaticamente cada novo artigo do blog.
export default function sitemap() {
  const latestPost = posts.reduce((latest, p) => (p.date > latest ? p.date : latest), "");

  return [
    { url: `${SITE_URL}/`, changeFrequency: "monthly", priority: 1 },
    {
      url: `${SITE_URL}/blog`,
      lastModified: latestPost || undefined,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    ...posts.map((post) => ({
      url: `${SITE_URL}/blog/${post.slug}`,
      lastModified: post.date,
      changeFrequency: "yearly",
      priority: 0.6,
    })),
  ];
}
