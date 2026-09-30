/* eslint-disable no-undef */
// Formulário de contato: os fluxos de envio, sem mandar e-mail de verdade (o EmailJS é simulado).
//
// Os testes que dependem de um envio bem-sucedido só rodam quando o build recebeu chaves do EmailJS
// (os pipelines de qualidade injetam chaves falsas e definem CYPRESS_EMAILJS_CONFIGURED=true).
// Sem chaves, a biblioteca do EmailJS recusa o envio antes de chamar a rede.
const baseUrl = Cypress.config("baseUrl") || "https://portfolio-react-nine-red.vercel.app";
const withKeys = Cypress.env("EMAILJS_CONFIGURED") ? it : it.skip;
const SEND_API = "https://api.emailjs.com/api/v1.0/email/send";
const PERSON = { name: "Maria", email: "maria@example.com", project: "Quero um site" };

const fill = () => {
  cy.get('.contact__form input[name="name"]').should("not.be.disabled").type(PERSON.name, { delay: 0 });
  cy.get('.contact__form input[name="email"]').should("not.be.disabled").type(PERSON.email, { delay: 0 });
  cy.get('.contact__form textarea[name="project"]').should("not.be.disabled").type(PERSON.project, { delay: 0 });
};
const submit = () => cy.get('.contact__form button[type="submit"]').click();
const status = () => cy.get(".contact__status");

describe("Formulário de contato: fluxos de envio", () => {
  beforeEach(() => {
    cy.setCookie("lang", "pt");
    cy.visit(`${baseUrl}/#contact`);
  });

  it("ignora um envio imediato (típico de robô) sem chamar o EmailJS", () => {
    cy.intercept("POST", "https://api.emailjs.com/**", cy.spy().as("send"));
    fill();
    submit(); // menos de 3 segundos depois de a página abrir
    status().should("contain.text", "Mensagem enviada");
    cy.get("@send").should("not.have.been.called");
  });

  it("ignora o formulário quando o campo armadilha vem preenchido", () => {
    cy.intercept("POST", "https://api.emailjs.com/**", cy.spy().as("send"));
    cy.wait(3200);
    fill();
    cy.get('.contact__form input[name="website"]').invoke("val", "http://spam.example");
    submit();
    cy.get("@send").should("not.have.been.called");
  });

  it("se o servidor falhar, mostra o erro e mantém o que foi digitado", () => {
    cy.intercept("POST", "https://api.emailjs.com/**", { statusCode: 400, body: "erro" });
    cy.wait(3200);
    fill();
    submit();
    status().should("contain.text", "Algo deu errado");
    cy.get('.contact__form input[name="name"]').should("have.value", PERSON.name);
    cy.get('.contact__form textarea[name="project"]').should("have.value", PERSON.project);
  });

  withKeys("envia só nome, e-mail e mensagem, confirma e limpa o formulário", () => {
    cy.intercept("POST", SEND_API, { statusCode: 200, body: "OK" }).as("send");
    cy.wait(3200);
    fill();
    submit();
    cy.wait("@send").then(({ request }) => {
      const body = typeof request.body === "string" ? JSON.parse(request.body) : request.body;
      expect(body.template_params).to.deep.eq(PERSON);
    });
    status().should("contain.text", "Mensagem enviada");
    cy.get('.contact__form input[name="name"]').should("have.value", "");
  });

  withKeys("bloqueia um segundo envio logo em seguida (intervalo de 1 minuto)", () => {
    cy.intercept("POST", SEND_API, { statusCode: 200, body: "OK" }).as("send");
    cy.wait(3200);
    fill();
    submit();
    status().should("contain.text", "Mensagem enviada");
    fill();
    submit();
    status().should("contain.text", "Aguarde");
    cy.get("@send.all").should("have.length", 1);
  });
});
