/* eslint-disable no-undef */
// Descoberta dos feeds RSS (specs/003): toda página anuncia os três, com o do próprio idioma primeiro.

const baseUrl = Cypress.config("baseUrl") || "https://portfolio-react-nine-red.vercel.app";
const SITE = "https://fabiodorneles.com.br";
const FEEDS = { pt: `${SITE}/feed.xml`, en: `${SITE}/en/feed.xml`, fr: `${SITE}/fr/feed.xml` };
const LANGS = [
  { prefix: "", name: "pt", first: FEEDS.pt },
  { prefix: "/en", name: "en", first: FEEDS.en },
  { prefix: "/fr", name: "fr", first: FEEDS.fr },
];
const PAGES = ["/", "/blog", "/privacy", "/blog/o-teto-tecnico-do-qa-por-que-pular-os-fundamentos-custa-caro"];

describe("Descoberta dos feeds RSS", () => {
  LANGS.forEach(({ prefix, name, first }) => {
    PAGES.forEach((page) => {
      it(`anuncia os 3 feeds com título, o de ${name} primeiro: ${name}${page}`, () => {
        const path = `${prefix}${page === "/" ? "" : page}` || "/";
        cy.request({ url: `${baseUrl}${path}`, headers: { cookie: "lang=pt" } }).its("body").then((html) => {
          const links = [...html.matchAll(/<link rel="alternate" type="application\/rss\+xml"[^>]*>/g)].map((m) => m[0]);
          expect(links, "links RSS no cabeçalho").to.have.length(3);
          const hrefs = links.map((l) => l.match(/href="([^"]+)"/)[1]);
          expect(hrefs[0], "o feed do idioma da página vem primeiro").to.eq(first);
          expect([...hrefs].sort()).to.deep.eq(Object.values(FEEDS).sort());
          links.forEach((l) => expect(l, "título do feed").to.match(/title="[^"]+"/));
        });
      });
    });
  });
});
