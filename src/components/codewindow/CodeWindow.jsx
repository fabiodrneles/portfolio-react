import React from "react";
import "./codewindow.css";

/**
 * Janela de editor estilizada que renderiza código já "tokenizado".
 * Cada linha é uma lista de tokens [classe, texto]; classe vazia = texto comum.
 * @param {{ file: string, lines: [string, string][][], footer?: React.ReactNode, className?: string }} props
 */
const CodeWindow = ({ file, lines, footer, className = "" }) => {
  return (
    <div className={`code-window ${className}`}>
      <div className="code-window__bar">
        <span className="code-window__dot"></span>
        <span className="code-window__dot"></span>
        <span className="code-window__dot"></span>
        <span className="code-window__file">{file}</span>
      </div>

      <pre className="code-window__body">
        <code>
          {lines.map((tokens, i) => (
            <span className="code-window__line" key={i}>
              {tokens.map(([type, text], j) =>
                type ? (
                  <span className={`tk-${type}`} key={j}>
                    {text}
                  </span>
                ) : (
                  <React.Fragment key={j}>{text}</React.Fragment>
                )
              )}
            </span>
          ))}
        </code>
      </pre>

      {footer && <div className="code-window__footer">{footer}</div>}
    </div>
  );
};

export default CodeWindow;
