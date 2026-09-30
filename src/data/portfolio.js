// Dados do portfólio que não dependem de idioma (links, stack, projetos, datas).
// Os textos traduzidos ficam em src/i18n/dictionaries.

export const EMAIL = "fabiodrneles@gmail.com";
export const WHATSAPP_URL = "https://api.whatsapp.com/send?phone=5555992109068";
export const CV_URL = "/CV-FABIO-DARCI-DORNELES.pdf";
export const GITHUB_URL = "https://github.com/fabiodrneles";
export const LINKEDIN_URL = "https://www.linkedin.com/in/fabiodrneles/";

export const socialLinks = [
  { platform: "github", label: "GitHub", url: GITHUB_URL },
  { platform: "linkedin", label: "LinkedIn", url: LINKEDIN_URL },
  // TODO: trocar pela URL do canal quando ele for criado
  { platform: "youtube", label: "YouTube", url: "https://www.youtube.com" },
];

export const stack = ["Cypress", "Selenium", "Java", "Kotlin", "Spring", "Go", "TypeScript", "React", "Angular", "React Native"];

/** `id` liga cada projeto aos textos traduzidos em `work.projects`. */
export const projects = [
  {
    id: "go-release-manager",
    title: "Go Release Manager",
    tags: ["Go", "CLI"],
    lang: "go",
    cmd: "go-release-manager",
    url: "https://github.com/fabiodrneles/Go-Release-Manager",
  },
  {
    id: "go-checker",
    title: "Go Checker",
    tags: ["Go", "QA"],
    lang: "go",
    cmd: "go-checker",
    url: "https://github.com/fabiodrneles/go-checker",
  },
  { id: "cv-craft", title: "CV Craft", tags: ["Go", "PDF"], lang: "go", cmd: "cv-craft", url: GITHUB_URL },
  {
    id: "spring-api",
    title: "API REST · Spring Boot",
    tags: ["Java", "Spring"],
    lang: "java",
    cmd: "mvn test",
    url: "https://github.com/fabiodrneles/api-java-spring-boot",
  },
];

/** Datas no formato "AAAA-MM" (ou só "AAAA"); `to: null` significa "atual". */
export const experience = [
  { id: "pismo", place: "Visa / Pismo", from: "2025-01", to: null },
  { id: "stone", place: "Stone Co.", from: "2024-02", to: null },
  { id: "soujunior", place: "SouJunior Labs", from: "2023-11", to: null },
  { id: "capgemini", place: "Capgemini", from: "2023-08", to: "2024-04" },
  { id: "ibm-dev", place: "IBM", from: "2022-09", to: "2023-08" },
  { id: "ibm-intern", place: "IBM", from: "2022-05", to: "2022-08" },
  { id: "freelancer", placeKey: "freelancer", from: "2019", to: null },
];

export const education = [
  { id: "bachelor", placeKey: "brazil", from: "2025-01", to: null },
  { id: "postgrad-fullstack", place: "Unifecaf", from: "2025-01", to: "2026-01" },
  { id: "postgrad-law", place: "Unifecaf", from: "2025-01", to: "2026-01" },
  { id: "mba", place: "Unifecaf", from: "2025-01", to: "2026-01" },
  { id: "associate", place: "Estácio", from: "2021-08", to: "2024-12" },
  { id: "dio", placeKey: "brazil", from: "2019-01", to: null },
];
