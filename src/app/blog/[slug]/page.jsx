import { notFound } from "next/navigation";
import BlogPost from "@/components/blog/BlogPost";
import posts from "@/posts/posts";
import { SITE_URL } from "@/lib/site";

const DEFAULT_IMAGE = `${SITE_URL}/logo512.png`;

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
  const image = post.image ? `${SITE_URL}${post.image}` : DEFAULT_IMAGE;

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: { type: "article", title, description, images: [image], url },
    twitter: { card: "summary_large_image", title, description, images: [image] },
  };
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  const post = getPost(slug);

  if (!post) notFound();

  return <BlogPost post={post} />;
}
