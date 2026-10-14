// Textes du site en français. Même structure que pt.js.
const fr = {
  meta: {
    title: "Fabio Dorneles | Ingénieur QA et Développeur Full Stack",
    description:
      "Fabio Dorneles, Ingénieur QA et Développeur Full Stack. Automatisation des tests, API et applications web et mobiles, avec la qualité du début à la fin.",
    ogSubtitle: "Ingénieur QA et Développeur Full Stack : projets, portfolio et articles techniques",
    jobTitle: "Ingénieur QA et Développeur Full Stack",
  },
  nav: {
    home: "Accueil",
    services: "Services",
    work: "Projets",
    journey: "Parcours",
    about: "À propos",
    blog: "Blog",
    quality: "Qualité",
    cta: "Discutons",
    available: "ouvert aux opportunités",
    language: "Langue",
    openMenu: "Ouvrir le menu",
    closeMenu: "Fermer le menu",
    main: "Navigation principale",
    skip: "Aller au contenu",
  },
  hero: {
    eyebrow: "Ingénieur QA · Développeur Full Stack",
    titleStart: "Un logiciel qui arrive en production",
    titleHighlight: "sans surprises.",
    titleEnd: "",
    lead: "Je développe le front-end et le back-end, puis je prouve que tout fonctionne : automatisation des tests, validation des API et couverture de code sur tout le cycle de vie du projet.",
    primary: "Me contacter",
    secondary: "Voir mes projets",
    stats: [
      { value: "8+ ans", label: "à livrer du logiciel" },
      { value: "Web · Mobile · API", label: "couverture de bout en bout" },
    ],
  },
  runner: {
    title: "Fiche d'inspection",
    specs: ["écrit un front-end propre", "conçoit des API fiables", "automatise la suite de tests", "livre via CI/CD"],
    passed: "Tous les tests sont passés",
    summary: "4 specs sur 4 · 0 échec",
  },
  stack: { label: "Stack au quotidien" },
  services: {
    eyebrow: "Services",
    title: "Un ingénieur pour construire et prouver que ça marche.",
    lead: "La qualité guide chaque étape du travail. Vous pouvez me confier un domaine ou le cycle complet.",
    core: "Spécialité principale",
    items: [
      {
        code: "QA",
        title: "Ingénierie QA",
        desc: "Des tests robustes et efficaces pour mettre le logiciel en production en toute confiance, sur toutes les plateformes.",
        points: [
          "Automatisation des tests (Cypress, Selenium)",
          "Tests et validation d'API",
          "Tests multi-navigateurs et mobiles",
          "Intégration aux pipelines CI/CD",
        ],
      },
      {
        code: "</>",
        title: "Back-End",
        desc: "Des systèmes côté serveur sûrs et flexibles, avec une gestion des données soignée.",
        points: ["API RESTful (Java, Kotlin, Go)", "Spring Framework", "Modélisation de bases de données", "Infrastructure évolutive"],
      },
      {
        code: "UI",
        title: "Front-End",
        desc: "Des interfaces traduites du design en code rapide et accessible.",
        points: ["React, Angular, TypeScript", "Intégration d'API", "Responsive sur tous les appareils", "React Native et Android"],
      },
    ],
  },
  work: {
    eyebrow: "Projets",
    title: "Des outils que j'ai construits et testés.",
    filterLabel: "Filtrer les projets",
    all: "Tous",
    allRepos: "Tous les dépôts sur GitHub",
    open: "Ouvrir sur GitHub",
    openCase: "Lire l'étude de cas",
    done: "terminé",
    projects: {
      "sdd-kit": {
        desc: "Un kit de Spec Driven Development pour les agents d'IA : il transforme une demande en spécification, tickets et une pull request par ticket avec une CI verte, jusqu'à la release. CI prête pour six langages et automatisation GitHub Actions ; 42 releases, développé avec son propre processus.",
        out: "spec → tickets → PRs → release",
      },
      "go-release-manager": {
        desc: "Calcule la prochaine version SemVer à partir des Conventional Commits et crée le tag, en ligne de commande ou comme GitHub Action. En production : il versionne sdd-kit, avec 97 % de couverture de tests et des binaires pour Linux, macOS et Windows.",
        out: "v1.2.0 → v1.3.0 · tag créé",
      },
      "go-checker": {
        desc: "Un outil en ligne de commande simple et puissant pour vérifier rapidement des sites et des API.",
        out: "sites et API vérifiés",
      },
      "cv-craft": {
        desc: "Génère le CV en PDF, Markdown et texte à partir d'un seul YAML, optimisé pour les logiciels de tri des candidatures (ATS). Passé du prototype à la v1.0.0 avec 71 critères d'acceptation testés et 94 % de couverture ; c'est là qu'est né sdd-kit.",
        out: "CV généré en PDF",
      },
      "spring-api": {
        desc: "API REST en Spring Boot pour perfectionner la conception et les tests d'API.",
        out: "BUILD SUCCESS",
      },
    },
  },
  journey: {
    eyebrow: "Parcours",
    title: "D'où vient cette expérience.",
    experience: "Expérience",
    education: "Formation",
    range: "{from} à {to}",
    since: "depuis {from}",
    experienceItems: {
      pismo: "Ingénieur logiciel · Golang",
      stone: "Stagiaire développeur · Kotlin · Back-end",
      soujunior: "Apprenti · Scrum Master (projet bénévole)",
      capgemini: "Développeur Java · Angular · SQL Server (projet Swiss Re)",
      "ibm-dev": "Développeur Java · Angular · Cobol · React | Full Stack",
      "ibm-intern": "Stagiaire développeur · Java · Angular · Cobol · Mainframe",
      freelancer: "Développeur Java · Angular · React · WordPress | Full Stack",
    },
    educationItems: {
      bachelor: "Licence en génie logiciel",
      "postgrad-fullstack": "Diplôme de troisième cycle en développement Full Stack",
      "postgrad-law": "Diplôme de troisième cycle en droit du numérique",
      mba: "MBA en conformité et gouvernance",
      associate: "Diplôme technologique en analyse et développement de systèmes",
      dio: "Bootcamps Digital Innovation One (DIO)",
    },
    places: { freelancer: "Freelance", brazil: "Brésil" },
  },
  process: {
    eyebrow: "Méthode",
    title: "Ma façon de travailler.",
    steps: [
      { title: "Comprendre", desc: "Cartographier les besoins et les risques. Définir ce que « fonctionner » veut dire avant la première ligne de code." },
      { title: "Construire", desc: "Front-end et back-end en petites livraisons faciles à relire." },
      { title: "Vérifier", desc: "Suites automatisées E2E, API et de régression, avec rapports de couverture." },
      { title: "Livrer", desc: "Des tests intégrés au CI/CD : chaque release passe par un build vert." },
    ],
  },
  about: {
    eyebrow: "À propos",
    role: "Ingénieur QA et Full Stack · Brésil",
    bio: "En tant que Développeur Full Stack, j'ai acquis de l'expérience au sein d'équipes collaboratives, en contribuant au développement et à la livraison de solutions robustes et efficaces. Aujourd'hui, mon objectif est de rendre la qualité mesurable.",
    cv: "Télécharger le CV",
  },
  writing: {
    eyebrow: "Articles",
    all: "Tous les articles",
  },
  contact: {
    eyebrow: "Contact",
    title: "Un produit qui ne doit pas tomber en panne ?",
    lead: "Un poste, un projet ou une question technique : écrivez-moi par le canal de votre choix.",
    emailLabel: "e-mail · de préférence",
    formTitle: "Ou écrivez ici",
    name: "Nom",
    namePlaceholder: "Votre nom",
    email: "E-mail",
    emailPlaceholder: "vous@entreprise.com",
    project: "Projet",
    projectPlaceholder: "Dites-moi ce dont vous avez besoin",
    send: "Envoyer le message",
    sending: "Envoi...",
    success: "Message envoyé ! Je vous réponds bientôt.",
    errorRequired: "Veuillez remplir tous les champs.",
    errorEmail: "Veuillez saisir un e-mail valide.",
    errorLong: "Votre message est trop long.",
    errorCooldown: "Veuillez patienter une minute avant d'envoyer un autre message.",
    errorSend: "Une erreur s'est produite. Réessayez ou écrivez-moi par e-mail.",
    privacyNotice: "En envoyant ce message, vous acceptez que vos données servent uniquement à vous répondre. Lisez la",
    privacyLink: "Politique de confidentialité",
  },
  footer: {
    rights: "Tous droits réservés.",
    build: "build",
    passing: "réussi",
    backToTop: "Retour en haut",
    privacy: "Politique de confidentialité",
  },
  caseStudies: {
    "cv-craft": {
      metaTitle: "CV Craft : étude de cas",
      metaDescription:
        "Comment j'ai mené du prototype à la v1.0.0 une CLI en Go qui génère des CV optimisés pour les ATS en PDF, Markdown et texte à partir d'un YAML : découverte fondée sur des preuves, spécifications et tests.",
      eyebrow: "Étude de cas",
      title: "CV Craft",
      lead: "Un outil en ligne de commande en Go qui génère le CV en PDF, Markdown et texte à partir d'un seul fichier YAML, optimisé pour les logiciels de tri des candidatures (ATS). Il est passé du prototype à la v1.0.0, et c'est le projet où est né sdd-kit.",
      facts: [
        { value: "71", label: "critères d'acceptation, tous testés" },
        { value: "94 %", label: "de couverture de tests" },
        { value: "3", label: "formats à partir d'un YAML : PDF, Markdown et texte" },
      ],
      factsNote: "Chiffres de la v1.0.0, mesurés le 14/10/2026. Tout peut être vérifié dans le dépôt public.",
      links: { repo: "Voir le dépôt", readme: "Lire la documentation", releases: "Télécharger les releases" },
      outputCaption: "La sortie réelle de l'outil : créer le modèle, générer les trois formats et valider un YAML avec des erreurs (l'outil parle portugais ou anglais ; ici, portugais).",
      sections: [
        {
          heading: "Le problème",
          paragraphs: [
            "Tenir son CV dans plusieurs formats (le PDF pour les recruteurs, le texte pour les formulaires de candidature, le Markdown pour GitHub) demande du travail en double et finit en versions différentes. Un PDF avec des colonnes, des tableaux ou des images est mal lu par les logiciels de tri. Et les générateurs en ligne demandent une inscription et envoient vos données ailleurs.",
          ],
          list: [],
        },
        {
          heading: "La solution",
          paragraphs: ["Un binaire unique en Go : le contenu vit dans un YAML versionnable, et l'outil génère tous les formats avec le même contenu, sans rien envoyer sur Internet."],
          list: [
            "La commande init crée un modèle commenté ; validate liste tous les problèmes d'un coup, chacun avec le champ et la raison.",
            "Un PDF pensé pour les ATS : une seule colonne, du texte sélectionnable, des titres de section standard et des métadonnées (titre, auteur, mots-clés).",
            "Des accents corrects dans tous les formats et des titres de section en portugais ou en anglais.",
            "Un JSON Schema apporte l'autocomplétion et la validation dans l'éditeur ; il y a un mode interactif et une génération à chaque sauvegarde (--watch).",
            "Des codes de sortie documentés pour les scripts ; des installeurs pour Windows, macOS et Linux qui vérifient la somme de contrôle.",
          ],
        },
        {
          heading: "Du prototype à la v1.0.0",
          paragraphs: [
            "Le code était resté à l'état de prototype. La première étape a été une découverte fondée sur des preuves : lire le code, exécuter chaque commande du README et noter chaque constat avec le fichier, la ligne ou la sortie qui le montrait. Il y a eu 22 constats, dont 5 critiques : des accents corrompus dans le PDF, des responsabilités et des réalisations perdues dans le Markdown et le texte, une boucle infinie dans le mode interactif et une commande d'installation du README qui ne fonctionnait pas.",
            "Aucune ligne de code n'a changé avant les décisions du propriétaire. Ensuite, chaque constat est devenu un critère d'acceptation dans une spécification, et chaque critère un test.",
          ],
          list: [],
        },
        {
          heading: "Comment la qualité est garantie",
          paragraphs: [],
          list: [
            "10 spécifications et 71 critères d'acceptation, tous prouvés par des tests automatisés.",
            "76 fonctions de test et de benchmark, plus 9 fichiers avec la sortie attendue de chaque format, comparés à chaque changement.",
            "CI sous Linux, macOS et Windows, sur la version minimale et la version stable de Go, avec lint, détection des accès concurrents, couverture minimale et un test de fumée du binaire.",
            "Les commandes des README s'exécutent dans la CI, pour que la documentation ne promette jamais ce que l'outil ne fait pas.",
            "Des releases avec binaires et sommes de contrôle, publiées seulement après la CI complète.",
          ],
        },
        {
          heading: "Résultat",
          paragraphs: [
            "La v1.0.0 est publiée, avec une documentation pour débutants en portugais et en anglais. Le processus utilisé ici (découverte fondée sur des preuves, décisions du propriétaire, une spécification par domaine et une pull request par tâche) est devenu sdd-kit, qui pilote aujourd'hui mes autres projets.",
          ],
          list: [],
        },
        {
          heading: "Limites",
          paragraphs: [
            "C'est un outil en ligne de commande : il n'y a ni éditeur visuel ni version web. L'usage réel, pour l'instant, est le mien ; il manque les retours d'autres utilisateurs.",
          ],
          list: [],
        },
      ],
      cta: {
        heading: "Besoin de quelqu'un qui livre ainsi ?",
        text: "Je travaille en QA et en développement : spécifications, tests automatisés, CI et livraison jusqu'à la production, avec la documentation pour ceux qui l'utiliseront.",
        button: "Me contacter",
      },
    },
    "sdd-kit": {
      metaTitle: "sdd-kit : étude de cas",
      metaDescription:
        "Comment j'ai construit un kit qui apporte aux agents d'IA le processus de livraison d'une équipe professionnelle : spécifications, une pull request par ticket avec une CI verte, automatisation GitHub Actions et releases.",
      eyebrow: "Étude de cas",
      title: "sdd-kit",
      lead: "Un kit de Spec Driven Development pour les agents d'IA comme Claude Code : il transforme une demande en spécification, épopée, tickets et une pull request par ticket avec une CI verte, jusqu'à la release. Le propriétaire décide ; l'agent exécute.",
      facts: [
        { value: "42", label: "releases publiées (aujourd'hui en v1.24.0)" },
        { value: "22", label: "spécifications du kit lui-même" },
        { value: "6", label: "langages avec une CI prête à l'emploi" },
      ],
      factsNote: "Chiffres du dépôt public au 14/10/2026.",
      links: { repo: "Voir le dépôt", readme: "Lire la documentation", demo: "Voir le projet de démonstration" },
      outputCaption: "La sortie réelle de l'adoption dans un dépôt Go vide, puis le premier make ci (lignes du milieu omises ; les scripts parlent la langue du propriétaire, ici le portugais) :",
      sections: [
        {
          heading: "Le problème",
          paragraphs: [
            "Les agents d'IA écrivent du code vite, mais sans processus : ils oublient le projet à chaque session, ouvrent des pull requests énormes, décident à la place du propriétaire et, quand la CI passe au rouge, la réparent parfois en désactivant le test.",
            "Les outils SDD de la communauté gèrent bien la spécification. Ce qui reste à la personne, c'est la livraison : transformer la spécification en tickets relisibles, garder la CI verte et clôturer la version.",
          ],
          list: [],
        },
        {
          heading: "La solution",
          paragraphs: ["Le kit apporte à n'importe quel dépôt la façon de livrer d'une équipe professionnelle :"],
          list: [
            "Une skill qui enseigne à l'agent tout le processus : analyse fondée sur des preuves, spécifications avec critères d'acceptation, une épopée par phase, un ticket par branche et par pull request, revue, CHANGELOG et tag.",
            "Un script d'adoption, en sh et en PowerShell, qui copie le modèle sans rien écraser : CLAUDE.md, modèles d'issue et de PR, spécifications et une CI prête pour Go, Node/TypeScript, Java, Python, Rust et C#/.NET, avec une couverture de tests minimale.",
            "Un moteur d'événements sur GitHub Actions qui fait les étapes mécaniques sans IA : il met à jour le point de reprise à chaque merge, résume la CI rouge, intègre la main dans les PR, ouvre la PR de clôture et déclenche la release.",
            "Des points de reprise : une session peut s'arrêter à tout moment, et la suivante reprend là où la précédente s'est arrêtée.",
            "axyn, une CLI en Go qui applique le même processus à des modèles gratuits ou locaux, en n'avançant que si les contrôles de qualité passent.",
          ],
        },
        {
          heading: "Comment la qualité est garantie",
          paragraphs: ["Le kit est développé avec son propre processus, et chaque pull request passe par 12 vérifications :"],
          list: [
            "Lint du Markdown et du shell, tests des scripts et vérification des workflows (actionlint).",
            "L'adoption testée sous Linux, macOS et Windows.",
            "Chaque modèle de langage adopté dans un projet minimal, avec le make ci généré réellement exécuté.",
            "Traçabilité : chaque critère d'acceptation est cité dans un test ; une règle fait échouer la CI s'il en manque un.",
            "La version de chaque release est calculée à partir des commits, avec Go Release Manager.",
          ],
        },
        {
          heading: "Choix techniques",
          paragraphs: [],
          list: [
            "Des points d'arrêt explicites : décisions, revue, merge et tag appartiennent au propriétaire, sauf délégation.",
            "Les tests sont souverains : une CI rouge se corrige à la cause racine, jamais en assouplissant ou en sautant un test.",
            "Des scripts en sh POSIX et en PowerShell, pour tourner de la même façon sous Linux, macOS et Windows.",
            "L'adoption n'écrase jamais les fichiers du projet, et une synchronisation hebdomadaire tient les dépôts adoptés à jour.",
          ],
        },
        {
          heading: "Résultat",
          paragraphs: [
            "Le kit est né de cv-craft, passé du prototype à la v1.x avec ce processus : 10 spécifications et 71 critères d'acceptation, tous couverts par un test automatisé. Aujourd'hui, il pilote Go Release Manager et sdd-kit-demo, un projet créé de zéro avec épopée, tickets, pull requests et release, ainsi que le kit lui-même. La même méthode, avec des spécifications et des tests souverains, guide ce site.",
          ],
          list: [],
        },
        {
          heading: "Limites",
          paragraphs: [
            "Le kit dépend de GitHub et d'un agent (Claude Code, ou opencode via axyn). Pour l'instant, il est utilisé sur mes projets ; il manque la validation par d'autres équipes. Le processus ne remplace pas la personne : les décisions et la revue restent au propriétaire.",
          ],
          list: [],
        },
      ],
      cta: {
        heading: "Besoin de quelqu'un qui livre ainsi ?",
        text: "Je travaille en QA et en développement : spécifications, tests automatisés, CI et livraison jusqu'à la production, avec la documentation pour ceux qui l'utiliseront.",
        button: "Me contacter",
      },
    },
    "go-release-manager": {
      metaTitle: "Go Release Manager : étude de cas",
      metaDescription:
        "Comment j'ai construit et mis en production une CLI en Go qui calcule la prochaine version SemVer à partir des commits : spécifications, tests, CI sur trois systèmes et releases automatisées.",
      eyebrow: "Étude de cas",
      title: "Go Release Manager",
      lead: "Un outil en ligne de commande en Go qui décide la prochaine version d'un logiciel à partir des messages de commit et crée le tag. Il est en production : c'est lui qui versionne sdd-kit.",
      facts: [
        { value: "v1.2.0", label: "en production, il versionne sdd-kit" },
        { value: "97 %", label: "de couverture de tests" },
        { value: "3", label: "systèmes dans la CI : Linux, macOS et Windows" },
      ],
      factsNote: "Chiffres de la release v1.2.0, mesurés le 14/10/2026. Tout peut être vérifié dans le dépôt public.",
      links: { repo: "Voir le dépôt", readme: "Lire la documentation", releases: "Télécharger les releases" },
      outputCaption: "La sortie réelle de l'outil dans un dépôt avec trois nouveaux commits après la v1.2.0 :",
      sections: [
        {
          heading: "Le problème",
          paragraphs: [
            "Décider la prochaine version se fait souvent à la main : quelqu'un lit les commits, choisit entre patch, minor et major et crée le tag. C'est lent, cela dépend de la mémoire et l'erreur est facile, surtout avec les pré-releases et les changements incompatibles.",
            "Des outils comme semantic-release résolvent le problème, mais apportent Node.js, des plugins et de la configuration à des projets qui n'en utilisent pas.",
          ],
          list: [],
        },
        {
          heading: "La solution",
          paragraphs: [
            "Un binaire unique, sans dépendances, qui lit les commits depuis la dernière version stable, applique les Conventional Commits et calcule le prochain tag SemVer. L'outil fait une seule chose : le build, les notes et la publication de la release restent du ressort de GoReleaser.",
          ],
          list: [
            "La commande next n'affiche que la version, pour les scripts ; la sortie JSON donne le résultat complet.",
            "La simulation (--dry-run) montre tout sans rien écrire ni demander d'identifiants.",
            "Des pré-releases par canal (beta, rc) avec un compteur continu, une version imposée quand le plan l'exige et un tag sur un commit précis.",
            "Une GitHub Action prête à l'emploi, qui télécharge le binaire de la release et vérifie sa somme de contrôle avant de s'exécuter.",
          ],
        },
        {
          heading: "Comment la qualité est garantie",
          paragraphs: ["Le projet suit le même processus que j'utilise au travail :"],
          list: [
            "Développement guidé par les spécifications : chaque règle de version a des critères d'acceptation, et chaque critère renvoie au test qui le prouve.",
            "Tests unitaires et de bout en bout, avec 97 % de couverture du code ; la CI exige au moins 80 %.",
            "CI sur chaque pull request : lint, tests avec détection des accès concurrents, build, commandes du README et l'Action exécutée sous Linux, macOS et Windows.",
            "Releases automatisées : l'outil calcule sa propre version, et GoReleaser publie des binaires pour cinq plateformes avec des sommes SHA-256.",
            "Une branche et une pull request par tâche, avec Conventional Commits et un CHANGELOG.",
          ],
        },
        {
          heading: "Choix techniques",
          paragraphs: [],
          list: [
            "La base est toujours le plus haut tag stable atteignable : une pré-release ne devient jamais la base par erreur.",
            "En version 0.x, un changement incompatible augmente la minor, comme le prévoit SemVer.",
            "Les diagnostics vont sur stderr et le résultat sur stdout : les scripts lisent la sortie sans rien filtrer.",
            "L'outil parle anglais, et la documentation est un guide complet en portugais et en anglais.",
          ],
        },
        {
          heading: "Résultat",
          paragraphs: [
            "L'outil calcule les versions de sdd-kit, mon kit de développement guidé par les spécifications, à chaque clôture de phase. Lors de la revue avant la mise en production, de nouveaux tests ont fait passer la couverture de tout le code de 7,9 % à 97,1 %, et un défaut du --version du binaire publié a été trouvé et corrigé avant la diffusion.",
          ],
          list: [],
        },
        {
          heading: "Limites",
          paragraphs: [
            "L'usage réel se limite encore à sdd-kit et à mes projets ; il manque la validation par d'autres équipes. Aucune image Docker n'est publiée. L'outil calcule les versions et crée les tags ; volontairement, il ne rédige pas le changelog et ne publie pas la release lui-même.",
          ],
          list: [],
        },
      ],
      cta: {
        heading: "Besoin de quelqu'un qui livre ainsi ?",
        text: "Je travaille en QA et en développement : spécifications, tests automatisés, CI et livraison jusqu'à la production, avec la documentation pour ceux qui l'utiliseront.",
        button: "Me contacter",
      },
    },
  },
  quality: {
    metaTitle: "Qualité de ce site",
    metaDescription:
      "Comment ce site est testé : tests de bout en bout, accessibilité, sécurité, performance et confidentialité, le tout automatisé et ouvert dans le dépôt public.",
    title: "Qualité de ce site",
    intro:
      "Ce site est aussi un exercice de qualité. Chaque modification passe par des vérifications automatiques avant d'être mise en ligne, et tout peut être consulté dans le dépôt public.",
    factSpecs: "spécifications de test de bout en bout (Cypress)",
    factPipelines: "pipelines de vérification en CI",
    repo: "Voir le dépôt",
    pipelinesLink: "Voir les pipelines",
    sections: [
      {
        heading: "Ce qui est vérifié",
        paragraphs: ["À chaque modification, la CI exécute ces vérifications :"],
        list: [
          "Parcours et contenu : navigation, langues (PT, EN et FR), formulaire de contact, blog, SEO, données structurées et flux RSS, avec des tests Cypress.",
          "Accessibilité : axe-core (WCAG 2.2, niveaux A et AA) et Pa11y sur les pages principales, dans les trois langues, sur écrans d'ordinateur et de mobile.",
          "Sécurité : en-têtes HTTP, cookies et surface d'attaque ; détection de secrets (Gitleaks) ; analyse statique (CodeQL) ; audit et revue des dépendances ; licences.",
          "Confidentialité (LGPD) : tests sur les données collectées et l'avis de confidentialité.",
          "Performance : Lighthouse CI sur mobile et ordinateur, avec des scores minimaux et des limites pour LCP et CLS.",
          "Interface : titres uniques et bien hiérarchisés, métadonnées complètes et cibles tactiles de taille minimale.",
        ],
      },
      {
        heading: "Comment le travail est fait",
        paragraphs: [
          "Chaque domaine du site a une courte spécification dans le dossier specs, avec des critères d'acceptation liés au test qui les prouve. Une modification commence par la spécification, est mise en œuvre jusqu'à ce que les critères passent, et se termine par la spécification mise à jour.",
          "Les tests passent avant le code : quand un test échoue, on corrige le site, pas le test. Les nouveaux tests sont bienvenus ; les existants ne sont pas assouplis pour faire passer une modification.",
        ],
        list: [],
      },
      {
        heading: "Limites",
        paragraphs: [
          "Les tests automatiques ne remplacent pas l'évaluation manuelle avec des lecteurs d'écran ni les mesures auprès de vrais visiteurs. Les scores de laboratoire de la CI sont des objectifs pour éviter les régressions, pas des promesses de performance sur tous les appareils.",
        ],
        list: [],
      },
    ],
  },
  blog: {
    title: "Articles",
    metaTitle: "Articles | Fabio Dorneles",
    description: "Articles sur le développement web, les tests et la qualité logicielle, écrits par Fabio Dorneles.",
    feed: { title: "Fabio D. Dorneles | Articles", description: "Articles sur les tests, la qualité logicielle et le génie logiciel, écrits par Fábio D. Dorneles.", link: "RSS" },
    back: "← Tous les articles",
    untranslated: "Cet article n'est disponible qu'en portugais pour le moment.",
    notFound: "Article introuvable | Fabio Dorneles",
    fallbackDescription: "Article du blog de Fabio Dorneles.",
    share: {
      title: "Vous avez aimé ? Partagez cet article",
      label: "Partager l'article",
      on: "Partager sur",
      copy: "Copier le lien de l'article",
      copyShort: "Copier le lien",
      copied: "Lien copié !",
      more: "Plus d'options de partage",
      moreShort: "Plus d'options",
    },
  },
  privacy: {
    "metaTitle": "Politique de confidentialité",
    "metaDescription": "Quelles données personnelles ce site collecte, à quoi elles servent et quels sont vos droits (LGPD).",
    "title": "Politique de confidentialité",
    "updated": "Dernière mise à jour : 30 septembre 2026",
    "intro": "Cette politique explique simplement quelles données personnelles ce site collecte, à quoi elles servent et quels sont vos droits, selon la loi brésilienne de protection des données (LGPD, loi nº 13.709/2018).",
    "sections": [
      {
        "heading": "Qui est le responsable",
        "paragraphs": [
          "Le responsable du traitement est Fabio Dorneles, personne physique, propriétaire de ce site. Pour toute question de confidentialité, écrivez à fabiodrneles@gmail.com."
        ],
        "list": []
      },
      {
        "heading": "Quelles données nous collectons",
        "paragraphs": [
          "Ce site n'utilise ni cookies publicitaires, ni outil d'analyse d'audience, ni suivi, et charge polices et icônes depuis le site lui-même. Les seules données traitées sont :"
        ],
        "list": [
          "Formulaire de contact : votre nom, votre e-mail et le message que vous écrivez. Ils ne sont envoyés que lorsque vous cliquez sur envoyer.",
          "Cookie de langue (lang) : mémorise la langue choisie, jusqu'à 1 an. Il est fonctionnel et ne vous identifie pas.",
          "Stockage de session du navigateur : un horaire servant à limiter les messages répétés. Il disparaît à la fermeture de l'onglet.",
          "Journaux techniques de l'hébergeur (Vercel) : adresse IP, navigateur et heure d'accès, nécessaires pour fournir et protéger le site."
        ]
      },
      {
        "heading": "À quoi servent les données",
        "paragraphs": [],
        "list": [
          "Répondre au message envoyé par le formulaire.",
          "Maintenir le site sûr et dans votre langue."
        ]
      },
      {
        "heading": "Base légale",
        "paragraphs": [
          "Nous traitons les données du formulaire sur la base de votre consentement (LGPD, art. 7, I), donné en envoyant le message, et pour effectuer des démarches préalables à un éventuel contrat, à votre demande (art. 7, V). Le cookie de langue et les journaux techniques sont nécessaires au fonctionnement et à la sécurité du site."
        ],
        "list": []
      },
      {
        "heading": "Avec qui nous partageons",
        "paragraphs": [
          "Les messages du formulaire passent par EmailJS, qui les remet à ma boîte e-mail. Le site est hébergé sur Vercel. Nous ne vendons pas vos données et ne les cédons pas à des tiers pour d'autres finalités."
        ],
        "list": []
      },
      {
        "heading": "Transfert international",
        "paragraphs": [
          "EmailJS et Vercel peuvent traiter des données sur des serveurs situés hors du Brésil. Cela se fait selon les conditions et garanties que ces prestataires offrent et que la LGPD admet (art. 33)."
        ],
        "list": []
      },
      {
        "heading": "Durée de conservation",
        "paragraphs": [
          "Les messages restent dans ma boîte e-mail le temps nécessaire pour répondre et suivre la conversation puis, ensuite, tant qu'il existe un intérêt légitime ou une obligation légale. Vous pouvez demander la suppression à tout moment. Le cookie de langue expire après 1 an."
        ],
        "list": []
      },
      {
        "heading": "Vos droits",
        "paragraphs": [
          "Selon la LGPD (art. 18), vous pouvez demander :"
        ],
        "list": [
          "la confirmation du traitement de vos données et l'accès à celles-ci ;",
          "la correction de données incomplètes, inexactes ou périmées ;",
          "l'anonymisation, le blocage ou la suppression de données inutiles ou traitées en violation de la loi ;",
          "la portabilité des données ;",
          "des informations sur les destinataires des données ;",
          "le retrait du consentement, à tout moment."
        ]
      },
      {
        "heading": "Comment exercer vos droits",
        "paragraphs": [
          "Écrivez à fabiodrneles@gmail.com. Vous pouvez aussi déposer une réclamation auprès de l'Autorité nationale brésilienne de protection des données (ANPD), sur gov.br/anpd."
        ],
        "list": []
      },
      {
        "heading": "Enfants et adolescents",
        "paragraphs": [
          "Ce site ne s'adresse pas aux enfants ni aux adolescents et ne collecte pas intentionnellement leurs données."
        ],
        "list": []
      },
      {
        "heading": "Sécurité",
        "paragraphs": [
          "Le site utilise HTTPS et des en-têtes de sécurité, et ses dépendances sont surveillées pour détecter les vulnérabilités connues. Aucun système n'est totalement à l'abri des failles. Si vous trouvez une vulnérabilité, consultez les instructions sur /.well-known/security.txt."
        ],
        "list": []
      },
      {
        "heading": "Modifications",
        "paragraphs": [
          "Cette politique peut être mise à jour. La date de la dernière mise à jour figure en haut de cette page."
        ],
        "list": []
      }
    ]
  },
};

export default fr;
