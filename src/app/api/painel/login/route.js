import { NextResponse } from "next/server";
import { randomBytes } from "node:crypto";
import { STATE_COOKIE, opcoesCookie, painelConfigurado } from "@/lib/painelAuth";

export async function GET(request) {
  if (!painelConfigurado()) return new NextResponse("Painel não configurado.", { status: 503 });

  const estado = randomBytes(16).toString("base64url");
  const url = new URL("https://github.com/login/oauth/authorize");
  url.searchParams.set("client_id", process.env.GITHUB_CLIENT_ID);
  url.searchParams.set("scope", "read:user");
  url.searchParams.set("state", estado);
  url.searchParams.set("redirect_uri", new URL("/api/painel/callback", request.nextUrl.origin).toString());

  const resposta = NextResponse.redirect(url);
  resposta.cookies.set(STATE_COOKIE, estado, { ...opcoesCookie, path: "/api/painel", maxAge: 600 });
  return resposta;
}
