import Link from "next/link";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { SITE_URL, formatPostDate } from "../../lib/site";
import { localePath } from "../../i18n/config";
import ShareButtons from "./ShareButtons";
import "./Blog.css";

const BlogPost = ({ lang, dict, post }) => {
  return (
    <article className="blog-post">
      <Link href={localePath(lang, "/blog")} className="blog-post__back">
        {dict.back}
      </Link>
      {dict.ptOnly && <p className="blog__note">{dict.ptOnly}</p>}
      <h1 lang="pt-BR">{post.title}</h1>
      <span className="blog__date">{formatPostDate(post.date, lang)}</span>
      {post.contentHtml ? (
        <div
          className="blog-post__content"
          lang="pt-BR"
          dangerouslySetInnerHTML={{ __html: post.contentHtml }}
        />
      ) : (
        <div className="blog-post__content" lang="pt-BR">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>
            {post.content}
          </ReactMarkdown>
        </div>
      )}

      <ShareButtons url={`${SITE_URL}${localePath(lang, `/blog/${post.slug}`)}`} title={post.title} dict={dict.share} />
    </article>
  );
};

export default BlogPost;
