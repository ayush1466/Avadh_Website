import React, { useEffect, useState } from "react";
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

  useEffect(() => {
    document.body.classList.toggle("nav-open", isOpen);

    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      document.body.classList.remove("nav-open");
      window.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen]);

  const goToPage = (pageId) => {
    setCurrentPage(pageId);
    setIsOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <header className="nav-wrapper">
        <div className="nav-container">
          {/* BRAND */}
          <button className="brand" onClick={() => goToPage("home")}>
            <div className="brand-logo">
              <img src="/logo.jpg" alt="Avadh Enterprise Logo" />
            </div>
            <div className="brand-text">
              <h1>AVADH ENTERPRISE</h1>
              <span>ALL MACHINING SOLUTIONS UNDER ONE ROOF</span>
            </div>
          </button>

          {/* DESKTOP MENU */}
          <nav className="nav-links">
            {navItems.map((item) => (
              <button
                key={item.id}
                className={`nav-link ${
                  currentPage === item.id ? "active" : ""
                }`}
                onClick={() => goToPage(item.id)}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* MOBILE TOGGLE */}
          <button
            className="menu-btn"
            onClick={() => setIsOpen((value) => !value)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
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
        <span>ALL MACHINING SOLUTIONS UNDER ONE ROOF</span>
      </div>
    </div>

    <button className="close-btn" onClick={() => setIsOpen(false)} aria-label="Close menu">
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
          goToPage(item.id);
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
  min-width: 0;
  border: 0;
  background: transparent;
  text-align: left;
  cursor: pointer;
}

.brand-logo {
  width: 52px;
  height: 52px;
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
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 46px;
  height: 46px;
  flex: 0 0 46px;
  background: rgba(255,255,255,0.08);
  border: 1px solid rgba(255,255,255,0.12);
  border-radius: 14px;
  color: #ffffff;
  cursor: pointer;
}

body.nav-open {
  overflow: hidden;
  touch-action: none;
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
  width: min(88vw, 380px);
  height: 100dvh;
  padding: calc(1rem + env(safe-area-inset-top)) 1rem calc(1rem + env(safe-area-inset-bottom));
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
  overflow-y: auto;
  overscroll-behavior: contain;
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
  gap: 0.8rem;
  margin-bottom: 1.75rem;
}

.mobile-brand {
  display: flex;
  align-items: center;
  gap: 12px;
  min-width: 0;
}

.mobile-brand img {
  width: 48px;
  height: 48px;
  padding: 8px;
  background: #ffffff;
  border-radius: 14px;
}

.mobile-brand h2 {
  font-size: clamp(0.95rem, 4vw, 1.1rem);
  font-weight: 800;
  color: #ffffff;
  margin: 0;
  line-height: 1.1;
}

.mobile-brand span {
  display: block;
  max-width: 190px;
  font-size: 0.58rem;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: #fbbf24;
  font-weight: 700;
}

/* ================= CLOSE BUTTON ================= */
.close-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  flex: 0 0 44px;
  background: rgba(255,255,255,0.08);
  border: 1px solid rgba(255,255,255,0.12);
  border-radius: 14px;
  color: #ffffff;
  cursor: pointer;
}

/* ================= MOBILE LINKS ================= */
/* ================= MOBILE LINKS (CLEAN) ================= */
.mobile-links {
  display: flex;
  flex-direction: column;
  gap: 0.65rem;
  margin-top: 0.5rem;
}

.mobile-link {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  width: 100%;
  min-height: 52px;
  background: rgba(255,255,255,0.04);
  border: 1px solid rgba(255,255,255,0.08);
  border-radius: 16px;
  color: #e5e7eb;
  font-size: 1.04rem;
  font-weight: 650;
  text-align: left;
  padding: 0.85rem 1rem;
  cursor: pointer;
  letter-spacing: 0.3px;
  transition: transform 0.25s ease, color 0.25s ease, background-color 0.25s ease, border-color 0.25s ease;
}

/* Hover effect – smooth & premium */
.mobile-link:hover {
  color: #fbbf24;
  transform: translate3d(4px, 0, 0);
  background: rgba(251,191,36,0.08);
}

/* Active page */
.mobile-link.active {
  color: #fbbf24;
  font-weight: 600;
  background: rgba(251,191,36,0.12);
  border-color: rgba(251,191,36,0.28);
}

.link-dot {
  width: 0.5rem;
  height: 0.5rem;
  flex: 0 0 0.5rem;
  border-radius: 999px;
  background: currentColor;
  opacity: 0.45;
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

@media (max-width: 767px) {
  .nav-container {
    height: 68px;
    padding: 0 0.85rem;
  }

  .brand {
    gap: 0.65rem;
  }

  .brand-logo {
    width: 44px;
    height: 44px;
    flex: 0 0 44px;
  }

  .brand-logo img {
    width: 32px;
  }

  .brand-text {
    min-width: 0;
  }

  .brand-text h1 {
    font-size: clamp(0.98rem, 4.2vw, 1.14rem);
    white-space: nowrap;
  }

  .brand-text span {
    display: block;
    max-width: 210px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: 0.56rem;
    letter-spacing: 1px;
  }
}

@media (max-width: 380px) {
  .brand-text span {
    max-width: 165px;
  }

  .mobile-drawer {
    width: 94vw;
  }
}

      `}</style>
    </>
  );
};

export default Navigation;
