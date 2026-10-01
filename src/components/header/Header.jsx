"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Icon from "@/components/ui/Icon";
import LanguageSwitcher from "./LanguageSwitcher";
import { localePath, stripLocale } from "@/i18n/config";
import "./header.css";

const SECTIONS = ["services", "portfolio", "qualification", "about"];

const Header = ({ lang, dict }) => {
  const pathname = stripLocale(usePathname() || "/");
  const home = localePath(lang, "/");
  const isHome = pathname === "/";
  const isBlog = pathname.startsWith("/blog");
  const isQuality = pathname.startsWith("/quality");

  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  // Fundo do cabeçalho fica mais sólido depois de rolar a página
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Destaca no menu a seção que está no meio da tela (só na home)
  useEffect(() => {
    if (!isHome) return undefined;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    ["home", ...SECTIONS, "process", "contact"].forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [isHome]);

  // Esc fecha o menu no celular
  useEffect(() => {
    if (!open) return undefined;
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const links = [
    { id: "services", label: dict.services },
    { id: "portfolio", label: dict.work },
    { id: "qualification", label: dict.journey },
    { id: "about", label: dict.about },
  ];

  const close = () => setOpen(false);

  return (
    <header className={`header${scrolled ? " header--scrolled" : ""}${open ? " header--open" : ""}`}>
      <div className="header__bar container">
        <Link href={home} className="header__logo" onClick={close}>
          <span className="header__mark" aria-hidden="true">FD</span>
          <span className="header__name">Fabio Dorneles</span>
        </Link>

        <nav id="nav-menu" className="header__nav" aria-label={dict.main}>
          <ul className="header__list">
            {links.map(({ id, label }) => (
              <li key={id}>
                <Link
                  href={`${home}#${id}`}
                  className={isHome && activeSection === id ? "header__link header__link--active" : "header__link"}
                  onClick={close}
                >
                  {label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href={localePath(lang, "/blog")}
                className={isBlog ? "header__link header__link--active" : "header__link"}
                aria-current={isBlog ? "page" : undefined}
                onClick={close}
              >
                {dict.blog}
              </Link>
            </li>
            <li>
              <Link
                href={localePath(lang, "/quality")}
                className={isQuality ? "header__link header__link--active" : "header__link"}
                aria-current={isQuality ? "page" : undefined}
                onClick={close}
              >
                {dict.quality}
              </Link>
            </li>
          </ul>
          <Link href={`${home}#contact`} className="button button--primary header__menu-cta" onClick={close}>
            {dict.cta}
            <Icon name="arrowRight" size={18} strokeWidth={2.2} />
          </Link>
        </nav>

        <div className="header__actions">
          <span className="header__status">
            <span className="pulse-dot" aria-hidden="true"></span>
            {dict.available}
          </span>
          <LanguageSwitcher lang={lang} label={dict.language} />
          <Link href={`${home}#contact`} className="button button--primary button--small header__cta">
            {dict.cta}
            <Icon name="arrowRight" size={16} strokeWidth={2.2} />
          </Link>
          <button
            type="button"
            className="icon-button header__toggle"
            aria-label={open ? dict.closeMenu : dict.openMenu}
            aria-expanded={open}
            aria-controls="nav-menu"
            onClick={() => setOpen(!open)}
          >
            <Icon name={open ? "close" : "menu"} size={20} />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
