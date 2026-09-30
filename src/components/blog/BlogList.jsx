import Link from "next/link";
import posts from "../../posts/posts";
import { localizePost } from "../../posts/localize";
import { formatPostDate } from "../../lib/site";
import { localeInfo, localePath } from "../../i18n/config";
import "./Blog.css";

const BlogList = ({ lang, dict }) => {
  return (
    <section className="blog" id="blog">
      <span className="eyebrow">$ ls blog/</span>
      <h1 className="blog__title">{dict.title}</h1>
      <ul className="blog__list">
        {posts.map((original) => {
          const post = localizePost(original, lang);
          const textLang = localeInfo[post.lang].htmlLang;
          return (
            <li key={post.slug} className="blog__card">
              <Link href={localePath(lang, `/blog/${post.slug}`)}>
                <span className="blog__date">
                  {formatPostDate(post.date, lang)}
                  {!post.translated && <span className="chip blog__lang">PT</span>}
                </span>
                <h2 lang={textLang}>{post.title}</h2>
                {post.excerpt && <p lang={textLang}>{post.excerpt}</p>}
              </Link>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default BlogList;
