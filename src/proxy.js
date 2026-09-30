import { NextResponse } from "next/server";
import { LOCALE_COOKIE, LOCALE_HEADER, defaultLocale, hasLocale, localePath, matchAcceptLanguage } from "@/i18n/config";

/**
 * Roteamento de idiomas:
 * - /en/... e /fr/... seguem direto;
 * - /pt/... redireciona para a versão sem prefixo (o endereço oficial do português);
 * - sem prefixo: se o visitante já escolheu um idioma (cookie) ou o navegador pede
 *   inglês/francês, redireciona para /en ou /fr; senão, mostra a versão em português.
 */
export function proxy(request) {
  const { pathname } = request.nextUrl;
  const first = pathname.split("/")[1];

  if (first === defaultLocale) {
    // Imagens de compartilhamento geradas pelo Next ficam em /pt/.../opengraph-image
    if (pathname.includes("/opengraph-image")) return NextResponse.next();
    const url = request.nextUrl.clone();
    url.pathname = pathname.slice(defaultLocale.length + 1) || "/";
    return NextResponse.redirect(url, 308);
  }

  if (hasLocale(first)) return withLocale(request, first);

  const saved = request.cookies.get(LOCALE_COOKIE)?.value;
  const lang = hasLocale(saved) ? saved : matchAcceptLanguage(request.headers.get("accept-language"));

  const url = request.nextUrl.clone();
  if (lang !== defaultLocale) {
    url.pathname = localePath(lang, pathname);
    return NextResponse.redirect(url);
  }

  url.pathname = pathname === "/" ? `/${defaultLocale}` : `/${defaultLocale}${pathname}`;
  return withLocale(request, defaultLocale, url);
}

/** Segue (ou reescreve para `rewriteTo`) avisando o app do idioma, usado pela página 404 global. */
function withLocale(request, lang, rewriteTo) {
  const headers = new Headers(request.headers);
  headers.set(LOCALE_HEADER, lang);
  const init = { request: { headers } };
  return rewriteTo ? NextResponse.rewrite(rewriteTo, init) : NextResponse.next(init);
}

export const config = {
  // Ignora arquivos internos do Next, rotas de API e qualquer arquivo com extensão
  // (sitemap.xml, robots.txt, favicon.svg, currículo em PDF...).
  matcher: ["/((?!_next|api|.*\\..*).*)"],
};
