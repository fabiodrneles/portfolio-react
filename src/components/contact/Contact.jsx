"use client";

import React, { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./contact.css";
import { contactCards } from "../../data/contact";

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

const Contact = () => {
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
      setStatus({ type: "success", message: "Message sent! I'll get back to you soon." });
      return;
    }

    const name = field("name");
    const email = field("email");
    const project = field("project");

    if (!name || !email || !project) {
      setStatus({ type: "error", message: "Please fill in all fields." });
      return;
    }
    if (!EMAIL_RE.test(email)) {
      setStatus({ type: "error", message: "Please enter a valid email." });
      return;
    }
    if (name.length > LIMITS.name || email.length > LIMITS.email || project.length > LIMITS.project) {
      setStatus({ type: "error", message: "Your message is too long." });
      return;
    }
    if (now - lastSentAt.current < COOLDOWN_MS) {
      setStatus({ type: "error", message: "Please wait a minute before sending another message." });
      return;
    }

    setStatus({ type: "sending", message: "Sending..." });
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
      setStatus({ type: "success", message: "Message sent! I'll get back to you soon." });
    } catch {
      setStatus({
        type: "error",
        message: "Something went wrong. Please try again or reach me by email.",
      });
    }
  };

  return (
    <section className="contact section" id="contact">
      <h2 className="section__title">Get in touch</h2>
      <span className="section__subtitle">Contact Me</span>

      <div className="contact__container container grid">
        <div className="contact__content">
          <h3 className="contact__title">Talk to me</h3>

          <div className="contact__info">
            {contactCards.map((card) => (
              <div className="contact__card" key={card.title}>
                <i className={`${card.icon} contact__card-icon`}></i>
                <h3 className="contact__card-title">{card.title}</h3>
                <span className="contact__card-data">{card.data}</span>
                <a href={card.link} className="contact__button">
                  Write me{" "}
                  <i className="bx bx-right-arrow-alt contact__button-icon"></i>
                </a>
              </div>
            ))}
          </div>
        </div>

        <div className="contact__content">
          <h3 className="contact__title">Write me your project</h3>
          <form ref={form} onSubmit={sendEmail} className="contact__form">
            <div className="contact__form-div">
              <label className="contact__form-tag" htmlFor="contact-name">Name</label>
              <input
                type="text"
                id="contact-name"
                name="name"
                required
                maxLength={LIMITS.name}
                autoComplete="name"
                className="contact__form-input"
                placeholder="Insert your name"
              />
            </div>

            <div className="contact__form-div">
              <label className="contact__form-tag" htmlFor="contact-email">Mail</label>
              <input
                type="email"
                id="contact-email"
                name="email"
                required
                maxLength={LIMITS.email}
                autoComplete="email"
                className="contact__form-input"
                placeholder="Insert your email"
              />
            </div>

            <div className="contact__form-div contact__form-area">
              <label className="contact__form-tag" htmlFor="contact-project">Project</label>
              <textarea
                id="contact-project"
                name="project"
                required
                maxLength={LIMITS.project}
                cols="30"
                rows="10"
                className="contact__form-input"
                placeholder="Write me your project"
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

            <button
              type="submit"
              className="button button--flex"
              disabled={status.type === "sending"}
            >
              {status.type === "sending" ? "Sending..." : "Send Message"}
              <svg
                className="button__icon"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M14.2199 21.9352C13.0399 21.9352 11.3699 21.1052 10.0499 17.1352L9.32988 14.9752L7.16988 14.2552C3.20988 12.9352 2.37988 11.2652 2.37988 10.0852C2.37988 8.91525 3.20988 7.23525 7.16988 5.90525L15.6599 3.07525C17.7799 2.36525 19.5499 2.57525 20.6399 3.65525C21.7299 4.73525 21.9399 6.51525 21.2299 8.63525L18.3999 17.1252C17.0699 21.1052 15.3999 21.9352 14.2199 21.9352ZM7.63988 7.33525C4.85988 8.26525 3.86988 9.36525 3.86988 10.0852C3.86988 10.8052 4.85988 11.9052 7.63988 12.8252L10.1599 13.6652C10.3799 13.7352 10.5599 13.9152 10.6299 14.1352L11.4699 16.6552C12.3899 19.4352 13.4999 20.4252 14.2199 20.4252C14.9399 20.4252 16.0399 19.4352 16.9699 16.6552L19.7999 8.16525C20.3099 6.62525 20.2199 5.36525 19.5699 4.71525C18.9199 4.06525 17.6599 3.98525 16.1299 4.49525L7.63988 7.33525Z"
                  fill="var(--container-color)"
                ></path>
                <path
                  d="M10.11 14.7052C9.92005 14.7052 9.73005 14.6352 9.58005 14.4852C9.29005 14.1952 9.29005 13.7152 9.58005 13.4252L13.16 9.83518C13.45 9.54518 13.93 9.54518 14.22 9.83518C14.51 10.1252 14.51 10.6052 14.22 10.8952L10.64 14.4852C10.5 14.6352 10.3 14.7052 10.11 14.7052Z"
                  fill="var(--container-color)"
                ></path>
              </svg>
            </button>

            <p
              className={`contact__status contact__status--${status.type}`}
              role="status"
              aria-live="polite"
            >
              {status.type !== "sending" && status.message}
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
