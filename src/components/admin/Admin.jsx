import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import "./Admin.css";

function slugify(text) {
  return text
    .toString()
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
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

const Admin = () => {
  const [title, setTitle] = useState("");
  const [excerpt, setExcerpt] = useState("");
  const [contentHtml, setContentHtml] = useState("");
  const [output, setOutput] = useState("");
  const [copied, setCopied] = useState(false);

  const handleGenerate = () => {
    const slug = slugify(title || "novo-artigo");
    const date = new Date().toISOString().slice(0, 10);
    const code = `  {
    slug: "${slug}",
    title: ${JSON.stringify(title)},
    date: "${date}",
    excerpt: ${JSON.stringify(excerpt)},
    contentHtml: ${JSON.stringify(contentHtml)},
  },`;
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

  return (
    <section className="admin">
      <h1>Novo artigo</h1>

      <label className="admin__label">Título</label>
      <input
        className="admin__input"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Título do artigo"
      />

      <label className="admin__label">Resumo (aparece na lista)</label>
      <input
        className="admin__input"
        value={excerpt}
        onChange={(e) => setExcerpt(e.target.value)}
        placeholder="Resumo curto"
      />

      <label className="admin__label">Conteúdo</label>
      <ReactQuill
        theme="snow"
        value={contentHtml}
        onChange={setContentHtml}
        modules={modules}
      />

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
