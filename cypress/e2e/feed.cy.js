/* eslint-disable no-undef */
// Feed RSS: um por idioma, XML válido, com todos os artigos e o autor escolhido pelo dono.

const baseUrl = Cypress.config("baseUrl") || "https://portfolio-react-nine-red.vercel.app";
const AUTHOR = "Fábio D. Dorneles";
const FEEDS = [
  { path: "/feed.xml", lang: "pt-BR", blog: "/blog/" },
  { path: "/en/feed.xml", lang: "en", blog: "/en/blog/" },
  { path: "/fr/feed.xml", lang: "fr", blog: "/fr/blog/" },
];

describe("Feed RSS do blog", () => {
  FEEDS.forEach(({ path, lang, blog }) => {
    it(`publica ${path} como RSS 2.0 válido, com autor e artigos no idioma ${lang}`, () => {
      cy.request(`${baseUrl}${path}`).then((res) => {
        expect(res.status).to.eq(200);
        expect(res.headers["content-type"]).to.contain("application/rss+xml");

        const xml = new DOMParser().parseFromString(res.body, "application/xml");
        expect(xml.querySelector("parsererror"), "XML bem formado").to.eq(null);
        expect(xml.documentElement.nodeName).to.eq("rss");
        expect(xml.documentElement.getAttribute("version")).to.eq("2.0");
        expect(xml.querySelector("channel > language").textContent).to.eq(lang);

        const items = [...xml.querySelectorAll("item")];
        expect(items.length, "artigos no feed").to.be.at.least(3);
        items.forEach((item) => {
          expect(item.querySelector("title").textContent.trim(), "título").to.not.be.empty;
          expect(item.querySelector("link").textContent, "link").to.contain(`${blog}`);
          expect(item.querySelector("guid").textContent).to.eq(item.querySelector("link").textContent);
          expect(item.getElementsByTagName("dc:creator")[0].textContent).to.eq(AUTHOR);
          expect(new Date(item.querySelector("pubDate").textContent).toString()).to.not.eq("Invalid Date");
          expect(item.getElementsByTagName("content:encoded")[0].textContent, "texto completo").to.have.length.greaterThan(200);
        });
      });
    });
  });

  it("todo artigo do sitemap está no feed do mesmo idioma", () => {
    cy.request(`${baseUrl}/sitemap.xml`).then((sitemap) => {
      const slugs = [...sitemap.body.matchAll(/<loc>[^<]*?(?<!\/en|\/fr)\/blog\/([^<]+)<\/loc>/g)].map((m) => m[1]);
      expect(slugs.length, "artigos no sitemap").to.be.at.least(3);
      cy.request(`${baseUrl}/feed.xml`).its("body").then((feed) => {
        slugs.forEach((slug) => expect(feed, slug).to.contain(`/blog/${slug}`));
      });
    });
  });

  it("a home e a lista do blog anunciam o feed do idioma", () => {
    cy.setCookie("lang", "pt");
    cy.visit(`${baseUrl}/blog`);
    cy.get('head link[rel="alternate"][type="application/rss+xml"]').should("have.attr", "href").and("match", /\/feed\.xml$/);
    cy.contains("a", "RSS").should("have.attr", "href", "/feed.xml");
  });
});
