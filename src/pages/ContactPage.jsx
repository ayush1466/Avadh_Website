import React, { useEffect, useState } from "react";
import { MapPin, Phone, Mail, Send } from "lucide-react";

const ContactPage = () => {
  const [isMobile, setIsMobile] = useState(() => window.innerWidth < 768);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const handleWhatsAppClick = () => {
    const phoneNumber = "919825995010";
    const message =
      "Hello, I would like to inquire about your CNC machining services.";
    window.open(
      `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(180deg,#eef2ff,#f8fafc)",
        padding: isMobile ? "3rem 1rem" : "5rem 1rem",
        fontFamily: "Inter, system-ui, sans-serif",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        {/* Header */}
        <h1
          style={{
            fontSize: isMobile ? "2rem" : "2.6rem",
            fontWeight: 700,
            textAlign: "center",
            marginBottom: "0.75rem",
            color: "#1e3a8a",
          }}
        >
          Contact Us
        </h1>

        <p
          style={{
            textAlign: "center",
            color: "#475569",
            maxWidth: "600px",
            margin: "0 auto 3rem",
            fontSize: isMobile ? "1rem" : "1.1rem",
          }}
        >
          Get in touch with our engineering team for quotations, technical
          discussions, or production support.
        </p>
        {/* Top Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: isMobile ? "1fr" : "1.2fr 1fr",
            gap: isMobile ? "1.25rem" : "2rem",
            marginBottom: "3rem",
          }}
        >
          {/* Contact Card */}
          <div
            style={{
              background: "white",
              border: "1px solid #e5e7eb",
              borderRadius: "1rem",
              padding: isMobile ? "1.25rem" : "2rem",
              boxShadow: isMobile
                ? "0 12px 26px rgba(0,0,0,0.07)"
                : "0 20px 40px rgba(0,0,0,0.08)",
            }}
          >
            <h2
              style={{
                fontSize: "1.5rem",
                fontWeight: 600,
                marginBottom: "1.5rem",
                color: "#1e3a8a",
              }}
            >
              Get in Touch
            </h2>

            {[
              {
                icon: <MapPin color="#2563eb" />,
                title: "Address",
                value: (
                  <>
                    B-230, Swarnim Ind. Park-2, Bakrol-Dhamatvan road,
                    Bakrol-Bujrang, Ahmedabad, Gujarat 382430
                  </>
                ),
              },
              {
                icon: <Phone color="#2563eb" />,
                title: "Phone",
                value: "+91 9825995010",
              },
              {
                icon: <Mail color="#2563eb" />,
                title: "Email",
                value: "avadheng@gmail.com",
              },
            ].map((item, index) => (
              <div
                key={index}
                style={{
                  display: "flex",
                  gap: "1rem",
                  alignItems: "flex-start",
                  marginBottom: "1.25rem",
                }}
              >
                {item.icon}
                <div>
                  <p style={{ fontWeight: 600, color: "#1e3a8a" }}>
                    {item.title}
                  </p>
                  <p style={{ color: "#475569", fontSize: "0.95rem" }}>
                    {item.value}
                  </p>
                </div>
              </div>
            ))}

            <button
              onClick={handleWhatsAppClick}
              style={{
                marginTop: "1.5rem",
                width: "100%",
                background: "#22c55e",
                color: "white",
                padding: "0.85rem",
                borderRadius: "0.75rem",
                fontWeight: 600,
                border: "none",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "0.5rem",
                boxShadow: "0 10px 25px rgba(34,197,94,0.35)",
              }}
            >
              <Send size={18} />
              Send WhatsApp Inquiry
            </button>
          </div>

          {/* Business Hours */}
          <div
            style={{
              background: "white",
              border: "1px solid #e5e7eb",
              borderRadius: "1rem",
              padding: isMobile ? "1.25rem" : "2rem",
              boxShadow: isMobile
                ? "0 12px 26px rgba(0,0,0,0.07)"
                : "0 20px 40px rgba(0,0,0,0.08)",
            }}
          >
            <h2
              style={{
                fontSize: "1.5rem",
                fontWeight: 600,
                marginBottom: "1.5rem",
                color: "#1e3a8a",
              }}
            >
              Business Hours
            </h2>

            {[
              ["Monday – Sunday", "9:00 AM – 6:00 PM"],
              ["Tuesday", "Closed"],
            ].map(([day, time]) => (
              <div
                key={day}
                style={{
                  display: "flex",
                  gap: "1rem",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                  padding: "0.6rem 0",
                  borderBottom: "1px solid #e5e7eb",
                  color: "#475569",
                }}
              >
                <span style={{ fontWeight: 500 }}>{day}</span>
                <span>{time}</span>
              </div>
            ))}

            <div
              style={{
                marginTop: "1.5rem",
                background: "#22c55e15",
                borderLeft: "4px solid #22c55e",
                padding: "1rem",
                borderRadius: "0.5rem",
                fontSize: "0.9rem",
                color: "#475569",
              }}
            >
              We typically respond within 24 business hours. For urgent
              requirements, please call directly.
            </div>
          </div>
        </div>

        {/* Map */}
        <div
          style={{
            background: "white",
            border: "1px solid #e5e7eb",
            borderRadius: "1rem",
            padding: isMobile ? "1rem" : "1.5rem",
            boxShadow: isMobile
              ? "0 12px 26px rgba(0,0,0,0.07)"
              : "0 20px 40px rgba(0,0,0,0.08)",
          }}
        >
          <h2
            style={{
              fontSize: "1.4rem",
              fontWeight: 600,
              marginBottom: "1rem",
              color: "#1e3a8a",
            }}
          >
            Our Location
          </h2>

          <div
            style={{
              width: "100%",
              height: isMobile ? "280px" : "380px",
              borderRadius: "0.75rem",
              overflow: "hidden",
            }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3673.376657367868!2d72.74105569999999!3d22.973172899999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e639713b81fd7%3A0x1c7a560476d8b9d0!2sAvadh%20Enterprise!5e0!3m2!1sen!2sin!4v1767774849701!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              title="Factory Location"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
