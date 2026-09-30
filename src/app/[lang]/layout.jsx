import { notFound } from "next/navigation";
import "../globals.css";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import ScrollUp from "@/components/scrollup/ScrollUp";
import MobileCta from "@/components/footer/MobileCta";
import { SITE_URL } from "@/lib/site";
import { display, body, mono } from "@/lib/fonts";
import { getDictionary } from "@/i18n/dictionaries";
import { hasLocale, localeInfo, locales } from "@/i18n/config";
import { alternatesFor } from "@/i18n/metadata";
import { GITHUB_URL, LINKEDIN_URL } from "@/data/portfolio";

// Só existem as páginas dos idiomas configurados; qualquer outro prefixo vira 404.
export const dynamicParams = false;

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata({ params }) {
  const { lang } = await params;
  const dict = getDictionary(lang);
  const { title, description } = dict.meta;

  return {
    metadataBase: new URL(SITE_URL),
    title,
    description,
    authors: [{ name: "Fabio Dorneles" }],
    alternates: alternatesFor(lang, "/"),
    manifest: "/manifest.json",
    icons: {
      icon: { url: "/favicon.svg", type: "image/svg+xml" },
      apple: "/favicon.svg",
    },
    openGraph: {
      type: "website",
      title,
      description,
      url: alternatesFor(lang, "/").canonical,
      locale: localeInfo[lang].og,
    },
    twitter: { card: "summary_large_image", title, description },
  };
}

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0A0D0C",
};

export default async function RootLayout({ children, params }) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const dict = getDictionary(lang);

  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Fabio Dorneles",
    jobTitle: dict.meta.jobTitle,
    url: SITE_URL,
    sameAs: [LINKEDIN_URL, GITHUB_URL],
  };

  return (
    <html lang={localeInfo[lang].htmlLang} className={`${display.variable} ${body.variable} ${mono.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd).replace(/</g, "\\u003c") }}
        />
        <a href="#conteudo" className="skip-link">
          {dict.nav.skip}
        </a>
        <Header lang={lang} dict={dict.nav} />
        <div className="app-shell">
          <main id="conteudo" className="page-content" tabIndex={-1}>
            {children}
          </main>
          <Footer lang={lang} dict={dict} />
        </div>
        <ScrollUp label={dict.footer.backToTop} />
        <MobileCta lang={lang} dict={dict.nav} />
      </body>
    </html>
  );
}
