/**
 * @typedef {{ name: string }} SkillItem
 * @typedef {{ groupItems: SkillItem[] }} SkillGroup
 * @typedef {{ title: string, groups: SkillGroup[] }} SkillCategory
 */

/** @type {SkillCategory} */
export const frontendSkills = {
  title: "Frontend",
  groups: [
    { groupItems: [{ name: "HTML" }, { name: "CSS" }, { name: "Javascript" }] },
    { groupItems: [{ name: "Angular" }, { name: "React.JS" }, { name: "Typescript" }] },
  ],
};
