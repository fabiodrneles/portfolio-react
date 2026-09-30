"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Icon from "@/components/ui/Icon";
import { LOCALE_COOKIE, localeInfo, localePath, locales, stripLocale } from "@/i18n/config";

/** Guarda a escolha do visitante por 1 ano; ela passa a valer mais que o idioma do navegador. */
const rememberLocale = (lang) => {
  document.cookie = `${LOCALE_COOKIE}=${lang}; path=/; max-age=31536000; samesite=lax`;
};

const LanguageSwitcher = ({ lang, label }) => {
  const rest = stripLocale(usePathname() || "/");

  return (
    <nav className="lang" aria-label={label}>
      <Icon name="globe" size={16} strokeWidth={1.8} className="lang__icon" />
      {locales.map((code) => {
        const { short, name, htmlLang } = localeInfo[code];
        const current = code === lang;
        return (
          <Link
            key={code}
            href={localePath(code, rest)}
            prefetch={false}
            hrefLang={htmlLang}
            lang={htmlLang}
            title={name}
            aria-label={`${short}, ${name}`}
            aria-current={current ? "true" : undefined}
            className={current ? "lang__option lang__option--active" : "lang__option"}
            onClick={() => rememberLocale(code)}
          >
            {short}
          </Link>
        );
      })}
    </nav>
  );
};

export default LanguageSwitcher;
