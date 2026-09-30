"use client";

import React, { useState } from "react";
import dynamic from "next/dynamic";
import "react-quill-new/dist/quill.snow.css";
import "./Admin.css";

// O Quill acessa `document` ao ser carregado, então só roda no navegador.
const ReactQuill = dynamic(() => import("react-quill-new"), { ssr: false });

function slugify(text) {
  return text
    .toString()
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

const modules = {
  toolbar: [
    [{ header: [2, 3, false] }],
    ["bold", "italic", "underline"],
    ["blockquote", "code-block"],
    [{ list: "ordered" }, { list: "bullet" }],
    ["link", "image"],
    ["clean"],
  ],
};

const LANGS = [
  { id: "pt", label: "Português", hint: "Texto principal do artigo (obrigatório)." },
  { id: "en", label: "English", hint: "Tradução em inglês (opcional). Sem ela, quem lê em inglês vê o texto em português com um aviso." },
  { id: "fr", label: "Français", hint: "Tradução em francês (opcional). Sem ela, quem lê em francês vê o texto em português com um aviso." },
];

const emptyText = { title: "", excerpt: "", contentHtml: "" };

const Admin = () => {
  const [lang, setLang] = useState("pt");
  const [texts, setTexts] = useState({ pt: emptyText, en: emptyText, fr: emptyText });
  const [output, setOutput] = useState("");
  const [copied, setCopied] = useState(false);

  const current = texts[lang];
  const update = (field) => (value) => setTexts((prev) => ({ ...prev, [lang]: { ...prev[lang], [field]: value } }));

  const handleGenerate = () => {
    const { title, excerpt, contentHtml } = texts.pt;
    const slug = slugify(title || "novo-artigo");
    const date = new Date().toISOString().slice(0, 10);

    const translated = ["en", "fr"].filter((l) => texts[l].title.trim() && texts[l].contentHtml.trim());
    const translations = translated.length
      ? `    translations: {\n${translated
          .map(
            (l) => `      ${l}: {
        title: ${JSON.stringify(texts[l].title)},
        excerpt: ${JSON.stringify(texts[l].excerpt)},
        contentHtml: ${JSON.stringify(texts[l].contentHtml)},
      },\n`
          )
          .join("")}    },\n`
      : "";

    const code = `  {
    slug: "${slug}",
    title: ${JSON.stringify(title)},
    date: "${date}",
    excerpt: ${JSON.stringify(excerpt)},
    contentHtml: ${JSON.stringify(contentHtml)},
${translations}  },`;
    setOutput(code);
    setCopied(false);
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(output);
      setCopied(true);
    } catch {
      setCopied(false);
    }
  };

  const hint = LANGS.find((l) => l.id === lang).hint;

  return (
    <section className="admin">
      <h1>Novo artigo</h1>

      <div className="admin__tabs" role="group" aria-label="Idioma do texto">
        {LANGS.map(({ id, label }) => (
          <button
            key={id}
            type="button"
            className={lang === id ? "filter filter--active" : "filter"}
            aria-pressed={lang === id}
            onClick={() => setLang(id)}
          >
            {label}
            {id !== "pt" && texts[id].title.trim() ? " ✓" : ""}
          </button>
        ))}
      </div>
      <p className="admin__hint">{hint}</p>

      <label className="admin__label" htmlFor="admin-title">Título</label>
      <input
        id="admin-title"
        className="admin__input"
        value={current.title}
        onChange={(e) => update("title")(e.target.value)}
        placeholder="Título do artigo"
      />

      <label className="admin__label" htmlFor="admin-excerpt">Resumo (aparece na lista)</label>
      <input
        id="admin-excerpt"
        className="admin__input"
        value={current.excerpt}
        onChange={(e) => update("excerpt")(e.target.value)}
        placeholder="Resumo curto"
      />

      <span className="admin__label">Conteúdo</span>
      <ReactQuill key={lang} theme="snow" value={current.contentHtml} onChange={update("contentHtml")} modules={modules} />

      <button className="admin__button" onClick={handleGenerate}>
        Gerar código do artigo
      </button>

      {output && (
        <div className="admin__output">
          <p>
            Copie o bloco abaixo e cole dentro do array <code>posts</code> em{" "}
            <code>src/posts/posts.js</code> (como primeiro item da lista):
          </p>
          <textarea readOnly value={output} rows={12} />
          <button className="admin__button" onClick={handleCopy}>
            {copied ? "Copiado!" : "Copiar código"}
          </button>
        </div>
      )}
    </section>
  );
};

export default Admin;
