import BlogList from "@/components/blog/BlogList";

const title = "Artigos — Fabio Dorneles";
const description =
  "Artigos sobre desenvolvimento web, testes e qualidade de software, escritos por Fabio Dorneles.";

export const metadata = {
  title,
  description,
  alternates: { canonical: "/blog" },
  openGraph: { title, description, url: "/blog" },
};

export default function BlogPage() {
  return <BlogList />;
}
