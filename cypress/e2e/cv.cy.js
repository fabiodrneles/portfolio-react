/* eslint-disable no-undef */
// Currículo por idioma (specs/010): PT para quem lê em português, EN para en e fr.

const baseUrl = Cypress.config("baseUrl") || "https://portfolio-react-nine-red.vercel.app";
const LOCALES = [
  { prefix: "", name: "pt", cv: "/CV-FABIO-DARCI-DORNELES.pdf" },
  { prefix: "/en", name: "en", cv: "/CV-FABIO-DARCI-DORNELES-EN.pdf" },
  { prefix: "/fr", name: "fr", cv: "/CV-FABIO-DARCI-DORNELES-EN.pdf" },
];

describe("Currículo por idioma", () => {
  beforeEach(() => cy.setCookie("lang", "pt"));

  LOCALES.forEach(({ prefix, name, cv }) => {
    it(`${name}: o botão baixa ${cv} e o PDF existe`, () => {
      cy.visit(`${baseUrl}${prefix}/`);
      cy.get("a.about__cv").should("have.attr", "href", cv).and("have.attr", "download");
      cy.request(`${baseUrl}${cv}`).then(({ status, headers }) => {
        expect(status).to.eq(200);
        expect(headers["content-type"]).to.include("application/pdf");
      });
    });
  });
});
