import fs from "node:fs";
import path from "node:path";

const count = (list, ext) => list.filter((file) => file.endsWith(ext)).length;

const safe = (read) => {
  try {
    return read();
  } catch {
    return null; // sem a pasta no build, o número simplesmente não aparece
  }
};

/** Números da página de qualidade, contados no build a partir do próprio repositório (nunca ficam desatualizados). */
export const qualityFacts = () => ({
  specs: safe(() => count(fs.readdirSync(path.join(process.cwd(), "cypress", "e2e")), ".cy.js")),
  pipelines: safe(() => count(fs.readdirSync(path.join(process.cwd(), ".github", "workflows")), ".yml")),
});
