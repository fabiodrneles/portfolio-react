import React from "react";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { SITE_URL, formatPostDate } from "../../lib/site";
import ShareButtons from "./ShareButtons";
import "./Blog.css";

const BlogPost = ({ post }) => {
  return (
    <article className="blog-post">
      <Link href="/blog" className="blog-post__back">← Todos os artigos</Link>
      <h1>{post.title}</h1>
      <span className="blog__date">{formatPostDate(post.date)}</span>
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

      <ShareButtons url={`${SITE_URL}/blog/${post.slug}`} title={post.title} />
    </article>
  );
};

export default BlogPost;
