/* eslint-disable no-undef */
// UI/UX: responsividade, alvos de toque (WCAG 2.5.8), estrutura de títulos, metadados, links
// e páginas de erro. Proxies automáticos de usabilidade (ISO 9241-11 e ISO/IEC 25010).
const baseUrl = Cypress.config("baseUrl") || "https://portfolio-react-nine-red.vercel.app";
const ARTICLE = "/blog/o-teto-tecnico-do-qa-por-que-pular-os-fundamentos-custa-caro";
const PAGES = ["/", "/blog", ARTICLE, "/privacy"];
const LOCALES = [
  { prefix: "", name: "pt" },
  { prefix: "/en", name: "en" },
  { prefix: "/fr", name: "fr" },
];
const VIEWPORTS = [
  [320, 568, "celular pequeno"],
  [375, 667, "celular"],
  [768, 1024, "tablet"],
  [1024, 768, "notebook"],
  [1440, 900, "monitor grande"],
];
const pageOf = (prefix, path) => `${baseUrl}${path === "/" ? prefix || "/" : prefix + path}`;

describe("UI/UX: responsividade", () => {
  beforeEach(() => cy.setCookie("lang", "pt"));

  VIEWPORTS.forEach(([width, height, device]) => {
    it(`sem rolagem horizontal e com cabeçalho e conteúdo visíveis: ${device} (${width}px)`, () => {
      cy.viewport(width, height);
      PAGES.forEach((path) => {
        cy.visit(pageOf("", path));
        cy.get("header").should("be.visible");
        cy.get("main").should("be.visible");
        cy.window().then((win) => {
          expect(win.document.documentElement.scrollWidth, `largura do conteúdo em ${path}`).to.be.at.most(win.innerWidth);
        });
      });
    });
  });

  it("os alvos de toque têm pelo menos 24x24px no celular (WCAG 2.5.8)", () => {
    cy.viewport(375, 667);
    PAGES.forEach((path) => {
      cy.visit(pageOf("", path));
      cy.document().then((doc) => {
        const tooSmall = [...doc.querySelectorAll("a[href], button, input, select, textarea, summary")]
          .filter((el) => {
            const rect = el.getBoundingClientRect();
            const style = doc.defaultView.getComputedStyle(el);
            return rect.width > 0 && rect.height > 0 && style.visibility !== "hidden" && !el.closest('[aria-hidden="true"]');
          })
          // links no meio de um texto corrido são exceção prevista na própria norma
          .filter((el) => !(doc.defaultView.getComputedStyle(el).display === "inline" && el.closest("p, li, span:not([class])")))
          .filter((el) => {
            const rect = el.getBoundingClientRect();
            return rect.width < 24 || rect.height < 24;
          })
          .map((el) => `${el.tagName.toLowerCase()}.${el.className} (${el.textContent.trim().slice(0, 20)})`);
        expect(tooSmall, `alvos pequenos em ${path}`).to.deep.eq([]);
      });
    });
  });
});

describe("UI/UX: estrutura e metadados de cada página", () => {
  beforeEach(() => cy.setCookie("lang", "pt"));

  LOCALES.forEach(({ prefix, name }) => {
    it(`títulos bem hierarquizados, título único e metadados completos: ${name}`, () => {
      const titles = [];
      PAGES.forEach((path) => {
        cy.visit(pageOf(prefix, path));
        cy.get("h1").should("have.length", 1);
        cy.document().then((doc) => {
          const levels = [...doc.querySelectorAll("h1, h2, h3, h4, h5, h6")].map((h) => Number(h.tagName[1]));
          levels.forEach((level, i) => {
            if (i > 0) expect(level - levels[i - 1], `salto de título em ${path}`).to.be.at.most(1);
          });

          expect(doc.title.trim().length, `título de ${path}`).to.be.greaterThan(5);
          titles.push(doc.title);

          const meta = (selector) => doc.querySelector(selector)?.getAttribute("content") || "";
          const description = meta('meta[name="description"]');
          expect(description.length, `descrição de ${path}`).to.be.within(50, 320);
          ["og:title", "og:description", "og:image"].forEach((prop) => expect(meta(`meta[property="${prop}"]`), `${prop} em ${path}`).not.to.be.empty);

          const canonical = doc.querySelector('link[rel="canonical"]')?.getAttribute("href");
          expect(canonical, `canonical de ${path}`).to.match(/^https:\/\/fabiodorneles\.com\.br/);
          ["pt-BR", "en", "fr", "x-default"].forEach((hreflang) =>
            expect(doc.querySelector(`link[rel="alternate"][hreflang="${hreflang}"]`), `hreflang ${hreflang} em ${path}`).not.to.be.null
          );
        });
      });
      cy.then(() => expect(new Set(titles).size, "cada página tem um título diferente").to.eq(titles.length));
    });
  });

  it("a imagem de compartilhamento de cada página existe e é PNG", () => {
    PAGES.forEach((path) => {
      cy.visit(pageOf("/en", path));
      cy.get('meta[property="og:image"]')
        .invoke("attr", "content")
        .then((content) => {
          const image = new URL(content);
          cy.request(`${baseUrl}${image.pathname}${image.search}`).then(({ status, headers }) => {
            expect(status).to.eq(200);
            expect(headers["content-type"]).to.include("image/png");
          });
        });
    });
  });
});

describe("UI/UX: links e páginas de erro", () => {
  beforeEach(() => cy.setCookie("lang", "pt"));

  it("nenhum link interno das páginas principais está quebrado", () => {
    const targets = new Set();
    LOCALES.forEach(({ prefix }) => {
      PAGES.forEach((path) => {
        cy.visit(pageOf(prefix, path));
        cy.get('a[href^="/"]').each(($a) => {
          const href = $a.attr("href");
          if (!href.startsWith("//")) targets.add(href.split("#")[0] || "/");
        });
      });
    });
    cy.then(() => {
      expect(targets.size, "links internos encontrados").to.be.greaterThan(10);
      [...targets].forEach((href) => {
        cy.request({ url: `${baseUrl}${href}`, failOnStatusCode: false }).its("status", { log: false }).should("eq", 200);
      });
    });
  });

  LOCALES.forEach(({ prefix, name }) => {
    it(`a página 404 responde 404 e leva de volta ao início: ${name}`, () => {
      cy.request({ url: `${baseUrl}${prefix}/nao-existe`, failOnStatusCode: false }).its("status").should("eq", 404);
      cy.visit(`${baseUrl}${prefix}/nao-existe`, { failOnStatusCode: false });
      cy.get("main h1").should("contain.text", "404");
      cy.get("main a").first().should("have.attr", "href", prefix || "/");
    });
  });
});
