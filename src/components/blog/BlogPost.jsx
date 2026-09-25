import React from "react";
import { useParams, Link } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import posts from "../../posts/posts";
import "./Blog.css";

const BlogPost = () => {
  const { slug } = useParams();
  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <section className="blog">
        <p>Artigo não encontrado.</p>
        <Link to="/blog">Voltar para os artigos</Link>
      </section>
    );
  }

  return (
    <article className="blog-post">
      <Link to="/blog" className="blog-post__back">← Todos os artigos</Link>
      <h1>{post.title}</h1>
      <span className="blog__date">
        {new Date(post.date).toLocaleDateString("pt-BR", {
          day: "2-digit",
          month: "long",
          year: "numeric",
        })}
      </span>
      <div className="blog-post__content">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>
          {post.content}
        </ReactMarkdown>
      </div>
    </article>
  );
};

export default BlogPost;
