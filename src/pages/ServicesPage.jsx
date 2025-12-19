import React, { useState } from "react";
import { ChevronRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

const ServicesPage = () => {
  const [showQuoteModal, setShowQuoteModal] = useState(false);

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
      image: "/assets/services/cnc-machining.jpg",
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
      image: "/assets/services/block-mould.jpg",
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
      image: "/assets/services/cmm-inspection.jpg",
      accent: "#9333ea",
    },
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

    window.open(
  "https://wa.me/919724447825?text=" + message,
  "_blank"
);

  };

  const handleEmailQuote = () => {
    window.location.href =
      "mailto:sales@yourcompany.com" +
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
          padding: "6rem 1rem 5rem",
          textAlign: "center",
        }}
      >
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{ fontSize: "3rem", fontWeight: 800, marginBottom: "1rem" }}
        >
          Precision Manufacturing Services
        </motion.h1>
        <p
          style={{
            fontSize: "1.25rem",
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
      <section style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 1rem 6rem" }}>
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "4rem",
              alignItems: "center",
              marginBottom: "6rem",
            }}
          >
            {/* TEXT */}
            <div style={{ order: index % 2 === 0 ? 1 : 2 }}>
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

              <h2 style={{ fontSize: "2rem", fontWeight: 700, marginBottom: "1rem" }}>
                {service.title}
              </h2>

              <p style={{ color: "#475569", lineHeight: 1.7, marginBottom: "1.5rem" }}>
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
                    }}
                  >
                    <ChevronRight
                      size={18}
                      color={service.accent}
                      style={{ marginRight: "0.5rem" }}
                    />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            {/* IMAGE */}
            <div style={{ order: index % 2 === 0 ? 2 : 1 }}>
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
                  style={{ width: "100%", height: "360px", objectFit: "cover" }}
                />
              </div>
            </div>
          </motion.div>
        ))}
      </section>

      {/* CTA */}
      <section
        style={{
          background: "linear-gradient(135deg,#1e3a8a,#2563eb)",
          padding: "4rem 1rem",
          textAlign: "center",
          color: "white",
        }}
      >
        <h2 style={{ fontSize: "2.25rem", fontWeight: 700, marginBottom: "1rem" }}>
          Let’s Build Something Exceptional
        </h2>
        <p style={{ maxWidth: "640px", margin: "0 auto 2rem", opacity: 0.9 }}>
          From prototype to production, we deliver precision components you can trust.
        </p>
        <button
          onClick={() => setShowQuoteModal(true)}
          style={{
            background: "white",
            color: "#1e3a8a",
            padding: "0.75rem 2rem",
            borderRadius: "999px",
            fontWeight: 600,
            fontSize: "1rem",
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
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.5)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 999,
          }}
        >
          <div
            style={{
              background: "white",
              padding: "2.5rem",
              borderRadius: "1rem",
              maxWidth: "420px",
              width: "100%",
              textAlign: "center",
            }}
          >
            <h3 style={{ fontSize: "1.5rem", marginBottom: "0.5rem" }}>
              Request a Quote
            </h3>
            <p style={{ color: "#64748b", marginBottom: "2rem" }}>
              Choose how you’d like to share your requirements
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
