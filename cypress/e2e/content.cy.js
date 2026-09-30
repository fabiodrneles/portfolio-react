/* eslint-disable no-undef */
// Conteúdo e descoberta: sitemap, robots, manifest, dados estruturados, botões de compartilhar
// e arquivos públicos. Garante que o site continua "achável" por buscadores e por quem compartilha.
const baseUrl = Cypress.config("baseUrl") || "https://portfolio-react-nine-red.vercel.app";
const ARTICLE = "/blog/o-teto-tecnico-do-qa-por-que-pular-os-fundamentos-custa-caro";
const SITE = "https://fabiodorneles.com.br";

describe("Conteúdo: sitemap, robots e arquivos públicos", () => {
  beforeEach(() => cy.setCookie("lang", "pt"));

  it("todas as URLs do sitemap respondem 200, nos três idiomas", () => {
    cy.request(`${baseUrl}/sitemap.xml`).then(({ body }) => {
      const urls = [...body.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
      expect(urls.length, "URLs no sitemap").to.be.at.least(15);
      ["", "/en", "/fr"].forEach((prefix) => {
        [`${SITE}${prefix || "/"}`, `${SITE}${prefix}/blog`, `${SITE}${prefix}/privacy`, `${SITE}${prefix}${ARTICLE}`].forEach((expected) =>
          expect(urls, `sitemap tem ${expected}`).to.include(expected)
        );
      });
      urls.forEach((url) => cy.request(`${baseUrl}${new URL(url).pathname}`).its("status", { log: false }).should("eq", 200));
    });
  });

  it("o robots.txt libera o site e aponta para o sitemap", () => {
    cy.request(`${baseUrl}/robots.txt`).its("body").should("match", /User-agent: \*/).and("match", /Sitemap: https:\/\/\S+\/sitemap\.xml/);
  });

  it("o manifest é um JSON válido com o nome do site", () => {
    cy.request(`${baseUrl}/manifest.json`).its("body").should("have.property", "name").and("include", "Fabio");
  });

  it("o ícone e o currículo em PDF estão disponíveis", () => {
    cy.request(`${baseUrl}/favicon.svg`).its("status").should("eq", 200);
    cy.request(`${baseUrl}/CV-FABIO-DARCI-DORNELES.pdf`).then(({ status, headers }) => {
      expect(status).to.eq(200);
      expect(headers["content-type"]).to.include("application/pdf");
    });
  });
});

describe("Conteúdo: dados estruturados e compartilhamento", () => {
  beforeEach(() => cy.setCookie("lang", "pt"));

  const jsonLd = () =>
    cy.document().then((doc) => [...doc.querySelectorAll('script[type="application/ld+json"]')].map((s) => JSON.parse(s.textContent)));

  it("a home publica os dados de Pessoa (schema.org) em JSON válido", () => {
    cy.visit(`${baseUrl}/`);
    jsonLd().then((items) => {
      const person = items.find((i) => i["@type"] === "Person");
      expect(person, "JSON-LD Person").to.exist;
      expect(person["@context"]).to.eq("https://schema.org");
      expect(person.name).to.eq("Fabio Dorneles");
      person.sameAs.forEach((link) => expect(link).to.match(/^https:\/\//));
    });
  });

  it("cada artigo publica os dados de BlogPosting com título, data e autor", () => {
    cy.visit(`${baseUrl}${ARTICLE}`);
    jsonLd().then((items) => {
      const post = items.find((i) => i["@type"] === "BlogPosting");
      expect(post, "JSON-LD BlogPosting").to.exist;
      expect(post.headline).to.be.a("string").and.not.be.empty;
      expect(post.datePublished).to.match(/^\d{4}-\d{2}-\d{2}/);
      expect(post.author.name).to.eq("Fabio Dorneles");
    });
  });

  it("o artigo tem botões de compartilhar com o endereço do próprio artigo", () => {
    cy.visit(`${baseUrl}/en${ARTICLE}`);
    const encoded = encodeURIComponent(`${SITE}/en${ARTICLE}`);
    cy.get(".share a").should("have.length", 5);
    cy.get('.share a[href*="linkedin.com/sharing/share-offsite"]').should("have.attr", "href").and("include", encoded);
    cy.get('.share a[href*="x.com/intent/post"]').should("have.attr", "href").and("include", encoded);
    cy.get('.share a[href*="wa.me"]').should("have.attr", "href").and("include", encoded);
    cy.get('.share a[href*="facebook.com/sharer"]').should("have.attr", "href").and("include", encoded);
    cy.get('.share a[href*="t.me/share"]').should("have.attr", "href").and("include", encoded);
    cy.get(".share a").each(($a) => expect($a).to.have.attr("target", "_blank"));
  });

  it("todo artigo do blog tem título, data, botões de compartilhar e canonical próprio", () => {
    cy.request(`${baseUrl}/sitemap.xml`).then(({ body }) => {
      const slugs = [...new Set([...body.matchAll(/<loc>[^<]*\/blog\/([^</]+)<\/loc>/g)].map((m) => m[1]))];
      expect(slugs.length, "artigos no sitemap").to.be.at.least(2);
      slugs.forEach((slug) => {
        cy.visit(`${baseUrl}/blog/${slug}`);
        cy.get("article h1").should("not.be.empty");
        cy.get("article .share").should("exist");
        cy.get('link[rel="canonical"]').should("have.attr", "href").and("include", `/blog/${slug}`);
      });
    });
  });
});
