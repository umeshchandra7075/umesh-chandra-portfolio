import { ImageResponse } from "next/og";
import { profile } from "@/lib/data";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: 96,
          background: "#020617",
          backgroundImage:
            "radial-gradient(circle at 15% 15%, rgba(37,99,235,0.5), transparent 45%), radial-gradient(circle at 85% 30%, rgba(56,189,248,0.4), transparent 45%)",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              width: 56,
              height: 56,
              borderRadius: 16,
              background: "linear-gradient(135deg, #2563EB, #38BDF8)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#fff",
              fontSize: 24,
              fontWeight: 700,
            }}
          >
            VU
          </div>
          <span style={{ color: "#94a3b8", fontSize: 26 }}>Portfolio</span>
        </div>
        <div style={{ display: "flex", color: "#f8fafc", fontSize: 68, fontWeight: 700, marginTop: 40 }}>
          {profile.name}
        </div>
        <div style={{ display: "flex", color: "#38bdf8", fontSize: 34, marginTop: 16 }}>
          Software Engineer &amp; Full Stack Developer
        </div>
        <div style={{ display: "flex", color: "#94a3b8", fontSize: 26, marginTop: 28 }}>{profile.tagline}</div>
      </div>
    ),
    { ...size }
  );
}
