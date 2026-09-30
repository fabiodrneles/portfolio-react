/* eslint-disable no-undef */
// Fontes locais: o site não depende do Google Fonts (spec 007).
const baseUrl = Cypress.config("baseUrl") || "https://portfolio-react-nine-red.vercel.app";
// O next/font/local nomeia cada família pela variável CSS: display (Bricolage), body (IBM Plex) e mono (JetBrains).
const FAMILIES = ["display", "body", "mono"];

describe("Fontes servidas pelo próprio site", () => {
  it("nenhuma requisição vai ao Google Fonts", () => {
    cy.intercept({ hostname: /fonts\.(googleapis|gstatic)\.com/ }, cy.spy().as("google"));
    cy.visit(`${baseUrl}/en`);
    cy.document().its("fonts.status").should("eq", "loaded");
    cy.get("@google").should("not.have.been.called");
    cy.document().then((doc) => {
      const html = doc.documentElement.outerHTML;
      expect(html).not.to.match(/fonts\.(googleapis|gstatic)\.com/);
    });
  });

  it("as três famílias são carregadas do próprio domínio", () => {
    cy.visit(`${baseUrl}/en`);
    cy.document().its("fonts.status").should("eq", "loaded");
    cy.document().then((doc) => {
      const loaded = [...doc.fonts].filter((face) => face.status === "loaded").map((face) => face.family);
      FAMILIES.forEach((family) => {
        expect(loaded, `fonte ${family} carregada`).to.include(family);
      });
    });
  });
});
