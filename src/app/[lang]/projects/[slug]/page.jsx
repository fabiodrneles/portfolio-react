import Link from "next/link";
import { notFound } from "next/navigation";
import { getDictionary } from "@/i18n/dictionaries";
import { hasLocale, localePath } from "@/i18n/config";
import { alternatesFor } from "@/i18n/metadata";
import { caseStudies, projects } from "@/data/portfolio";
import "../../privacy/privacy.css";
import "../../quality/quality.css";
import "./case-study.css";

// Estudo de caso de um projeto (specs/014), gerado no build para cada projeto que tem um.
export const dynamicParams = false;

export function generateStaticParams() {
  return projects.filter((p) => p.caseStudy).map(({ id }) => ({ slug: id }));
}

const textFor = (lang, slug) => getDictionary(lang).caseStudies?.[slug];

export async function generateMetadata({ params }) {
  const { lang, slug } = await params;
  const text = textFor(lang, slug);
  if (!text) return {};
  return {
    title: `${text.metaTitle} | Fabio Dorneles`,
    description: text.metaDescription,
    alternates: alternatesFor(lang, `/projects/${slug}`),
  };
}

export default async function CaseStudyPage({ params }) {
  const { lang, slug } = await params;
  const text = textFor(lang, slug);
  const facts = caseStudies[slug];
  if (!hasLocale(lang) || !text || !facts) notFound();

  return (
    <article className="legal container quality case">
      <p className="eyebrow">{text.eyebrow}</p>
      <h1 className="legal__title">{text.title}</h1>
      <p className="case__lead">{text.lead}</p>

      <ul className="quality__facts">
        {text.facts.map(({ value, label }) => (
          <li key={label}>
            <strong className="quality__number">{value}</strong> {label}
          </li>
        ))}
      </ul>
      <p className="case__note">{text.factsNote}</p>

      <p className="quality__links">
        <a href={facts.repo} className="text-link" target="_blank" rel="noopener noreferrer">
          {text.links.repo} →
        </a>
        <a href={facts.readme} className="text-link" target="_blank" rel="noopener noreferrer">
          {text.links.readme} →
        </a>
        <a href={facts.releases} className="text-link" target="_blank" rel="noopener noreferrer">
          {text.links.releases} →
        </a>
      </p>

      <figure className="case__figure">
        <figcaption>{text.outputCaption}</figcaption>
        <pre className="case__terminal">
          <code>{facts.terminal.join("\n")}</code>
        </pre>
      </figure>

      {text.sections.map(({ heading, paragraphs, list }) => (
        <section key={heading} className="legal__section">
          <h2>{heading}</h2>
          {paragraphs.map((p) => (
            <p key={p}>{p}</p>
          ))}
          {list.length > 0 && (
            <ul>
              {list.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          )}
        </section>
      ))}

      <section className="legal__section case__cta">
        <h2>{text.cta.heading}</h2>
        <p>{text.cta.text}</p>
        <Link href={`${localePath(lang, "/")}#contact`} className="button button--primary case__cta-button">
          {text.cta.button} →
        </Link>
      </section>
    </article>
  );
}
