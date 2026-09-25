import React from "react";
import { Link } from "react-router-dom";
import posts from "../../posts/posts";
import "./Blog.css";

const BlogList = () => {
  return (
    <section className="blog" id="blog">
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
