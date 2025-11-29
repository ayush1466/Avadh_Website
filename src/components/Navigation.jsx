import React, { useState } from "react";
import { Menu, X, Cog } from "lucide-react";

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
        backgroundColor: "#ADD8E6",
        color: "white",
        position: "sticky",
        top: 0,
        zIndex: 50,
        boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
      }}
    >
      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "0 1rem",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            height: "64px",
          }}
        >
          <div
            onClick={() => setCurrentPage("home")}
            style={{
              display: "flex",
              alignItems: "center",
              cursor: "pointer", // makes it look clickable
            }}
          >
            {/* Logo Image */}
            <img
              src="public/logo.jpg" // put your logo in public/logo.png
              alt="Avadh Engineering Logo"
              style={{
                width: "32px",
                height: "32px",
                objectFit: "contain",
              }}
            />

            <span
              style={{
                fontWeight: "bold",
                fontSize: "1.25rem",
                marginLeft: "0.5rem",
                color: "#0F172A",
              }}
            >
              AVADH ENTERPRISE
            </span>
          </div>

          <div style={{ display: "none" }} className="desktop-menu">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setCurrentPage(item.id)}
                style={{
                  background: "none",
                  border: "none",
                  color: currentPage === item.id ? "#60a5fa" : "#0F172A",
                  cursor: "pointer",
                  padding: "0.5rem",
                  fontSize: "1rem",
                  borderBottom:
                    currentPage === item.id ? "2px solid #60a5fa" : "none",
                  transition: "0.2s",
                }}
                onMouseEnter={(e) => (e.target.style.color = "#60a5fa")}
                onMouseLeave={(e) =>
                  (e.target.style.color =
                    currentPage === item.id ? "#60a5fa" : "#0F172A")
                }
              >
                {item.label}
              </button>
            ))}
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            style={{
              background: "none",
              border: "none",
              color: "white",
              cursor: "pointer",
              padding: "0.5rem",
            }}
            className="mobile-menu-button"
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>

        {isOpen && (
          <div style={{ paddingBottom: "1rem" }} className="mobile-nav">
            {navItems.map((item) => (
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
                  padding: "0.8rem 0",
                  background: "none",
                  border: "none",
                  color: currentPage === item.id ? "#60a5fa" : "#0F172A", // FIXED
                  cursor: "pointer",
                  fontSize: "1.1rem",
                  transition: "0.2s",
                }}
                onMouseEnter={(e) => (e.target.style.color = "#60a5fa")}
                onMouseLeave={(e) =>
                  (e.target.style.color =
                    currentPage === item.id ? "#60a5fa" : "#0F172A")
                }
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
          display: block;
        }
        @media (min-width: 768px) {
          .desktop-menu {
            display: flex !important;
            gap: 2rem;
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
