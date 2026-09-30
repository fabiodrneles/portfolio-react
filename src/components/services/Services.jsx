"use client";

import React, { useState } from "react";
import "./services.css";
import { services } from "../../data/services";

const Services = () => {
  const [toggleState, setToggleState] = useState(0);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <section className="services section" id="services">
      <h2 className="section__title">Services</h2>
      <span className="section__subtitle">What i offer</span>

      <div className="services__container container grid">
        {services.map((service, index) => {
          const modalIndex = index + 1;
          return (
            <div className="services__content" key={service.titleLines.join("-")}>
              <div>
                <i className={`${service.icon} services__icon`}></i>
                <h3 className="services__title">
                  {service.titleLines.map((line, i) => (
                    <React.Fragment key={i}>
                      {line}
                      {i < service.titleLines.length - 1 && <br />}
                    </React.Fragment>
                  ))}
                </h3>
              </div>

              <span className="services__button" onClick={() => toggleTab(modalIndex)}>
                View More
                <i className="uil uil-arrow-right services__button-icon"></i>
              </span>

              <div
                className={
                  toggleState === modalIndex
                    ? "services__modal active-modal"
                    : "services__modal"
                }
              >
                <div className="services__modal-content">
                  <i
                    onClick={() => toggleTab(0)}
                    className="uil uil-times services__modal-close"
                  ></i>
                  <h3 className="services__modal-title">
                    {service.titleLines.map((line, i) => (
                      <React.Fragment key={i}>
                        {line}
                        {i < service.titleLines.length - 1 && <br />}
                      </React.Fragment>
                    ))}
                  </h3>
                  <p className="services__modal-description">{service.description}</p>

                  <ul className="services__modal-services grid">
                    {service.items.map((item) => (
                      <li className="services__modal-service" key={item}>
                        <i className="uil uil-check-circle services__modal-icon"></i>
                        <p className="services__modal-info">{item}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Services;
