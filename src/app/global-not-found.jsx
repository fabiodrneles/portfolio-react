import { headers } from "next/headers";
import Link from "next/link";
import "./globals.css";
import "@/components/notfound/notfound.css";
import { LOCALE_HEADER, defaultLocale, hasLocale, localeInfo, localePath } from "@/i18n/config";
import notFoundText from "@/i18n/notFound";
import { display, body, mono } from "@/lib/fonts";

export const metadata = {
  title: "404 | Fabio Dorneles",
};

// Endereços que não existem em nenhum idioma. O idioma vem do proxy (cabeçalho interno).
export default async function GlobalNotFound() {
  const requested = (await headers()).get(LOCALE_HEADER);
  const lang = hasLocale(requested) ? requested : defaultLocale;
  const text = notFoundText[lang];

  return (
    <html lang={localeInfo[lang].htmlLang} className={`${display.variable} ${body.variable} ${mono.variable}`}>
      <body>
        <main className="notfound">
          <span className="notfound__cmd">$ curl -I → 404</span>
          <h1 className="notfound__code">404</h1>
          <p className="notfound__message">{text.message}</p>
          <Link href={localePath(lang, "/")} className="button button--primary">
            {text.back}
          </Link>
        </main>
      </body>
    </html>
  );
}
