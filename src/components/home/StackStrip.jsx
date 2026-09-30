import { stack } from "@/data/portfolio";

const StackStrip = ({ label }) => (
  <section className="stack" id="skills" aria-label={label}>
    <div className="stack__inner container">
      <span className="stack__label">{label}</span>
      <ul className="stack__list">
        {stack.map((tech) => (
          <li key={tech} className="stack__item">
            {tech}
          </li>
        ))}
      </ul>
    </div>
  </section>
);

export default StackStrip;
