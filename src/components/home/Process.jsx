const Process = ({ dict }) => (
  <section className="section process" id="process">
    <div className="container">
      <div className="section__head">
        <div className="section__heading">
          <span className="eyebrow">{dict.eyebrow}</span>
          <h2 className="section__title">{dict.title}</h2>
        </div>
      </div>

      <ol className="process__steps">
        {dict.steps.map((step, i) => (
          <li key={step.title} className="process__step">
            <span className="process__num">{String(i + 1).padStart(2, "0")}</span>
            <h3 className="process__title">{step.title}</h3>
            <p className="process__desc">{step.desc}</p>
          </li>
        ))}
      </ol>
    </div>
  </section>
);

export default Process;
