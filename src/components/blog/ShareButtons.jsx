"use client";

import React, { useState, useSyncExternalStore } from "react";

const XIcon = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

// Menu de compartilhamento nativo (celular). No servidor é sempre `false`, então não quebra a hidratação.
const subscribe = () => () => {};
const hasNativeShare = () => typeof navigator.share === "function";
const noNativeShare = () => false;

/** Botões para o leitor compartilhar o artigo nas redes sociais. */
const ShareButtons = ({ url, title }) => {
  const [copied, setCopied] = useState(false);
  const canNativeShare = useSyncExternalStore(subscribe, hasNativeShare, noNativeShare);

  const u = encodeURIComponent(url);
  const t = encodeURIComponent(title);
  const networks = [
    { name: "LinkedIn", href: `https://www.linkedin.com/sharing/share-offsite/?url=${u}`, icon: <i className="bx bxl-linkedin" aria-hidden="true"></i> },
    { name: "X", href: `https://x.com/intent/post?text=${t}&url=${u}`, icon: <XIcon /> },
    { name: "WhatsApp", href: `https://wa.me/?text=${t}%20${u}`, icon: <i className="bx bxl-whatsapp" aria-hidden="true"></i> },
    { name: "Facebook", href: `https://www.facebook.com/sharer/sharer.php?u=${u}`, icon: <i className="bx bxl-facebook" aria-hidden="true"></i> },
    { name: "Telegram", href: `https://t.me/share/url?url=${u}&text=${t}`, icon: <i className="bx bxl-telegram" aria-hidden="true"></i> },
  ];

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  const nativeShare = async () => {
    try {
      await navigator.share({ title, url });
    } catch {
      // leitor cancelou o compartilhamento
    }
  };

  return (
    <section className="share" aria-label="Compartilhar artigo">
      <p className="share__title">Gostou? Compartilhe este artigo</p>
      <div className="share__buttons">
        {networks.map(({ name, href, icon }) => (
          <a
            key={name}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="share__button"
            aria-label={`Compartilhar no ${name}`}
            title={`Compartilhar no ${name}`}
          >
            {icon}
          </a>
        ))}
        <button type="button" className="share__button" onClick={copyLink} aria-label="Copiar link do artigo" title="Copiar link">
          <i className={copied ? "bx bx-check" : "bx bx-link"} aria-hidden="true"></i>
        </button>
        {canNativeShare && (
          <button type="button" className="share__button" onClick={nativeShare} aria-label="Mais opções de compartilhamento" title="Mais opções">
            <i className="bx bx-share-alt" aria-hidden="true"></i>
          </button>
        )}
      </div>
      <p className="share__status" role="status" aria-live="polite">
        {copied ? "Link copiado!" : ""}
      </p>
    </section>
  );
};

export default ShareButtons;
