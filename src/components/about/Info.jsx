import React from "react";
import { infoBoxes } from "../../data/profile";

const Info = () => {
  return (
    <div className="about__info grid">
      {infoBoxes.map((box) => (
        <div className="about__box" key={box.title}>
          <i className={`${box.icon} about__icon`}></i>
          <h3 className="about__title">{box.title}</h3>
          <span className="about__subtitle">{box.subtitle}</span>
        </div>
      ))}
    </div>
  );
};

export default Info;
