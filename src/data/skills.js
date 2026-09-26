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

/** @type {SkillCategory} */
export const mobileSkills = {
  title: "Mobile",
  groups: [
    { groupItems: [{ name: "Java" }, { name: "Kotlin" }, { name: "Kotlin Multiplataform" }] },
    { groupItems: [{ name: "React Native" }, { name: "Android" }, { name: "UI/UX" }] },
  ],
};

/** @type {SkillCategory} */
export const backendSkills = {
  title: "Backend",
  groups: [
    { groupItems: [{ name: "Java" }, { name: "Kotlin" }, { name: "Spring Framework" }] },
    { groupItems: [{ name: "Golang" }, { name: "Database" }, { name: "Developing REST APIs" }] },
  ],
};

/** @type {SkillCategory} */
export const softSkills = {
  title: "QA (Quality Assurance)",
  groups: [
    { groupItems: [{ name: "Test Automation" }, { name: "API Testing" }, { name: "Manual Testing" }] },
    { groupItems: [{ name: "Bug Tracking" }, { name: "Mobile, Web, and Desktop" }, { name: "Continuous Improvement" }] },
  ],
};
