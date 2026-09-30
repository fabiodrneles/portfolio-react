/* eslint-disable no-undef */
// SEO dos artigos: os buscadores cortam o título perto de 60 caracteres e a descrição perto de 160.
// Vale para todos os artigos e idiomas do sitemap (specs/003-blog.md).
const baseUrl = Cypress.config("baseUrl") || "https://portfolio-react-nine-red.vercel.app";
const MAX_TITLE = 60;
const MAX_DESCRIPTION = 160;

describe("SEO dos artigos: título e descrição no tamanho dos buscadores", () => {
  beforeEach(() => cy.setCookie("lang", "pt"));

  it("todo artigo, em cada idioma, tem <title> até 60 e meta description até 160 caracteres", () => {
    cy.request(`${baseUrl}/sitemap.xml`).then(({ body }) => {
      const articles = [...body.matchAll(/<loc>([^<]+)<\/loc>/g)]
        .map((m) => new URL(m[1]).pathname)
        .filter((path) => /\/blog\/[^/]+$/.test(path));
      expect(articles.length, "artigos no sitemap").to.be.at.least(6); // 2+ artigos x 3 idiomas

      articles.forEach((path) => {
        cy.request(`${baseUrl}${path}`).then(({ body: html }) => {
          const title = /<title>([^<]*)<\/title>/.exec(html)?.[1].trim();
          const description = /<meta name="description" content="([^"]*)"/.exec(html)?.[1].trim();
          expect(title, `título de ${path}`).to.be.a("string").and.not.be.empty;
          expect(description, `descrição de ${path}`).to.be.a("string").and.not.be.empty;
          expect(title.length, `tamanho do título de ${path}: "${title}"`).to.be.at.most(MAX_TITLE);
          expect(description.length, `tamanho da descrição de ${path}`).to.be.at.most(MAX_DESCRIPTION);
        });
      });
    });
  });
});
