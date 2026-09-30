/* eslint-disable no-undef */
// Blocos de código nos artigos: o código aparece, quebra a linha (sem região rolável) e passa no axe.
import "cypress-axe";

const baseUrl = Cypress.config("baseUrl") || "https://portfolio-react-nine-red.vercel.app";
const ARTICLE = "/blog/estudo-em-sombra-com-ia-diagnostico-de-testes-instaveis";
const LOCALES = [
  { prefix: "", name: "pt" },
  { prefix: "/en", name: "en" },
  { prefix: "/fr", name: "fr" },
];

describe("Blocos de código nos artigos", () => {
  beforeEach(() => cy.setCookie("lang", "pt"));

  LOCALES.forEach(({ prefix, name }) => {
    it(`exibe o código com quebra de linha e sem rolagem horizontal: ${name}`, () => {
      cy.viewport(375, 740);
      cy.visit(`${baseUrl}${prefix}${ARTICLE}`);
      cy.get(".blog-post__content pre").should("have.length.greaterThan", 2);
      cy.get(".blog-post__content pre").first().should("contain", "cy.visit");
      cy.get(".blog-post__content pre").each(($pre) => {
        expect($pre.css("white-space")).to.eq("pre-wrap");
        expect($pre[0].scrollWidth, "sem rolagem horizontal").to.be.at.most($pre[0].clientWidth);
      });
    });

    it(`não tem violações do axe com blocos de código: ${name}`, () => {
      cy.viewport(375, 740);
      cy.visit(`${baseUrl}${prefix}${ARTICLE}`);
      cy.get("main").should("be.visible");
      cy.wait(600);
      cy.injectAxe();
      cy.checkA11y(null, {
        runOnly: { type: "tag", values: ["wcag2a", "wcag2aa", "wcag21a", "wcag21aa", "wcag22aa", "best-practice"] },
      });
    });
  });
});
