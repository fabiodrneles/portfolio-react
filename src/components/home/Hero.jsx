import Link from "next/link";
import Icon from "@/components/ui/Icon";
import TestRunner from "./TestRunner";
import { socialLinks } from "@/data/portfolio";
import "./home.css";

const Hero = ({ dict }) => {
  const { hero } = dict;

  return (
    <section className="hero" id="home">
      <div className="hero__grid container">
        <div className="hero__content">
          <span className="hero__eyebrow">{hero.eyebrow}</span>
          <h1 className="hero__title">
            {hero.titleStart} <em className="hero__highlight">{hero.titleHighlight}</em>
            {hero.titleEnd && ` ${hero.titleEnd}`}
          </h1>
          <p className="hero__lead">{hero.lead}</p>

          <div className="hero__actions">
            <Link href="#contact" className="button button--primary">
              {hero.primary}
              <Icon name="arrowRight" size={18} strokeWidth={1.8} />
            </Link>
            <Link href="#portfolio" className="text-link">
              {hero.secondary}
            </Link>
          </div>
        </div>

        <TestRunner dict={dict.runner} />

        <div className="hero__proof">
          {hero.stats.map((stat) => (
            <div className="hero__stat" key={stat.label}>
              <span className="hero__stat-value">{stat.value}</span>
              <span className="hero__stat-label">{stat.label}</span>
            </div>
          ))}
          <div className="hero__social">
            {socialLinks.map(({ platform, label, url }) => (
              <a key={platform} href={url} className="icon-button" aria-label={label} target="_blank" rel="noreferrer">
                <Icon name={platform} size={18} strokeWidth={1.6} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
