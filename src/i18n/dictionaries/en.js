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
    eyebrow: "QA Engineer · Full Stack Developer",
    titleStart: "Software that reaches production",
    titleHighlight: "without surprises.",
    titleEnd: "",
    lead: "I build front-end and back-end, then prove it works: test automation, API validation and code coverage across the whole project lifecycle.",
    primary: "Get in touch",
    secondary: "See my work",
    stats: [
      { value: "8+ yrs", label: "shipping software" },
      { value: "Web · Mobile · API", label: "end-to-end coverage" },
    ],
  },
  runner: {
    title: "Inspection record",
    specs: ["writes clean front-end", "designs reliable APIs", "automates the test suite", "ships through CI/CD"],
    passed: "All specs passed",
    summary: "4 of 4 specs · 0 failures",
  },
  stack: { label: "Daily stack" },
  services: {
    eyebrow: "Services",
    title: "One engineer to build it and prove it works.",
    lead: "Quality guides every step of the work. You can bring me in for one area or for the full lifecycle.",
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
    eyebrow: "Work",
    title: "Tools I built and tested.",
    filterLabel: "Filter projects",
    all: "All",
    allRepos: "All repositories on GitHub",
    open: "Open on GitHub",
    openCase: "Read the case study",
    done: "done",
    projects: {
      "sdd-kit": {
        desc: "A Spec Driven Development kit for AI agents: it turns a request into a spec, tickets and one pull request per ticket with green CI, all the way to the release. Ready-made CI for six languages and GitHub Actions automation; 42 releases, built with its own process.",
        out: "spec → tickets → PRs → release",
      },
      "go-release-manager": {
        desc: "Computes the next SemVer version from Conventional Commits and creates the tag, from the terminal or as a GitHub Action. In production: it versions sdd-kit, with 97% test coverage and binaries for Linux, macOS and Windows.",
        out: "v1.2.0 → v1.3.0 · tag created",
      },
      "go-checker": {
        desc: "Checks websites and APIs from the terminal, in CI and as a 24/7 monitor: JSON assertions, a request trace (DNS, TLS, TTFB), certificate expiry, Prometheus metrics and alerts to Slack, Discord, Teams and Telegram. From prototype to v1.0.0, with 50 tested acceptance criteria and 96% coverage.",
        out: "7 checks · 3 up, 2 warn, 2 down",
      },
      "cv-craft": {
        desc: "Builds a resume in PDF, Markdown and text from a single YAML file, optimized for applicant tracking systems (ATS). Went from prototype to v1.0.0 with 71 tested acceptance criteria and 94% coverage; it is where sdd-kit was born.",
        out: "resume generated as PDF",
      },
      "spring-api": {
        desc: "REST API built with Spring Boot to sharpen API design and testing.",
        out: "BUILD SUCCESS",
      },
    },
  },
  journey: {
    eyebrow: "Journey",
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
    eyebrow: "Process",
    title: "How I work.",
    steps: [
      { title: "Understand", desc: "Map requirements and risks. Define what “working” means before a line of code." },
      { title: "Build", desc: "Front-end and back-end in small, reviewable increments." },
      { title: "Verify", desc: "Automated E2E, API and regression suites with coverage reports." },
      { title: "Ship", desc: "Tests wired into CI/CD so every release is gated by a green build." },
    ],
  },
  about: {
    eyebrow: "About",
    role: "QA Engineer & Full Stack · Brazil",
    bio: "As a Full Stack Developer, I have built experience as an integral part of collaborative teams, contributing to the development and delivery of robust and efficient solutions. Today, my focus is making quality measurable.",
    cv: "Download CV",
  },
  writing: {
    eyebrow: "Writing",
    all: "All articles",
  },
  contact: {
    eyebrow: "Contact",
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
  caseStudies: {
    "go-checker": {
      "metaTitle": "Go Checker: case study",
      "metaDescription": "How I took a Go health-check CLI for websites and APIs from prototype to v1.0.0: assertions, request trace, TLS certificates, CI, Prometheus and alerts.",
      "eyebrow": "Case study",
      "title": "Go Checker",
      "lead": "A Go tool that answers the question every team asks several times a day: is everything working? It checks that the answer is right and fast and that the certificate is valid. It also stops a broken deploy in CI and, as a monitor, alerts the team only when an outage is real.",
      "facts": [
        {
          "value": "50",
          "label": "acceptance criteria, all tested"
        },
        {
          "value": "96%",
          "label": "test coverage, on Linux, macOS and Windows"
        },
        {
          "value": "11",
          "label": "documented use cases with real output"
        }
      ],
      "factsNote": "Figures for v1.0.0, measured on 2026-10-15. Everything can be checked in the public repository.",
      "links": {
        "repo": "View the repository",
        "readme": "Read the documentation",
        "releases": "Download the releases"
      },
      "outputCaption": "The tool's real output: seven services checked, each failure with its reason, and a typo in the configuration reported with its line and the right suggestion.",
      "sections": [
        {
          "heading": "The problem",
          "paragraphs": [
            "Some failures slip past simple checks:",
            "Simple checkers only look at the status code. Full platforms need a database, a UI and upkeep.",
            "go-checker started as a 190-line prototype with serious problems. The printed latency was always 2562047h. The process exited 0 even when services were down, which made it useless in CI. It had no tests, no README and no CI, and a 9.5 MB binary was committed."
          ],
          "list": [
            "a /health endpoint that returns 200 with the database disconnected;",
            "a site that slows down, and nobody knows whether DNS, the network, TLS or the server is to blame;",
            "a certificate that expires on a Sunday;",
            "a lost packet that pages the on-call engineer at 3 a.m."
          ]
        },
        {
          "heading": "The solution",
          "paragraphs": [
            "A single binary, configured in YAML versioned next to the code, that works in the terminal, in the pipeline and as a continuous monitor:"
          ],
          "list": [
            "Content assertions: status, max latency, body text and regex, JSON values ($.data.items[0].id) and headers. Each failure says what was expected and what was found.",
            "Request trace: DNS, TCP connect, TLS handshake and first-byte times, and the days until the certificate expires.",
            "CI exit codes (0, 1 and 2), JSON, JUnit and Markdown reports, an automatic GitHub Actions job summary and a ready-made GitHub Action.",
            "Monitor mode with Prometheus metrics (p50, p95 and p99) and alerts to Slack, Discord, Teams, Telegram or any webhook, with flap protection.",
            "Checks generated from an OpenAPI spec, TCP port and DNS checks, and secrets read from the environment.",
            "Binaries for five platforms, a multi-arch Docker image, and go install."
          ]
        },
        {
          "heading": "From prototype to v1.0.0",
          "paragraphs": [
            "I started with an evidence-based analysis. I ran the tool, recorded each defect with the output that proved it, and agreed with the owner on what to change before touching the code. That produced 10 specifications with acceptance criteria, and each delivery became a pull request with green CI.",
            "Before the release, I benchmarked go-checker against Gatus, Uptime Kuma, Blackbox Exporter, Hurl, StepCI, Checkly and k6. It was already above average in diagnostics, CI integration and OpenAPI generation. It was below average in secrets handling, protocols, alert channels and distribution. I closed those gaps before v1.0.0: environment variables, authentication, TCP and DNS checks, Discord, Teams and Telegram alerts, and the Docker image."
          ],
          "list": []
        },
        {
          "heading": "Technical decisions",
          "paragraphs": [],
          "list": [
            "Timings come from net/http/httptrace, with a new connection per request, so DNS, TCP and TLS count as they would for a first-time visitor.",
            "Retries use exponential backoff with jitter, and only for transient errors (network and 5xx). A 404 is the server's final answer and is not retried.",
            "A per-check state machine filters flapping: a new state only counts after N rounds in a row, so one lost packet does not become an alert.",
            "The Prometheus exposition format and the JSON path are written in the project. The only dependencies are cobra and yaml.v3.",
            "The configuration is strict: an unknown key is an error with its line and the closest suggestion, computed by edit distance."
          ]
        },
        {
          "heading": "How quality is ensured",
          "paragraphs": [],
          "list": [
            "50 acceptance criteria, each cited by an automated test, and 96% coverage with the race detector on.",
            "Tests never reach the internet. Local servers and a dedicated certificate authority produce certificates with the exact lifetime each scenario needs.",
            "CI runs on Linux, macOS and Windows. The GitHub Action itself is tested against a local server on Linux and Windows.",
            "Every pull request that touches the release rehearses it, building binaries and the Docker image without publishing.",
            "The README commands run in CI, so the documentation never promises what the tool does not do."
          ]
        },
        {
          "heading": "Outcome",
          "paragraphs": [
            "v1.0.0 is out, with binaries for Linux, macOS and Windows, an image on the GitHub Container Registry and a GitHub Action. The documentation, in Portuguese and English, presents every feature as a use case, with a command to copy and the real output."
          ],
          "list": []
        },
        {
          "heading": "Limits",
          "paragraphs": [
            "There is no public status page and no ICMP or gRPC checks. For a status page, Gatus and Uptime Kuma are better fits. So far I am the only real user; feedback from other teams is still missing."
          ],
          "list": []
        }
      ],
      "cta": {
        "heading": "Need someone who delivers like this?",
        "text": "I work in QA and development: specification, automated tests, CI and delivery to production, with documentation for the people who will use it.",
        "button": "Get in touch"
      }
    },
    "cv-craft": {
      metaTitle: "CV Craft: case study",
      metaDescription:
        "How I took a Go CLI that builds ATS-friendly resumes in PDF, Markdown and text from one YAML file from prototype to v1.0.0: evidence-based discovery, specs and tests.",
      eyebrow: "Case study",
      title: "CV Craft",
      lead: "A Go command-line tool that builds a resume in PDF, Markdown and text from a single YAML file, optimized for applicant tracking systems (ATS). It went from prototype to v1.0.0, and it is the project where sdd-kit was born.",
      facts: [
        { value: "71", label: "acceptance criteria, all tested" },
        { value: "94%", label: "test coverage" },
        { value: "3", label: "formats from one YAML: PDF, Markdown and text" },
      ],
      factsNote: "Figures from v1.0.0, measured on 2026-10-14. Everything can be checked in the public repository.",
      links: { repo: "See the repository", readme: "Read the docs", releases: "Download the releases" },
      outputCaption: "The tool's real output: creating the template, building the three formats and validating a YAML with errors (the tool speaks Portuguese or English; here, Portuguese).",
      sections: [
        {
          heading: "The problem",
          paragraphs: [
            "Keeping a resume in several formats (the PDF for recruiters, plain text for application forms, Markdown for GitHub) is rework and ends in versions that drift apart. A PDF with columns, tables or images is read poorly by applicant tracking systems. And online builders ask you to sign up and send your data elsewhere.",
          ],
          list: [],
        },
        {
          heading: "The solution",
          paragraphs: ["A single Go binary: the content lives in a YAML file you can version, and the tool builds every format with the same content, without sending anything to the internet."],
          list: [
            "The init command creates a commented template; validate lists every problem at once, each with the field and the reason.",
            "An ATS-friendly PDF: a single column, selectable text, standard section titles and metadata (title, author, keywords).",
            "Correct accents in every format, and section titles in Portuguese or English.",
            "A JSON Schema gives autocomplete and validation in the editor; there is an interactive mode and rebuild on save (--watch).",
            "Documented exit codes for scripts; installers for Windows, macOS and Linux that verify the checksum.",
          ],
        },
        {
          heading: "From prototype to v1.0.0",
          paragraphs: [
            "The code had stalled as a prototype. The first step was evidence-based discovery: reading the code, running every command in the README and recording each finding with the file, the line or the output that showed it. There were 22 findings, 5 of them critical: garbled accents in the PDF, responsibilities and achievements lost in the Markdown and text outputs, an infinite loop in interactive mode, and an install command in the README that did not work.",
            "No line of code changed before the owner's decisions. Then every finding became an acceptance criterion in a spec, and every criterion a test.",
          ],
          list: [],
        },
        {
          heading: "How quality is enforced",
          paragraphs: [],
          list: [
            "10 specs and 71 acceptance criteria, all proven by automated tests.",
            "76 test and benchmark functions, plus 9 files with the expected output of each format, compared on every change.",
            "CI on Linux, macOS and Windows, on the minimum and the stable Go version, with lint, race detection, minimum coverage and a smoke test of the binary.",
            "The README commands run in CI, so the docs never promise what the tool does not do.",
            "Releases with binaries and checksums, published only after the full CI.",
          ],
        },
        {
          heading: "Outcome",
          paragraphs: [
            "v1.0.0 is published, with beginner-friendly documentation in Portuguese and English. The process used here (evidence-based discovery, owner decisions, one spec per area and one pull request per task) became sdd-kit, which now drives my other projects.",
          ],
          list: [],
        },
        {
          heading: "Limits",
          paragraphs: [
            "It is a command-line tool: there is no visual editor or web version. Real-world use so far is my own; feedback from other users is missing.",
          ],
          list: [],
        },
      ],
      cta: {
        heading: "Need someone who delivers like this?",
        text: "I work in QA and development: specs, automated tests, CI and delivery all the way to production, with documentation for the people who will use it.",
        button: "Get in touch",
      },
    },
    "sdd-kit": {
      metaTitle: "sdd-kit: case study",
      metaDescription:
        "How I built a kit that brings a professional team's delivery process to AI agents: specs, one pull request per ticket with green CI, GitHub Actions automation and releases.",
      eyebrow: "Case study",
      title: "sdd-kit",
      lead: "A Spec Driven Development kit for AI agents such as Claude Code: it turns a request into a spec, an epic, tickets and one pull request per ticket with green CI, all the way to the release. The owner decides; the agent executes.",
      facts: [
        { value: "42", label: "published releases (now at v1.24.0)" },
        { value: "22", label: "specs for the kit itself" },
        { value: "6", label: "languages with ready-made CI" },
      ],
      factsNote: "Figures from the public repository on 2026-10-14.",
      links: { repo: "See the repository", readme: "Read the docs", demo: "See the demo project" },
      outputCaption: "The real output of adopting the kit in an empty Go repository, then the first make ci (middle lines omitted; the scripts speak the owner's language, here Portuguese):",
      sections: [
        {
          heading: "The problem",
          paragraphs: [
            "AI agents write code fast, but without a process: they forget the project at every session, open huge pull requests, decide things that belonged to the owner and, when CI goes red, sometimes fix it by switching the test off.",
            "The community's SDD tools handle the specification well. What is left to the person is the delivery: turning the spec into reviewable tickets, keeping CI green and closing the version.",
          ],
          list: [],
        },
        {
          heading: "The solution",
          paragraphs: ["The kit brings a professional team's way of delivering to any repository:"],
          list: [
            "A skill that teaches the agent the whole process: evidence-based analysis, specs with acceptance criteria, an epic per phase, one ticket per branch and per pull request, review, CHANGELOG and tag.",
            "An adoption script, in sh and PowerShell, that copies the template without overwriting anything: CLAUDE.md, issue and PR templates, specs and ready-made CI for Go, Node/TypeScript, Java, Python, Rust and C#/.NET, with minimum test coverage.",
            "An event engine on GitHub Actions that does the mechanical steps without AI: it updates the checkpoint on every merge, summarizes red CI, brings main into the PRs, opens the closing PR and triggers the release.",
            "Resume checkpoints: a session can end at any moment, and the next one picks up where the last one stopped.",
            "axyn, a Go CLI that brings the same process to free or local models, moving on only when the quality gates pass.",
          ],
        },
        {
          heading: "How quality is enforced",
          paragraphs: ["The kit is developed with its own process, and every pull request goes through 12 checks:"],
          list: [
            "Markdown and shell lint, tests of the scripts, and workflow verification (actionlint).",
            "Adoption tested on Linux, macOS and Windows.",
            "Every language template adopted into a minimal project, with the generated make ci actually running.",
            "Traceability: every acceptance criterion is cited in a test; a rule fails CI if one is left out.",
            "Each release's version is computed from the commits, with Go Release Manager.",
          ],
        },
        {
          heading: "Technical decisions",
          paragraphs: [],
          list: [
            "Explicit stopping points: decisions, review, merge and tag belong to the owner, unless delegated.",
            "Tests are sovereign: red CI is fixed at the root cause, never by loosening or skipping a test.",
            "Scripts in POSIX sh and PowerShell, so they run the same on Linux, macOS and Windows.",
            "Adoption never overwrites the project's files, and a weekly sync keeps adopted repositories up to date.",
          ],
        },
        {
          heading: "Outcome",
          paragraphs: [
            "The kit grew out of cv-craft, which went from prototype to v1.x with this process: 10 specs and 71 acceptance criteria, all with an automated test. Today it drives Go Release Manager and sdd-kit-demo, a project built from scratch with an epic, tickets, pull requests and a release, as well as the kit itself. The same method, with specs and sovereign tests, guides this site.",
          ],
          list: [],
        },
        {
          heading: "Limits",
          paragraphs: [
            "The kit depends on GitHub and on an agent (Claude Code, or opencode through axyn). So far it is used on my own projects; validation by other teams is missing. The process does not replace the person: decisions and review still belong to the owner.",
          ],
          list: [],
        },
      ],
      cta: {
        heading: "Need someone who delivers like this?",
        text: "I work in QA and development: specs, automated tests, CI and delivery all the way to production, with documentation for the people who will use it.",
        button: "Get in touch",
      },
    },
    "go-release-manager": {
      metaTitle: "Go Release Manager: case study",
      metaDescription:
        "How I built and shipped to production a Go CLI that computes the next SemVer version from commits: specs, tests, CI on three operating systems and automated releases.",
      eyebrow: "Case study",
      title: "Go Release Manager",
      lead: "A Go command-line tool that decides a software's next version from its commit messages and creates the tag. It runs in production: it versions sdd-kit.",
      facts: [
        { value: "v1.2.0", label: "in production, versioning sdd-kit" },
        { value: "97%", label: "test coverage" },
        { value: "3", label: "operating systems in CI: Linux, macOS and Windows" },
      ],
      factsNote: "Figures from release v1.2.0, measured on 2026-10-14. Everything can be checked in the public repository.",
      links: { repo: "See the repository", readme: "Read the docs", releases: "Download the releases" },
      outputCaption: "The tool's real output in a repository with three new commits after v1.2.0:",
      sections: [
        {
          heading: "The problem",
          paragraphs: [
            "Deciding the next version is often done by hand: someone reads the commits, picks patch, minor or major and creates the tag. It is slow, relies on memory and goes wrong easily, above all with pre-releases and breaking changes.",
            "Tools such as semantic-release solve it, but bring Node.js, plugins and configuration to projects that use none of them.",
          ],
          list: [],
        },
        {
          heading: "The solution",
          paragraphs: [
            "A single binary with no dependencies that reads the commits since the latest stable version, applies Conventional Commits and computes the next SemVer tag. The tool does one thing: building, release notes and publishing stay with GoReleaser.",
          ],
          list: [
            "The next command prints only the version, for scripts; the JSON output gives the full result.",
            "The dry run (--dry-run) shows everything without writing anything or asking for credentials.",
            "Pre-releases per channel (beta, rc) with a continuous counter, a forced version when the plan calls for one, and tagging a specific commit.",
            "A ready-made GitHub Action that downloads the release binary and verifies its checksum before running.",
          ],
        },
        {
          heading: "How quality is enforced",
          paragraphs: ["The project follows the same process I use at work:"],
          list: [
            "Spec-driven development: every versioning rule has acceptance criteria, and every criterion points to the test that proves it.",
            "Unit and end-to-end tests, with 97% code coverage; CI requires at least 80%.",
            "CI on every pull request: lint, tests with race detection, build, the README commands, and the Action running on Linux, macOS and Windows.",
            "Automated releases: the tool computes its own version, and GoReleaser publishes binaries for five platforms with SHA-256 checksums.",
            "One branch and one pull request per task, with Conventional Commits and a CHANGELOG.",
          ],
        },
        {
          heading: "Technical decisions",
          paragraphs: [],
          list: [
            "The base is always the highest reachable stable tag, so a pre-release never becomes the base by mistake.",
            "On 0.x versions, a breaking change bumps the minor, as SemVer says.",
            "Diagnostics go to stderr and the result to stdout: scripts read the output without filtering anything.",
            "The tool speaks English, and the documentation is a complete guide in Portuguese and English.",
          ],
        },
        {
          heading: "Outcome",
          paragraphs: [
            "The tool computes the versions of sdd-kit, my spec-driven development kit, at every phase closing. In the production review, new tests raised coverage of the whole codebase from 7.9% to 97.1%, and a defect in the published binary's --version was found and fixed before release to the public.",
          ],
          list: [],
        },
        {
          heading: "Limits",
          paragraphs: [
            "Real-world use is still sdd-kit and my own projects; validation by other teams is missing. There is no published Docker image. The tool computes versions and creates tags; on purpose, it neither writes the changelog nor publishes the release by itself.",
          ],
          list: [],
        },
      ],
      cta: {
        heading: "Need someone who delivers like this?",
        text: "I work in QA and development: specs, automated tests, CI and delivery all the way to production, with documentation for the people who will use it.",
        button: "Get in touch",
      },
    },
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
