const Services = ({ dict }) => (
  <section className="section" id="services">
    <div className="container">
      <div className="section__head">
        <div className="section__heading">
          <span className="eyebrow">{dict.eyebrow}</span>
          <h2 className="section__title">{dict.title}</h2>
        </div>
        <p className="section__lead">{dict.lead}</p>
      </div>

      <div className="services__list">
        {dict.items.map((service, index) => (
          <article key={service.title} className={index === 0 ? "service service--lead" : "service"}>
            <span className="service__index" aria-hidden="true">
              {String(index + 1).padStart(2, "0")}
            </span>
            <div className="service__name">
              <h3 className="service__title">{service.title}</h3>
              {index === 0 && <span className="service__badge">{dict.core}</span>}
            </div>
            <div className="service__body">
              <p className="service__desc">{service.desc}</p>
              <ul className="service__points">
                {service.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default Services;
