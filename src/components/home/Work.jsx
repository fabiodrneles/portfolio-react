"use client";

import { useState } from "react";
import Link from "next/link";
import Icon from "@/components/ui/Icon";
import { GITHUB_URL, projects } from "@/data/portfolio";
import { localePath } from "@/i18n/config";

const FILTERS = ["all", "go", "java"];
const FILTER_LABELS = { go: "Go", java: "Java" };

const Work = ({ lang, dict }) => {
  const [filter, setFilter] = useState("all");
  const visible = filter === "all" ? projects : projects.filter((p) => p.lang === filter);

  return (
    <section className="section work" id="portfolio">
      <div className="container">
        <div className="section__head">
          <div className="section__heading">
            <span className="eyebrow">{dict.eyebrow}</span>
            <h2 className="section__title">{dict.title}</h2>
          </div>
          <div className="filters" role="group" aria-label={dict.filterLabel}>
            {FILTERS.map((id) => (
              <button
                key={id}
                type="button"
                className={filter === id ? "filter filter--active" : "filter"}
                aria-pressed={filter === id}
                onClick={() => setFilter(id)}
              >
                {id === "all" ? dict.all : FILTER_LABELS[id]}
              </button>
            ))}
          </div>
        </div>

        <ul className="work__grid">
          {visible.map((project) => {
            const text = dict.projects[project.id];
            // Com estudo de caso (specs/014), o cartão abre a página do estudo, na mesma aba.
            const Card = project.caseStudy ? Link : "a";
            const target = project.caseStudy
              ? { href: localePath(lang, `/projects/${project.id}`) }
              : { href: project.url, target: "_blank", rel: "noreferrer" };
            return (
              <li key={project.id}>
                <Card {...target} className="project">
                  <span className="project__cmd" aria-hidden="true">
                    {project.cmd}
                  </span>
                  <div className="project__main">
                    <h3 className="project__title">{project.title}</h3>
                    <p className="project__desc">{text.desc}</p>
                  </div>
                  <span className="project__tags">
                    {project.tags.map((tag) => (
                      <span key={tag} className="chip">
                        {tag}
                      </span>
                    ))}
                  </span>
                  <Icon name="arrowUpRight" size={20} strokeWidth={1.6} className="project__arrow" />
                  <span className="visually-hidden">{project.caseStudy ? dict.openCase : dict.open}</span>
                </Card>
              </li>
            );
          })}
        </ul>

        <div className="work__more">
          <a href={GITHUB_URL} className="text-link" target="_blank" rel="noreferrer">
            {dict.allRepos}
            <Icon name="arrowRight" size={16} strokeWidth={2.2} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Work;
