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
    <nav className="nav-wrapper">
      <div className="nav-container">
        {/* LOGO */}
        <div className="logo" onClick={() => setCurrentPage("home")}>
          <div className="logo-box">
            <img src="/logo.jpg" alt="Logo" />
          </div>
          <div className="logo-text">
            <h1>AVADH ENTERPRISE</h1>
            <span>ENGINEERING EXCELLENCE</span>
          </div>
        </div>

        {/* DESKTOP MENU */}
        <div className="nav-links">
          {navItems.map((item) => (
            <button
              key={item.id}
              className={`nav-link ${
                currentPage === item.id ? "active" : ""
              }`}
              onClick={() => setCurrentPage(item.id)}
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* MOBILE TOGGLE */}
        <button className="menu-btn" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* MOBILE MENU */}
      {isOpen && (
        <div className="mobile-menu">
          {navItems.map((item) => (
            <button
              key={item.id}
              className={`mobile-link ${
                currentPage === item.id ? "active" : ""
              }`}
              onClick={() => {
                setCurrentPage(item.id);
                setIsOpen(false);
              }}
            >
              {item.label}
            </button>
          ))}
        </div>
      )}

      {/* STYLES */}
      <style>{`
        .nav-wrapper {
          position: sticky;
          top: 0;
          z-index: 100;
          backdrop-filter: blur(12px);
          background: rgba(15, 23, 42, 0.85);
          border-bottom: 1px solid rgba(255,255,255,0.08);
        }

        .nav-container {
          max-width: 1280px;
          margin: auto;
          padding: 0 1.5rem;
          height: 78px;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        /* LOGO */
        .logo {
          display: flex;
          align-items: center;
          cursor: pointer;
          gap: 12px;
        }

        .logo-box {
          width: 46px;
          height: 46px;
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .logo-box img {
          width: 30px;
        }

        .logo-text h1 {
          font-size: 1.15rem;
          font-weight: 800;
          color: #ffffff;
          margin: 0;
        }

        .logo-text span {
          font-size: 0.7rem;
          letter-spacing: 1px;
          color: #ff2020ff;
          font-weight: 800;
        }

        /* DESKTOP LINKS */
        .nav-links {
          display: none;
        }

        .nav-link {
          background: none;
          border: none;
          color: #e5e7eb;
          font-size: 0.95rem;
          font-weight: 500;
          padding: 8px 14px;
          cursor: pointer;
          position: relative;
          transition: color 0.3s ease;
        }

        .nav-link::after {
          content: "";
          position: absolute;
          left: 50%;
          bottom: -6px;
          width: 0;
          height: 2px;
          background: #fbbf24;
          transition: all 0.3s ease;
          transform: translateX(-50%);
        }

        .nav-link:hover,
        .nav-link.active {
          color: #fbbf24;
        }

        .nav-link:hover::after,
        .nav-link.active::after {
          width: 70%;
        }

        /* MOBILE */
        .menu-btn {
          background: none;
          border: none;
          color: #fff;
          cursor: pointer;
        }

        .mobile-menu {
          background: rgba(15, 23, 42, 0.97);
          padding: 1rem;
          border-top: 1px solid rgba(255,255,255,0.08);
        }

        .mobile-link {
          display: block;
          width: 100%;
          padding: 14px;
          background: none;
          border: none;
          color: #e5e7eb;
          text-align: left;
          font-size: 1rem;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .mobile-link.active,
        .mobile-link:hover {
          color: #fbbf24;
          background: rgba(251,191,36,0.1);
        }

        /* RESPONSIVE */
        @media (min-width: 768px) {
          .nav-links {
            display: flex;
            gap: 8px;
          }
          .menu-btn,
          .mobile-menu {
            display: none;
          }
        }
      `}</style>
    </nav>
  );
};

export default Navigation;
