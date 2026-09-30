/* eslint-disable no-undef */
// Idiomas: detecção pelo navegador, troca manual pelo seletor e memória da escolha.
const baseUrl = Cypress.config("baseUrl") || "https://portfolio-react-nine-red.vercel.app";

const visitWithLanguage = (path, acceptLanguage) =>
  cy.visit(`${baseUrl}${path}`, { headers: { "Accept-Language": acceptLanguage } });

describe("Idiomas do site", () => {
  it("abre em francês quando o navegador pede francês", () => {
    visitWithLanguage("/", "fr-FR,fr;q=0.9");
    cy.url().should("match", /\/fr$/);
    cy.get("html").should("have.attr", "lang", "fr");
    cy.contains("Tous les tests sont passés").should("exist");
  });

  it("abre em português quando o navegador pede um idioma sem tradução", () => {
    visitWithLanguage("/", "de-DE,de;q=0.9");
    cy.get("html").should("have.attr", "lang", "pt-BR");
  });

  it("troca de idioma pelo seletor e lembra da escolha", () => {
    visitWithLanguage("/", "en-US,en;q=0.9");
    cy.url().should("match", /\/en$/);
    cy.contains("Let's talk").should("exist");

    cy.get('.lang a[hreflang="pt-BR"]').click();
    cy.get("html").should("have.attr", "lang", "pt-BR");
    cy.getCookie("lang").should("have.property", "value", "pt");

    // Mesmo com o navegador em inglês, a escolha manual (cookie) vale mais
    visitWithLanguage("/blog", "en-US,en;q=0.9");
    cy.url().should("match", /\/blog$/);
    cy.get("html").should("have.attr", "lang", "pt-BR");
  });

  it("mantém a página atual ao trocar de idioma", () => {
    cy.setCookie("lang", "pt");
    cy.visit(`${baseUrl}/blog`);
    cy.get('.lang a[hreflang="en"]').click();
    cy.url().should("match", /\/en\/blog$/);
    cy.contains("h1", "Articles").should("be.visible");
  });

  it("mostra os três serviços traduzidos", () => {
    cy.visit(`${baseUrl}/en#services`);
    ["QA Engineering", "Back-End", "Front-End"].forEach((title) => {
      cy.get("#services").contains("h3", title).should("be.visible");
    });
  });
});
