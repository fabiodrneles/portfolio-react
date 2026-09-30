// Textos do site em português do Brasil (idioma padrão).
// en.js e fr.js seguem exatamente a mesma estrutura.
const pt = {
  meta: {
    title: "Fabio Dorneles | Engenheiro de QA e Desenvolvedor Full Stack",
    description:
      "Fabio Dorneles, Engenheiro de QA e Desenvolvedor Full Stack. Automação de testes, APIs e aplicações web e mobile, com qualidade do início ao fim.",
    ogSubtitle: "Engenheiro de QA e Desenvolvedor Full Stack: projetos, portfólio e artigos técnicos",
    jobTitle: "Engenheiro de QA e Desenvolvedor Full Stack",
  },
  nav: {
    home: "Início",
    services: "Serviços",
    work: "Projetos",
    journey: "Trajetória",
    about: "Sobre",
    blog: "Blog",
    cta: "Vamos conversar",
    available: "aberto a oportunidades",
    language: "Idioma",
    openMenu: "Abrir menu",
    closeMenu: "Fechar menu",
    main: "Navegação principal",
    skip: "Pular para o conteúdo",
  },
  hero: {
    eyebrow: "// Engenheiro de QA · Desenvolvedor Full Stack",
    titleStart: "Software que passa em",
    titleHighlight: "todos os testes",
    titleEnd: "antes dos seus usuários.",
    lead: "Desenvolvo front-end e back-end e provo que funciona: automação de testes, validação de APIs e cobertura de código em todo o ciclo de vida do projeto.",
    primary: "Entrar em contato",
    secondary: "Ver projetos",
    stats: [
      { value: "4+ anos", label: "entregando software" },
      { value: "Web · Mobile · API", label: "cobertura de ponta a ponta" },
    ],
  },
  runner: {
    title: "fabio.cy.js · cypress run",
    it: "entrega software confiável",
    visit: "/seu-produto",
    specs: ["escreve front-end limpo", "projeta APIs confiáveis", "automatiza a suíte de testes", "entrega via CI/CD"],
    passed: "Todos os testes passaram",
    summary: "4 de 4 specs · 0 falhas",
  },
  stack: { label: "Stack do dia a dia" },
  services: {
    eyebrow: "01 / serviços",
    title: "Um engenheiro para construir e provar que funciona.",
    lead: "Qualidade é o centro, não um detalhe no fim. Escolha uma área ou conte comigo no ciclo completo.",
    core: "Especialidade principal",
    items: [
      {
        code: "QA",
        title: "Engenharia de QA",
        desc: "Testes robustos e eficientes para o software chegar à produção com confiança, em qualquer plataforma.",
        points: [
          "Automação de testes (Cypress, Selenium)",
          "Testes e validação de APIs",
          "Testes cross-browser e mobile",
          "Integração com pipelines de CI/CD",
        ],
      },
      {
        code: "</>",
        title: "Back-End",
        desc: "Sistemas server-side seguros e flexíveis, com gestão de dados organizada.",
        points: ["APIs RESTful (Java, Kotlin, Go)", "Spring Framework", "Modelagem de banco de dados", "Infraestrutura escalável"],
      },
      {
        code: "UI",
        title: "Front-End",
        desc: "Interfaces traduzidas do design para código rápido e acessível.",
        points: ["React, Angular, TypeScript", "Integração com APIs", "Responsivo em qualquer dispositivo", "React Native e Android"],
      },
    ],
  },
  work: {
    eyebrow: "02 / projetos",
    title: "Ferramentas que construí e testei.",
    filterLabel: "Filtrar projetos",
    all: "Todos",
    allRepos: "Todos os repositórios no GitHub",
    open: "Abrir no GitHub",
    done: "concluído",
    projects: {
      "go-release-manager": {
        desc: "Chega de criar releases na mão. Automatiza todo o fluxo de release.",
        out: "release criada · changelog gerado",
      },
      "go-checker": {
        desc: "Ferramenta de linha de comando simples e poderosa para verificar sites e APIs rapidamente.",
        out: "sites e APIs verificados",
      },
      "cv-craft": {
        desc: "Gerador de currículos profissionais em Go, otimizados para sistemas ATS.",
        out: "currículo gerado em PDF",
      },
      "spring-api": {
        desc: "API REST em Spring Boot para aprimorar design e testes de APIs.",
        out: "BUILD SUCCESS",
      },
    },
  },
  journey: {
    eyebrow: "03 / trajetória",
    title: "Onde construí essa experiência.",
    experience: "Experiência",
    education: "Formação",
    range: "{from} a {to}",
    since: "desde {from}",
    experienceItems: {
      pismo: "Engenheiro de Software · Golang",
      stone: "Estágio em Desenvolvimento · Kotlin · Back-end",
      soujunior: "Aprendiz · Scrum Master (projeto voluntário)",
      capgemini: "Desenvolvedor Java · Angular · SQL Server (projeto Swiss Re)",
      "ibm-dev": "Desenvolvedor Java · Angular · Cobol · React | Full Stack",
      "ibm-intern": "Estágio em Desenvolvimento Java · Angular · Cobol · Mainframe",
      freelancer: "Desenvolvedor Java · Angular · React · WordPress | Full Stack",
    },
    educationItems: {
      bachelor: "Bacharelado em Engenharia de Software",
      "postgrad-fullstack": "Pós-graduação em Desenvolvimento Full Stack",
      "postgrad-law": "Pós-graduação em Direito Digital",
      mba: "MBA em Compliance e Governança",
      associate: "Tecnólogo em Análise e Desenvolvimento de Sistemas",
      dio: "Bootcamps da Digital Innovation One (DIO)",
    },
    places: { freelancer: "Freelancer", brazil: "Brasil" },
  },
  process: {
    eyebrow: "04 / processo",
    title: "Um pipeline, não um palpite.",
    steps: [
      { title: "Entender", desc: "Mapear requisitos e riscos. Definir o que é “funcionar” antes da primeira linha de código." },
      { title: "Construir", desc: "Front-end e back-end em entregas pequenas e revisáveis." },
      { title: "Verificar", desc: "Suítes automatizadas de E2E, API e regressão, com relatórios de cobertura." },
      { title: "Entregar", desc: "Testes integrados ao CI/CD: toda release só sai com build verde." },
    ],
  },
  about: {
    eyebrow: "05 / sobre",
    role: "Engenheiro de QA e Full Stack · Brasil",
    bio: "Como Desenvolvedor Full Stack, acumulei experiência como parte integrante de equipes colaborativas, contribuindo para o desenvolvimento e a entrega de soluções robustas e eficientes. Hoje, meu foco é tornar a qualidade mensurável.",
    cv: "Baixar currículo",
  },
  writing: {
    eyebrow: "06 / artigos",
    all: "Todos os artigos",
  },
  contact: {
    eyebrow: "07 / contato",
    title: "Tem um produto que não pode quebrar?",
    lead: "Uma vaga, um projeto ou uma dúvida técnica: me conte pelo canal que preferir.",
    emailLabel: "e-mail · preferencial",
    formTitle: "Ou escreva aqui",
    name: "Nome",
    namePlaceholder: "Seu nome",
    email: "E-mail",
    emailPlaceholder: "voce@empresa.com",
    project: "Projeto",
    projectPlaceholder: "Conte o que você precisa",
    send: "Enviar mensagem",
    sending: "Enviando...",
    success: "Mensagem enviada! Retorno em breve.",
    errorRequired: "Preencha todos os campos.",
    errorEmail: "Informe um e-mail válido.",
    errorLong: "Sua mensagem está longa demais.",
    errorCooldown: "Aguarde um minuto antes de enviar outra mensagem.",
    errorSend: "Algo deu errado. Tente de novo ou me chame por e-mail.",
    privacyNotice: "Ao enviar, você concorda que seus dados sejam usados apenas para responder à sua mensagem. Leia a",
    privacyLink: "Política de Privacidade",
  },
  footer: {
    rights: "Todos os direitos reservados.",
    build: "build",
    passing: "passando",
    backToTop: "Voltar ao topo",
    privacy: "Política de Privacidade",
  },
  blog: {
    title: "Artigos",
    metaTitle: "Artigos | Fabio Dorneles",
    description: "Artigos sobre desenvolvimento web, testes e qualidade de software, escritos por Fabio Dorneles.",
    feed: { title: "Fabio D. Dorneles | Artigos", description: "Artigos sobre testes, qualidade de software e engenharia de software, escritos por Fábio D. Dorneles.", link: "RSS" },
    back: "← Todos os artigos",
    untranslated: "",
    notFound: "Artigo não encontrado | Fabio Dorneles",
    fallbackDescription: "Artigo do blog de Fabio Dorneles.",
    share: {
      title: "Gostou? Compartilhe este artigo",
      label: "Compartilhar artigo",
      on: "Compartilhar no",
      copy: "Copiar link do artigo",
      copyShort: "Copiar link",
      copied: "Link copiado!",
      more: "Mais opções de compartilhamento",
      moreShort: "Mais opções",
    },
  },
  privacy: {
    "metaTitle": "Política de Privacidade",
    "metaDescription": "Quais dados pessoais este site coleta, para que servem e quais são os seus direitos (LGPD).",
    "title": "Política de Privacidade",
    "updated": "Última atualização: 30 de setembro de 2026",
    "intro": "Esta política explica, de forma direta, quais dados pessoais este site coleta, para que servem e quais são os seus direitos, conforme a Lei Geral de Proteção de Dados (LGPD, Lei nº 13.709/2018).",
    "sections": [
      {
        "heading": "Quem é o responsável",
        "paragraphs": [
          "O responsável pelo tratamento dos dados é Fabio Dorneles, pessoa física, titular deste site. Para qualquer assunto de privacidade, escreva para fabiodrneles@gmail.com."
        ],
        "list": []
      },
      {
        "heading": "Quais dados coletamos",
        "paragraphs": [
          "Este site não usa cookies de publicidade, ferramentas de análise de audiência nem rastreamento, e carrega fontes e ícones do próprio site. Os únicos dados tratados são:"
        ],
        "list": [
          "Formulário de contato: nome, e-mail e a mensagem que você escrever. Só são enviados quando você clica em enviar.",
          "Cookie de idioma (lang): guarda o idioma que você escolheu, por até 1 ano. É funcional e não identifica você.",
          "Armazenamento da sessão do navegador: um horário usado para limitar o envio de mensagens repetidas. Some quando você fecha a aba.",
          "Registros técnicos do provedor de hospedagem (Vercel): endereço IP, navegador e data e hora do acesso, necessários para entregar e proteger o site."
        ]
      },
      {
        "heading": "Para que usamos os dados",
        "paragraphs": [],
        "list": [
          "Responder à mensagem enviada pelo formulário.",
          "Manter o site funcionando com segurança e no seu idioma."
        ]
      },
      {
        "heading": "Base legal",
        "paragraphs": [
          "Tratamos os dados do formulário com base no seu consentimento (LGPD, art. 7º, I), dado ao enviar a mensagem, e para dar andamento a procedimentos preliminares relacionados a um possível contrato, a seu pedido (art. 7º, V). O cookie de idioma e os registros técnicos são necessários para o funcionamento e a segurança do site."
        ],
        "list": []
      },
      {
        "heading": "Com quem compartilhamos",
        "paragraphs": [
          "As mensagens do formulário passam pelo EmailJS, que as entrega à minha caixa de e-mail. O site é hospedado na Vercel. Não vendemos seus dados nem os cedemos a terceiros para outros fins."
        ],
        "list": []
      },
      {
        "heading": "Transferência internacional",
        "paragraphs": [
          "EmailJS e Vercel podem tratar dados em servidores fora do Brasil. Isso ocorre conforme as condições e garantias que esses provedores oferecem e que a LGPD admite (art. 33)."
        ],
        "list": []
      },
      {
        "heading": "Por quanto tempo guardamos",
        "paragraphs": [
          "As mensagens ficam na minha caixa de e-mail pelo tempo necessário para responder e acompanhar a conversa e, depois, enquanto houver interesse legítimo ou obrigação legal. Você pode pedir a exclusão a qualquer momento. O cookie de idioma expira em 1 ano."
        ],
        "list": []
      },
      {
        "heading": "Seus direitos",
        "paragraphs": [
          "Pela LGPD (art. 18), você pode pedir:"
        ],
        "list": [
          "confirmação de que tratamos seus dados e acesso a eles;",
          "correção de dados incompletos, inexatos ou desatualizados;",
          "anonimização, bloqueio ou eliminação de dados desnecessários ou tratados em desacordo com a lei;",
          "portabilidade dos dados;",
          "informação sobre com quem os dados são compartilhados;",
          "revogação do consentimento, a qualquer momento."
        ]
      },
      {
        "heading": "Como exercer seus direitos",
        "paragraphs": [
          "Escreva para fabiodrneles@gmail.com. Você também pode reclamar à Autoridade Nacional de Proteção de Dados (ANPD), em gov.br/anpd."
        ],
        "list": []
      },
      {
        "heading": "Crianças e adolescentes",
        "paragraphs": [
          "Este site não é direcionado a crianças e adolescentes e não coleta dados deles de forma intencional."
        ],
        "list": []
      },
      {
        "heading": "Segurança",
        "paragraphs": [
          "O site usa HTTPS e cabeçalhos de segurança, e suas dependências são monitoradas contra vulnerabilidades conhecidas. Nenhum sistema é totalmente imune a falhas. Se você encontrar uma vulnerabilidade, veja as instruções em /.well-known/security.txt."
        ],
        "list": []
      },
      {
        "heading": "Alterações",
        "paragraphs": [
          "Esta política pode ser atualizada. A data da última atualização fica no topo desta página."
        ],
        "list": []
      }
    ]
  },
};

export default pt;
