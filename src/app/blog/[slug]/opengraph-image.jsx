import posts from "@/posts/posts";
import { formatPostDate } from "@/lib/site";
import { ogSize, renderOgImage } from "@/lib/og";

export const alt = "Artigo de Fabio Dorneles";
export const size = ogSize;
export const contentType = "image/png";

export function generateStaticParams() {
  return posts.map(({ slug }) => ({ slug }));
}

export default async function Image({ params }) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);

  return renderOgImage({
    eyebrow: "$ cat blog/artigo.md",
    title: post?.title ?? "Artigo — Fabio Dorneles",
    subtitle: post ? `Fabio Dorneles · ${formatPostDate(post.date)}` : undefined,
  });
}
