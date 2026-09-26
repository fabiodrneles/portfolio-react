import React from "react";
import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import posts from "../../posts/posts";
import "./Blog.css";

const SITE_URL = "https://fabiodorneles.com.br";
const DEFAULT_IMAGE = `${SITE_URL}/logo512.png`;

const BlogPost = () => {
  const { slug } = useParams();
  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <section className="blog">
        <Helmet>
          <title>Artigo não encontrado — Fabio Dorneles</title>
        </Helmet>
        <p>Artigo não encontrado.</p>
        <Link to="/blog">Voltar para os artigos</Link>
      </section>
    );
  }

  const pageTitle = `${post.title} — Fabio Dorneles`;
  const pageDescription = post.excerpt || "Artigo do blog de Fabio Dorneles.";
  const pageUrl = `${SITE_URL}/blog/${post.slug}`;
  const pageImage = post.image ? `${SITE_URL}${post.image}` : DEFAULT_IMAGE;

  return (
    <article className="blog-post">
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />

        <meta property="og:type" content="article" />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:image" content={pageImage} />
        <meta property="og:url" content={pageUrl} />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
        <meta name="twitter:image" content={pageImage} />
      </Helmet>

      <Link to="/blog" className="blog-post__back">← Todos os artigos</Link>
      <h1>{post.title}</h1>
      <span className="blog__date">
        {new Date(post.date).toLocaleDateString("pt-BR", {
          day: "2-digit",
          month: "long",
          year: "numeric",
        })}
      </span>
      {post.contentHtml ? (
        <div
          className="blog-post__content"
          dangerouslySetInnerHTML={{ __html: post.contentHtml }}
        />
      ) : (
        <div className="blog-post__content">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>
            {post.content}
          </ReactMarkdown>
        </div>
      )}
    </article>
  );
};

export default BlogPost;
