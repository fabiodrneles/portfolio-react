import React from "react";
import CodeWindow from "../codewindow/CodeWindow";

/* Arte do "About me": uma struct em Go com as características profissionais do Fabio. */
const lines = [
  [["key", "type"], ["", " "], ["type", "Engineer"], ["", " "], ["key", "struct"], ["", " {"]],
  [["", "  "], ["prop", "Role"], ["", "      "], ["type", "string"]],
  [["", "  "], ["prop", "Stack"], ["", "     []"], ["type", "string"]],
  [["", "  "], ["prop", "Years"], ["", "     "], ["type", "int"]],
  [["", "  "], ["prop", "Mindset"], ["", "   "], ["type", "string"]],
  [["", "  "], ["prop", "Learning"], ["", "  "], ["type", "bool"]],
  [["", "}"]],
  [["", " "]],
  [["key", "var"], ["", " "], ["prop", "fabio"], ["", " = "], ["type", "Engineer"], ["", "{"]],
  [["", "  "], ["prop", "Role"], ["", ":     "], ["str", '"Software & QA Engineer"'], ["", ","]],
  [["", "  "], ["prop", "Stack"], ["", ":    []"], ["type", "string"], ["", "{"], ["str", '"Go"'], ["", ", "], ["str", '"Java"'], ["", ", "], ["str", '"JS"'], ["", "},"]],
  [["", "  "], ["prop", "Years"], ["", ":    "], ["num", "4"], ["", ", "], ["com", "// and counting"]],
  [["", "  "], ["prop", "Mindset"], ["", ":  "], ["str", '"quality first"'], ["", ","]],
  [["", "  "], ["prop", "Learning"], ["", ": "], ["key", "true"], ["", ","]],
  [["", "}"]],
];

const AboutArt = () => {
  return (
    <div
      className="about__art"
      role="img"
      aria-label="Ilustração de uma struct em Go descrevendo as características profissionais de Fabio"
    >
      <CodeWindow file="fabio.go" lines={lines} />
    </div>
  );
};

export default AboutArt;
