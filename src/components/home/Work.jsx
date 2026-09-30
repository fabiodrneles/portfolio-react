"use client";

import { useState } from "react";
import Icon from "@/components/ui/Icon";
import { GITHUB_URL, projects } from "@/data/portfolio";

const FILTERS = ["all", "go", "java"];
const FILTER_LABELS = { go: "Go", java: "Java" };

const Work = ({ dict }) => {
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
            return (
              <li key={project.id}>
                <a
                  href={project.url}
                  className="card project"
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`${project.title} — ${dict.open}`}
                >
                  <div className="project__terminal" aria-hidden="true">
                    <span className="project__cmd">$ {project.cmd}</span>
                    <span>{text.out}</span>
                    <span className="project__ok">✓ {dict.done}</span>
                  </div>
                  <div className="project__body">
                    <div className="project__head">
                      <h3 className="project__title">{project.title}</h3>
                      <Icon name="arrowUpRight" size={22} className="project__arrow" />
                    </div>
                    <p className="project__desc">{text.desc}</p>
                    <div className="project__tags">
                      {project.tags.map((tag) => (
                        <span key={tag} className="chip">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </a>
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
