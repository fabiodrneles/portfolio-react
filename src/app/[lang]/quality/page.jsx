import { notFound } from "next/navigation";
import { getDictionary } from "@/i18n/dictionaries";
import { hasLocale } from "@/i18n/config";
import { alternatesFor } from "@/i18n/metadata";
import { qualityFacts } from "@/lib/quality";
import { GITHUB_URL } from "@/data/portfolio";
import "../privacy/privacy.css";
import "./quality.css";

const REPO_URL = `${GITHUB_URL}/portfolio-react`;

export async function generateMetadata({ params }) {
  const { lang } = await params;
  const { metaTitle, metaDescription } = getDictionary(lang).quality;
  return {
    title: `${metaTitle} | Fabio Dorneles`,
    description: metaDescription,
    alternates: alternatesFor(lang, "/quality"),
  };
}

export default async function QualityPage({ params }) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const { title, intro, sections, factSpecs, factPipelines, repo, pipelinesLink } = getDictionary(lang).quality;
  const { specs, pipelines } = qualityFacts();

  return (
    <article className="legal container quality">
      <h1 className="legal__title">{title}</h1>
      <p>{intro}</p>

      <ul className="quality__facts">
        {specs !== null && (
          <li>
            <strong className="quality__number">{specs}</strong> {factSpecs}
          </li>
        )}
        {pipelines !== null && (
          <li>
            <strong className="quality__number">{pipelines}</strong> {factPipelines}
          </li>
        )}
      </ul>

      <p className="quality__links">
        <a href={REPO_URL} className="text-link" target="_blank" rel="noopener noreferrer">
          {repo} →
        </a>
        <a href={`${REPO_URL}/tree/master/.github/workflows`} className="text-link" target="_blank" rel="noopener noreferrer">
          {pipelinesLink} →
        </a>
      </p>

      {sections.map(({ heading, paragraphs, list }) => (
        <section key={heading} className="legal__section">
          <h2>{heading}</h2>
          {paragraphs.map((text) => (
            <p key={text}>{text}</p>
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
    </article>
  );
}
