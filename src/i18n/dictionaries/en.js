// Site copy in English. Same structure as pt.js.
const en = {
  meta: {
    title: "Fabio Dorneles | QA Engineer & Full Stack Developer",
    description:
      "Fabio Dorneles, QA Engineer and Full Stack Developer. Test automation, APIs and web and mobile apps, with quality from start to finish.",
    ogSubtitle: "QA Engineer & Full Stack Developer: projects, portfolio and technical articles",
    jobTitle: "QA Engineer and Full Stack Developer",
  },
  nav: {
    home: "Home",
    services: "Services",
    work: "Work",
    journey: "Journey",
    about: "About",
    blog: "Blog",
    quality: "Quality",
    cta: "Let's talk",
    available: "open to work",
    language: "Language",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    main: "Main navigation",
    skip: "Skip to content",
  },
  hero: {
    eyebrow: "// QA Engineer · Full Stack Developer",
    titleStart: "Software that passes",
    titleHighlight: "every test",
    titleEnd: "before your users do.",
    lead: "I build front-end and back-end, then prove it works: test automation, API validation and code coverage across the whole project lifecycle.",
    primary: "Get in touch",
    secondary: "See my work",
    stats: [
      { value: "4+ yrs", label: "shipping software" },
      { value: "Web · Mobile · API", label: "end-to-end coverage" },
    ],
  },
  runner: {
    title: "fabio.cy.js · cypress run",
    it: "ships reliable software",
    visit: "/your-product",
    specs: ["writes clean front-end", "designs reliable APIs", "automates the test suite", "ships through CI/CD"],
    passed: "All specs passed",
    summary: "4 of 4 specs · 0 failures",
  },
  stack: { label: "Daily stack" },
  services: {
    eyebrow: "01 / services",
    title: "One engineer to build it and prove it works.",
    lead: "Quality is the core, not an afterthought. Pick one area or bring me in for the full lifecycle.",
    core: "Core specialty",
    items: [
      {
        code: "QA",
        title: "QA Engineering",
        desc: "Robust, efficient testing so software ships with confidence across platforms.",
        points: [
          "Test automation (Cypress, Selenium)",
          "API testing and validation",
          "Cross-browser and mobile testing",
          "CI/CD pipeline integration",
        ],
      },
      {
        code: "</>",
        title: "Back-End",
        desc: "Secure, flexible server-side systems with clean data management.",
        points: ["RESTful APIs (Java, Kotlin, Go)", "Spring Framework", "Database design", "Scalable infrastructure"],
      },
      {
        code: "UI",
        title: "Front-End",
        desc: "Interfaces translated from design into fast, accessible code.",
        points: ["React, Angular, TypeScript", "API integration", "Responsive on every device", "React Native and Android"],
      },
    ],
  },
  work: {
    eyebrow: "02 / work",
    title: "Tools I built and tested.",
    filterLabel: "Filter projects",
    all: "All",
    allRepos: "All repositories on GitHub",
    open: "Open on GitHub",
    done: "done",
    projects: {
      "go-release-manager": {
        desc: "Stop creating releases manually. Automates the entire release workflow.",
        out: "release created · changelog generated",
      },
      "go-checker": {
        desc: "A simple yet powerful command-line tool to quickly verify websites and APIs.",
        out: "websites and APIs checked",
      },
      "cv-craft": {
        desc: "Professional resume generator built with Go. Creates ATS-optimized resumes.",
        out: "resume generated as PDF",
      },
      "spring-api": {
        desc: "REST API built with Spring Boot to sharpen API design and testing.",
        out: "BUILD SUCCESS",
      },
    },
  },
  journey: {
    eyebrow: "03 / journey",
    title: "Where this experience comes from.",
    experience: "Experience",
    education: "Education",
    range: "{from} to {to}",
    since: "since {from}",
    experienceItems: {
      pismo: "Software Engineer · Golang",
      stone: "Developer Intern · Kotlin · Back-end",
      soujunior: "Apprentice · Scrum Master (volunteer project)",
      capgemini: "Java Developer · Angular · SQL Server (Swiss Re project)",
      "ibm-dev": "Java Developer · Angular · Cobol · React | Full Stack",
      "ibm-intern": "Developer Intern · Java · Angular · Cobol · Mainframe",
      freelancer: "Java · Angular · React · WordPress Developer | Full Stack",
    },
    educationItems: {
      bachelor: "Bachelor's Degree in Software Engineering",
      "postgrad-fullstack": "Postgraduate Degree in Full Stack Development",
      "postgrad-law": "Postgraduate Degree in Digital Law",
      mba: "MBA in Compliance and Governance",
      associate: "Associate's Degree in Systems Analysis and Development",
      dio: "Bootcamps with Digital Innovation One (DIO)",
    },
    places: { freelancer: "Freelancer", brazil: "Brazil" },
  },
  process: {
    eyebrow: "04 / process",
    title: "A pipeline, not a guess.",
    steps: [
      { title: "Understand", desc: "Map requirements and risks. Define what “working” means before a line of code." },
      { title: "Build", desc: "Front-end and back-end in small, reviewable increments." },
      { title: "Verify", desc: "Automated E2E, API and regression suites with coverage reports." },
      { title: "Ship", desc: "Tests wired into CI/CD so every release is gated by a green build." },
    ],
  },
  about: {
    eyebrow: "05 / about",
    role: "QA Engineer & Full Stack · Brazil",
    bio: "As a Full Stack Developer, I have built experience as an integral part of collaborative teams, contributing to the development and delivery of robust and efficient solutions. Today, my focus is making quality measurable.",
    cv: "Download CV",
  },
  writing: {
    eyebrow: "06 / writing",
    all: "All articles",
  },
  contact: {
    eyebrow: "07 / contact",
    title: "Have a product that can't break?",
    lead: "A role, a project or a technical question: tell me through whichever channel you prefer.",
    emailLabel: "email · preferred",
    formTitle: "Or write here",
    name: "Name",
    namePlaceholder: "Your name",
    email: "Email",
    emailPlaceholder: "you@company.com",
    project: "Project",
    projectPlaceholder: "Tell me what you need",
    send: "Send message",
    sending: "Sending...",
    success: "Message sent! I'll get back to you soon.",
    errorRequired: "Please fill in all fields.",
    errorEmail: "Please enter a valid email.",
    errorLong: "Your message is too long.",
    errorCooldown: "Please wait a minute before sending another message.",
    errorSend: "Something went wrong. Please try again or reach me by email.",
    privacyNotice: "By sending, you agree that your data is used only to reply to your message. Read the",
    privacyLink: "Privacy Policy",
  },
  footer: {
    rights: "All rights reserved.",
    build: "build",
    passing: "passing",
    backToTop: "Back to top",
    privacy: "Privacy Policy",
  },
  quality: {
    metaTitle: "Quality of this site",
    metaDescription:
      "How this site is tested: end-to-end tests, accessibility, security, performance and privacy, all automated and open in the public repository.",
    title: "Quality of this site",
    intro:
      "This site is also an exercise in quality. Every change goes through automated checks before it goes live, and everything can be verified in the public repository.",
    factSpecs: "end-to-end test specs (Cypress)",
    factPipelines: "verification pipelines in CI",
    repo: "View the repository",
    pipelinesLink: "View the pipelines",
    sections: [
      {
        heading: "What is checked",
        paragraphs: ["On every change, CI runs these checks:"],
        list: [
          "Flows and content: navigation, languages (PT, EN and FR), contact form, blog, SEO, structured data and RSS feeds, with Cypress tests.",
          "Accessibility: axe-core (WCAG 2.2, levels A and AA) and Pa11y on the main pages, in the three languages, on desktop and mobile screens.",
          "Security: HTTP headers, cookies and attack surface; secret detection (Gitleaks); static analysis (CodeQL); dependency audit and review; licenses.",
          "Privacy (LGPD): tests on the data collected and the privacy notice.",
          "Performance: Lighthouse CI on mobile and desktop, with minimum scores and limits for LCP and CLS.",
          "Interface: unique and well-structured headings, complete metadata and minimum-size touch targets.",
        ],
      },
      {
        heading: "How the work is done",
        paragraphs: [
          "Each area of the site has a short spec in the specs folder, with acceptance criteria tied to the test that proves them. A change starts with the spec, is implemented until the criteria pass, and ends with the spec updated.",
          "Tests outrank code: when a test fails, the site is fixed, not the test. New tests are welcome; existing ones are not loosened to make a change pass.",
        ],
        list: [],
      },
      {
        heading: "Limits",
        paragraphs: [
          "Automated tests do not replace manual evaluation with screen readers or measurements with real visitors. The CI lab scores are targets to prevent regressions, not promises of performance on every device.",
        ],
        list: [],
      },
    ],
  },
  blog: {
    title: "Articles",
    metaTitle: "Articles | Fabio Dorneles",
    description: "Articles on web development, testing and software quality, written by Fabio Dorneles.",
    feed: { title: "Fabio D. Dorneles | Articles", description: "Articles on testing, software quality and software engineering, written by Fábio D. Dorneles.", link: "RSS" },
    back: "← All articles",
    untranslated: "This article is only available in Portuguese for now.",
    notFound: "Article not found | Fabio Dorneles",
    fallbackDescription: "Article from Fabio Dorneles' blog.",
    share: {
      title: "Enjoyed it? Share this article",
      label: "Share article",
      on: "Share on",
      copy: "Copy article link",
      copyShort: "Copy link",
      copied: "Link copied!",
      more: "More sharing options",
      moreShort: "More options",
    },
  },
  privacy: {
    "metaTitle": "Privacy Policy",
    "metaDescription": "Which personal data this site collects, what it is for and what your rights are (LGPD).",
    "title": "Privacy Policy",
    "updated": "Last updated: September 30, 2026",
    "intro": "This policy explains, plainly, which personal data this site collects, what it is for and what your rights are, under Brazil's General Data Protection Law (LGPD, Law No. 13,709/2018).",
    "sections": [
      {
        "heading": "Who is responsible",
        "paragraphs": [
          "The data controller is Fabio Dorneles, an individual, owner of this site. For any privacy matter, write to fabiodrneles@gmail.com."
        ],
        "list": []
      },
      {
        "heading": "What data we collect",
        "paragraphs": [
          "This site uses no advertising cookies, no audience analytics and no tracking, and it loads fonts and icons from the site itself. The only data processed is:"
        ],
        "list": [
          "Contact form: your name, email and the message you write. They are sent only when you click send.",
          "Language cookie (lang): stores the language you chose, for up to 1 year. It is functional and does not identify you.",
          "Browser session storage: a timestamp used to limit repeated messages. It disappears when you close the tab.",
          "Technical logs from the hosting provider (Vercel): IP address, browser and time of access, needed to deliver and protect the site."
        ]
      },
      {
        "heading": "What we use the data for",
        "paragraphs": [],
        "list": [
          "To reply to the message sent through the form.",
          "To keep the site running securely and in your language."
        ]
      },
      {
        "heading": "Legal basis",
        "paragraphs": [
          "We process form data based on your consent (LGPD, art. 7, I), given when you send the message, and to take preliminary steps related to a possible contract, at your request (art. 7, V). The language cookie and the technical logs are necessary for the operation and security of the site."
        ],
        "list": []
      },
      {
        "heading": "Who we share it with",
        "paragraphs": [
          "Form messages go through EmailJS, which delivers them to my mailbox. The site is hosted on Vercel. We do not sell your data or hand it to third parties for other purposes."
        ],
        "list": []
      },
      {
        "heading": "International transfer",
        "paragraphs": [
          "EmailJS and Vercel may process data on servers outside Brazil. This happens under the terms and safeguards those providers offer and that the LGPD allows (art. 33)."
        ],
        "list": []
      },
      {
        "heading": "How long we keep it",
        "paragraphs": [
          "Messages stay in my mailbox for as long as needed to reply and follow the conversation and, afterwards, while there is a legitimate interest or a legal obligation. You can ask for deletion at any time. The language cookie expires after 1 year."
        ],
        "list": []
      },
      {
        "heading": "Your rights",
        "paragraphs": [
          "Under the LGPD (art. 18), you can ask for:"
        ],
        "list": [
          "confirmation that we process your data, and access to it;",
          "correction of incomplete, inaccurate or outdated data;",
          "anonymization, blocking or deletion of unnecessary data or data processed in breach of the law;",
          "data portability;",
          "information about who the data is shared with;",
          "withdrawal of consent, at any time."
        ]
      },
      {
        "heading": "How to exercise your rights",
        "paragraphs": [
          "Write to fabiodrneles@gmail.com. You may also file a complaint with Brazil's National Data Protection Authority (ANPD), at gov.br/anpd."
        ],
        "list": []
      },
      {
        "heading": "Children and teenagers",
        "paragraphs": [
          "This site is not aimed at children or teenagers and does not intentionally collect their data."
        ],
        "list": []
      },
      {
        "heading": "Security",
        "paragraphs": [
          "The site uses HTTPS and security headers, and its dependencies are monitored for known vulnerabilities. No system is completely immune to flaws. If you find a vulnerability, see the instructions at /.well-known/security.txt."
        ],
        "list": []
      },
      {
        "heading": "Changes",
        "paragraphs": [
          "This policy may be updated. The date of the last update is at the top of this page."
        ],
        "list": []
      }
    ]
  },
};

export default en;
