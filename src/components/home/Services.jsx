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

      <div className="services__grid">
        {dict.items.map((service, index) => (
          <article key={service.title} className={index === 0 ? "card service service--lead" : "card service"}>
            <div className="service__top">
              <span className="service__code" aria-hidden="true">
                {service.code}
              </span>
              {index === 0 && <span className="service__badge">{dict.core}</span>}
            </div>
            <h3 className="service__title">{service.title}</h3>
            <p className="service__desc">{service.desc}</p>
            <ul className="service__points">
              {service.points.map((point) => (
                <li key={point}>
                  <span aria-hidden="true">→</span>
                  {point}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default Services;
