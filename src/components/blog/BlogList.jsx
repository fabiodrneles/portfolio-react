import React from "react";
import Link from "next/link";
import posts from "../../posts/posts";
import { formatPostDate } from "../../lib/site";
import "./Blog.css";

const BlogList = () => {
  return (
    <section className="blog" id="blog">
      <h2 className="blog__title">Artigos</h2>
      <ul className="blog__list">
        {posts.map((post) => (
          <li key={post.slug} className="blog__card">
            <Link href={`/blog/${post.slug}`}>
              <span className="blog__date">{formatPostDate(post.date)}</span>
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
