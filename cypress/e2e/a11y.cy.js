/* eslint-disable no-undef */
// Acessibilidade: WCAG 2.2 nível AA (base da Lei Brasileira de Inclusão, art. 63, e do eMAG),
// verificada com o axe-core em todas as páginas, nos três idiomas, no desktop e no celular.
import "cypress-axe";

const baseUrl = Cypress.config("baseUrl") || "https://portfolio-react-nine-red.vercel.app";
const ARTICLE = "/blog/o-teto-tecnico-do-qa-por-que-pular-os-fundamentos-custa-caro";
const LOCALES = [
  { prefix: "", lang: "pt-BR", name: "pt" },
  { prefix: "/en", lang: "en", name: "en" },
  { prefix: "/fr", lang: "fr", name: "fr" },
];
const PAGES = ["/", "/blog", ARTICLE, "/privacy"];
const url = (prefix, path) => `${baseUrl}${path === "/" ? prefix || "/" : prefix + path}`;

// Todas as regras WCAG 2.0, 2.1 e 2.2 (A e AA) mais as boas práticas do axe.
const AXE_OPTIONS = {
  runOnly: {
    type: "tag",
    values: ["wcag2a", "wcag2aa", "wcag21a", "wcag21aa", "wcag22aa", "best-practice"],
  },
};

describe("Acessibilidade (WCAG 2.2 AA)", () => {
  // O navegador do Cypress pede inglês; o cookie fixa o português nas páginas sem prefixo.
  beforeEach(() => cy.setCookie("lang", "pt"));

  [
    [1280, 800, "desktop"],
    [375, 740, "celular"],
  ].forEach(([width, height, device]) => {
    LOCALES.forEach(({ prefix, name }) => {
      PAGES.forEach((path) => {
        it(`sem violações do axe: ${name} ${path} (${device})`, () => {
          cy.viewport(width, height);
          cy.visit(url(prefix, path));
          cy.get("main").should("be.visible");
          cy.wait(600); // deixa as animações de entrada terminarem antes de medir o contraste
          cy.injectAxe();
          cy.checkA11y(null, AXE_OPTIONS);
        });
      });
    });
  });

  LOCALES.forEach(({ prefix, lang, name }) => {
    it(`declara o idioma da página no <html> (WCAG 3.1.1): ${name}`, () => {
      cy.visit(url(prefix, "/"));
      cy.get("html").should("have.attr", "lang", lang);
    });

    it(`não exige rolagem horizontal em 320px (WCAG 1.4.10): ${name}`, () => {
      cy.viewport(320, 568);
      PAGES.forEach((path) => {
        cy.visit(url(prefix, path));
        cy.get("main").should("be.visible");
        cy.window().then((win) => {
          expect(win.document.documentElement.scrollWidth, `${name} ${path}`).to.be.at.most(win.innerWidth);
        });
      });
    });
  });

  it("o link 'pular para o conteúdo' aparece com o foco e leva ao conteúdo principal (WCAG 2.4.1)", () => {
    cy.visit(url("", "/"));
    cy.get(".skip-link").then(($link) => {
      expect($link[0].getBoundingClientRect().bottom, "escondido fora da tela").to.be.at.most(0);
    });
    cy.get(".skip-link").focus();
    cy.get(".skip-link").then(($link) => {
      expect($link[0].getBoundingClientRect().top, "visível com o foco").to.be.at.least(0);
    });
    cy.get(".skip-link").click();
    cy.location("hash").should("eq", "#conteudo");
    cy.focused().should("have.id", "conteudo");
  });

  it("cada página tem exatamente um <main> como região principal (WCAG 1.3.1)", () => {
    LOCALES.forEach(({ prefix }) => {
      PAGES.forEach((path) => {
        cy.visit(url(prefix, path));
        cy.get("main").should("have.length", 1);
      });
    });
  });

  it("os elementos interativos mostram o foco do teclado (WCAG 2.4.7)", () => {
    cy.visit(url("", "/"));
    cy.get("header a[href], header button, main a[href], main button")
      .filter(":visible")
      .each(($el) => {
        cy.wrap($el).focus();
        cy.wrap($el).should(($focused) => {
          const style = getComputedStyle($focused[0]);
          const hasOutline = style.outlineStyle !== "none" && parseFloat(style.outlineWidth) > 0;
          const hasShadow = style.boxShadow !== "none";
          expect(hasOutline || hasShadow, `foco visível em ${$focused[0].tagName}.${$focused[0].className}`).to.be.true;
        });
      });
  });

  it("os campos do formulário têm rótulo associado (WCAG 1.3.1 e 3.3.2)", () => {
    cy.visit(url("", "/#contact"));
    cy.get('.contact__form input:not([aria-hidden="true"]), .contact__form textarea').each(($field) => {
      expect($field[0].labels.length, `rótulo do campo ${$field.attr("name")}`).to.be.greaterThan(0);
    });
  });

  it("o resultado do envio é anunciado a leitores de tela (WCAG 4.1.3)", () => {
    cy.visit(url("", "/#contact"));
    cy.get(".contact__status").should("have.attr", "role", "status").and("have.attr", "aria-live", "polite");
  });

  it("o CSS respeita a preferência por menos movimento (WCAG 2.3.3)", () => {
    const sheets = [];
    cy.request(url("", "/en")).then(({ body }) => {
      const hrefs = [...body.matchAll(/<link[^>]+rel="stylesheet"[^>]+href="([^"]+)"/g)].map((m) => m[1]);
      expect(hrefs.length, "folhas de estilo encontradas").to.be.greaterThan(0);
      hrefs.forEach((href) => {
        cy.request(new URL(href, baseUrl).href).then((res) => sheets.push(res.body));
      });
    });
    cy.then(() => {
      expect(sheets.some((css) => css.includes("prefers-reduced-motion")), "regra prefers-reduced-motion").to.be.true;
    });
  });
});
