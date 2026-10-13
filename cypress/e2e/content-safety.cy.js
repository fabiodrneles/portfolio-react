/* eslint-disable no-undef */
// Segurança do conteúdo dos artigos (specs/003, critério 11): o HTML do editor do /admin é saneado
// antes de virar código, e nenhum artigo publicado traz script, atributo on* ou link javascript:.

const baseUrl = Cypress.config("baseUrl") || "https://portfolio-react-nine-red.vercel.app";
const HOSTILE =
  '<p>Texto seguro</p><img src="x" onerror="alert(1)"><a href="javascript:alert(1)">clique</a>' +
  '<script>alert(1)</script><iframe src="https://example.com"></iframe><p onclick="alert(1)">fim</p>';

const DANGEROUS = /<script|<iframe|<object|<embed|\son[a-z]+\s*=|javascript:/i;

describe("Segurança do conteúdo dos artigos", () => {
  beforeEach(() => cy.setCookie("lang", "pt"));

  it("o /admin remove script, atributos on* e links javascript: do código gerado", () => {
    cy.visit(`${baseUrl}/admin`);
    cy.get("#admin-title").type("Artigo seguro");
    cy.get(".ql-editor").click();
    cy.get(".ql-editor").then(($editor) => {
      const data = new DataTransfer();
      data.setData("text/html", HOSTILE);
      data.setData("text/plain", "Texto seguro");
      $editor[0].dispatchEvent(new ClipboardEvent("paste", { clipboardData: data, bubbles: true, cancelable: true }));
    });
    cy.get(".ql-editor").should("contain", "Texto seguro");
    cy.contains("button", "Gerar código do artigo").click();
    cy.get(".admin__output textarea")
      .invoke("val")
      .then((code) => {
        expect(code).to.contain("Texto seguro");
        expect(code, "código gerado").not.to.match(DANGEROUS);
      });
  });

  it("nenhum artigo publicado traz script, atributo on* ou link javascript:, nos três idiomas", () => {
    cy.request(`${baseUrl}/sitemap.xml`).then(({ body }) => {
      const articles = [...body.matchAll(/<loc>https:\/\/fabiodorneles\.com\.br([^<]*\/blog\/[^<]+)<\/loc>/g)].map((m) => m[1]);
      expect(articles.length, "artigos no sitemap").to.be.greaterThan(2);
      articles.forEach((path) => {
        cy.visit(`${baseUrl}${path}`);
        cy.get(".blog-post__content").then(($content) => {
          expect($content.html(), path).not.to.match(DANGEROUS);
        });
      });
    });
  });
});
