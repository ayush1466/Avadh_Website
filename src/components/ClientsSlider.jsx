import React from "react";

const ClientsSlider = () => {
  const clients = [
    { name: "Bray Controls", logo: "/assets/clients/bray-control.png" },
    { name: "Windsor Machine Limited", logo: "/assets/clients/windsor-machine.jpeg" },
    { name: "Milacron", logo: "/assets/clients/milacron.jpg" },
    { name: "KHS Machinery Limited", logo: "/assets/clients/KHS.webp" },
    { name: "Parle Tableting Technologies Pvt. Ltd.", logo: "/assets/clients/parle.png" },    { name: "L&T", logo: "/assets/clients/lt.png" },
    { name: "Hydco Engineering", logo: "/assets/clients/hydco.png" },
    { name: "Ingersoll rand", logo: "/assets/clients/ingersoll-rand.webp" },
  ];

  return (
    <div
      style={{
        maxWidth: "1280px",
        margin: "6rem auto",
        padding: "3rem 1rem",
      }}
    >
      <h2
        style={{
          fontSize: "clamp(1.6rem, 4vw, 2.5rem)",
          fontWeight: "700",
          textAlign: "center",
          marginBottom: "3rem",
          color: "#ffffff",
          letterSpacing: "1px",
          textShadow: "0 10px 30px rgba(0,0,0,0.6)",
        }}
      >
        Our Trusted Clients
      </h2>

      <div
        style={{
          position: "relative",
          overflow: "hidden",
          borderRadius: "18px",
          background: "rgba(255,255,255,0.08)",
          backdropFilter: "blur(12px)",
          boxShadow: "0 25px 60px rgba(0,0,0,0.35)",
          padding: "2.5rem 0",
        }}
      >
        <div
          style={{
            display: "flex",
            gap: "2.5rem",
            width: "max-content",
            animation: "clientScroll 28s linear infinite",
            padding: "0 2.5rem",
          }}
        >
          {[...clients, ...clients].map((client, index) => (
            <div
              key={index}
              style={{
                minWidth: "160px",
                height: "90px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background: "#ffffff",
                borderRadius: "16px",
                padding: "1rem",
                boxShadow: "0 12px 28px rgba(0,0,0,0.15)",
                transition: "all 0.35s ease",
                cursor: "pointer",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform =
                  "translateY(-8px) scale(1.07)";
                e.currentTarget.style.boxShadow =
                  "0 25px 50px rgba(0,0,0,0.3)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform =
                  "translateY(0) scale(1)";
                e.currentTarget.style.boxShadow =
                  "0 12px 28px rgba(0,0,0,0.15)";
              }}
            >
              <img
                src={client.logo}
                alt={client.name}
                style={{
                  maxWidth: "100%",
                  maxHeight: "100%",
                  objectFit: "contain",
                  transition: "transform 0.3s ease",
                }}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Keyframes */}
      <style>
        {`
          @keyframes clientScroll {
            from {
              transform: translateX(0);
            }
            to {
              transform: translateX(-50%);
            }
          }

          @media (max-width: 768px) {
            div[style*="clientScroll"] {
              gap: 1.5rem;
            }
          }
        `}
      </style>
    </div>
  );
};

export default ClientsSlider;
