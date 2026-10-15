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
    quality: "Qualidade",
    cta: "Vamos conversar",
    available: "aberto a oportunidades",
    language: "Idioma",
    openMenu: "Abrir menu",
    closeMenu: "Fechar menu",
    main: "Navegação principal",
    skip: "Pular para o conteúdo",
  },
  hero: {
    eyebrow: "Engenheiro de QA · Desenvolvedor Full Stack",
    titleStart: "Software que chega à produção",
    titleHighlight: "sem surpresas.",
    titleEnd: "",
    lead: "Desenvolvo front-end e back-end e provo que funciona: automação de testes, validação de APIs e cobertura de código em todo o ciclo de vida do projeto.",
    primary: "Entrar em contato",
    secondary: "Ver projetos",
    stats: [
      { value: "8+ anos", label: "entregando software" },
      { value: "Web · Mobile · API", label: "cobertura de ponta a ponta" },
    ],
  },
  runner: {
    title: "Ficha de inspeção",
    specs: ["escreve front-end limpo", "projeta APIs confiáveis", "automatiza a suíte de testes", "entrega via CI/CD"],
    passed: "Todos os testes passaram",
    summary: "4 de 4 specs · 0 falhas",
  },
  stack: { label: "Stack do dia a dia" },
  services: {
    eyebrow: "Serviços",
    title: "Um engenheiro para construir e provar que funciona.",
    lead: "A qualidade guia cada etapa do trabalho. Você pode contar comigo em uma área ou no ciclo completo.",
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
    eyebrow: "Projetos",
    title: "Ferramentas que construí e testei.",
    filterLabel: "Filtrar projetos",
    all: "Todos",
    allRepos: "Todos os repositórios no GitHub",
    open: "Abrir no GitHub",
    openCase: "Ler o estudo de caso",
    done: "concluído",
    projects: {
      "sdd-kit": {
        desc: "Kit de Spec Driven Development para agentes de IA: transforma um pedido em spec, tickets e um pull request por ticket com CI verde, até a release. CI pronto para seis linguagens e automação no GitHub Actions; 42 releases, desenvolvido com o próprio processo.",
        out: "spec → tickets → PRs → release",
      },
      "go-release-manager": {
        desc: "Calcula a próxima versão SemVer pelos Conventional Commits e cria a tag, no terminal ou como GitHub Action. Em produção: gera as versões do sdd-kit, com 97% de cobertura de testes e binários para Linux, macOS e Windows.",
        out: "v1.2.0 → v1.3.0 · tag criada",
      },
      "go-checker": {
        desc: "Verifica sites e APIs no terminal, no CI e como monitor 24/7: asserções em JSON, raio-x da requisição (DNS, TLS, TTFB), validade do certificado, métricas do Prometheus e alertas no Slack, Discord, Teams e Telegram. De protótipo à v1.0.0, com 50 critérios de aceite testados e 96% de cobertura.",
        out: "7 checks · 3 up, 2 warn, 2 down",
      },
      "cv-craft": {
        desc: "Gera o currículo em PDF, Markdown e texto a partir de um único YAML, otimizado para os sistemas de triagem (ATS). Saiu de protótipo para a v1.0.0 com 71 critérios de aceite testados e 94% de cobertura; foi onde nasceu o sdd-kit.",
        out: "currículo gerado em PDF",
      },
      "spring-api": {
        desc: "API REST em Spring Boot para aprimorar design e testes de APIs.",
        out: "BUILD SUCCESS",
      },
    },
  },
  journey: {
    eyebrow: "Trajetória",
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
    eyebrow: "Processo",
    title: "Como eu trabalho.",
    steps: [
      { title: "Entender", desc: "Mapear requisitos e riscos. Definir o que é “funcionar” antes da primeira linha de código." },
      { title: "Construir", desc: "Front-end e back-end em entregas pequenas e revisáveis." },
      { title: "Verificar", desc: "Suítes automatizadas de E2E, API e regressão, com relatórios de cobertura." },
      { title: "Entregar", desc: "Testes integrados ao CI/CD: toda release só sai com build verde." },
    ],
  },
  about: {
    eyebrow: "Sobre",
    role: "Engenheiro de QA e Full Stack · Brasil",
    bio: "Como Desenvolvedor Full Stack, acumulei experiência como parte integrante de equipes colaborativas, contribuindo para o desenvolvimento e a entrega de soluções robustas e eficientes. Hoje, meu foco é tornar a qualidade mensurável.",
    cv: "Baixar currículo",
  },
  writing: {
    eyebrow: "Artigos",
    all: "Todos os artigos",
  },
  contact: {
    eyebrow: "Contato",
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
  caseStudies: {
    "go-checker": {
      "metaTitle": "Go Checker: estudo de caso",
      "metaDescription": "Como levei de protótipo à v1.0.0 uma CLI em Go de verificação de saúde de sites e APIs: asserções, raio-x da requisição, certificado TLS, CI, Prometheus e alertas.",
      "eyebrow": "Estudo de caso",
      "title": "Go Checker",
      "lead": "Uma ferramenta em Go que responde à pergunta que todo time faz várias vezes por dia: está tudo funcionando? Ela confere se a resposta está certa, rápida e com o certificado em dia, trava o deploy quebrado no CI e, como monitor, avisa o time só quando a queda é real.",
      "facts": [
        {
          "value": "50",
          "label": "critérios de aceite, todos com teste"
        },
        {
          "value": "96%",
          "label": "de cobertura, testada em Linux, macOS e Windows"
        },
        {
          "value": "11",
          "label": "casos de uso documentados com a saída real"
        }
      ],
      "factsNote": "Números da v1.0.0, medidos em 15/10/2026. Tudo pode ser conferido no repositório público.",
      "links": {
        "repo": "Ver o repositório",
        "readme": "Ler a documentação",
        "releases": "Baixar as releases"
      },
      "outputCaption": "A saída real da ferramenta: sete serviços verificados, cada falha com o motivo, e um erro de digitação na configuração apontado com a linha e a sugestão certa.",
      "sections": [
        {
          "heading": "O problema",
          "paragraphs": [
            "Um /health que responde 200 com o banco desconectado, um site que fica lento sem que ninguém saiba se é DNS, rede, TLS ou o servidor, um certificado que vence num domingo, um pacote perdido que acorda o plantão às 3h. Os verificadores simples só olham o status; as plataformas completas pedem banco, interface e manutenção.",
            "O go-checker começou como um protótipo de 190 linhas com problemas sérios: a latência impressa era sempre 2562047h, o processo saía com 0 mesmo com serviços fora (inútil em CI), não havia testes, README nem CI, e um binário de 9,5 MB estava commitado."
          ],
          "list": []
        },
        {
          "heading": "A solução",
          "paragraphs": [
            "Um binário único, configurado em YAML versionado junto com o código, que serve no terminal, no pipeline e como monitor contínuo:"
          ],
          "list": [
            "Asserções sobre o conteúdo: status, latência máxima, texto e regex no corpo, valores no JSON ($.data.items[0].id) e cabeçalhos, cada falha com o esperado e o encontrado.",
            "Raio-x da requisição: tempos de DNS, conexão TCP, handshake TLS e primeiro byte, e os dias até o certificado vencer.",
            "Códigos de saída para CI (0, 1 e 2), relatórios em JSON, JUnit e Markdown, resumo automático no GitHub Actions e uma GitHub Action pronta.",
            "Modo monitor com métricas do Prometheus (p50, p95 e p99) e alertas no Slack, Discord, Teams, Telegram ou num webhook, com proteção contra oscilação.",
            "Geração dos checks a partir de uma especificação OpenAPI, checks de portas TCP e de DNS, e segredos lidos do ambiente.",
            "Distribuição em binários para cinco plataformas, imagem Docker multi-arquitetura e go install."
          ]
        },
        {
          "heading": "Do protótipo à v1.0.0",
          "paragraphs": [
            "Comecei por uma análise com evidências: rodar a ferramenta, registrar cada defeito com a saída que o provava e decidir com o dono o que mudar antes de tocar no código. Daí saíram 10 especificações com critérios de aceite, e cada entrega virou um pull request com o CI verde.",
            "Antes de liberar a versão, fiz uma pesquisa de mercado comparando o go-checker com Gatus, Uptime Kuma, Blackbox Exporter, Hurl, StepCI, Checkly e k6. Ele já estava acima da média em diagnóstico, integração com CI e geração a partir de OpenAPI, e abaixo em segredos, protocolos, canais de alerta e distribuição. Fechei essas lacunas antes da v1.0.0: variáveis de ambiente, autenticação, TCP e DNS, Discord, Teams e Telegram, e a imagem Docker."
          ],
          "list": []
        },
        {
          "heading": "Decisões técnicas",
          "paragraphs": [],
          "list": [
            "Medição com net/http/httptrace e uma conexão nova por requisição, para que DNS, TCP e TLS entrem no tempo como para um visitante novo.",
            "Retentativas com backoff exponencial e jitter só para erros transitórios (rede e 5xx): um 404 é a resposta final do servidor e não é repetido.",
            "Uma máquina de estados por check filtra oscilações: um estado novo só vale depois de N rodadas seguidas, então um pacote perdido não vira alerta.",
            "Formato de exposição do Prometheus e JSON path escritos no projeto: as únicas dependências são cobra e yaml.v3.",
            "Configuração estrita: uma chave desconhecida é erro com a linha e a sugestão mais próxima, calculada por distância de edição."
          ]
        },
        {
          "heading": "Como a qualidade é garantida",
          "paragraphs": [],
          "list": [
            "50 critérios de aceite, cada um citado por um teste automatizado, e 96% de cobertura com detecção de condição de corrida.",
            "Os testes nunca saem para a internet: servidores locais e uma autoridade certificadora própria geram certificados com a validade exata de cada cenário.",
            "CI em Linux, macOS e Windows; a própria GitHub Action é testada contra um servidor local em Linux e Windows.",
            "A release é ensaiada em cada pull request que a altera, com binários e imagem Docker, sem publicar.",
            "Os comandos do README rodam no CI, para a documentação nunca prometer o que a ferramenta não faz."
          ]
        },
        {
          "heading": "Resultado",
          "paragraphs": [
            "A v1.0.0 está publicada com binários para Linux, macOS e Windows, imagem no GitHub Container Registry e uma GitHub Action. A documentação, em português e inglês, apresenta cada recurso como um caso de uso, com o comando para copiar e a saída real."
          ],
          "list": []
        },
        {
          "heading": "Limites",
          "paragraphs": [
            "Não há página de status pública nem checks de ICMP e gRPC; para uma página de status, Gatus e Uptime Kuma atendem melhor. O uso real até agora é o meu: falta o retorno de outros times."
          ],
          "list": []
        }
      ],
      "cta": {
        "heading": "Precisa de alguém que entregue assim?",
        "text": "Trabalho com QA e desenvolvimento: especificação, testes automatizados, CI e entrega até produção, com documentação para quem vai usar.",
        "button": "Fale comigo"
      }
    },
    "cv-craft": {
      metaTitle: "CV Craft: estudo de caso",
      metaDescription:
        "Como levei de protótipo à v1.0.0 uma CLI em Go que gera currículos otimizados para ATS em PDF, Markdown e texto a partir de um YAML: descoberta com evidências, specs e testes.",
      eyebrow: "Estudo de caso",
      title: "CV Craft",
      lead: "Uma ferramenta de linha de comando em Go que gera o currículo em PDF, Markdown e texto a partir de um único arquivo YAML, otimizado para os sistemas de triagem (ATS). Saiu de protótipo para a v1.0.0, e foi o projeto em que nasceu o sdd-kit.",
      facts: [
        { value: "71", label: "critérios de aceite, todos com teste" },
        { value: "94%", label: "de cobertura de testes" },
        { value: "3", label: "formatos a partir de um YAML: PDF, Markdown e texto" },
      ],
      factsNote: "Números da v1.0.0, medidos em 14/10/2026. Tudo pode ser conferido no repositório público.",
      links: { repo: "Ver o repositório", readme: "Ler a documentação", releases: "Baixar as releases" },
      outputCaption: "A saída real da ferramenta: criar o modelo, gerar os três formatos e validar um YAML com erros.",
      sections: [
        {
          heading: "O problema",
          paragraphs: [
            "Manter o currículo em vários formatos (o PDF para o recrutador, o texto para colar em formulários, o Markdown para o GitHub) é retrabalho e acaba em versões diferentes. Um PDF com colunas, tabelas ou imagens é lido mal pelos sistemas de triagem. E os geradores online pedem cadastro e enviam os seus dados para fora.",
          ],
          list: [],
        },
        {
          heading: "A solução",
          paragraphs: ["Um binário único em Go: o conteúdo fica num YAML versionável, e a ferramenta gera todos os formatos com o mesmo conteúdo, sem enviar nada para a internet."],
          list: [
            "O comando init cria um modelo comentado; o validate lista todos os problemas de uma vez, cada um com o campo e o motivo.",
            "PDF feito para ATS: coluna única, texto selecionável, títulos de seção padronizados e metadados (título, autor, palavras-chave).",
            "Acentos corretos em todos os formatos e títulos das seções em português ou inglês.",
            "Um JSON Schema dá autocompletar e validação no editor; há modo interativo e geração automática ao salvar (--watch).",
            "Exit codes documentados, para uso em scripts; instaladores para Windows, macOS e Linux que conferem o checksum.",
          ],
        },
        {
          heading: "Do protótipo à v1.0.0",
          paragraphs: [
            "O código estava parado como protótipo. A primeira etapa foi uma descoberta com evidências: ler o código, rodar cada comando do README e registrar cada achado com o arquivo, a linha ou a saída que o mostrava. Foram 22 achados, 5 deles críticos: acentos corrompidos no PDF, responsabilidades e conquistas perdidas no Markdown e no texto, um laço infinito no modo interativo e um comando de instalação do README que não funcionava.",
            "Nenhuma linha de código mudou antes das decisões do dono. Depois, cada achado virou critério de aceite numa spec, e cada critério, um teste.",
          ],
          list: [],
        },
        {
          heading: "Como a qualidade é garantida",
          paragraphs: [],
          list: [
            "10 especificações e 71 critérios de aceite, todos provados por testes automatizados.",
            "76 funções de teste e de benchmark, mais 9 arquivos com a saída esperada de cada formato, comparados a cada mudança.",
            "CI em Linux, macOS e Windows, na versão mínima e na estável do Go, com lint, detecção de condição de corrida, cobertura mínima e um teste de fumaça do binário.",
            "Os comandos dos READMEs rodam no CI, para a documentação nunca prometer o que a ferramenta não faz.",
            "Releases com binários e checksums, publicadas só depois do CI completo.",
          ],
        },
        {
          heading: "Resultado",
          paragraphs: [
            "A v1.0.0 está publicada, com documentação para iniciantes em português e inglês. O processo usado aqui (descoberta com evidências, decisões do dono, uma spec por área e um pull request por tarefa) virou o sdd-kit, que hoje conduz meus outros projetos.",
          ],
          list: [],
        },
        {
          heading: "Limites",
          paragraphs: [
            "É uma ferramenta de linha de comando: não há editor visual nem versão web. O uso real até agora é o meu; falta o retorno de outros usuários.",
          ],
          list: [],
        },
      ],
      cta: {
        heading: "Precisa de alguém que entregue assim?",
        text: "Trabalho com QA e desenvolvimento: especificação, testes automatizados, CI e entrega até produção, com documentação para quem vai usar.",
        button: "Fale comigo",
      },
    },
    "sdd-kit": {
      metaTitle: "sdd-kit: estudo de caso",
      metaDescription:
        "Como construí um kit que leva o processo de entrega de um time profissional para agentes de IA: specs, um PR por ticket com CI verde, automação no GitHub Actions e release.",
      eyebrow: "Estudo de caso",
      title: "sdd-kit",
      lead: "Um kit de Spec Driven Development para agentes de IA, como o Claude Code: transforma um pedido em spec, épico, tickets e um pull request por ticket com CI verde, até a release. O dono decide; o agente executa.",
      facts: [
        { value: "42", label: "releases publicadas (hoje na v1.24.0)" },
        { value: "22", label: "especificações do próprio kit" },
        { value: "6", label: "linguagens com CI pronto" },
      ],
      factsNote: "Números do repositório público em 14/10/2026.",
      links: { repo: "Ver o repositório", readme: "Ler a documentação", demo: "Ver o projeto de demonstração" },
      outputCaption: "A saída real da adoção num repositório Go vazio, seguida do primeiro make ci (linhas do meio omitidas):",
      sections: [
        {
          heading: "O problema",
          paragraphs: [
            "Agentes de IA escrevem código rápido, mas sem processo: esquecem o projeto a cada sessão, abrem pull requests gigantes, decidem coisas que eram do dono e, quando o CI fica vermelho, às vezes resolvem desligando o teste.",
            "As ferramentas de SDD da comunidade cuidam bem da especificação. O trecho que fica para a pessoa é a entrega: transformar a spec em tickets revisáveis, manter o CI verde e fechar a versão.",
          ],
          list: [],
        },
        {
          heading: "A solução",
          paragraphs: ["O kit leva para qualquer repositório o jeito de entregar de um time profissional:"],
          list: [
            "Uma skill que ensina o agente o processo inteiro: análise com evidências, specs com critérios de aceite, épico por fase, um ticket por branch e por pull request, revisão, CHANGELOG e tag.",
            "Um script de adoção, em sh e em PowerShell, que copia o template sem sobrescrever nada: CLAUDE.md, modelos de issue e PR, specs e CI pronto para Go, Node/TypeScript, Java, Python, Rust e C#/.NET, com cobertura mínima de testes.",
            "Um motor de eventos no GitHub Actions, que faz os passos mecânicos sem IA: atualiza o checkpoint a cada merge, resume o CI vermelho, traz a main para os PRs, abre o PR de fechamento e dispara a release.",
            "Checkpoints de retomada: a sessão pode acabar a qualquer momento, e a próxima continua de onde a anterior parou.",
            "O axyn, uma CLI em Go que leva o mesmo processo para modelos gratuitos ou locais, só avançando quando os portões de qualidade passam.",
          ],
        },
        {
          heading: "Como a qualidade é garantida",
          paragraphs: ["O kit é desenvolvido com o próprio processo, e cada pull request passa por 12 verificações:"],
          list: [
            "Lint de Markdown e de shell, testes dos scripts e verificação dos workflows (actionlint).",
            "A adoção testada no Linux, no macOS e no Windows.",
            "Cada template de linguagem adotado num projeto mínimo, com o make ci gerado rodando de verdade.",
            "Rastreabilidade: cada critério de aceite citado num teste; uma regra falha o CI se algum ficar sem.",
            "A versão de cada release é calculada pelos commits, com o Go Release Manager.",
          ],
        },
        {
          heading: "Decisões técnicas",
          paragraphs: [],
          list: [
            "Pontos de parada explícitos: decisões, revisão, merge e tag são do dono, salvo delegação.",
            "Os testes são soberanos: CI vermelho se resolve pela causa raiz, nunca afrouxando ou pulando um teste.",
            "Scripts em sh POSIX e em PowerShell, para rodar igual no Linux, no macOS e no Windows.",
            "A adoção nunca sobrescreve arquivos do projeto, e uma sincronização semanal mantém os repositórios adotados atualizados.",
          ],
        },
        {
          heading: "Resultado",
          paragraphs: [
            "O kit nasceu do cv-craft, que saiu de protótipo para a v1.x com esse processo: 10 specs e 71 critérios de aceite, todos com teste automatizado. Hoje ele conduz o Go Release Manager e o sdd-kit-demo, um projeto criado do zero com épico, tickets, pull requests e release, além do próprio kit. O mesmo método, com specs e testes soberanos, guia este site.",
          ],
          list: [],
        },
        {
          heading: "Limites",
          paragraphs: [
            "O kit depende do GitHub e de um agente (o Claude Code, ou o opencode por meio do axyn). Até agora é usado nos meus projetos; falta a validação de outros times. O processo não dispensa a pessoa: as decisões e a revisão continuam sendo do dono.",
          ],
          list: [],
        },
      ],
      cta: {
        heading: "Precisa de alguém que entregue assim?",
        text: "Trabalho com QA e desenvolvimento: especificação, testes automatizados, CI e entrega até produção, com documentação para quem vai usar.",
        button: "Fale comigo",
      },
    },
    "go-release-manager": {
      metaTitle: "Go Release Manager: estudo de caso",
      metaDescription:
        "Como construí e levei a produção uma CLI em Go que calcula a próxima versão SemVer pelos commits: especificação, testes, CI em três sistemas e release automatizada.",
      eyebrow: "Estudo de caso",
      title: "Go Release Manager",
      lead: "Uma ferramenta de linha de comando em Go que decide a próxima versão de um software pelas mensagens de commit e cria a tag. Está em produção: é ela que versiona o sdd-kit.",
      facts: [
        { value: "v1.2.0", label: "em produção, versionando o sdd-kit" },
        { value: "97%", label: "de cobertura de testes" },
        { value: "3", label: "sistemas no CI: Linux, macOS e Windows" },
      ],
      factsNote: "Números da release v1.2.0, medidos em 14/10/2026. Tudo pode ser conferido no repositório público.",
      links: { repo: "Ver o repositório", readme: "Ler a documentação", releases: "Baixar as releases" },
      outputCaption: "A saída real da ferramenta num repositório com três commits novos depois da v1.2.0:",
      sections: [
        {
          heading: "O problema",
          paragraphs: [
            "Decidir a próxima versão costuma ser feito à mão: alguém lê os commits, escolhe entre patch, minor e major e cria a tag. É lento, depende de memória e erra fácil, principalmente com pré-releases e mudanças incompatíveis.",
            "Ferramentas como o semantic-release resolvem, mas trazem Node.js, plugins e configuração para projetos que não usam nada disso.",
          ],
          list: [],
        },
        {
          heading: "A solução",
          paragraphs: [
            "Um binário único, sem dependências, que lê os commits desde a última versão estável, aplica o padrão Conventional Commits e calcula a próxima tag SemVer. A ferramenta faz uma coisa só: o build, as notas e a publicação da release ficam com o GoReleaser.",
          ],
          list: [
            "O comando next imprime só a versão, para scripts; a saída JSON entrega o resultado completo.",
            "A simulação (--dry-run) mostra tudo sem escrever nada e sem pedir credenciais.",
            "Pré-releases por canal (beta, rc) com contador contínuo, versão forçada quando o plano exige e tag num commit específico.",
            "Uma GitHub Action pronta, que baixa o binário da release e confere o checksum antes de rodar.",
          ],
        },
        {
          heading: "Como a qualidade é garantida",
          paragraphs: ["O projeto segue o mesmo processo que uso no trabalho:"],
          list: [
            "Desenvolvimento guiado por especificação: cada regra de versão tem critérios de aceite, e cada critério aponta para o teste que o prova.",
            "Testes de unidade e de ponta a ponta, com 97% de cobertura do código; o CI exige no mínimo 80%.",
            "CI em todo pull request: lint, testes com detecção de condição de corrida, build, os comandos do README e a Action rodando em Linux, macOS e Windows.",
            "Release automatizada: a ferramenta calcula a própria versão, e o GoReleaser publica binários para cinco plataformas com checksum SHA-256.",
            "Uma branch e um pull request por tarefa, com Conventional Commits e CHANGELOG.",
          ],
        },
        {
          heading: "Decisões técnicas",
          paragraphs: [],
          list: [
            "A base é sempre a maior tag estável alcançável, então uma pré-release nunca vira base por engano.",
            "Em versões 0.x, uma mudança incompatível sobe a minor, como manda o SemVer.",
            "Diagnóstico vai para o stderr e o resultado para o stdout: scripts leem a saída sem filtrar nada.",
            "A ferramenta fala inglês, e a documentação é um guia completo em português e em inglês.",
          ],
        },
        {
          heading: "Resultado",
          paragraphs: [
            "A ferramenta calcula as versões do sdd-kit, meu kit de desenvolvimento guiado por especificação, a cada fechamento de fase. Na revisão para produção, testes novos levaram a cobertura de todo o código de 7,9% para 97,1%, e um defeito no --version do binário publicado foi achado e corrigido antes da divulgação.",
          ],
          list: [],
        },
        {
          heading: "Limites",
          paragraphs: [
            "O uso real ainda é no sdd-kit e nos meus projetos; falta a validação de outros times. Não há imagem Docker publicada. A ferramenta calcula versões e cria tags; de propósito, não gera changelog nem publica a release sozinha.",
          ],
          list: [],
        },
      ],
      cta: {
        heading: "Precisa de alguém que entregue assim?",
        text: "Trabalho com QA e desenvolvimento: especificação, testes automatizados, CI e entrega até produção, com documentação para quem vai usar.",
        button: "Fale comigo",
      },
    },
  },
  quality: {
    metaTitle: "Qualidade deste site",
    metaDescription:
      "Como este site é testado: testes ponta a ponta, acessibilidade, segurança, desempenho e privacidade, tudo automatizado e aberto no repositório público.",
    title: "Qualidade deste site",
    intro:
      "Este site também é um exercício de qualidade. Cada mudança passa por verificações automáticas antes de ir ao ar, e tudo pode ser conferido no repositório público.",
    factSpecs: "especificações de teste ponta a ponta (Cypress)",
    factPipelines: "pipelines de verificação no CI",
    repo: "Ver o repositório",
    pipelinesLink: "Ver os pipelines",
    sections: [
      {
        heading: "O que é verificado",
        paragraphs: ["A cada alteração, o CI roda estas verificações:"],
        list: [
          "Fluxos e conteúdo: navegação, idiomas (PT, EN e FR), formulário de contato, blog, SEO, dados estruturados e feeds RSS, com testes Cypress.",
          "Acessibilidade: axe-core (WCAG 2.2, níveis A e AA) e Pa11y nas páginas principais, nos três idiomas, em telas de computador e de celular.",
          "Segurança: cabeçalhos HTTP, cookies e superfície de ataque; detecção de segredos (Gitleaks); análise estática (CodeQL); auditoria e revisão de dependências; licenças.",
          "Privacidade (LGPD): testes sobre os dados coletados e o aviso de privacidade.",
          "Desempenho: Lighthouse CI no celular e no desktop, com notas mínimas e limites para LCP e CLS.",
          "Interface: títulos únicos e bem hierarquizados, metadados completos e alvos de toque com tamanho mínimo.",
        ],
      },
      {
        heading: "Como o trabalho é feito",
        paragraphs: [
          "Cada área do site tem uma especificação curta na pasta specs, com critérios de aceite ligados ao teste que os prova. Uma mudança começa pela especificação, é implementada até os critérios passarem e termina com a especificação atualizada.",
          "Os testes valem mais que o código: se um teste falha, corrige-se o site, e não o teste. Testes novos são bem-vindos; os existentes não são afrouxados para fazer uma mudança passar.",
        ],
        list: [],
      },
      {
        heading: "Limites",
        paragraphs: [
          "Testes automáticos não substituem a avaliação manual com leitores de tela nem medições com visitantes reais. As notas de laboratório do CI são metas para evitar regressões, não promessas de desempenho em todos os aparelhos.",
        ],
        list: [],
      },
    ],
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
