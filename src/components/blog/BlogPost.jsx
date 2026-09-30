import Link from "next/link";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { SITE_URL, formatPostDate } from "../../lib/site";
import { localeInfo, localePath } from "../../i18n/config";
import ShareButtons from "./ShareButtons";
import "./Blog.css";

/** `post` já vem no idioma da página (veja posts/localize.js). */
const BlogPost = ({ lang, dict, post }) => {
  const textLang = localeInfo[post.lang].htmlLang;

  return (
    <article className="blog-post">
      <Link href={localePath(lang, "/blog")} className="blog-post__back">
        {dict.back}
      </Link>
      {!post.translated && <p className="blog__note">{dict.untranslated}</p>}
      <h1 lang={textLang}>{post.title}</h1>
      <span className="blog__date">{formatPostDate(post.date, lang)}</span>
      {post.contentHtml ? (
        <div
          className="blog-post__content"
          lang={textLang}
          dangerouslySetInnerHTML={{ __html: post.contentHtml }}
        />
      ) : (
        <div className="blog-post__content" lang={textLang}>
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
