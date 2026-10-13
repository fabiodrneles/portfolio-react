/* eslint-disable no-undef */
// Troca de idioma sem salto de rolagem (specs/012): quem está no meio da página continua no mesmo ponto.
const baseUrl = Cypress.config("baseUrl") || "https://portfolio-react-nine-red.vercel.app";
const POSITION = 1000;
const TOLERANCE = 2;

const scrollTo = (y) => cy.window().then((win) => win.scrollTo({ top: y, behavior: "instant" }));

describe("Troca de idioma mantém a posição de rolagem", () => {
  beforeEach(() => cy.setCookie("lang", "pt"));

  [
    { from: "/", to: "en" },
    { from: "/", to: "fr" },
    { from: "/en", to: "pt-BR" },
    { from: "/fr", to: "en" },
  ].forEach(({ from, to }) => {
    it(`de ${from} para ${to}: a página não volta ao topo`, () => {
      cy.visit(`${baseUrl}${from}`);
      scrollTo(POSITION);
      cy.window().its("scrollY").should("be.closeTo", POSITION, TOLERANCE);

      cy.get(`.lang a[hreflang="${to}"]`).click();
      cy.get("html").should("have.attr", "lang", to);
      cy.window().its("scrollY").should("be.closeTo", POSITION, TOLERANCE);
    });
  });
});
