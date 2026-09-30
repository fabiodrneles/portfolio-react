import { notFound } from "next/navigation";
import BlogPost from "@/components/blog/BlogPost";
import posts from "@/posts/posts";
import { SITE_URL } from "@/lib/site";

const getPost = (slug) => posts.find((p) => p.slug === slug);

// Gera todas as páginas de artigos estaticamente no build (SSG).
export const dynamicParams = false;

export function generateStaticParams() {
  return posts.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = getPost(slug);

  if (!post) {
    return { title: "Artigo não encontrado — Fabio Dorneles" };
  }

  const title = `${post.title} — Fabio Dorneles`;
  const description = post.excerpt || "Artigo do blog de Fabio Dorneles.";
  const url = `${SITE_URL}/blog/${post.slug}`;
  // Sem imagem própria, vale a gerada em ./opengraph-image.jsx (não passar `images`)
  const images = post.image ? { images: [`${SITE_URL}${post.image}`] } : {};

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: { type: "article", title, description, url, publishedTime: post.date, authors: ["Fabio Dorneles"], ...images },
    twitter: { card: "summary_large_image", title, description, ...images },
  };
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  const post = getPost(slug);

  if (!post) notFound();

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    url: `${SITE_URL}/blog/${post.slug}`,
    inLanguage: "pt-BR",
    author: { "@type": "Person", name: "Fabio Dorneles", url: SITE_URL },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd).replace(/</g, "\\u003c") }}
      />
      <BlogPost post={post} />
    </>
  );
}
