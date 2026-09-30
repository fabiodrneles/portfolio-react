/* eslint-disable no-undef */
// Teste de fumaça: garante que as páginas principais e os fluxos críticos continuam funcionando.
const baseUrl = Cypress.config("baseUrl") || "https://portfolio-react-nine-red.vercel.app";

describe("Smoke test do portfólio", () => {
  // O navegador do Cypress pede inglês; o cookie fixa o português (como a escolha manual do visitante).
  beforeEach(() => cy.setCookie("lang", "pt"));

  it("renderiza todas as seções da home", () => {
    cy.visit(baseUrl);
    cy.title().should("include", "Fabio Dorneles");
    cy.get("html").should("have.attr", "lang", "pt-BR");
    ["home", "skills", "services", "portfolio", "qualification", "process", "about", "contact"].forEach((id) => {
      cy.get(`#${id}`).should("exist");
    });
    cy.contains("Todos os testes passaram").should("exist");
  });

  it("navega da home para um artigo do blog e volta", () => {
    cy.visit(baseUrl);
    cy.get("header").contains("Blog").click();
    cy.url().should("match", /\/blog$/);
    cy.get(".blog__card a").first().click();
    cy.get(".blog-post h1").should("be.visible");
    cy.contains("Todos os artigos").click();
    cy.url().should("match", /\/blog$/);
  });

  it("filtra os projetos por linguagem", () => {
    cy.visit(`${baseUrl}/#portfolio`);
    cy.get("#portfolio .filters").contains("Java").click();
    cy.get(".work__grid li").should("have.length", 1).and("contain", "Spring Boot");
    cy.get("#portfolio .filters").contains("Todos").click();
    cy.get(".work__grid li").should("have.length.greaterThan", 1);
  });

  it("mostra a página 404 para rotas inexistentes", () => {
    cy.visit(`${baseUrl}/rota-que-nao-existe`, { failOnStatusCode: false });
    cy.contains("Ops! Essa página não existe.").should("be.visible");
  });

  it("valida o formulário de contato sem enviar e-mail", () => {
    cy.intercept("POST", "https://api.emailjs.com/**", cy.spy().as("emailjs"));
    cy.visit(`${baseUrl}/#contact`);
    cy.wait(3100); // respeita a armadilha de tempo anti-bot
    cy.get("#contact-name").type("Teste");
    cy.get("#contact-email").type("teste@semdominio");
    cy.get("#contact-project").type("Mensagem de teste");
    cy.get(".contact__form button[type=submit]").click();
    cy.get(".contact__status").should("contain", "e-mail válido");
    cy.get("@emailjs").should("not.have.been.called");
  });

  it("publica sitemap com os artigos e imagem de compartilhamento", () => {
    cy.request(`${baseUrl}/sitemap.xml`).its("body").should("include", "/blog/").and("include", "/en/blog");
    cy.request(`${baseUrl}/opengraph-image`).its("headers.content-type").should("include", "image/png");
  });
});
