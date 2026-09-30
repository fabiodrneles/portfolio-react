/**
 * @typedef {{ name: string, title: string, description: string }} HomeData
 * @typedef {{ platform: string, url: string, icon: string }} SocialLink
 * @typedef {{ description: string }} AboutData
 * @typedef {{ icon: string, title: string, subtitle: string }} InfoBox
 */

/** @type {HomeData} */
export const homeData = {
  name: "Fabio Dorneles",
  title: "QA Engineer and Developer",
  description:
    "QA Engineer and Full Stack Developer, covering the entire project lifecycle from front-end and back-end implementation to rigorous test automation and code coverage analysis.",
};

/** @type {SocialLink[]} */
export const socialLinks = [
  // TODO: trocar pela URL do canal quando ele for criado
  { platform: "youtube", url: "https://www.youtube.com", icon: "uil uil-youtube" },
  { platform: "linkedin", url: "https://www.linkedin.com/in/fabiodrneles/", icon: "uil uil-linkedin" },
  { platform: "github", url: "https://github.com/fabiodrneles", icon: "uil uil-github-alt" },
];

/** @type {AboutData} */
export const aboutData = {
  description:
    "As a Full Stack Developer, I have accumulated experience playing an integral role in collaborative teams, contributing to the development and delivery of robust and efficient solutions.",
};

/** @type {InfoBox[]} */
export const infoBoxes = [
  { icon: "bx bx-award", title: "Experience", subtitle: "4+ years working" },
  { icon: "bx bx-briefcase-alt", title: "Completed", subtitle: "Global Projects" },
  { icon: "bx bx-support", title: "Support", subtitle: "Online 24/7" },
];
