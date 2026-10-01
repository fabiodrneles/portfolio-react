/* eslint-disable no-undef */
// Botão "voltar ao topo" depois de rolar a página: precisa ficar dentro de um landmark (axe "region") e funcionar.
import "cypress-axe";

const baseUrl = Cypress.config("baseUrl") || "https://portfolio-react-nine-red.vercel.app";
const PAGES = ["/", "/en", "/fr/blog"];

describe("Botão voltar ao topo", () => {
  beforeEach(() => cy.setCookie("lang", "pt"));

  PAGES.forEach((page) => {
    it(`${page}: após rolar, fica em uma região nomeada, sem violações do axe, e volta ao topo`, () => {
      cy.visit(`${baseUrl}${page}`);
      cy.scrollTo(0, 2000);
      cy.get(".scrollup--visible").should("be.visible").parent("[role='region']").should("have.attr", "aria-label");
      cy.injectAxe();
      cy.checkA11y(null, { runOnly: { type: "tag", values: ["wcag2a", "wcag2aa", "best-practice"] } });
      cy.get(".scrollup--visible").click();
      cy.window().its("scrollY").should("be.lessThan", 50);
    });
  });
});
