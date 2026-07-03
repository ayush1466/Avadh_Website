import React, { useState, useEffect } from "react";
import { ChevronRight, Sparkles } from "lucide-react";
import { motion as Motion } from "framer-motion";

const ServicesPage = () => {
  const [showQuoteModal, setShowQuoteModal] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const services = [
    {
      title: "CNC Machining Job Work",
      description:
        "We provide precision CNC machining services backed by advanced technology, skilled manpower, and stringent quality control systems. Our facility is equipped with 3-axis and 4-axis VMCs and HMCs to handle complex geometries and tight tolerances.",
      features: [
        "3 & 4 Axis VMCs and HMCs",
        "Milling, Drilling, Tapping & Contour Machining",
        "Low & High Volume Production",
        "Automotive, Engineering & Heavy Machinery",
      ],
      image: "/assets/cncmachine.jpeg",
      accent: "#2563eb",
    },
    {
      title: "Moulds for Block Making Machines",
      description:
        "We design and manufacture high-precision moulds for block making machines engineered for durability, dimensional accuracy, and high production efficiency using advanced CNC machining.",
      features: [
        "Wear Resistant High-Strength Materials",
        "Customized Block Sizes & Profiles",
        "Uniform Shape & Density",
        "Construction & Infrastructure Industry",
      ],
      image: "/assets/moldblock.jpeg",
      accent: "#16a34a",
    },
    {
      title: "Inspection & Quality Assurance",
      description:
        "We offer comprehensive inspection and quality assurance services using advanced CMM technology to ensure strict adherence to dimensional and GD&T requirements.",
      features: [
        "Electronica Saphire 564 CMM",
        "GD&T & Dimensional Verification",
        "In-Process & Final Inspection",
        "Detailed Inspection Reports",
      ],
      image: "/assets/inspection.jpeg",
      accent: "#9333ea",
    },
    {
      title: "Heavy Engineering",
      description:
        "We offer Heavy Engineering solutions for large and complex components, including heavy machining, fabrication, and structural assemblies. Our capabilities support demanding industrial and infrastructure applications.",
      features: [
        "Heavy Machining",
        "Fabrication & Structural Assemblies",
        "Industrial & Infrastructure Applications",
        "Customized Heavy Components",
      ],
      image: "/assets/Heavyeng.webp",
      accent: "#2563eb",
    },
    {
      title: "4th axis 400 Dia",
      description:
        "With a 4th Axis 400 Dia Rotary Table, we offer accurate indexing and continuous rotary machining for complex geometries. This capability enhances productivity, improves repeatability, and delivers superior dimensional accuracy across multiple operations.",
      features: [
        "Heavy Machining",
        "Fabrication & Structural Assemblies",
        "Industrial & Infrastructure Applications",
        "Customized Heavy Components",
      ],
      image: "/assets/4-axis.webp",
      accent: "#2563eb",
    }
  ];

  // ===== Quote Actions =====
  const handleWhatsAppQuote = () => {
    const message = encodeURIComponent(
      "Hello,\n\nI would like to request a quote.\n\n" +
        "Service Required:\n" +
        "Material:\n" +
        "Quantity:\n" +
        "Drawing Available (Yes/No):\n\n" +
        "Thank you."
    );

    window.open("https://wa.me/919825995010?text=" + message, "_blank");
  };

  const handleEmailQuote = () => {
    window.location.href =
      "mailto:info@avadheng.com" +
      "?subject=Request%20for%20Quote" +
      "&body=Hello,%0D%0A%0D%0A" +
      "I would like to request a quote.%0D%0A%0D%0A" +
      "Service Required:%0D%0A" +
      "Material:%0D%0A" +
      "Quantity:%0D%0A" +
      "Drawing Available (Yes/No):%0D%0A";
  };

  return (
    <div style={{ background: "linear-gradient(180deg,#f8fafc,#eef2ff)" }}>
      {/* HERO */}
      <section
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: isMobile ? "4rem 1rem 3rem" : "6rem 1rem 5rem",
          textAlign: "center",
        }}
      >
        <Motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{
            fontSize: isMobile ? "2rem" : "3rem",
            fontWeight: 800,
            marginBottom: "1rem",
          }}
        >
          Precision Manufacturing Services
        </Motion.h1>
        <p
          style={{
            fontSize: isMobile ? "1rem" : "1.25rem",
            color: "#475569",
            maxWidth: "720px",
            margin: "0 auto",
          }}
        >
          Advanced CNC machining solutions delivering accuracy, reliability,
          and consistent quality from prototype to production.
        </p>
      </section>

      {/* SERVICES */}
      <section
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: isMobile ? "0 1rem 4rem" : "0 1rem 6rem",
        }}
      >
        {services.map((service, index) => (
          <Motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{
              display: "grid",
              gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
              gap: isMobile ? "2rem" : "4rem",
              alignItems: "center",
              marginBottom: isMobile ? "4rem" : "6rem",
            }}
          >
            {/* TEXT */}
            <div
              style={{
                order: isMobile ? 1 : index % 2 === 0 ? 1 : 2,
              }}
            >
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  padding: "0.4rem 0.8rem",
                  borderRadius: "999px",
                  background: service.accent + "20",
                  color: service.accent,
                  fontSize: "0.8rem",
                  fontWeight: 600,
                  marginBottom: "1rem",
                }}
              >
                <Sparkles size={14} /> Premium Service
              </div>

              <h2
                style={{
                  fontSize: isMobile ? "1.5rem" : "2rem",
                  fontWeight: 700,
                  marginBottom: "1rem",
                }}
              >
                {service.title}
              </h2>

              <p
                style={{
                  color: "#475569",
                  lineHeight: 1.7,
                  marginBottom: "1.5rem",
                  fontSize: isMobile ? "0.95rem" : "1rem",
                }}
              >
                {service.description}
              </p>

              <ul style={{ listStyle: "none", padding: 0 }}>
                {service.features.map((feature, i) => (
                  <li
                    key={i}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      marginBottom: "0.75rem",
                      fontWeight: 500,
                      fontSize: isMobile ? "0.9rem" : "1rem",
                    }}
                  >
                    <ChevronRight
                      size={18}
                      color={service.accent}
                      style={{ marginRight: "0.5rem", flexShrink: 0 }}
                    />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            {/* IMAGE */}
            <div
              style={{
                order: isMobile ? 2 : index % 2 === 0 ? 2 : 1,
              }}
            >
              <div
                style={{
                  borderRadius: "1.25rem",
                  overflow: "hidden",
                  boxShadow: "0 20px 40px rgba(0,0,0,0.15)",
                }}
              >
                <img
                  src={service.image}
                  alt={service.title}
                  style={{
                    width: "100%",
                    height: isMobile ? "240px" : "360px",
                    objectFit: "cover",
                  }}
                />
              </div>
            </div>
          </Motion.div>
        ))}
      </section>

      {/* CTA */}
      <section
        style={{
          background: "linear-gradient(135deg,#1e3a8a,#2563eb)",
          padding: isMobile ? "3rem 1rem" : "4rem 1rem",
          textAlign: "center",
          color: "white",
        }}
      >
        <h2
          style={{
            fontSize: isMobile ? "1.75rem" : "2.25rem",
            fontWeight: 700,
            marginBottom: "1rem",
          }}
        >
          Let's Build Something Exceptional
        </h2>
        <p
          style={{
            maxWidth: "640px",
            margin: "0 auto 2rem",
            opacity: 0.9,
            fontSize: isMobile ? "0.95rem" : "1rem",
          }}
        >
          From prototype to production, we deliver precision components you can
          trust.
        </p>
        <button
          onClick={() => setShowQuoteModal(true)}
          style={{
            background: "white",
            color: "#1e3a8a",
            padding: isMobile ? "0.65rem 1.5rem" : "0.75rem 2rem",
            borderRadius: "999px",
            fontWeight: 600,
            fontSize: isMobile ? "0.95rem" : "1rem",
            cursor: "pointer",
            border: "none",
          }}
        >
          Request a Quote
        </button>
      </section>

      {/* QUOTE MODAL */}
      {showQuoteModal && (
        <div
          onClick={() => setShowQuoteModal(false)}
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.5)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 999,
            padding: "1rem",
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              background: "white",
              padding: isMobile ? "2rem 1.5rem" : "2.5rem",
              borderRadius: "1rem",
              maxWidth: "420px",
              width: "100%",
              textAlign: "center",
            }}
          >
            <h3
              style={{
                fontSize: isMobile ? "1.25rem" : "1.5rem",
                marginBottom: "0.5rem",
              }}
            >
              Request a Quote
            </h3>
            <p
              style={{
                color: "#64748b",
                marginBottom: "2rem",
                fontSize: isMobile ? "0.9rem" : "1rem",
              }}
            >
              Choose how you'd like to share your requirements
            </p>

            <button
              onClick={handleWhatsAppQuote}
              style={{
                width: "100%",
                padding: "0.75rem",
                borderRadius: "0.75rem",
                background: "#22c55e",
                color: "white",
                fontWeight: 600,
                marginBottom: "1rem",
                border: "none",
                cursor: "pointer",
                fontSize: isMobile ? "0.95rem" : "1rem",
              }}
            >
              WhatsApp (Fast Response)
            </button>

            <button
              onClick={handleEmailQuote}
              style={{
                width: "100%",
                padding: "0.75rem",
                borderRadius: "0.75rem",
                background: "#2563eb",
                color: "white",
                fontWeight: 600,
                marginBottom: "1.5rem",
                border: "none",
                cursor: "pointer",
                fontSize: isMobile ? "0.95rem" : "1rem",
              }}
            >
              Email (Formal Request)
            </button>

            <button
              onClick={() => setShowQuoteModal(false)}
              style={{
                background: "transparent",
                color: "#64748b",
                border: "none",
                cursor: "pointer",
                fontSize: isMobile ? "0.9rem" : "1rem",
              }}
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ServicesPage;
