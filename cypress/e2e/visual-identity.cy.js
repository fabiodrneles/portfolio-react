/* eslint-disable no-undef */
// Identidade visual (specs/011): papel, tinta e um único destaque vermelho.
// Garante que os padrões removidos por parecerem template ou IA não voltem.
const baseUrl = Cypress.config("baseUrl") || "https://portfolio-react-nine-red.vercel.app";
const LOCALES = ["", "/en", "/fr"];

const rgb = (value) => value.replace(/\s+/g, "");

describe("Identidade visual: papel, tinta e um único destaque", () => {
  beforeEach(() => cy.setCookie("lang", "pt"));

  it("o fundo é papel e o texto é tinta", () => {
    cy.visit(`${baseUrl}/`);
    cy.get("body").should(($body) => {
      const style = getComputedStyle($body[0]);
      expect(rgb(style.backgroundColor), "fundo").to.eq("rgb(245,242,236)");
      expect(rgb(style.color), "texto").to.eq("rgb(28,27,25)");
    });
  });

  it("o destaque do tema é o vermelho shu e não há verde neon em nenhum elemento", () => {
    cy.visit(`${baseUrl}/`);
    cy.document().then((doc) => {
      const root = getComputedStyle(doc.documentElement);
      expect(root.getPropertyValue("--accent").trim().toLowerCase()).to.match(/var\(--shu\)|#b5352b/);
      expect(root.getPropertyValue("--shu").trim().toLowerCase()).to.eq("#b5352b");

      // Verde saturado (o antigo #3ddc97 e parecidos): G alto, bem acima de R e B
      const neon = [...doc.querySelectorAll("body *")].filter((el) => {
        const style = getComputedStyle(el);
        return [style.color, style.backgroundColor, style.borderTopColor].some((c) => {
          const m = c.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*([\d.]+))?/);
          if (!m || m[4] === "0") return false;
          const [r, g, b] = [Number(m[1]), Number(m[2]), Number(m[3])];
          return g > 150 && g - r > 60 && g - b > 30;
        });
      });
      expect(neon.map((el) => el.className || el.tagName), "elementos em verde neon").to.deep.eq([]);
    });
  });

  LOCALES.forEach((prefix) => {
    it(`sem terminal falso, ponto piscando, rótulos "//" ou "01 /" e com títulos em serifa: ${prefix || "pt"}`, () => {
      cy.visit(`${baseUrl}${prefix || "/"}`);
      cy.get(".runner__code, .runner__dots, .pulse-dot, .runner__glow").should("not.exist");
      cy.get(".eyebrow, .hero__eyebrow").each(($label) => {
        expect($label.text().trim(), "rótulo").not.to.match(/^(\/\/|\$|\d{2}\s*\/)/);
      });
      cy.get("h1, h2").each(($heading) => {
        expect(getComputedStyle($heading[0]).fontFamily, "fonte do título").to.match(/display|Newsreader/i);
      });
      cy.get(".inspection").should("be.visible");
      cy.get(".inspection__seal").should("have.text", "FD");
    });
  });
});
