/* eslint-disable no-undef */
// Página "Qualidade deste site" (specs/009).

const baseUrl = Cypress.config("baseUrl") || "https://portfolio-react-nine-red.vercel.app";
const LOCALES = [
  { prefix: "", name: "pt" },
  { prefix: "/en", name: "en" },
  { prefix: "/fr", name: "fr" },
];

describe("Qualidade deste site", () => {
  beforeEach(() => cy.setCookie("lang", "pt"));

  LOCALES.forEach(({ prefix, name }) => {
    it(`${name}: tem um h1, números e links seguros para o repositório`, () => {
      cy.visit(`${baseUrl}${prefix}/quality`);
      cy.get("h1").should("have.length", 1);
      cy.get(".quality__number").should("have.length", 2).each(($n) => {
        expect(Number($n.text())).to.be.greaterThan(0);
      });
      cy.get("a[href^='https://github.com/fabiodrneles/portfolio-react']")
        .should("have.length.at.least", 1)
        .each(($a) => {
          expect($a.attr("rel")).to.contain("noopener");
        });
      cy.title().should("have.length.lessThan", 61);
    });

    it(`${name}: o rodapé leva à página`, () => {
      cy.visit(`${baseUrl}${prefix}/`);
      cy.get(`footer a[href='${prefix}/quality']`).should("have.length", 1);
    });
  });

  it("está no sitemap nos 3 idiomas", () => {
    cy.request(`${baseUrl}/sitemap.xml`).its("body").then((body) => {
      ["/quality", "/en/quality", "/fr/quality"].forEach((p) => expect(body).to.contain(`${p}</loc>`));
    });
  });
});
