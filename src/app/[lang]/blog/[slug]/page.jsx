import { notFound } from "next/navigation";
import BlogPost from "@/components/blog/BlogPost";
import posts from "@/posts/posts";
import { localizePost } from "@/posts/localize";
import { SITE_URL } from "@/lib/site";
import { getDictionary } from "@/i18n/dictionaries";
import { alternatesFor } from "@/i18n/metadata";
import { localeInfo } from "@/i18n/config";

const getPost = (slug, lang) => {
  const post = posts.find((p) => p.slug === slug);
  return post ? localizePost(post, lang) : null;
};

// Gera todas as páginas de artigos estaticamente no build (SSG).
export const dynamicParams = false;

export function generateStaticParams() {
  return posts.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { lang, slug } = await params;
  const post = getPost(slug, lang);
  const dict = getDictionary(lang).blog;

  if (!post) {
    return { title: dict.notFound };
  }

  const title = `${post.seoTitle || post.title} | Fabio Dorneles`;
  const description = post.seoDescription || post.excerpt || dict.fallbackDescription;
  const { canonical, languages, types } = alternatesFor(lang, `/blog/${post.slug}`);
  // Sem imagem própria, vale a gerada em ./opengraph-image.jsx (não passar `images`)
  const images = post.image ? { images: [`${SITE_URL}${post.image}`] } : {};

  return {
    title,
    description,
    alternates: { canonical, languages, types },
    openGraph: {
      type: "article",
      title,
      description,
      url: canonical,
      locale: localeInfo[post.lang].og,
      publishedTime: post.date,
      authors: ["Fabio Dorneles"],
      ...images,
    },
    twitter: { card: "summary_large_image", title, description, ...images },
  };
}

export default async function BlogPostPage({ params }) {
  const { lang, slug } = await params;
  const post = getPost(slug, lang);

  if (!post) notFound();

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    url: alternatesFor(lang, `/blog/${post.slug}`).canonical,
    inLanguage: localeInfo[post.lang].htmlLang,
    author: { "@type": "Person", name: "Fabio Dorneles", url: SITE_URL },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd).replace(/</g, "\\u003c") }}
      />
      <BlogPost lang={lang} dict={getDictionary(lang).blog} post={post} />
    </>
  );
}
