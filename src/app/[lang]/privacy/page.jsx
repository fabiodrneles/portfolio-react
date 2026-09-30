import { notFound } from "next/navigation";
import { getDictionary } from "@/i18n/dictionaries";
import { hasLocale } from "@/i18n/config";
import { alternatesFor } from "@/i18n/metadata";
import "./privacy.css";

export async function generateMetadata({ params }) {
  const { lang } = await params;
  const { metaTitle, metaDescription } = getDictionary(lang).privacy;
  return {
    title: `${metaTitle} | Fabio Dorneles`,
    description: metaDescription,
    alternates: alternatesFor(lang, "/privacy"),
  };
}

export default async function PrivacyPage({ params }) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const { title, updated, intro, sections } = getDictionary(lang).privacy;

  return (
    <article className="legal container">
      <h1 className="legal__title">{title}</h1>
      <p className="legal__updated">{updated}</p>
      <p>{intro}</p>
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
