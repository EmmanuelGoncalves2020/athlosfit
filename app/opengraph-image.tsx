import { ImageResponse } from "next/og";
import { SITE_NAME } from "@/lib/constants";

export const alt = `${SITE_NAME} — Academia Premium de Alta Performance`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const dynamic = "force-static";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#050505",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: -120,
            left: -80,
            width: 480,
            height: 480,
            borderRadius: "50%",
            background: "rgba(154,42,42,0.4)",
            filter: "blur(140px)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: -140,
            right: -100,
            width: 520,
            height: 520,
            borderRadius: "50%",
            background: "rgba(154,42,42,0.25)",
            filter: "blur(160px)",
          }}
        />
        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <svg width="64" height="64" viewBox="0 0 30 30" fill="none">
            <path d="M15 2 L27 26 L19.5 26 L15 15.5 L10.5 26 L3 26 Z" fill="#FFFFFF" />
            <circle cx="15" cy="9.5" r="2.4" fill="#9A2A2A" />
          </svg>
          <div style={{ display: "flex", fontSize: 88, color: "#FFFFFF", letterSpacing: 2 }}>
            ATHLOS<span style={{ color: "#9A2A2A" }}>FIT</span>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 22,
            fontSize: 28,
            color: "#BDBDBD",
            letterSpacing: 4,
            textTransform: "uppercase",
          }}
        >
          Academia Premium · Alta Performance
        </div>
      </div>
    ),
    { ...size },
  );
}
