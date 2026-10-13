// Ficha de inspeção do hero: os itens verificados e o resultado, carimbados como num controle de qualidade.
const TIMES = ["38 ms", "51 ms", "42 ms", "29 ms"];

const TestRunner = ({ dict }) => (
  <figure className="inspection" aria-label={`${dict.title}: ${dict.passed}`}>
    <div className="inspection__head">
      <span>{dict.title}</span>
    </div>

    <ol className="inspection__list">
      {dict.specs.map((spec, i) => (
        <li key={spec} style={{ animationDelay: `${0.2 + i * 0.18}s` }}>
          <span className="inspection__index" aria-hidden="true">
            {String(i + 1).padStart(2, "0")}
          </span>
          <span className="inspection__item">{spec}</span>
          <span className="inspection__time">{TIMES[i]}</span>
          <span className="inspection__check" aria-hidden="true">
            ✓
          </span>
        </li>
      ))}
    </ol>

    <figcaption className="inspection__result">
      <strong>{dict.passed}</strong>
      <span>{dict.summary}</span>
    </figcaption>

    <span className="inspection__seal" aria-hidden="true">
      FD
    </span>
  </figure>
);

export default TestRunner;
