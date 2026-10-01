import Link from "next/link";
import Icon from "@/components/ui/Icon";
import { socialLinks } from "@/data/portfolio";
import { localePath } from "@/i18n/config";
import "./footer.css";

const Footer = ({ lang, dict }) => {
  const home = localePath(lang, "/");
  const links = [
    { href: `${home}#services`, label: dict.nav.services },
    { href: `${home}#portfolio`, label: dict.nav.work },
    { href: `${home}#qualification`, label: dict.nav.journey },
    { href: localePath(lang, "/blog"), label: dict.nav.blog },
    { href: localePath(lang, "/quality"), label: dict.nav.quality },
  ];
  // Feed do idioma da página; é um arquivo XML, não uma rota, então vai num <a> comum
  const feedHref = localePath(lang, "/feed.xml");

  return (
    <footer className="footer">
      <div className="footer__inner container">
        <div className="footer__brand">
          <span className="footer__name">Fabio Dorneles</span>
          <span className="footer__role">{dict.meta.jobTitle}</span>
        </div>

        <ul className="footer__links">
          {links.map(({ href, label }) => (
            <li key={href}>
              <Link href={href} className="footer__link">
                {label}
              </Link>
            </li>
          ))}
          <li>
            <a href={feedHref} className="footer__link" type="application/rss+xml">
              {dict.blog.feed.link}
            </a>
          </li>
        </ul>

        <div className="footer__social">
          {socialLinks.map(({ platform, label, url }) => (
            <a key={platform} href={url} className="icon-button" aria-label={label} target="_blank" rel="noreferrer">
              <Icon name={platform} size={18} strokeWidth={1.8} />
            </a>
          ))}
        </div>
      </div>

      <div className="footer__bottom container">
        <span>
          © {new Date().getFullYear()} Fabio Dorneles · {dict.footer.rights}
        </span>
        <Link href={localePath(lang, "/privacy")} className="footer__link">
          {dict.footer.privacy}
        </Link>
        <span>
          {dict.footer.build} <span className="footer__passing">{dict.footer.passing}</span>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
