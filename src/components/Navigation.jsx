import React, { useEffect, useState } from "react";
import { Download, Menu, Phone, X } from "lucide-react";
import "./Navigation.css";

const navItems = [
  { id: "home", label: "Home" },
  { id: "about", label: "About Us" },
  { id: "services", label: "Services" },
  { id: "applications", label: "Applications" },
];

const actionItems = [
  { id: "brochure", label: "Brochure", Icon: Download },
  { id: "contact", label: "Contact Us", Icon: Phone },
];

const Navigation = ({ currentPage, setCurrentPage }) => {
  const [isOpen, setIsOpen] = useState(false);

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

  const renderNavButton = (item, className = "nav-menu-link") => (
    <button
      key={item.id}
      className={`${className} ${currentPage === item.id ? "is-active" : ""}`}
      onClick={() => goToPage(item.id)}
      type="button"
    >
      {item.label}
    </button>
  );

  return (
    <header className="site-nav">
      <div className="site-nav__inner">
        <div className="site-nav__left">
          <button
            className="site-nav__menu-button"
            onClick={() => setIsOpen((value) => !value)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            type="button"
          >
            <span className="site-nav__menu-icon" aria-hidden="true">
              {isOpen ? <X size={18} /> : <Menu size={18} />}
            </span>
          </button>

          <button
            className="site-nav__brand"
            onClick={() => goToPage("home")}
            type="button"
            aria-label="Go to home page"
          >
            <span className="site-nav__logo">
              <img src="/logo.jpg" alt="Avadh Enterprise" />
            </span>
            <span className="site-nav__brand-copy">
              <strong>AVADH ENTERPRISE</strong>
              <span>All machining solutions under one roof</span>
            </span>
          </button>
        </div>

        <nav className="site-nav__desktop" aria-label="Primary navigation">
          {navItems.map((item) => renderNavButton(item))}
        </nav>

        <div className="site-nav__actions">
          {actionItems.map(({ Icon, ...item }) => (
            <button
              key={item.id}
              className={`site-nav__action ${
                currentPage === item.id ? "is-active" : ""
              } ${item.id === "contact" ? "site-nav__action--primary" : ""}`}
              onClick={() => goToPage(item.id)}
              type="button"
            >
              <Icon size={16} aria-hidden="true" />
              <span>{item.label}</span>
            </button>
          ))}
        </div>
      </div>

      <div className={`site-nav__mobile-panel ${isOpen ? "is-open" : ""}`}>
        <div className="site-nav__mobile-header">
          <button
            className="site-nav__mobile-brand"
            onClick={() => goToPage("home")}
            type="button"
            aria-label="Go to home page"
          >
            <img src="/logo.jpg" alt="Avadh Enterprise" />
            <span>
              <strong>AVADH ENTERPRISE</strong>
              <small>All machining solutions under one roof</small>
            </span>
          </button>
          <button
            className="site-nav__mobile-close"
            onClick={() => setIsOpen(false)}
            type="button"
            aria-label="Close menu"
          >
            <X size={28} />
          </button>
        </div>
        <nav aria-label="Mobile navigation" className="site-nav__mobile-list">
          {[...navItems, ...actionItems].map(({ Icon, ...item }) => (
            <button
              key={item.id}
              className={`site-nav__mobile-link ${
                currentPage === item.id ? "is-active" : ""
              }`}
              onClick={() => goToPage(item.id)}
              type="button"
            >
              <span>{item.label}</span>
              {Icon ? <Icon size={16} aria-hidden="true" /> : null}
            </button>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Navigation;
