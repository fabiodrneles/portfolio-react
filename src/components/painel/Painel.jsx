"use client";

import React, { useEffect, useState } from "react";
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

const Campos = ({ id, texto, onChange }) => (
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
      <ReactQuill theme="snow" value={texto.contentHtml} onChange={(html) => onChange("contentHtml", html)} modules={modules} />
    </div>
  </div>
);

const pedir = async (url, opcoes = {}) => {
  const resposta = await fetch(url, {
    ...opcoes,
    headers: { "Content-Type": "application/json", ...(opcoes.headers || {}) },
  });
  const dados = await resposta.json().catch(() => ({}));
  if (!resposta.ok) throw new Error(dados.erro || "Algo deu errado.");
  return dados;
};

const Painel = ({ usuario }) => {
  const [pt, setPt] = useState(vazio);
  const [traducoes, setTraducoes] = useState(null);
  const [ocupado, setOcupado] = useState(false);
  const [mensagem, setMensagem] = useState("");
  const [rascunhos, setRascunhos] = useState([]);
  const [artigos, setArtigos] = useState([]);

  const carregarListas = async () => {
    try {
      const [r, a] = await Promise.all([pedir("/api/painel/rascunho"), pedir("/api/painel/artigos")]);
      setRascunhos(r.rascunhos);
      setArtigos(a.artigos);
    } catch (erro) {
      setMensagem(erro.message);
    }
  };

  useEffect(() => {
    let cancelado = false;
    (async () => {
      try {
        const [r, a] = await Promise.all([pedir("/api/painel/rascunho"), pedir("/api/painel/artigos")]);
        if (!cancelado) {
          setRascunhos(r.rascunhos);
          setArtigos(a.artigos);
        }
      } catch (erro) {
        if (!cancelado) setMensagem(erro.message);
      }
    })();
    return () => {
      cancelado = true;
    };
  }, []);

  const executar = async (acao) => {
    setOcupado(true);
    setMensagem("");
    try {
      return await acao();
    } catch (erro) {
      setMensagem(erro.message);
      return null;
    } finally {
      setOcupado(false);
    }
  };

  const traduzir = () =>
    executar(async () => {
      const dados = await pedir("/api/painel/traduzir", { method: "POST", body: JSON.stringify(pt) });
      setTraducoes(dados);
      setMensagem("Traduções prontas. Revise antes de publicar.");
    });

  // Sem tradução automática: as abas EN e FR começam com o texto em português, para você reescrever.
  const escreverAMao = () => {
    setTraducoes({ en: { ...pt }, fr: { ...pt } });
    setMensagem("Abas em inglês e francês criadas. Reescreva o texto em cada uma e depois publique.");
  };

  const salvarRascunho = () =>
    executar(async () => {
      const dados = await pedir("/api/painel/rascunho", {
        method: "POST",
        body: JSON.stringify({ pt, en: traducoes?.en ?? null, fr: traducoes?.fr ?? null }),
      });
      setMensagem(`Rascunho salvo (${dados.slug}). Nada foi publicado.`);
      carregarListas();
    });

  const publicar = () =>
    executar(async () => {
      const dados = await pedir("/api/painel/publicar", {
        method: "POST",
        body: JSON.stringify({ pt, ...traducoes }),
      });
      setMensagem(`Artigo publicado (${dados.slug}). O site será reconstruído em cerca de 2 minutos.`);
      carregarListas();
    });

  const abrirRascunho = (slug) =>
    executar(async () => {
      const dados = await pedir(`/api/painel/rascunho?slug=${encodeURIComponent(slug)}`);
      setPt(dados.pt);
      setTraducoes(dados.en && dados.fr ? { en: dados.en, fr: dados.fr } : null);
      setMensagem(`Rascunho aberto: ${dados.pt.title}`);
    });

  const excluirArtigo = (slug, titulo) => {
    if (!window.confirm(`Excluir o artigo "${titulo}"? Isso gera um commit e o site é reconstruído.`)) return;
    executar(async () => {
      await pedir(`/api/painel/artigos?slug=${encodeURIComponent(slug)}`, {
        method: "DELETE",
        body: JSON.stringify({ confirmar: slug }),
      });
      setMensagem(`Artigo excluído: ${titulo}`);
      carregarListas();
    });
  };

  const atualizarPt = (campo, valor) => setPt((atual) => ({ ...atual, [campo]: valor }));
  const atualizarTraducao = (idioma) => (campo, valor) =>
    setTraducoes((atual) => ({ ...atual, [idioma]: { ...atual[idioma], [campo]: valor } }));

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

      <Campos id="pt" texto={pt} onChange={atualizarPt} />

      <div className="painel__linha">
        <button type="button" onClick={traduzir} disabled={ocupado || !pt.title.trim()}>
          Gerar traduções
        </button>
        <button type="button" onClick={escreverAMao} disabled={ocupado || !pt.title.trim()}>
          Escrever EN e FR à mão
        </button>
        <button type="button" onClick={salvarRascunho} disabled={ocupado || !pt.title.trim()}>
          Salvar rascunho
        </button>
      </div>

      {traducoes &&
        ["en", "fr"].map((idioma) => (
          <section key={idioma} className="painel__traducao">
            <h2>{idioma === "en" ? "English" : "Français"}</h2>
            <Campos id={idioma} texto={traducoes[idioma]} onChange={atualizarTraducao(idioma)} />
          </section>
        ))}

      <button type="button" onClick={publicar} disabled={ocupado || !traducoes}>
        Publicar
      </button>

      {mensagem && <p role="status" className="painel__mensagem">{mensagem}</p>}

      <section className="painel__lista">
        <h2>Rascunhos</h2>
        {rascunhos.length === 0 && <p>Nenhum rascunho salvo.</p>}
        <ul>
          {rascunhos.map((r) => (
            <li key={r.slug}>
              <button type="button" onClick={() => abrirRascunho(r.slug)} disabled={ocupado}>
                Abrir: {r.title}
              </button>
            </li>
          ))}
        </ul>
      </section>

      <section className="painel__lista">
        <h2>Artigos publicados</h2>
        {artigos.length === 0 && <p>Nenhum artigo publicado pelo painel.</p>}
        <ul>
          {artigos.map((a) => (
            <li key={a.slug}>
              {a.title} <small>({a.date})</small>{" "}
              <button type="button" onClick={() => excluirArtigo(a.slug, a.title)} disabled={ocupado}>
                Excluir
              </button>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
};

export default Painel;
