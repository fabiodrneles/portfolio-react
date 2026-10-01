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
    eyebrow: "// Ingénieur QA · Développeur Full Stack",
    titleStart: "Un logiciel qui passe",
    titleHighlight: "tous les tests",
    titleEnd: "avant vos utilisateurs.",
    lead: "Je développe le front-end et le back-end, puis je prouve que tout fonctionne : automatisation des tests, validation des API et couverture de code sur tout le cycle de vie du projet.",
    primary: "Me contacter",
    secondary: "Voir mes projets",
    stats: [
      { value: "4+ ans", label: "à livrer du logiciel" },
      { value: "Web · Mobile · API", label: "couverture de bout en bout" },
    ],
  },
  runner: {
    title: "fabio.cy.js · cypress run",
    it: "livre un logiciel fiable",
    visit: "/votre-produit",
    specs: ["écrit un front-end propre", "conçoit des API fiables", "automatise la suite de tests", "livre via CI/CD"],
    passed: "Tous les tests sont passés",
    summary: "4 specs sur 4 · 0 échec",
  },
  stack: { label: "Stack au quotidien" },
  services: {
    eyebrow: "01 / services",
    title: "Un ingénieur pour construire et prouver que ça marche.",
    lead: "La qualité est au centre, pas un détail de fin de projet. Choisissez un domaine ou confiez-moi le cycle complet.",
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
    eyebrow: "02 / projets",
    title: "Des outils que j'ai construits et testés.",
    filterLabel: "Filtrer les projets",
    all: "Tous",
    allRepos: "Tous les dépôts sur GitHub",
    open: "Ouvrir sur GitHub",
    done: "terminé",
    projects: {
      "go-release-manager": {
        desc: "Fini les releases à la main. Automatise tout le processus de release.",
        out: "release créée · changelog généré",
      },
      "go-checker": {
        desc: "Un outil en ligne de commande simple et puissant pour vérifier rapidement des sites et des API.",
        out: "sites et API vérifiés",
      },
      "cv-craft": {
        desc: "Générateur de CV professionnels en Go, optimisés pour les systèmes ATS.",
        out: "CV généré en PDF",
      },
      "spring-api": {
        desc: "API REST en Spring Boot pour perfectionner la conception et les tests d'API.",
        out: "BUILD SUCCESS",
      },
    },
  },
  journey: {
    eyebrow: "03 / parcours",
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
    eyebrow: "04 / méthode",
    title: "Un pipeline, pas une supposition.",
    steps: [
      { title: "Comprendre", desc: "Cartographier les besoins et les risques. Définir ce que « fonctionner » veut dire avant la première ligne de code." },
      { title: "Construire", desc: "Front-end et back-end en petites livraisons faciles à relire." },
      { title: "Vérifier", desc: "Suites automatisées E2E, API et de régression, avec rapports de couverture." },
      { title: "Livrer", desc: "Des tests intégrés au CI/CD : chaque release passe par un build vert." },
    ],
  },
  about: {
    eyebrow: "05 / à propos",
    role: "Ingénieur QA et Full Stack · Brésil",
    bio: "En tant que Développeur Full Stack, j'ai acquis de l'expérience au sein d'équipes collaboratives, en contribuant au développement et à la livraison de solutions robustes et efficaces. Aujourd'hui, mon objectif est de rendre la qualité mesurable.",
    cv: "Télécharger le CV",
  },
  writing: {
    eyebrow: "06 / articles",
    all: "Tous les articles",
  },
  contact: {
    eyebrow: "07 / contact",
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
