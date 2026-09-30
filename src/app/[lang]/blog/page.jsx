import BlogList from "@/components/blog/BlogList";
import { getDictionary } from "@/i18n/dictionaries";
import { alternatesFor } from "@/i18n/metadata";

export async function generateMetadata({ params }) {
  const { lang } = await params;
  const { metaTitle: title, description } = getDictionary(lang).blog;
  const { canonical, languages, types } = alternatesFor(lang, "/blog");

  return {
    title,
    description,
    alternates: { canonical, languages, types },
    openGraph: { title, description, url: canonical },
    twitter: { title, description },
  };
}

export default async function BlogPage({ params }) {
  const { lang } = await params;
  return <BlogList lang={lang} dict={getDictionary(lang).blog} />;
}
