import Icon from "@/components/ui/Icon";
import ContactForm from "./ContactForm";
import { EMAIL, LINKEDIN_URL, WHATSAPP_URL } from "@/data/portfolio";
import { localePath } from "@/i18n/config";
import "./contact.css";

const Contact = ({ lang, dict }) => (
  <section className="section contact" id="contact">
    <div className="contact__grid container">
      <div className="contact__cta">
        <span className="contact__eyebrow">{dict.eyebrow}</span>
        <h2 className="contact__title">{dict.title}</h2>
        <p className="contact__lead">{dict.lead}</p>

        <a href={`mailto:${EMAIL}`} className="contact__email">
          <span className="contact__email-text">
            <span className="contact__email-label">{dict.emailLabel}</span>
            <span className="contact__email-address">{EMAIL}</span>
          </span>
          <Icon name="arrowRight" size={20} strokeWidth={2.2} />
        </a>

        <div className="contact__channels">
          <a href={WHATSAPP_URL} className="contact__channel" target="_blank" rel="noreferrer">
            <Icon name="whatsapp" size={20} strokeWidth={1.8} />
            WhatsApp
          </a>
          <a href={LINKEDIN_URL} className="contact__channel" target="_blank" rel="noreferrer">
            <Icon name="linkedin" size={20} strokeWidth={1.8} />
            LinkedIn
          </a>
        </div>
      </div>

      <ContactForm dict={dict} privacyHref={localePath(lang, "/privacy")} />
    </div>
  </section>
);

export default Contact;
