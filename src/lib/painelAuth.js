// Login do painel (/painel) com a conta GitHub do dono. Sem sessão válida, nada do painel responde.
// Se as variáveis de ambiente faltarem, o painel fica fechado (falha segura). Veja specs/013.
import { createHmac, timingSafeEqual } from "node:crypto";

export const SESSION_COOKIE = "painel_sessao";
export const STATE_COOKIE = "painel_estado";
const SESSION_SECONDS = 60 * 60 * 8;

export const painelConfigurado = () =>
  Boolean(
    process.env.GITHUB_CLIENT_ID &&
      process.env.GITHUB_CLIENT_SECRET &&
      process.env.GITHUB_TOKEN &&
      process.env.ADMIN_GITHUB_USER &&
      process.env.ANTHROPIC_API_KEY &&
      (process.env.SESSION_SECRET || "").length >= 32
  );

const assina = (texto) => createHmac("sha256", process.env.SESSION_SECRET).update(texto).digest("base64url");

export function criarSessao(usuario) {
  const corpo = Buffer.from(JSON.stringify({ usuario, expira: Date.now() + SESSION_SECONDS * 1000 })).toString("base64url");
  return `${corpo}.${assina(corpo)}`;
}

/** Devolve o usuário da sessão, ou null se a sessão for inválida, expirada ou de outra conta. */
export function lerSessao(token) {
  if (!token || !painelConfigurado()) return null;
  const [corpo, assinatura] = token.split(".");
  if (!corpo || !assinatura) return null;
  const esperada = Buffer.from(assina(corpo));
  const recebida = Buffer.from(assinatura);
  if (esperada.length !== recebida.length || !timingSafeEqual(esperada, recebida)) return null;
  try {
    const dados = JSON.parse(Buffer.from(corpo, "base64url").toString());
    if (dados.expira < Date.now()) return null;
    if (dados.usuario.toLowerCase() !== process.env.ADMIN_GITHUB_USER.toLowerCase()) return null;
    return dados;
  } catch {
    return null;
  }
}

export const opcoesCookie = { httpOnly: true, sameSite: "strict", secure: true, path: "/", maxAge: SESSION_SECONDS };
