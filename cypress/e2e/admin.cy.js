/* eslint-disable no-undef */
// /admin: o rascunho do artigo gera os campos de SEO nos três idiomas, conta caracteres e avisa o que falta.

const baseUrl = Cypress.config("baseUrl") || "https://portfolio-react-nine-red.vercel.app";

describe("Editor de artigos (/admin)", () => {
  beforeEach(() => {
    // O /admin só existe em português (o proxy reescreve /admin para /pt/admin).
    cy.setCookie("lang", "pt");
    cy.visit(`${baseUrl}/admin`);
    cy.get("#admin-title").should("be.visible");
  });

  const fillLanguage = (tab, { title, excerpt, seoTitle, seoDescription, body }) => {
    cy.contains("button", tab).click();
    cy.get("#admin-title").clear().type(title);
    cy.get("#admin-excerpt").clear().type(excerpt);
    cy.get("#admin-seo-title").clear();
    if (seoTitle) cy.get("#admin-seo-title").type(seoTitle);
    cy.get("#admin-seo-description").clear().type(seoDescription);
    cy.get(".ql-editor").click().type(body);
  };

  it("conta os caracteres do título e da descrição para buscadores", () => {
    cy.get("#admin-seo-title-count").should("contain", "0/43");
    cy.get("#admin-seo-title").type("x".repeat(44));
    cy.get("#admin-seo-title-count").should("contain", "44/43").and("contain", "passou do limite");
    cy.get("#admin-seo-description-count").should("contain", "0/160");
    cy.get("#admin-seo-description").type("y".repeat(10));
    cy.get("#admin-seo-description-count").should("contain", "10/160");
  });

  it("gera seoTitle e seoDescription nos três idiomas e não avisa nada quando está tudo certo", () => {
    fillLanguage("Português", { title: "Artigo de teste", excerpt: "Resumo", seoTitle: "SEO pt", seoDescription: "Descrição pt", body: "Texto em português" });
    fillLanguage("English", { title: "Test article", excerpt: "Summary", seoTitle: "SEO en", seoDescription: "Description en", body: "Text in English" });
    fillLanguage("Français", { title: "Article de test", excerpt: "Résumé", seoTitle: "SEO fr", seoDescription: "Description fr", body: "Texte en français" });
    cy.contains("button", "Gerar código do artigo").click();

    cy.get(".admin__ok").should("contain", "Tudo certo");
    cy.get(".admin__output textarea")
      .invoke("val")
      .then((code) => {
        expect(code).to.contain('seoTitle: "SEO pt"');
        expect(code).to.contain('seoDescription: "Descrição pt"');
        expect(code).to.contain('seoTitle: "SEO en"');
        expect(code).to.contain('seoDescription: "Description fr"');
        expect(code).to.contain("translations:");
      });
  });

  it("avisa quando falta a tradução e quando o SEO passa do limite", () => {
    fillLanguage("Português", {
      title: "T".repeat(50),
      excerpt: "Resumo",
      seoTitle: "s".repeat(44),
      seoDescription: "d".repeat(161),
      body: "Texto",
    });
    cy.contains("button", "Gerar código do artigo").click();

    cy.get(".admin__checks")
      .should("contain", "Falta a tradução em inglês")
      .and("contain", "Falta a tradução em francês")
      .and("contain", "Título para buscadores em português com 44 caracteres")
      .and("contain", "Descrição para buscadores em português com 161 caracteres");
  });

  it("avisa quando o título sem seoTitle deixaria o <title> acima de 60 caracteres", () => {
    fillLanguage("Português", { title: "T".repeat(50), excerpt: "Resumo", seoTitle: "", seoDescription: "Descrição", body: "Texto" });
    cy.contains("button", "Gerar código do artigo").click();
    cy.get(".admin__checks").should("contain", "Sem título para buscadores em português");
  });
});
