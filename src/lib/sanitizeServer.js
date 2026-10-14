// Saneamento do HTML no servidor (publicação e tradução). Usa a mesma política do editor, em src/lib/htmlPolicy.js.
import DOMPurify from "isomorphic-dompurify";
import { ALLOWED_ATTR, ALLOWED_TAGS } from "./htmlPolicy";

DOMPurify.addHook("afterSanitizeAttributes", (node) => {
  if (node.tagName === "A" && node.getAttribute("target") === "_blank") node.setAttribute("rel", "noopener noreferrer");
});

export const sanitizeServer = (html) =>
  DOMPurify.sanitize(String(html ?? ""), { ALLOWED_TAGS, ALLOWED_ATTR }).replace(/&nbsp;/g, " ").replace(/ /g, " ");
