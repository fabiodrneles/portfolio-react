"use client";

import React, { useState } from "react";
import dynamic from "next/dynamic";
import "react-quill-new/dist/quill.snow.css";
import "./Admin.css";
import { SEO_DESCRIPTION_MAX, SEO_TITLE_MAX, buildPostCode, collectWarnings } from "../../lib/postDraft";

// O Quill acessa `document` ao ser carregado, então só roda no navegador.
const ReactQuill = dynamic(() => import("react-quill-new"), { ssr: false });

const modules = {
  toolbar: [
    [{ header: [2, 3, false] }],
    ["bold", "italic", "underline", "code"],
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

const emptyText = { title: "", excerpt: "", seoTitle: "", seoDescription: "", contentHtml: "" };

const Counter = ({ id, value, max }) => {
  const over = value.trim().length > max;
  return (
    <span id={id} className={over ? "admin__count admin__count--over" : "admin__count"}>
      {value.trim().length}/{max}
      {over ? " (passou do limite)" : ""}
    </span>
  );
};

const Admin = () => {
  const [lang, setLang] = useState("pt");
  const [texts, setTexts] = useState({ pt: emptyText, en: emptyText, fr: emptyText });
  const [output, setOutput] = useState("");
  const [copied, setCopied] = useState(false);
  const [warnings, setWarnings] = useState(null);

  const current = texts[lang];
  const update = (field) => (value) => setTexts((prev) => ({ ...prev, [lang]: { ...prev[lang], [field]: value } }));

  const handleGenerate = () => {
    setOutput(buildPostCode(texts));
    setWarnings(collectWarnings(texts));
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

      <label className="admin__label" htmlFor="admin-seo-title">
        Título para buscadores <Counter id="admin-seo-title-count" value={current.seoTitle} max={SEO_TITLE_MAX} />
      </label>
      <input
        id="admin-seo-title"
        className="admin__input"
        value={current.seoTitle}
        onChange={(e) => update("seoTitle")(e.target.value)}
        aria-describedby="admin-seo-title-hint admin-seo-title-count"
        placeholder="Versão curta do título, até 43 caracteres"
      />
      <p id="admin-seo-title-hint" className="admin__hint">
        O site acrescenta &quot; | Fabio Dorneles&quot; e o título da página fica em até 60 caracteres.
      </p>

      <label className="admin__label" htmlFor="admin-seo-description">
        Descrição para buscadores{" "}
        <Counter id="admin-seo-description-count" value={current.seoDescription} max={SEO_DESCRIPTION_MAX} />
      </label>
      <textarea
        id="admin-seo-description"
        className="admin__input"
        rows={3}
        value={current.seoDescription}
        onChange={(e) => update("seoDescription")(e.target.value)}
        aria-describedby="admin-seo-description-count"
        placeholder="Até 160 caracteres"
      />

      <span className="admin__label">Conteúdo</span>
      <details className="admin__help">
        <summary>Como inserir código</summary>
        <ul>
          <li>
            <strong>Bloco de código:</strong> escreva ou cole o código, clique dentro dele e use o botão de código que fica logo
            depois do botão de citação (aspas), no segundo grupo da barra. Para sair do bloco, aperte Enter três vezes seguidas na
            última linha, ou aperte Enter uma vez e clique de novo no mesmo botão.
          </li>
          <li>
            <strong>Código em linha:</strong> selecione só a palavra (por exemplo, <code>cy.wait</code>) e use o botão de código
            que fica ao lado do sublinhado, no primeiro grupo da barra. Os dois botões usam o mesmo ícone de sinais &lt; /&gt;.
          </li>
          <li>
            No código gerado, o bloco sai como <code>{'<pre data-language="plain">'}</code> e o site exibe em fonte mono, com quebra de
            linha.
          </li>
          <li>Não use a tecla Tab para alinhar (o foco sai do editor). Use espaços.</li>
        </ul>
      </details>
      <ReactQuill key={lang} theme="snow" value={current.contentHtml} onChange={update("contentHtml")} modules={modules} />

      <button className="admin__button" onClick={handleGenerate}>
        Gerar código do artigo
      </button>

      {warnings && (
        <div className="admin__checks" role="status">
          {warnings.length === 0 ? (
            <p className="admin__ok">Tudo certo: os três idiomas e o SEO estão dentro das regras.</p>
          ) : (
            <>
              <p>Antes de publicar, corrija:</p>
              <ul>
                {warnings.map((w) => (
                  <li key={w}>{w}</li>
                ))}
              </ul>
            </>
          )}
        </div>
      )}

      {output && (
        <div className="admin__output">
          <p>
            Copie o bloco abaixo e cole dentro do array <code>posts</code> em{" "}
            <code>src/posts/posts.js</code> (como primeiro item da lista):
          </p>
          <textarea readOnly value={output} rows={12} aria-label="Código do artigo gerado" />
          <button className="admin__button" onClick={handleCopy}>
            {copied ? "Copiado!" : "Copiar código"}
          </button>
        </div>
      )}
    </section>
  );
};

export default Admin;
