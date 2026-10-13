import { ImageResponse } from "next/og";

export const ogSize = { width: 1200, height: 630 };

/** Imagem de compartilhamento (Open Graph/Twitter) no visual do site: papel, tinta e o carimbo vermelho. */
export function renderOgImage({ label, title, subtitle }) {
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
          background: "#f5f2ec",
          color: "#1c1b19",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div
            style={{
              width: 64,
              height: 64,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "#b5352b",
              color: "#ffffff",
              fontSize: 28,
              borderRadius: 3,
            }}
          >
            FD
          </div>
          <div style={{ display: "flex", fontSize: 30 }}>Fabio Dorneles</div>
          {label && <div style={{ display: "flex", marginLeft: "auto", fontSize: 24, color: "#6b675f" }}>{label}</div>}
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div style={{ fontSize: title.length > 70 ? 54 : 66, fontWeight: 400, lineHeight: 1.15, letterSpacing: -1 }}>
            {title}
          </div>
          {subtitle && <div style={{ fontSize: 30, color: "#45423c" }}>{subtitle}</div>}
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            paddingTop: 24,
            borderTop: "2px solid #1c1b19",
            fontSize: 24,
            color: "#6b675f",
          }}
        >
          <span>fabiodorneles.com.br</span>
          <div style={{ width: 14, height: 14, background: "#b5352b", marginTop: 8 }} />
        </div>
      </div>
    ),
    ogSize
  );
}
