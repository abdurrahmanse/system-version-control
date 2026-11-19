import { ImageResponse } from "next/og";

import { SITE } from "@/shared/config/site";

export const alt = SITE.name;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: 80,
        background: "#f7f3e9",
        color: "#1a1410",
        border: "16px solid #1a1410",
      }}
    >
      <div style={{ fontSize: 28, letterSpacing: 6, textTransform: "uppercase", color: "#d93a1c" }}>
        {SITE.ogEyebrow}
      </div>
      <div style={{ fontSize: 96, fontWeight: 700, marginTop: 16 }}>{SITE.name}</div>
      <div style={{ fontSize: 40, marginTop: 24 }}>{SITE.tagline}</div>
    </div>,
    size,
  );
}
