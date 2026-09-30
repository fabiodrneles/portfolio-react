import { ImageResponse } from "next/og";

export const ogSize = { width: 1200, height: 630 };

/** Imagem de compartilhamento (Open Graph/Twitter) no visual do site: fundo escuro + janela de código. */
export function renderOgImage({ eyebrow, title, subtitle }) {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          background: "linear-gradient(135deg, #3a3a3a 0%, #111111 100%)",
          color: "#ffffff",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <div style={{ width: 20, height: 20, borderRadius: 10, background: "#ff5f57" }} />
          <div style={{ width: 20, height: 20, borderRadius: 10, background: "#febc2e" }} />
          <div style={{ width: 20, height: 20, borderRadius: 10, background: "#28c840" }} />
          <div style={{ marginLeft: 20, fontSize: 30, color: "#c3e88d", fontFamily: "monospace" }}>
            {eyebrow}
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div style={{ fontSize: title.length > 70 ? 54 : 68, fontWeight: 700, lineHeight: 1.15 }}>
            {title}
          </div>
          {subtitle && <div style={{ fontSize: 32, color: "#b0b0b0" }}>{subtitle}</div>}
        </div>

        <div style={{ display: "flex", fontSize: 28, color: "#89ddff", fontFamily: "monospace" }}>
          fabiodorneles.com.br
        </div>
      </div>
    ),
    ogSize
  );
}
