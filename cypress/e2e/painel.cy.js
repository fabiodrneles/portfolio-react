/* eslint-disable no-undef */
// Painel (/painel, specs/013): sem login do dono, ninguém vê o editor nem usa as rotas que gravam ou traduzem.

const baseUrl = Cypress.config("baseUrl") || "https://portfolio-react-nine-red.vercel.app";

describe("Painel de administração (/painel) sem login", () => {
  beforeEach(() => cy.setCookie("lang", "pt"));

  it("mostra só a entrada com GitHub, sem o editor", () => {
    cy.visit(`${baseUrl}/painel`);
    cy.get("h1").should("contain", "Painel");
    cy.get("#pt-title").should("not.exist");
    cy.get(".ql-editor").should("not.exist");
  });

  it("não aparece no buscador", () => {
    cy.visit(`${baseUrl}/painel`);
    cy.get('meta[name="robots"]').should("have.attr", "content").and("contain", "noindex");
  });

  ["/en/painel", "/fr/painel"].forEach((caminho) => {
    it(`${caminho} dá 404`, () => {
      cy.request({ url: `${baseUrl}${caminho}`, failOnStatusCode: false }).its("status").should("eq", 404);
    });
  });

  it("a rota que grava o artigo recusa quem não entrou", () => {
    cy.request({
      method: "POST",
      url: `${baseUrl}/api/painel/publicar`,
      body: { pt: {}, en: {}, fr: {} },
      failOnStatusCode: false,
    })
      .its("status")
      .should("eq", 401);
  });

  [
    { metodo: "GET", caminho: "/api/painel/rascunho" },
    { metodo: "POST", caminho: "/api/painel/rascunho" },
    { metodo: "GET", caminho: "/api/painel/artigos" },
    { metodo: "DELETE", caminho: "/api/painel/artigos?slug=qualquer" },
  ].forEach(({ metodo, caminho }) => {
    it(`${metodo} ${caminho} recusa quem não entrou`, () => {
      cy.request({ method: metodo, url: `${baseUrl}${caminho}`, body: { confirmar: "qualquer" }, failOnStatusCode: false })
        .its("status")
        .should("eq", 401);
    });
  });

  it("a rota de tradução recusa quem não entrou, sem chamar a API", () => {
    cy.request({
      method: "POST",
      url: `${baseUrl}/api/painel/traduzir`,
      body: { title: "Teste", contentHtml: "<p>Teste</p>" },
      failOnStatusCode: false,
    }).then((resposta) => {
      expect(resposta.status).to.eq(401);
      expect(JSON.stringify(resposta.body)).not.to.match(/sk-ant|ANTHROPIC/i);
    });
  });

  it("o login com GitHub não aceita um retorno com estado diferente", () => {
    cy.request({
      url: `${baseUrl}/api/painel/callback?code=abc&state=falso`,
      followRedirect: false,
      failOnStatusCode: false,
    }).then((resposta) => {
      // Sem configuração responde 503; com configuração redireciona para o painel com erro. Nunca cria sessão.
      expect([303, 307, 308, 503]).to.include(resposta.status);
      expect(resposta.headers["set-cookie"] ?? []).not.to.satisfy((cookies) =>
        cookies.some((c) => c.startsWith("painel_sessao=") && !c.startsWith("painel_sessao=;"))
      );
    });
  });
});
