import Link from "next/link";
import posts from "../../posts/posts";
import { formatPostDate } from "../../lib/site";
import { localePath } from "../../i18n/config";
import "./Blog.css";

const BlogList = ({ lang, dict }) => {
  return (
    <section className="blog" id="blog">
      <span className="eyebrow">$ ls blog/</span>
      <h1 className="blog__title">{dict.title}</h1>
      {dict.ptOnly && <p className="blog__note">{dict.ptOnly}</p>}
      <ul className="blog__list">
        {posts.map((post) => (
          <li key={post.slug} className="blog__card">
            <Link href={localePath(lang, `/blog/${post.slug}`)}>
              <span className="blog__date">{formatPostDate(post.date, lang)}</span>
              <h2 lang="pt-BR">{post.title}</h2>
              {post.excerpt && <p lang="pt-BR">{post.excerpt}</p>}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default BlogList;
