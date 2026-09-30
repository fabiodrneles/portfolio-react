"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { localeFromPath, localePath } from "@/i18n/config";
import notFoundText from "@/i18n/notFound";
import "./notfound.css";

// not-found.js não recebe params, então o idioma vem do endereço.
const NotFound = () => {
  const pathname = usePathname() || "/";
  const lang = localeFromPath(pathname);
  const text = notFoundText[lang];

  return (
    <section className="notfound">
      <span className="notfound__cmd">$ curl -I {pathname}</span>
      <h1 className="notfound__code">404</h1>
      <p className="notfound__message">{text.message}</p>
      <Link href={localePath(lang, "/")} className="button button--primary">
        {text.back}
      </Link>
    </section>
  );
};

export default NotFound;
