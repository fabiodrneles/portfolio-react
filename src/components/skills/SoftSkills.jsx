import React from "react";
import { softSkills } from "../../data/skills";

const SoftSkills = () => {
  return (
    <div className="skills__content">
      <h3 className="skills__title">{softSkills.title}</h3>

      <div className="skills__box">
        {softSkills.groups.map((group, i) => (
          <div className="skills__group" key={i}>
            {group.groupItems.map((item, j) => (
              <div className="skills__data" key={`${item.name}-${j}`}>
                <i class="bx bx-badge-check"></i>
                <div>
                  <h3 className="skills__name">{item.name}</h3>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SoftSkills;
