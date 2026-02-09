import React from "react";
import { FileText, Download, Check } from "lucide-react";

const BrochurePage = () => {
  const isMobile = window.innerWidth < 768;

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/Avadh-Brochure.pdf";
    link.download = "Avadh-Brochure.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(180deg,#f1f5f9,#e2e8f0)",
        padding: isMobile ? "3rem 1rem" : "5rem 1rem",
        fontFamily: "Inter, system-ui, sans-serif",
      }}
    >
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        {/* Header */}
        <h1
          style={{
            fontSize: isMobile ? "2rem" : "2.75rem",
            fontWeight: 700,
            textAlign: "center",
            marginBottom: "0.75rem",
            color: "#1e3a8a",
          }}
        >
          Company Brochure
        </h1>

        <p
          style={{
            textAlign: "center",
            color: "#475569",
            maxWidth: "600px",
            margin: "0 auto 2.5rem",
            fontSize: isMobile ? "1rem" : "1.1rem",
          }}
        >
          A complete technical overview of our machining capabilities,
          materials, quality standards, and manufacturing excellence.
        </p>

        {/* Main Card */}
        <div
          style={{
            background: "white",
            border: "1px solid #e5e7eb",
            borderRadius: "1rem",
            padding: isMobile ? "2rem 1.5rem" : "3rem",
            display: "grid",
            gridTemplateColumns: isMobile ? "1fr" : "1.2fr 1fr",
            gap: isMobile ? "2rem" : "3rem",
            boxShadow: "0 20px 40px rgba(0,0,0,0.08)",
          }}
        >
          {/* Left */}
          <div>
            <FileText size={isMobile ? 56 : 80} color="#2563eb" />

            <h2
              style={{
                fontSize: isMobile ? "1.5rem" : "1.9rem",
                fontWeight: 600,
                marginTop: "1.25rem",
                marginBottom: "1rem",
                color: "#1e3a8a",
              }}
            >
              Precision CNC Manufacturing
            </h2>

            <p style={{ color: "#475569", lineHeight: 1.6 }}>
              This brochure contains detailed technical information including
              machining tolerances, material capabilities, inspection processes,
              certifications, and real-world production examples.
            </p>

            <button
              onClick={handleDownload}
              style={{
                marginTop: "2rem",
                width: isMobile ? "100%" : "auto",
                background:
                  "linear-gradient(135deg,#2563eb,#1e40af)",
                color: "white",
                padding: "0.9rem 2.5rem",
                borderRadius: "0.75rem",
                fontSize: "1rem",
                fontWeight: 600,
                border: "none",
                cursor: "pointer",
                display: "inline-flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "0.6rem",
                boxShadow: "0 12px 30px rgba(37,99,235,0.35)",
              }}
            >
              <Download size={20} />
              Download PDF Brochure
            </button>
          </div>

          {/* Right */}
          <div>
            <h3
              style={{
                fontSize: "1.2rem",
                fontWeight: 600,
                marginBottom: "1.25rem",
                color: "#1e3a8a",
              }}
            >
              What you’ll find inside
            </h3>

            {[
              "Machine capabilities & tolerances",
              "Materials & surface finishes",
              "Quality control & certifications",
              "Industries served & applications",
              "Production workflow & capacity",
            ].map((item) => (
              <div
                key={item}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.6rem",
                  marginBottom: "0.85rem",
                  color: "#475569",
                  fontWeight: 500,
                }}
              >
                <Check size={18} color="#2563eb" />
                {item}
              </div>
            ))}
          </div>
        </div>

        {/* Specs */}
        <div
          style={{
            marginTop: "3rem",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "1.25rem",
          }}
        >
          {[
            ["Tolerance", "±0.001 mm"],
            ["Max Size", "3000 × 2000 × 1000 mm"],
            ["Materials", "Metals & Engineering Plastics"],
            ["Surface Finish", "Ra 0.4 μm – 3.2 μm"],
          ].map(([title, value]) => (
            <div
              key={title}
              style={{
                background: "white",
                border: "1px solid #e5e7eb",
                borderRadius: "0.75rem",
                padding: "1.25rem",
                boxShadow: "0 10px 25px rgba(0,0,0,0.06)",
              }}
            >
              <p style={{ color: "#64748b", fontSize: "0.85rem" }}>
                {title}
              </p>
              <p
                style={{
                  fontSize: "1.1rem",
                  fontWeight: 600,
                  color: "#1e3a8a",
                }}
              >
                {value}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BrochurePage;
