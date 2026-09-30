/* eslint-disable no-undef */
// Identidade e credibilidade (specs/008): sem link de teste, formação no HTML inicial,
// selo de contato coerente e dados estruturados que identificam a pessoa.

const baseUrl = Cypress.config("baseUrl") || "https://portfolio-react-nine-red.vercel.app";
const SITE = "https://fabiodorneles.com.br";
const ARTICLE = "/blog/o-teto-tecnico-do-qa-por-que-pular-os-fundamentos-custa-caro";
const LOCALES = [
  { prefix: "", name: "pt", education: "Bacharelado em Engenharia de Software", badge: /oportunidades/ },
  { prefix: "/en", name: "en", education: "Degree in Software Engineering", badge: /open to work/ },
  { prefix: "/fr", name: "fr", education: "Licence en génie logiciel", badge: /opportunités/ },
];

const parseJsonLd = (html) =>
  [...html.matchAll(/<script type="application\/ld\+json">(.*?)<\/script>/gs)].map((m) => JSON.parse(m[1]));

describe("Identidade e credibilidade", () => {
  beforeEach(() => cy.setCookie("lang", "pt"));

  LOCALES.forEach(({ prefix, name, education, badge }) => {
    it(`não tem link do YouTube (placeholder) na home: ${name}`, () => {
      cy.visit(`${baseUrl}${prefix}/`);
      cy.get('a[href*="youtube.com"]').should("not.exist");
      cy.get(".hero__social a").should("have.length", 2);
    });

    it(`a formação está no HTML inicial e a aba continua alternando: ${name}`, () => {
      cy.request(`${baseUrl}${prefix}/`).its("body").should("include", education);
      cy.visit(`${baseUrl}${prefix}/`);
      cy.get("#qualification .timeline").should("have.length", 2);
      cy.get("#qualification .timeline").eq(0).should("be.visible");
      cy.get("#qualification .timeline").eq(1).should("not.be.visible");
      cy.get("#qualification .filter").eq(1).click();
      cy.get("#qualification .timeline").eq(1).should("be.visible");
      cy.get("#qualification .timeline").eq(0).should("not.be.visible");
    });

    it(`o selo de disponibilidade fala de oportunidades: ${name}`, () => {
      cy.visit(`${baseUrl}${prefix}/`);
      cy.get(".header__status").invoke("text").should("match", badge);
    });
  });

  it("a home publica Person com @id e knowsAbout, e WebSite ligado à pessoa", () => {
    cy.request(`${baseUrl}/`).its("body").then((html) => {
      const items = parseJsonLd(html);
      const person = items.find((i) => i["@type"] === "Person");
      expect(person["@id"]).to.eq(`${SITE}/#person`);
      expect(person.knowsAbout).to.include.members(["Go", "Java", "Cypress"]);
      const site = items.find((i) => i["@type"] === "WebSite");
      expect(site, "JSON-LD WebSite").to.exist;
      expect(site.publisher).to.deep.eq({ "@id": `${SITE}/#person` });
      expect(site.url).to.eq(SITE);
    });
  });

  LOCALES.forEach(({ prefix, name }) => {
    it(`o artigo liga o autor à mesma pessoa e publica BreadcrumbList: ${name}`, () => {
      cy.request(`${baseUrl}${prefix}${ARTICLE}`).its("body").then((html) => {
        const items = parseJsonLd(html);
        const post = items.find((i) => i["@type"] === "BlogPosting");
        expect(post.author["@id"]).to.eq(`${SITE}/#person`);
        const crumbs = items.find((i) => i["@type"] === "BreadcrumbList");
        expect(crumbs, "JSON-LD BreadcrumbList").to.exist;
        expect(crumbs.itemListElement.map((c) => c.position)).to.deep.eq([1, 2, 3]);
        expect(crumbs.itemListElement[1].item).to.eq(`${SITE}${prefix}/blog`);
        expect(crumbs.itemListElement[2].item).to.eq(post.url);
      });
    });
  });
});
