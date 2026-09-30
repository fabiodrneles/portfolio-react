import React from "react";

/* Arte da home: janela de editor com um "perfil em código" e um selo de testes,
   sobre o blob animado. Feita só com HTML/CSS (sem imagem para carregar). */
const HeroArt = () => {
  return (
    <div
      className="home__img"
      role="img"
      aria-label="Ilustração de um editor de código com testes passando"
    >
      <div className="home__code">
        <div className="home__code-bar">
          <span className="home__code-dot"></span>
          <span className="home__code-dot"></span>
          <span className="home__code-dot"></span>
          <span className="home__code-file">fabio.js</span>
        </div>

        <pre className="home__code-body">
          <code>
            <span className="tk-key">const</span> <span className="tk-var">fabio</span> = {"{\n"}
            {"  "}<span className="tk-prop">role</span>: <span className="tk-str">&quot;QA &amp; Dev&quot;</span>,{"\n"}
            {"  "}<span className="tk-prop">stack</span>: [<span className="tk-str">&quot;Go&quot;</span>, <span className="tk-str">&quot;Java&quot;</span>,{"\n"}
            {"          "}<span className="tk-str">&quot;React&quot;</span>],{"\n"}
            {"  "}<span className="tk-prop">focus</span>: <span className="tk-str">&quot;quality&quot;</span>,{"\n"}
            {"};"}<span className="home__code-cursor"></span>
          </code>
        </pre>
      </div>

      <div className="home__badge">
        <i className="uil uil-check-circle home__badge-icon"></i>
        <span>all tests passed</span>
      </div>
    </div>
  );
};

export default HeroArt;
