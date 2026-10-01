/* eslint-disable no-undef */
// Link RSS no rodapé (specs/003): em toda página, apontando para o feed do idioma.

const baseUrl = Cypress.config("baseUrl") || "https://portfolio-react-nine-red.vercel.app";
const LOCALES = [
  { prefix: "", name: "pt", feed: "/feed.xml" },
  { prefix: "/en", name: "en", feed: "/en/feed.xml" },
  { prefix: "/fr", name: "fr", feed: "/fr/feed.xml" },
];
const PAGES = ["", "/blog", "/privacy"];

describe("Link RSS no rodapé", () => {
  beforeEach(() => cy.setCookie("lang", "pt"));

  LOCALES.forEach(({ prefix, name, feed }) => {
    PAGES.forEach((page) => {
      it(`o rodapé de ${name}${page || "/"} aponta para ${feed}`, () => {
        cy.visit(`${baseUrl}${prefix}${page || "/"}`);
        cy.get("footer a[href$='/feed.xml']")
          .should("have.length", 1)
          .and("be.visible")
          .and("have.attr", "href", feed)
          .and("contain.text", "RSS");
      });
    });

    it(`o alvo de toque do link RSS tem pelo menos 24x24px no celular: ${name}`, () => {
      cy.viewport(375, 667);
      cy.visit(`${baseUrl}${prefix}/`);
      cy.get("footer a[href$='/feed.xml']").then(($a) => {
        const rect = $a[0].getBoundingClientRect();
        expect(rect.width, "largura").to.be.at.least(24);
        expect(rect.height, "altura").to.be.at.least(24);
      });
    });

    it(`o link do rodapé responde com RSS: ${name}`, () => {
      cy.request(`${baseUrl}${feed}`).its("headers.content-type").should("contain", "application/rss+xml");
    });
  });
});
