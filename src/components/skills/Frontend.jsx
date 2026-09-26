import React from "react";
import { frontendSkills } from "../../data/skills";

const Frontend = () => {
  return (
    <div className="skills__content">
      <h3 className="skills__title">{frontendSkills.title}</h3>

      <div className="skills__box">
        {frontendSkills.groups.map((group, i) => (
          <div className="skills__group" key={i}>
            {group.groupItems.map((item) => (
              <div className="skills__data" key={item.name}>
                <i class="bx bx-badge-check"></i>
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

export default Frontend;
