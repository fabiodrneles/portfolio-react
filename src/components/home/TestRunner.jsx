// Janela "cypress run" do hero: o código do teste e o resultado, no estilo de um test runner.
const TIMES = ["38ms", "51ms", "42ms", "29ms"];

const S = ({ c, children }) => <span className={`code--${c}`}>{children}</span>;

const TestRunner = ({ dict }) => (
  <div className="runner-wrap">
    <div className="runner__glow" aria-hidden="true"></div>
    <figure className="runner" aria-label={`${dict.title}: ${dict.passed}`}>
      <div className="runner__bar">
        <span className="runner__dots" aria-hidden="true">
          <span></span>
          <span></span>
          <span></span>
        </span>
        <span className="runner__file">{dict.title}</span>
      </div>

      <pre className="runner__code" aria-hidden="true">
        <S c="fn">describe</S>(<S c="str">&quot;Fabio Dorneles&quot;</S>, () =&gt; {"{"}
        {"\n  "}
        <S c="fn">it</S>(<S c="str">&quot;{dict.it}&quot;</S>, () =&gt; {"{"}
        {"\n    "}cy.<S c="fn">visit</S>(<S c="str">&quot;{dict.visit}&quot;</S>)
        {"\n    "}cy.<S c="fn">get</S>(<S c="str">&quot;@stack&quot;</S>).<S c="fn">should</S>(<S c="str">&quot;include&quot;</S>, <S c="str">&quot;Go&quot;</S>)
        {"\n    "}cy.<S c="fn">hire</S>().<S c="fn">should</S>(<S c="str">&quot;be.ok&quot;</S>)
        <span className="runner__caret"></span>
        {"\n  })\n})"}
      </pre>

      <ul className="runner__specs">
        {dict.specs.map((spec, i) => (
          <li key={spec} style={{ animationDelay: `${0.35 + i * 0.25}s` }}>
            <span>
              <span className="runner__check" aria-hidden="true">✓</span> {spec}
            </span>
            <span className="runner__time">{TIMES[i]}</span>
          </li>
        ))}
      </ul>

      <figcaption className="runner__footer">
        <div className="runner__summary">
          <strong>{dict.passed}</strong>
          <span>{dict.summary}</span>
        </div>
        <div className="runner__progress" aria-hidden="true">
          <span></span>
        </div>
      </figcaption>
    </figure>
  </div>
);

export default TestRunner;
