import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const Navigation = ({ currentPage, setCurrentPage }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About Us" },
    { id: "services", label: "Services" },
    { id: "applications", label: "Applications" },
    { id: "brochure", label: "Brochure" },
    { id: "contact", label: "Contact Us" },
  ];

  return (
    <nav
      style={{
        background: "linear-gradient(135deg, #1e3a8a 0%, #1e40af 100%)",
        position: "sticky",
        top: 0,
        zIndex: 50,
        boxShadow: "0 4px 20px rgba(0, 0, 0, 0.15)",
        borderBottom: "3px solid #fbbf24",
      }}
    >
      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "0 1.5rem",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            height: "80px",
          }}
        >
          {/* Logo Section */}
          <div
            onClick={() => setCurrentPage("home")}
            style={{
              display: "flex",
              alignItems: "center",
              cursor: "pointer",
              transition: "transform 0.3s ease",
            }}
            onMouseEnter={(e) => e.currentTarget.style.transform = "scale(1.05)"}
            onMouseLeave={(e) => e.currentTarget.style.transform = "scale(1)"}
          >
            <div
              style={{
                width: "50px",
                height: "50px",
                background: "linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%)",
                borderRadius: "8px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 4px 10px rgba(251, 191, 36, 0.3)",
              }}
            >
              <img
                src="/logo.jpg"
                alt="Avadh Engineering Logo"
                style={{
                  width: "35px",
                  height: "35px",
                  objectFit: "contain",
                }}
              />
            </div>

            <div style={{ marginLeft: "1rem" }}>
              <div
                style={{
                  fontWeight: "800",
                  fontSize: "1.4rem",
                  color: "red",
                  letterSpacing: "0.5px",
                  lineHeight: "1.2",
                }}
              >
                AVADH ENTERPRISE
              </div>
              <div
                style={{
                  fontSize: "0.7rem",
                  color: "#fbbf24",
                  fontWeight: "500",
                  letterSpacing: "1px",
                  marginTop: "2px",
                }}
              >
                ENGINEERING EXCELLENCE
              </div>
            </div>
          </div>

          {/* Desktop Menu */}
          <div style={{ display: "none" }} className="desktop-menu">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setCurrentPage(item.id)}
                style={{
                  background: "none",
                  border: "none",
                  color: currentPage === item.id ? "#fbbf24" : "#e0e7ff",
                  cursor: "pointer",
                  padding: "0.6rem 1.2rem",
                  fontSize: "1rem",
                  fontWeight: currentPage === item.id ? "700" : "500",
                  position: "relative",
                  transition: "all 0.3s ease",
                  letterSpacing: "0.3px",
                }}
                onMouseEnter={(e) => {
                  e.target.style.color = "#fbbf24";
                  e.target.style.transform = "translateY(-2px)";
                }}
                onMouseLeave={(e) => {
                  e.target.style.color = currentPage === item.id ? "#fbbf24" : "#e0e7ff";
                  e.target.style.transform = "translateY(0)";
                }}
              >
                {item.label}
                {currentPage === item.id && (
                  <span
                    style={{
                      position: "absolute",
                      bottom: "0",
                      left: "50%",
                      transform: "translateX(-50%)",
                      width: "80%",
                      height: "3px",
                      background: "linear-gradient(90deg, transparent, #fbbf24, transparent)",
                      borderRadius: "2px",
                    }}
                  />
                )}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            style={{
              background: isOpen ? "#fbbf24" : "rgba(255, 255, 255, 0.1)",
              border: "2px solid",
              borderColor: isOpen ? "#fbbf24" : "#e0e7ff",
              color: isOpen ? "#1e3a8a" : "#ffffff",
              cursor: "pointer",
              padding: "0.6rem",
              borderRadius: "8px",
              transition: "all 0.3s ease",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            className="mobile-menu-button"
            onMouseEnter={(e) => {
              if (!isOpen) {
                e.target.style.background = "rgba(251, 191, 36, 0.2)";
                e.target.style.borderColor = "#fbbf24";
              }
            }}
            onMouseLeave={(e) => {
              if (!isOpen) {
                e.target.style.background = "rgba(255, 255, 255, 0.1)";
                e.target.style.borderColor = "#e0e7ff";
              }
            }}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div
            style={{
              paddingBottom: "1rem",
              background: "rgba(30, 64, 175, 0.95)",
              borderRadius: "8px",
              marginTop: "0.5rem",
              padding: "1rem",
              boxShadow: "0 10px 25px rgba(0, 0, 0, 0.2)",
            }}
            className="mobile-nav"
          >
            {navItems.map((item, index) => (
              <button
                key={item.id}
                onClick={() => {
                  setCurrentPage(item.id);
                  setIsOpen(false);
                }}
                style={{
                  display: "block",
                  width: "100%",
                  textAlign: "left",
                  padding: "1rem",
                  background: currentPage === item.id ? "rgba(251, 191, 36, 0.15)" : "transparent",
                  border: "none",
                  borderLeft: currentPage === item.id ? "4px solid #fbbf24" : "4px solid transparent",
                  color: currentPage === item.id ? "#fbbf24" : "#e0e7ff",
                  cursor: "pointer",
                  fontSize: "1.1rem",
                  fontWeight: currentPage === item.id ? "700" : "500",
                  transition: "all 0.3s ease",
                  borderRadius: "6px",
                  marginBottom: index < navItems.length - 1 ? "0.5rem" : "0",
                }}
                onMouseEnter={(e) => {
                  e.target.style.background = "rgba(251, 191, 36, 0.15)";
                  e.target.style.borderLeft = "4px solid #fbbf24";
                  e.target.style.color = "#fbbf24";
                  e.target.style.paddingLeft = "1.5rem";
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = currentPage === item.id ? "rgba(251, 191, 36, 0.15)" : "transparent";
                  e.target.style.borderLeft = currentPage === item.id ? "4px solid #fbbf24" : "4px solid transparent";
                  e.target.style.color = currentPage === item.id ? "#fbbf24" : "#e0e7ff";
                  e.target.style.paddingLeft = "1rem";
                }}
              >
                {item.label}
              </button>
            ))}
          </div>
        )}
      </div>

      <style>{`
        .desktop-menu {
          display: none;
        }
        .mobile-menu-button {
          display: flex;
        }
        @media (min-width: 768px) {
          .desktop-menu {
            display: flex !important;
            gap: 0.5rem;
            align-items: center;
          }
          .mobile-menu-button {
            display: none !important;
          }
          .mobile-nav {
            display: none !important;
          }
        }
      `}</style>
    </nav>
  );
};

export default Navigation;