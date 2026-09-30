import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import ScrollUp from "@/components/scrollup/ScrollUp";
import { DEFAULT_TITLE, SITE_URL } from "@/lib/site";

// Fonte servida pelo próprio site (sem requisição bloqueante ao Google Fonts)
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
  variable: "--font-poppins",
});

const description =
  "Fabio Dorneles — QA Engineer e Full Stack Developer. Portfólio, projetos e artigos sobre desenvolvimento web, testes e qualidade de software.";
const socialDescription =
  "Portfólio, projetos e artigos sobre desenvolvimento web, testes e qualidade de software.";

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: DEFAULT_TITLE,
  description,
  authors: [{ name: "Fabio Dorneles" }],
  alternates: { canonical: "https://www.fabiodorneles.com.br/" },
  manifest: "/manifest.json",
  icons: {
    icon: { url: "/favicon.svg", type: "image/svg+xml" },
    apple: "/favicon.svg",
  },
  openGraph: {
    type: "website",
    title: DEFAULT_TITLE,
    description: socialDescription,
    url: SITE_URL,
    locale: "pt_BR",
  },
  twitter: {
    card: "summary_large_image",
    title: DEFAULT_TITLE,
    description: socialDescription,
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Fabio Dorneles",
  jobTitle: "QA Engineer and Full Stack Developer",
  url: "https://www.fabiodorneles.com.br",
  sameAs: ["https://www.linkedin.com/in/fabiodrneles/", "https://github.com/fabiodrneles"],
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR" className={poppins.variable}>
      <body>
        {/* Com `precedence`, o React move as folhas de estilo para o <head> sozinho.
            Assim o <head> não depende da ordem dos nós na hidratação (scripts
            injetados por ferramentas como o Cypress deixavam o React em erro). */}
        {/* ====================== BOXICONS ====================== */}
        <link rel="stylesheet" href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css" precedence="default" />
        {/* ====================== UNICONS ======================= */}
        <link rel="stylesheet" href="https://unicons.iconscout.com/release/v4.0.8/css/line.css" precedence="default" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd).replace(/</g, "\\u003c") }}
        />
        <Header />
        <div className="app-shell">
          <div className="page-content">{children}</div>
          <Footer />
        </div>
        <ScrollUp />
      </body>
    </html>
  );
}
