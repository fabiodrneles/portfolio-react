import Link from "next/link";
import Icon from "@/components/ui/Icon";
import posts from "@/posts/posts";
import { CV_URL } from "@/data/portfolio";
import { formatPostDate } from "@/lib/site";
import { localePath } from "@/i18n/config";

const AboutWriting = ({ lang, dict }) => {
  const { about, writing } = dict;
  const latest = [...posts].sort((a, b) => (a.date < b.date ? 1 : -1)).slice(0, 3);

  return (
    <section className="section about-writing" id="about">
      <div className="about-writing__grid container">
        <div className="panel about">
          <span className="eyebrow">{about.eyebrow}</span>
          <div className="about__id">
            <span className="about__avatar" aria-hidden="true">FD</span>
            <div>
              <h2 className="about__name">Fabio Dorneles</h2>
              <span className="about__role">{about.role}</span>
            </div>
          </div>
          <p className="about__bio">{about.bio}</p>
          <a href={CV_URL} className="button button--ghost button--small about__cv" download>
            <Icon name="download" size={18} />
            {about.cv}
          </a>
        </div>

        <div className="panel writing">
          <div className="writing__head">
            <span className="eyebrow">{writing.eyebrow}</span>
            <Link href={localePath(lang, "/blog")} className="text-link writing__all">
              {writing.all} →
            </Link>
          </div>
          {writing.note && <p className="writing__note">{writing.note}</p>}
          <ul className="writing__list">
            {latest.map((post) => (
              <li key={post.slug}>
                <Link href={localePath(lang, `/blog/${post.slug}`)} className="writing__item">
                  <span className="writing__date">{formatPostDate(post.date, lang)}</span>
                  <span className="writing__title" lang="pt-BR">{post.title}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default AboutWriting;
