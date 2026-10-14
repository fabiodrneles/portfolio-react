// Dados do portfólio que não dependem de idioma (links, stack, projetos, datas).
// Os textos traduzidos ficam em src/i18n/dictionaries.

export const EMAIL = "fabiodrneles@gmail.com";
export const WHATSAPP_URL = "https://api.whatsapp.com/send?phone=5555992109068";
// Currículo por idioma: português para quem lê em português, inglês para os demais (en e fr).
export const CV_URLS = { pt: "/CV-FABIO-DARCI-DORNELES.pdf", en: "/CV-FABIO-DARCI-DORNELES-EN.pdf" };
export const cvUrl = (lang) => (lang === "pt" ? CV_URLS.pt : CV_URLS.en);
export const GITHUB_URL = "https://github.com/fabiodrneles";
export const LINKEDIN_URL = "https://www.linkedin.com/in/fabiodrneles/";

export const socialLinks = [
  { platform: "github", label: "GitHub", url: GITHUB_URL },
  { platform: "linkedin", label: "LinkedIn", url: LINKEDIN_URL },
  // YouTube escondido até existir um canal de verdade (antes apontava para youtube.com).
  // Para reativar: { platform: "youtube", label: "YouTube", url: "<URL do canal>" },
];

export const stack = ["Cypress", "Selenium", "Java", "Kotlin", "Spring", "Go", "TypeScript", "React", "Angular", "React Native"];

/** `id` liga cada projeto aos textos traduzidos em `work.projects`. */
export const projects = [
  {
    id: "sdd-kit",
    title: "sdd-kit",
    tags: ["Claude Code", "GitHub Actions", "Go"],
    lang: "go",
    cmd: "adopt.sh",
    url: "https://github.com/fabiodrneles/sdd-kit",
    caseStudy: true,
  },
  {
    id: "go-release-manager",
    title: "Go Release Manager",
    tags: ["Go", "CLI", "GitHub Actions"],
    lang: "go",
    cmd: "go-release-manager",
    url: "https://github.com/fabiodrneles/Go-Release-Manager",
    // Página de estudo de caso (specs/014): o cartão abre /projects/<id> em vez do GitHub.
    caseStudy: true,
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
/**
 * Fatos dos estudos de caso que não dependem de idioma (specs/014): links e a saída real da
 * ferramenta. Os textos traduzidos ficam em `caseStudies` nos dicionários.
 */
export const caseStudies = {
  "go-release-manager": {
    // `key` liga cada link ao rótulo traduzido em `caseStudies.<id>.links`.
    links: [
      { key: "repo", url: "https://github.com/fabiodrneles/Go-Release-Manager" },
      { key: "readme", url: "https://github.com/fabiodrneles/Go-Release-Manager#readme" },
      { key: "releases", url: "https://github.com/fabiodrneles/Go-Release-Manager/releases" },
    ],
    // Saída real da v1.2.0 num repositório com três commits depois de v1.2.0.
    terminal: [
      "$ git log --oneline",
      "257369a docs: usage examples",
      "2aba4be feat(cli): add --timeout flag",
      "4261197 fix(parser): handle empty input",
      "576387c (tag: v1.2.0) feat: first command",
      "",
      "$ go-release-manager create --dry-run",
      "No .go-releaserc.yml found. Using the default rules (feat/fix).",
      "Latest stable version: v1.2.0",
      "Analyzing 3 commit(s) since tag v1.2.0...",
      "Analysis done. Highest increment: Minor",
      "Increment: Minor. Next version: v1.3.0",
      "",
      "--- DRY RUN ---",
      "Latest tag: v1.2.0",
      "Commits analyzed: 3",
      "Increment: Minor",
      "Tag that would be created: v1.3.0",
      "--- END OF DRY RUN ---",
    ],
  },
  "sdd-kit": {
    links: [
      { key: "repo", url: "https://github.com/fabiodrneles/sdd-kit" },
      { key: "readme", url: "https://github.com/fabiodrneles/sdd-kit#readme" },
      { key: "demo", url: "https://github.com/fabiodrneles/sdd-kit-demo" },
    ],
    // Saída real da v1.24.0: adoção num repositório Go vazio e o primeiro make ci (linhas do meio omitidas).
    terminal: [
      "$ sh adopt.sh --lang go --skeleton",
      "criado: CLAUDE.md",
      "criado: .github/workflows/ci.yml",
      "criado: .github/workflows/sdd-on-merge.yml",
      "criado: specs/constitution.md",
      "criado: specs/ROADMAP.md",
      "…",
      "sdd-kit go em my-app: 59 criados, 0 ignorados, 0 sobrescritos",
      "",
      "$ make ci",
      "golangci-lint run",
      "0 issues.",
      "ok   github.com/you/my-app   coverage: 100.0% of statements",
      "cobertura: 100.0% (mínimo 80%)",
      "go build ./...",
    ],
  },
};

export const experience = [
  { id: "pismo", place: "Visa / Pismo", from: "2025-02", to: null },
  { id: "stone", place: "Stone Co.", from: "2024-02", to: "2024-11" },
  { id: "soujunior", place: "SouJunior Labs", from: "2023-11", to: null },
  { id: "capgemini", place: "Capgemini", from: "2023-08", to: "2024-04" },
  { id: "ibm-dev", place: "IBM", from: "2022-09", to: "2023-08" },
  { id: "ibm-intern", place: "IBM", from: "2022-05", to: "2022-08" },
  { id: "freelancer", placeKey: "freelancer", from: "2019", to: null },
];

export const education = [
  { id: "bachelor", place: "Estácio", from: "2025-01", to: null },
  { id: "postgrad-fullstack", place: "Unifecaf", from: "2025-01", to: "2026-01" },
  { id: "postgrad-law", place: "Unifecaf", from: "2025-01", to: "2026-01" },
  { id: "mba", place: "Unifecaf", from: "2025-01", to: "2026-01" },
  { id: "associate", place: "Estácio", from: "2021-08", to: "2024-12" },
  { id: "dio", placeKey: "brazil", from: "2019-01", to: null },
];
