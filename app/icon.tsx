import { ImageResponse } from "next/og";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#050505",
          borderRadius: 14,
        }}
      >
        <svg width="40" height="40" viewBox="0 0 30 30" fill="none">
          <path d="M15 2 L27 26 L19.5 26 L15 15.5 L10.5 26 L3 26 Z" fill="#FFFFFF" />
          <circle cx="15" cy="9.5" r="2.4" fill="#00E676" />
        </svg>
      </div>
    ),
    { ...size },
  );
}
