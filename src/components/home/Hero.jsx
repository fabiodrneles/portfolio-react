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
          <span className="eyebrow hero__eyebrow">{hero.eyebrow}</span>
          <h1 className="hero__title">
            {hero.titleStart} <span className="hero__highlight">{hero.titleHighlight}</span> {hero.titleEnd}
          </h1>
          <p className="hero__lead">{hero.lead}</p>

          <div className="hero__actions">
            <Link href="#contact" className="button button--primary">
              {hero.primary}
              <Icon name="arrowRight" size={18} strokeWidth={2.2} />
            </Link>
            <Link href="#portfolio" className="button button--ghost">
              {hero.secondary}
            </Link>
          </div>

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
                  <Icon name={platform} size={20} strokeWidth={1.8} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <TestRunner dict={dict.runner} />
      </div>
    </section>
  );
};

export default Hero;
