"use client";

import { useState } from "react";
import { education, experience } from "@/data/portfolio";
import { formatMonth } from "@/lib/site";

const Journey = ({ lang, dict }) => {
  const [tab, setTab] = useState("experience");
  const tabs = [
    { id: "experience", label: dict.experience, items: experience, titles: dict.experienceItems },
    { id: "education", label: dict.education, items: education, titles: dict.educationItems },
  ];
  const period = ({ from, to }) =>
    to
      ? dict.range.replace("{from}", formatMonth(from, lang)).replace("{to}", formatMonth(to, lang))
      : dict.since.replace("{from}", formatMonth(from, lang));

  return (
    <section className="section journey" id="qualification">
      <div className="container">
        <div className="section__head">
          <div className="section__heading">
            <span className="eyebrow">{dict.eyebrow}</span>
            <h2 className="section__title">{dict.title}</h2>
          </div>
          <div className="filters" role="group" aria-label={dict.eyebrow}>
            {tabs.map(({ id, label }) => (
              <button
                key={id}
                type="button"
                className={tab === id ? "filter filter--active" : "filter"}
                aria-pressed={tab === id}
                onClick={() => setTab(id)}
              >
                {label}
              </button>
            ))}
          </div>
        </div>

        {/* As duas listas ficam no HTML; a inativa usa `hidden` (crawlers e leitores sem JS veem as duas) */}
        {tabs.map(({ id, items, titles }) => (
          <ol key={id} className="timeline" hidden={tab !== id}>
            {items.map((item) => (
              <li key={item.id} className={item.to ? "timeline__item" : "timeline__item timeline__item--current"}>
                <span className="timeline__period">{period(item)}</span>
                <div className="timeline__body">
                  <h3 className="timeline__title">{titles[item.id]}</h3>
                  <span className="timeline__place">{item.place ?? dict.places[item.placeKey]}</span>
                </div>
              </li>
            ))}
          </ol>
        ))}
      </div>
    </section>
  );
};

export default Journey;
