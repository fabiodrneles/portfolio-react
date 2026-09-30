import posts from "@/posts/posts";
import { localizePost } from "@/posts/localize";
import { formatPostDate } from "@/lib/site";
import { ogSize, renderOgImage } from "@/lib/og";

export const alt = "Artigo de Fabio Dorneles";
export const size = ogSize;
export const contentType = "image/png";

export function generateStaticParams() {
  return posts.map(({ slug }) => ({ slug }));
}

export default async function Image({ params }) {
  const { lang, slug } = await params;
  const original = posts.find((p) => p.slug === slug);
  const post = original && localizePost(original, lang);

  return renderOgImage({
    eyebrow: "$ cat blog/artigo.md",
    title: post?.title ?? "Fabio Dorneles",
    subtitle: post ? `Fabio Dorneles · ${formatPostDate(post.date, lang)}` : undefined,
  });
}
