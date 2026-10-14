import { NextResponse } from "next/server";
import { SESSION_COOKIE, STATE_COOKIE, criarSessao, opcoesCookie, painelConfigurado } from "@/lib/painelAuth";

const recusar = (request) => NextResponse.redirect(new URL("/painel?erro=login", request.nextUrl.origin));

export async function GET(request) {
  if (!painelConfigurado()) return new NextResponse("Painel não configurado.", { status: 503 });

  const codigo = request.nextUrl.searchParams.get("code");
  const estado = request.nextUrl.searchParams.get("state");
  const estadoEsperado = request.cookies.get(STATE_COOKIE)?.value;
  if (!codigo || !estado || !estadoEsperado || estado !== estadoEsperado) return recusar(request);

  // Troca o código pelo token de acesso. O token é usado uma vez e não é guardado.
  const troca = await fetch("https://github.com/login/oauth/access_token", {
    method: "POST",
    headers: { Accept: "application/json", "Content-Type": "application/json" },
    body: JSON.stringify({
      client_id: process.env.GITHUB_CLIENT_ID,
      client_secret: process.env.GITHUB_CLIENT_SECRET,
      code: codigo,
      redirect_uri: new URL("/api/painel/callback", request.nextUrl.origin).toString(),
    }),
  });
  const { access_token: tokenAcesso } = await troca.json();
  if (!tokenAcesso) return recusar(request);

  const perfil = await fetch("https://api.github.com/user", {
    headers: { Authorization: `Bearer ${tokenAcesso}`, Accept: "application/vnd.github+json" },
  });
  const { login } = await perfil.json();
  if (!login || login.toLowerCase() !== process.env.ADMIN_GITHUB_USER.toLowerCase()) return recusar(request);

  const resposta = NextResponse.redirect(new URL("/painel", request.nextUrl.origin));
  resposta.cookies.set(SESSION_COOKIE, criarSessao(login), opcoesCookie);
  resposta.cookies.delete({ name: STATE_COOKIE, path: "/api/painel" });
  return resposta;
}
