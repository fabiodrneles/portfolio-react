import Link from "next/link";
import Icon from "@/components/ui/Icon";
import { WHATSAPP_URL } from "@/data/portfolio";
import { localePath } from "@/i18n/config";

/** Barra de contato fixa no rodapé da tela, só no celular (na área que o polegar alcança). */
const MobileCta = ({ lang, dict }) => (
  <div className="mobile-cta" role="region" aria-label={dict.cta}>
    <a href={WHATSAPP_URL} className="icon-button mobile-cta__whatsapp" aria-label="WhatsApp" target="_blank" rel="noreferrer">
      <Icon name="whatsapp" size={20} strokeWidth={1.8} />
    </a>
    <Link href={`${localePath(lang, "/")}#contact`} className="button button--primary mobile-cta__main">
      {dict.cta}
    </Link>
  </div>
);

export default MobileCta;
