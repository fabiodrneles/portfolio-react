"use client";

import { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Icon from "@/components/ui/Icon";

// Proteções anti-spam/abuso do formulário (camada do navegador).
// A proteção principal fica no painel do EmailJS (domínios permitidos e limite de envio).
const MIN_FILL_TIME_MS = 3000; // bots costumam enviar instantaneamente
const COOLDOWN_MS = 60000; // intervalo mínimo entre dois envios
const COOLDOWN_KEY = "contact:lastSentAt";
const LIMITS = { name: 100, email: 254, project: 5000 };
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const getLastSentAt = () => {
  try {
    return Number(sessionStorage.getItem(COOLDOWN_KEY)) || 0;
  } catch {
    return 0;
  }
};

const setLastSentAt = (time) => {
  try {
    sessionStorage.setItem(COOLDOWN_KEY, String(time));
  } catch {
    // sessionStorage indisponível (ex.: modo privado): segue só com o estado em memória
  }
};

const ContactForm = ({ dict }) => {
  const form = useRef();
  const loadedAt = useRef(0);
  const lastSentAt = useRef(0);
  const [status, setStatus] = useState({ type: "idle", message: "" });

  useEffect(() => {
    loadedAt.current = Date.now();
    lastSentAt.current = getLastSentAt();
  }, []);

  const sendEmail = async (e) => {
    e.preventDefault();
    if (status.type === "sending") return;

    const formEl = form.current;
    const field = (fieldName) => formEl.elements.namedItem(fieldName).value.trim();
    const now = Date.now();

    // Honeypot (campo invisível que só bots preenchem) ou envio rápido demais:
    // finge sucesso para não dar pistas ao bot, mas não envia nada.
    if (field("website") || now - loadedAt.current < MIN_FILL_TIME_MS) {
      formEl.reset();
      setStatus({ type: "success", message: dict.success });
      return;
    }

    const name = field("name");
    const email = field("email");
    const project = field("project");

    if (!name || !email || !project) {
      setStatus({ type: "error", message: dict.errorRequired });
      return;
    }
    if (!EMAIL_RE.test(email)) {
      setStatus({ type: "error", message: dict.errorEmail });
      return;
    }
    if (name.length > LIMITS.name || email.length > LIMITS.email || project.length > LIMITS.project) {
      setStatus({ type: "error", message: dict.errorLong });
      return;
    }
    if (now - lastSentAt.current < COOLDOWN_MS) {
      setStatus({ type: "error", message: dict.errorCooldown });
      return;
    }

    setStatus({ type: "sending", message: dict.sending });
    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        { name, email, project },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      );
      lastSentAt.current = Date.now();
      setLastSentAt(lastSentAt.current);
      formEl.reset();
      setStatus({ type: "success", message: dict.success });
    } catch {
      setStatus({ type: "error", message: dict.errorSend });
    }
  };

  return (
    <form ref={form} onSubmit={sendEmail} className="contact__form" noValidate>
      <h3 className="contact__form-title">{dict.formTitle}</h3>

      <div className="contact__field">
        <label htmlFor="contact-name">{dict.name}</label>
        <input
          type="text"
          id="contact-name"
          name="name"
          required
          maxLength={LIMITS.name}
          autoComplete="name"
          placeholder={dict.namePlaceholder}
        />
      </div>

      <div className="contact__field">
        <label htmlFor="contact-email">{dict.email}</label>
        <input
          type="email"
          id="contact-email"
          name="email"
          required
          maxLength={LIMITS.email}
          autoComplete="email"
          placeholder={dict.emailPlaceholder}
        />
      </div>

      <div className="contact__field">
        <label htmlFor="contact-project">{dict.project}</label>
        <textarea
          id="contact-project"
          name="project"
          required
          maxLength={LIMITS.project}
          rows="5"
          placeholder={dict.projectPlaceholder}
        ></textarea>
      </div>

      {/* Honeypot — campo invisível para humanos, visível para bots */}
      <input
        type="text"
        name="website"
        aria-hidden="true"
        tabIndex="-1"
        autoComplete="off"
        style={{ position: "absolute", left: "-9999px", opacity: 0 }}
      />

      <button type="submit" className="button button--primary contact__submit" disabled={status.type === "sending"}>
        {status.type === "sending" ? dict.sending : dict.send}
        <Icon name="send" size={18} />
      </button>

      <p className={`contact__status contact__status--${status.type}`} role="status" aria-live="polite">
        {status.type !== "sending" && status.message}
      </p>
    </form>
  );
};

export default ContactForm;
