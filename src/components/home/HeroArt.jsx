import React from "react";
import CodeWindow from "../codewindow/CodeWindow";

/* Arte da home: um teste Cypress "rodando" no próprio Fabio, sobre o blob animado.
   Feita só com HTML/CSS (sem imagem para carregar). */
const lines = [
  [["fn", "describe"], ["", "("], ["str", '"Fabio Dorneles"'], ["", ", () => {"]],
  [["", "  "], ["fn", "it"], ["", "("], ["str", '"is a skilled engineer"'], ["", ", () => {"]],
  [["", "    "], ["prop", "cy"], ["", "."], ["fn", "visit"], ["", "("], ["str", '"/fabio"'], ["", ")"]],
  [["", "    "], ["prop", "cy"], ["", "."], ["fn", "get"], ["", "("], ["str", '"@stack"'], ["", ")"]],
  [["", "      ."], ["fn", "should"], ["", "("], ["str", '"include"'], ["", ", "], ["str", '"Go"'], ["", ")"]],
  [["", "      ."], ["fn", "and"], ["", "("], ["str", '"include"'], ["", ", "], ["str", '"Cypress"'], ["", ")"]],
  [["", "    "], ["prop", "cy"], ["", "."], ["fn", "hire"], ["", "()."], ["fn", "should"], ["", "("], ["str", '"be.ok"'], ["", ")"]],
  [["", "  })"]],
  [["", "})"]],
];

const HeroArt = () => {
  return (
    <div
      className="home__img"
      role="img"
      aria-label="Ilustração de um teste Cypress verificando as habilidades de Fabio, com todos os testes passando"
    >
      <CodeWindow
        className="home__code"
        file="fabio.cy.js"
        lines={lines}
        footer={
          <>
            <span className="home__result">
              <span className="tk-ok">✓</span> is a skilled engineer{" "}
              <span className="tk-muted">(42ms)</span>
            </span>
            <span className="home__result">
              <span className="tk-ok">All specs passed!</span>{" "}
              <span className="tk-muted">1 of 1</span>
            </span>
          </>
        }
      />
    </div>
  );
};

export default HeroArt;
