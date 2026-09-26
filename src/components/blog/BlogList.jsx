import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import posts from "../../posts/posts";
import "./Blog.css";

const BlogList = () => {
  return (
    <section className="blog" id="blog">
      <Helmet>
        <title>Artigos — Fabio Dorneles</title>
        <meta
          name="description"
          content="Artigos sobre desenvolvimento web, testes e qualidade de software, escritos por Fabio Dorneles."
        />
        <meta property="og:title" content="Artigos — Fabio Dorneles" />
        <meta
          property="og:description"
          content="Artigos sobre desenvolvimento web, testes e qualidade de software, escritos por Fabio Dorneles."
        />
        <meta property="og:url" content="https://fabiodorneles.com.br/blog" />
      </Helmet>

      <h2 className="blog__title">Artigos</h2>
      <ul className="blog__list">
        {posts.map((post) => (
          <li key={post.slug} className="blog__card">
            <Link to={`/blog/${post.slug}`}>
              <span className="blog__date">
                {new Date(post.date).toLocaleDateString("pt-BR", {
                  day: "2-digit",
                  month: "long",
                  year: "numeric",
                })}
              </span>
              <h3>{post.title}</h3>
              <p>{post.excerpt}</p>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default BlogList;
