import { NextResponse } from "next/server";
import { SESSION_COOKIE } from "@/lib/painelAuth";

export async function POST(request) {
  const resposta = NextResponse.redirect(new URL("/painel", request.nextUrl.origin), 303);
  resposta.cookies.delete({ name: SESSION_COOKIE, path: "/" });
  return resposta;
}
