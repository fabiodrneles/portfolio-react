/* eslint-disable no-undef */
// Segurança: cabeçalhos HTTP (OWASP Secure Headers), política de divulgação de vulnerabilidades
// (RFC 9116), cookies, links externos, vazamento de informação e superfície do formulário.
const baseUrl = Cypress.config("baseUrl") || "https://portfolio-react-nine-red.vercel.app";
const ARTICLE = "/blog/o-teto-tecnico-do-qa-por-que-pular-os-fundamentos-custa-caro";
const PAGES = ["/en", "/en/blog", `/en${ARTICLE}`, "/en/privacy", "/en/nao-existe"];
const DAY_MS = 24 * 60 * 60 * 1000;

const get = (path) => cy.request({ url: `${baseUrl}${path}`, failOnStatusCode: false });

describe("Segurança: cabeçalhos HTTP", () => {
  PAGES.forEach((path) => {
    it(`envia os cabeçalhos de segurança em ${path}`, () => {
      get(path).then(({ headers }) => {
        const csp = headers["content-security-policy"];
        expect(csp, "Content-Security-Policy").to.be.a("string");
        ["default-src 'self'", "object-src 'none'", "base-uri 'self'", "frame-ancestors 'self'", "form-action 'self'"].forEach((d) =>
          expect(csp, `CSP contém ${d}`).to.include(d)
        );
        expect(csp, "CSP sem unsafe-eval").not.to.include("unsafe-eval");
        expect(csp, "CSP libera só o EmailJS para conexões").to.include("connect-src 'self' https://api.emailjs.com");

        const hsts = headers["strict-transport-security"];
        expect(hsts, "Strict-Transport-Security").to.be.a("string");
        expect(Number(/max-age=(\d+)/.exec(hsts)[1]), "HSTS por pelo menos 1 ano").to.be.at.least(31536000);

        expect(headers["x-content-type-options"], "X-Content-Type-Options").to.eq("nosniff");
        expect(headers["x-frame-options"], "X-Frame-Options").to.eq("SAMEORIGIN");
        expect(headers["referrer-policy"], "Referrer-Policy").to.eq("strict-origin-when-cross-origin");
        expect(headers["permissions-policy"], "Permissions-Policy").to.include("camera=()");
        expect(headers["cross-origin-opener-policy"], "Cross-Origin-Opener-Policy").to.eq("same-origin");
        expect(headers, "não revela a tecnologia do servidor").not.to.have.property("x-powered-by");
      });
    });
  });

  it("as páginas não definem cookies por conta própria", () => {
    PAGES.forEach((path) => {
      get(path).then(({ headers }) => expect(headers, `Set-Cookie em ${path}`).not.to.have.property("set-cookie"));
    });
  });

  it("não publica source maps dos scripts de produção", () => {
    get("/en").then(({ body }) => {
      const script = /<script[^>]+src="([^"]+\.js)"/.exec(body);
      expect(script, "script encontrado na página").not.to.be.null;
      get(`${script[1]}.map`).its("status").should("eq", 404);
    });
  });
});

describe("Segurança: divulgação de vulnerabilidades (RFC 9116)", () => {
  it("publica /.well-known/security.txt válido e dentro do prazo", () => {
    get("/.well-known/security.txt").then(({ status, headers, body }) => {
      expect(status).to.eq(200);
      expect(headers["content-type"]).to.include("text/plain");
      expect(body, "Contact").to.match(/^Contact: (mailto:|https:\/\/)\S+/m);
      expect(body, "Canonical").to.match(/^Canonical: https:\/\/\S+\/\.well-known\/security\.txt/m);
      const expires = new Date(/^Expires: (\S+)/m.exec(body)[1]);
      expect(expires.getTime(), "Expires é uma data válida").not.to.be.NaN;
      // Falha 30 dias antes de vencer: é o lembrete para renovar o arquivo (e o SECURITY.md).
      expect(expires.getTime() - Date.now(), "faltam mais de 30 dias para o security.txt expirar").to.be.greaterThan(30 * DAY_MS);
    });
  });
});

describe("Segurança: cookies, links e superfície de ataque", () => {
  it("o único cookie criado é o de idioma, com SameSite e validade de 1 ano", () => {
    cy.visit(`${baseUrl}/en`);
    cy.getCookies().should("have.length", 0);
    cy.get('.lang a[hreflang="fr"]').click();
    cy.url().should("include", "/fr");
    cy.getCookies().then((cookies) => {
      expect(cookies.map((c) => c.name)).to.deep.eq(["lang"]);
      expect(cookies[0].sameSite).to.eq("lax");
      const days = (cookies[0].expiry * 1000 - Date.now()) / DAY_MS;
      expect(days, "validade em dias").to.be.within(360, 366);
    });
  });

  it("links que abrem em nova aba usam noopener/noreferrer", () => {
    PAGES.slice(0, 4).forEach((path) => {
      cy.visit(`${baseUrl}${path}`);
      cy.get('a[target="_blank"]').each(($a) => {
        expect($a.attr("rel") || "", `rel de ${$a.attr("href")}`).to.match(/noopener|noreferrer/);
      });
    });
  });

  it("nenhum link usa o esquema javascript:", () => {
    PAGES.slice(0, 4).forEach((path) => {
      cy.visit(`${baseUrl}${path}`);
      cy.get('a[href^="javascript:" i]').should("not.exist");
    });
  });

  it("scripts, estilos, imagens e frames vêm só do próprio site", () => {
    PAGES.slice(0, 4).forEach((path) => {
      cy.visit(`${baseUrl}${path}`);
      cy.document().then((doc) => {
        const origin = doc.location.origin;
        const external = [...doc.querySelectorAll("script[src], link[rel='stylesheet'][href], img[src], iframe[src], source[src], embed[src], object[data]")]
          .map((el) => el.src || el.href || el.data)
          .filter((src) => src && !src.startsWith("data:") && !src.startsWith(origin));
        expect(external, `recursos externos em ${path}`).to.deep.eq([]);
      });
    });
  });

  it("o /admin não é indexado", () => {
    cy.visit(`${baseUrl}/en/admin`);
    cy.get('meta[name="robots"]').should("have.attr", "content").and("include", "noindex");
  });

  it("o formulário limita o tamanho dos campos e tem armadilha anti-robô escondida", () => {
    cy.visit(`${baseUrl}/en#contact`);
    cy.get('.contact__form input[name="name"]').should("have.attr", "maxlength", "100");
    cy.get('.contact__form input[name="email"]').should("have.attr", "maxlength", "254").and("have.attr", "type", "email");
    cy.get('.contact__form textarea[name="project"]').should("have.attr", "maxlength", "5000");
    cy.get('.contact__form input[name="website"]')
      .should("have.attr", "aria-hidden", "true")
      .and("have.attr", "tabindex", "-1")
      .and("have.attr", "autocomplete", "off");
  });
});
