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
        background: "#f7f9fc",
        color: "#0f141d",
        border: "16px solid #0f141d",
      }}
    >
      <div style={{ fontSize: 28, letterSpacing: 6, textTransform: "uppercase", color: "#ce0e1a" }}>
        {SITE.ogEyebrow}
      </div>
      <div style={{ fontSize: 96, fontWeight: 700, marginTop: 16 }}>{SITE.name}</div>
      <div style={{ fontSize: 40, marginTop: 24 }}>{SITE.tagline}</div>
    </div>,
    size,
  );
}
