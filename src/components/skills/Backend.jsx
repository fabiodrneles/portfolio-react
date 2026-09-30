import React from "react";
import { backendSkills } from "../../data/skills";

const Backend = () => {
  return (
    <div className="skills__content">
      <h3 className="skills__title">{backendSkills.title}</h3>

      <div className="skills__box">
        {backendSkills.groups.map((group, i) => (
          <div className="skills__group" key={i}>
            {group.groupItems.map((item, j) => (
              <div className="skills__data" key={`${item.name}-${j}`}>
                <i className="bx bx-badge-check"></i>
                <div>
                  <h3 className="skills__name">{item.name}</h3>
                  <br />
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Backend;
