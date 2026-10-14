"use client";

import React, { useState } from "react";
import dynamic from "next/dynamic";
import "react-quill-new/dist/quill.snow.css";
import "./Painel.css";

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

const vazio = { title: "", excerpt: "", seoTitle: "", seoDescription: "", contentHtml: "" };

const Campos = ({ id, texto, onChange, onConteudo }) => (
  <div className="painel__campos">
    <label htmlFor={`${id}-title`}>Título</label>
    <input id={`${id}-title`} value={texto.title} onChange={(e) => onChange("title", e.target.value)} />
    <label htmlFor={`${id}-excerpt`}>Resumo</label>
    <textarea id={`${id}-excerpt`} rows={2} value={texto.excerpt} onChange={(e) => onChange("excerpt", e.target.value)} />
    <label htmlFor={`${id}-seo-title`}>Título para buscadores (opcional)</label>
    <input id={`${id}-seo-title`} value={texto.seoTitle} onChange={(e) => onChange("seoTitle", e.target.value)} />
    <label htmlFor={`${id}-seo-description`}>Descrição para buscadores (opcional)</label>
    <input id={`${id}-seo-description`} value={texto.seoDescription} onChange={(e) => onChange("seoDescription", e.target.value)} />
    <div className="painel__editor">
      <ReactQuill theme="snow" value={texto.contentHtml} onChange={onConteudo} modules={modules} />
    </div>
  </div>
);

const Painel = ({ usuario }) => {
  const [pt, setPt] = useState(vazio);
  const [traducoes, setTraducoes] = useState(null);
  const [ocupado, setOcupado] = useState(false);
  const [mensagem, setMensagem] = useState("");

  const chamar = async (url, corpo) => {
    setOcupado(true);
    setMensagem("");
    try {
      const resposta = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(corpo),
      });
      const dados = await resposta.json();
      if (!resposta.ok) throw new Error(dados.erro || "Algo deu errado.");
      return dados;
    } catch (erro) {
      setMensagem(erro.message);
      return null;
    } finally {
      setOcupado(false);
    }
  };

  const traduzir = async () => {
    const dados = await chamar("/api/painel/traduzir", pt);
    if (dados) {
      setTraducoes(dados);
      setMensagem("Traduções prontas. Revise antes de publicar.");
    }
  };

  const publicar = async () => {
    const dados = await chamar("/api/painel/publicar", { pt, ...traducoes });
    if (dados) setMensagem(`Artigo publicado. O site será reconstruído em cerca de 2 minutos (${dados.slug}).`);
  };

  const atualizar = (setter) => (campo, valor) => setter((atual) => ({ ...atual, [campo]: valor }));

  return (
    <main className="painel">
      <header className="painel__topo">
        <p>Entrou como {usuario}</p>
        <form method="post" action="/api/painel/logout">
          <button type="submit">Sair</button>
        </form>
      </header>

      <h1>Novo artigo</h1>
      <p className="painel__ajuda">Escreva em português uma vez. Ao gerar as traduções, o inglês e o francês aparecem para revisão.</p>

      <Campos id="pt" texto={pt} onChange={atualizar(setPt)} onConteudo={(html) => setPt((atual) => ({ ...atual, contentHtml: html }))} />

      <button type="button" onClick={traduzir} disabled={ocupado || !pt.title.trim()}>
        {ocupado && !traducoes ? "Traduzindo..." : "Gerar traduções"}
      </button>

      {traducoes && ["en", "fr"].map((idioma) => (
        <section key={idioma} className="painel__traducao">
          <h2>{idioma === "en" ? "English" : "Français"}</h2>
          <Campos
            id={idioma}
            texto={traducoes[idioma]}
            onChange={(campo, valor) => setTraducoes((atual) => ({ ...atual, [idioma]: { ...atual[idioma], [campo]: valor } }))}
            onConteudo={(html) => setTraducoes((atual) => ({ ...atual, [idioma]: { ...atual[idioma], contentHtml: html } }))}
          />
        </section>
      ))}

      <button type="button" onClick={publicar} disabled={ocupado || !traducoes}>
        Publicar
      </button>

      {mensagem && <p role="status" className="painel__mensagem">{mensagem}</p>}
    </main>
  );
};

export default Painel;
