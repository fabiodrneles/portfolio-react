/* eslint-disable no-undef */
// Conformidade: LGPD (Lei nº 13.709/2018), transparência sobre os dados coletados, minimização
// de dados e ausência de rastreadores de terceiros. Veja docs/compliance/README.md.
const baseUrl = Cypress.config("baseUrl") || "https://portfolio-react-nine-red.vercel.app";
const ARTICLE = "/blog/o-teto-tecnico-do-qa-por-que-pular-os-fundamentos-custa-caro";
const EMAIL = "fabiodrneles@gmail.com";
const LOCALES = [
  { prefix: "", name: "pt" },
  { prefix: "/en", name: "en" },
  { prefix: "/fr", name: "fr" },
];
const pageOf = (prefix, path) => `${baseUrl}${path === "/" ? prefix || "/" : prefix + path}`;

// Tudo o que a política de privacidade precisa citar, em qualquer idioma.
const REQUIRED_IN_POLICY = [
  [/LGPD/, "cita a LGPD"],
  [/13[.,]709/, "cita a Lei nº 13.709/2018"],
  [/art\. 7/, "informa a base legal (art. 7)"],
  [/art\. 18/, "informa os direitos do titular (art. 18)"],
  [/art\. 33/, "informa a transferência internacional (art. 33)"],
  [/ANPD/, "informa como reclamar à ANPD"],
  [/EmailJS/, "informa o operador do formulário (EmailJS)"],
  [/Vercel/, "informa o provedor de hospedagem (Vercel)"],
  [new RegExp(EMAIL), "informa o canal do responsável pelos dados"],
  [/security\.txt/, "aponta o canal de segurança"],
];

describe("Conformidade: LGPD", () => {
  beforeEach(() => cy.setCookie("lang", "pt"));

  LOCALES.forEach(({ prefix, name }) => {
    it(`a política de privacidade está completa: ${name}`, () => {
      cy.visit(pageOf(prefix, "/privacy"));
      cy.get("article h1").should("have.length", 1);
      cy.get("article h2").should("have.length.at.least", 10);
      cy.get("article").invoke("text").then((text) => {
        REQUIRED_IN_POLICY.forEach(([pattern, reason]) => expect(text, `a política ${reason}`).to.match(pattern));
      });
    });

    it(`o rodapé leva à política de privacidade: ${name}`, () => {
      cy.visit(pageOf(prefix, "/"));
      cy.get("footer a[href$='/privacy']").should("have.attr", "href", `${prefix}/privacy`).and("be.visible");
    });

    it(`o formulário avisa sobre o uso dos dados antes do envio: ${name}`, () => {
      cy.visit(pageOf(prefix, "/#contact"));
      cy.get(".contact__privacy a").should("have.attr", "href", `${prefix}/privacy`);
      // o aviso vem antes do botão de enviar
      cy.get(".contact__privacy").then(($notice) => {
        const button = Cypress.$(".contact__form button[type=submit]")[0];
        expect($notice[0].compareDocumentPosition(button) & Node.DOCUMENT_POSITION_FOLLOWING, "aviso antes do botão").to.be.greaterThan(0);
      });
    });

    it(`a política está no sitemap e tem versões alternativas: ${name}`, () => {
      cy.request(`${baseUrl}/sitemap.xml`).its("body").should("include", `https://fabiodorneles.com.br${prefix}/privacy</loc>`);
      cy.visit(pageOf(prefix, "/privacy"));
      ["pt-BR", "en", "fr", "x-default"].forEach((hreflang) => {
        cy.get(`link[rel="alternate"][hreflang="${hreflang}"]`).should("have.attr", "href").and("include", "/privacy");
      });
    });
  });
});

describe("Conformidade: minimização de dados e ausência de rastreamento", () => {
  const PAGES = ["/", "/blog", ARTICLE, "/privacy"];
  // Domínios de análise de audiência e publicidade (só domínios, para não confundir com palavras do texto).
  const TRACKERS = /google-analytics\.com|googletagmanager\.com|doubleclick\.net|connect\.facebook\.net|facebook\.com\/tr|static\.hotjar\.com|clarity\.ms|cdn\.segment\.(com|io)|mixpanel\.com|plausible\.io|matomo|fullstory\.com|amplitude\.com|analytics\.tiktok\.com|sc-static\.net/i;

  it("nenhuma página carrega rastreadores ou publicidade de terceiros", () => {
    ["", "/en", "/fr"].forEach((prefix) => {
      PAGES.forEach((path) => {
        cy.request(pageOf(prefix, path)).its("body").should("not.match", TRACKERS);
      });
    });
  });

  it("nada é gravado no navegador antes de o visitante agir (cookies, localStorage e sessionStorage)", () => {
    cy.visit(`${baseUrl}/en`);
    cy.getCookies().should("have.length", 0);
    cy.window().then((win) => {
      expect(win.localStorage.length, "localStorage").to.eq(0);
      expect(win.sessionStorage.length, "sessionStorage").to.eq(0);
    });
  });

  it("o formulário coleta somente nome, e-mail e mensagem (necessidade, LGPD art. 6º, III)", () => {
    cy.visit(`${baseUrl}/en#contact`);
    cy.get(".contact__form input:not([aria-hidden='true']), .contact__form textarea")
      .then(($fields) => [...$fields].map((field) => field.name))
      .should("deep.eq", ["name", "email", "project"]);
  });

  it("nenhum dado é enviado a terceiros antes de o visitante clicar em enviar", () => {
    cy.intercept("POST", "https://api.emailjs.com/**", cy.spy().as("emailjs"));
    cy.visit(`${baseUrl}/en#contact`);
    cy.get('.contact__form input[name="name"]').type("Maria");
    cy.get('.contact__form input[name="email"]').type("maria@example.com");
    cy.get('.contact__form textarea[name="project"]').type("Quero um site");
    cy.wait(500);
    cy.get("@emailjs").should("not.have.been.called");
  });

  it("os pedidos do titular têm um canal: o e-mail do responsável aparece na política em todos os idiomas", () => {
    LOCALES.forEach(({ prefix }) => {
      cy.visit(pageOf(prefix, "/privacy"));
      cy.get(`article`).should("contain.text", EMAIL);
    });
  });
});
