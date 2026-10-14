/* eslint-disable no-undef */
// Estudo de caso do CV Craft (specs/014).
import "cypress-axe";

const baseUrl = Cypress.config("baseUrl") || "https://portfolio-react-nine-red.vercel.app";
const PATH = "/projects/cv-craft";
const REPO = "https://github.com/fabiodrneles/cv-craft";
const LOCALES = [
  { prefix: "", name: "pt" },
  { prefix: "/en", name: "en" },
  { prefix: "/fr", name: "fr" },
];

// As mesmas regras do a11y.cy.js: WCAG 2.0, 2.1 e 2.2 (A e AA) mais as boas práticas do axe.
const AXE_OPTIONS = {
  runOnly: {
    type: "tag",
    values: ["wcag2a", "wcag2aa", "wcag21a", "wcag21aa", "wcag22aa", "best-practice"],
  },
};

describe("Estudo de caso: CV Craft", () => {
  // O navegador do Cypress pede inglês; o cookie fixa o português nas páginas sem prefixo.
  beforeEach(() => cy.setCookie("lang", "pt"));

  LOCALES.forEach(({ prefix, name }) => {
    it(`${name}: tem um h1, os números, a saída da ferramenta e links seguros para o repositório`, () => {
      cy.visit(`${baseUrl}${prefix}${PATH}`);
      cy.get("h1").should("have.length", 1).and("contain", "CV Craft");
      cy.get(".quality__number").should("have.length", 3);
      cy.get(".case__terminal").should("contain", "cv-craft build curriculum.yaml").and("contain", "curriculum.pdf");
      cy.get(`a[href^='${REPO}']`)
        .should("have.length", 3)
        .each(($a) => {
          expect($a.attr("rel")).to.contain("noopener");
        });
      cy.get(`a[href='${prefix ? prefix : "/"}#contact']`).should("have.length.at.least", 1);
      cy.title().should("have.length.lessThan", 61);
    });

    it(`${name}: o cartão do projeto na página inicial leva ao estudo de caso`, () => {
      cy.visit(`${baseUrl}${prefix || "/"}`);
      cy.get(`.work__grid a[href='${prefix}${PATH}']`)
        .should("have.length", 1)
        .and("contain", "CV Craft")
        .and("not.have.attr", "target");
    });

    [
      [1280, 800, "desktop"],
      [375, 740, "celular"],
    ].forEach(([width, height, device]) => {
      it(`${name}: sem violações do axe (${device})`, () => {
        cy.viewport(width, height);
        cy.visit(`${baseUrl}${prefix}${PATH}`);
        cy.get("main").should("be.visible");
        cy.wait(600); // deixa as animações de entrada terminarem antes de medir o contraste
        cy.injectAxe();
        cy.checkA11y(null, AXE_OPTIONS);
      });
    });

    it(`${name}: não exige rolagem horizontal em 320px`, () => {
      cy.viewport(320, 568);
      cy.visit(`${baseUrl}${prefix}${PATH}`);
      cy.get("main").should("be.visible");
      cy.window().then((win) => {
        expect(win.document.documentElement.scrollWidth).to.be.at.most(win.innerWidth);
      });
    });
  });

  it("está no sitemap nos 3 idiomas", () => {
    cy.request(`${baseUrl}/sitemap.xml`).its("body").then((body) => {
      [PATH, `/en${PATH}`, `/fr${PATH}`].forEach((p) => expect(body).to.contain(`${p}</loc>`));
    });
  });
});
