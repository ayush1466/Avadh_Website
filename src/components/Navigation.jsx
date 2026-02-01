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
    <>
      <header className="nav-wrapper">
        <div className="nav-container">
          {/* BRAND */}
          <div className="brand" onClick={() => setCurrentPage("home")}>
            <div className="brand-logo">
              <img src="/logo.jpg" alt="Avadh Enterprise Logo" />
            </div>
            <div className="brand-text">
              <h1>AVADH ENTERPRISE</h1>
              <span>ALL MACHINING SOLUTIONS UNDER ONE ROOF</span>
            </div>
          </div>

          {/* DESKTOP MENU */}
          <nav className="nav-links">
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
          </nav>

          {/* MOBILE TOGGLE */}
          <button
            className="menu-btn"
            onClick={() => setIsOpen(true)}
            aria-label="Toggle Menu"
          >
            <Menu size={28} />
          </button>
        </div>
      </header>

      {/* OVERLAY */}
      {isOpen && (
        <div className="menu-overlay" onClick={() => setIsOpen(false)} />
      )}

      {/* RIGHT SLIDE MOBILE MENU */}
      <div className={`mobile-drawer ${isOpen ? "open" : ""}`}>
  {/* HEADER */}
  <div className="mobile-header">
    <div className="mobile-brand">
      <img src="/logo.jpg" alt="Avadh Enterprise Logo" />
      <div>
        <h2>AVADH ENTERPRISE</h2>
        <span>ENGINEERING EXCELLENCE</span>
      </div>
    </div>

    <button className="close-btn" onClick={() => setIsOpen(false)}>
      <X size={26} />
    </button>
  </div>

  {/* LINKS */}
  <div className="mobile-links">
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
        <span className="link-dot" />
        {item.label}
      </button>
    ))}
  </div>
</div>


      {/* STYLES */}
      <style>{`
      /* ================= NAVBAR ================= */
.nav-wrapper {
  position: sticky;
  top: 0;
  z-index: 1000;
  background: rgba(15, 23, 42, 0.85);
  backdrop-filter: blur(14px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
}

.nav-container {
  max-width: 1320px;
  margin: auto;
  padding: 0 1.5rem;
  height: 82px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

/* ================= BRAND ================= */
.brand {
  display: flex;
  align-items: center;
  gap: 14px;
  cursor: pointer;
}

.brand-logo {
  width: 52px;
  height: 52px;
  background: #ffffff;
  border-radius: 14px;
  display: grid;
  place-items: center;
}

.brand-logo img {
  width: 36px;
}

.brand-text h1 {
  font-size: 1.3rem;
  font-weight: 800;
  color: #ffffff;
  margin: 0;
}

.brand-text span {
  font-size: 0.7rem;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: #ef4444;
  font-weight: 700;
}

/* ================= DESKTOP MENU ================= */
.nav-links {
  display: none;
}

.nav-link {
  background: none;
  border: none;
  color: #e5e7eb;
  font-size: 0.95rem;
  padding: 10px 16px;
  cursor: pointer;
  position: relative;
  transition: color 0.3s ease;
}

.nav-link::after {
  content: "";
  position: absolute;
  left: 50%;
  bottom: 0;
  width: 0;
  height: 2px;
  background: #fbbf24;
  transform: translateX(-50%);
  transition: width 0.3s ease;
}

.nav-link:hover,
.nav-link.active {
  color: #fbbf24;
}

.nav-link:hover::after,
.nav-link.active::after {
  width: 60%;
}

/* ================= MOBILE BUTTON ================= */
.menu-btn {
  background: none;
  border: none;
  color: #ffffff;
  cursor: pointer;
}

/* ================= OVERLAY ================= */
.menu-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.45);
  z-index: 999;
}

/* ================= MOBILE DRAWER ================= */
.mobile-drawer {
  position: fixed;
  top: 0;
  right: -100%;
  width: 82%;
  max-width: 340px;
  height: 100vh;
  padding: 1.5rem;
  background: linear-gradient(
    to bottom,
    rgba(15, 23, 42, 0.98),
    rgba(2, 6, 23, 0.98)
  );
  backdrop-filter: blur(18px);
  box-shadow: -12px 0 40px rgba(0, 0, 0, 0.45);
  z-index: 2000;
  display: flex;
  flex-direction: column;
  transition: right 0.45s cubic-bezier(0.4, 0, 0.2, 1);
}

.mobile-drawer.open {
  right: 0;
}

/* ================= MOBILE HEADER ================= */
.mobile-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 2.5rem;
}

.mobile-brand {
  display: flex;
  align-items: center;
  gap: 12px;
}

.mobile-brand img {
  width: 48px;
  height: 48px;
  padding: 8px;
  background: #ffffff;
  border-radius: 14px;
}

.mobile-brand h2 {
  font-size: 1.1rem;
  font-weight: 800;
  color: #ffffff;
  margin: 0;
  line-height: 1.1;
}

.mobile-brand span {
  font-size: 0.65rem;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: #fbbf24;
  font-weight: 700;
}

/* ================= CLOSE BUTTON ================= */
.close-btn {
  background: none;
  border: none;
  color: #ffffff;
  cursor: pointer;
}

/* ================= MOBILE LINKS ================= */
/* ================= MOBILE LINKS (CLEAN) ================= */
.mobile-links {
  display: flex;
  flex-direction: column;
  gap: 18px;
  margin-top: 1rem;
}

.mobile-link {
  background: none;
  border: none;
  color: #e5e7eb;
  font-size: 1.2rem;
  font-weight: 500;
  text-align: left;
  padding: 6px 0;
  cursor: pointer;
  letter-spacing: 0.3px;
  transition: all 0.35s ease;
}

/* Hover effect – smooth & premium */
.mobile-link:hover {
  color: #fbbf24;
  transform: translateX(6px);
}

/* Active page */
.mobile-link.active {
  color: #fbbf24;
  font-weight: 600;
}




/* ================= RESPONSIVE ================= */
@media (min-width: 768px) {
  .nav-links {
    display: flex;
  }
  .menu-btn,
  .menu-overlay,
  .mobile-drawer {
    display: none;
  }
}

      `}</style>
    </>
  );
};

export default Navigation;
