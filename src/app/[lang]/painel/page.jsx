import { cookies } from "next/headers";
import { notFound } from "next/navigation";
import Painel from "@/components/painel/Painel";
import { SESSION_COOKIE, lerSessao, painelConfigurado } from "@/lib/painelAuth";
import { defaultLocale } from "@/i18n/config";

export const metadata = {
  title: "Painel | Fabio Dorneles",
  robots: { index: false, follow: false },
};

// O painel só existe em português (/painel); /en/painel e /fr/painel dão 404.
export const dynamicParams = false;

export function generateStaticParams() {
  return [{ lang: "pt" }];
}

export default async function PainelPage({ params, searchParams }) {
  // Lê cookies, então a página é sempre sob demanda: o bloqueio de idiomas precisa estar aqui.
  const { lang } = await params;
  if (lang !== defaultLocale) notFound();

  const { erro } = await searchParams;
  if (!painelConfigurado()) {
    return (
      <main className="painel">
        <h1>Painel</h1>
        <p>O painel ainda não está configurado. Veja as variáveis de ambiente em specs/013.</p>
      </main>
    );
  }

  const sessao = lerSessao((await cookies()).get(SESSION_COOKIE)?.value);
  if (!sessao) {
    return (
      <main className="painel">
        <h1>Painel</h1>
        {erro && <p role="alert">Não foi possível entrar. Confira se a conta é a do dono.</p>}
        {/* Rota de API (redireciona para o GitHub), não uma página: o Link do Next não serve aqui. */}
        {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
        <a className="painel__botao" href="/api/painel/login">Entrar com GitHub</a>
      </main>
    );
  }

  return <Painel usuario={sessao.usuario} />;
}
