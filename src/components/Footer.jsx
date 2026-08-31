import React from "react";
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Instagram,
  MessageCircle,
} from "lucide-react";
import "./Footer.css";

const Footer = ({ setCurrentPage }) => {
  const handleWhatsAppClick = () => {
    const url = `https://wa.me/9825995010?text=${encodeURIComponent("Hello, I would like to inquire about your CNC machining services.")}`;
    window.open(url, "_blank");
  };

  const socialLinks = [
    {
      name: "WhatsApp",
      icon: MessageCircle,
      color: "#25d366",
      action: handleWhatsAppClick,
    },
    {
      name: "Email",
      icon: Mail,
      color: "#0f6cbd",
      action: () => (window.location.href = "mailto:info@avadheng.com"),
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      color: "#0A66C2",
      action: () =>
        window.open(
          "https://www.linkedin.com/company/avadh-enterprise2011/",
          "_blank",
        ),
    },
    {
      name: "Instagram",
      icon: Instagram,
      color: "#E1306C",
      action: () =>
        window.open(
          "https://www.instagram.com/avadheng/?igsh=MTc2OWk0bWl2d2dpOA%3D%3D#",
          "_blank",
        ),
    },
  ];

  const quickLinks = [
    { id: "home", label: "Home", path: "/" },
    { id: "about", label: "About Us" },
    { id: "applications", label: "Applications" },
    { id: "brochure", label: "Brochure" },
    { id: "contact", label: "Contact Us" },
  ];

  const serviceLinks = [
    { id: "service-1", label: "CNC Machining Job Work" },
    { id: "service-2", label: "Mold for Block Making Machine" },
    { id: "service-3", label: "Heavy Engineering" },
    { id: "service-4", label: "4th Axis 400 Dia" },
  ];

  const handleLinkClick = (pageId) => {
    setCurrentPage(pageId);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="footer-new">
      <div className="footer-new__container">
        {/* Brand Section */}
        <div className="footer-new__brand-section">
          <div className="footer-new__brand">
            <div className="footer-new__logo">
              <img src="logo.jpg" alt="Avadh Enterprise" />
            </div>
            <div>
              <h2>Avadh Enterprise</h2>
              <p className="footer-new__subtitle">Precision CNC Solutions</p>
            </div>
          </div>
          <p className="footer-new__description">
            Leading provider of high-quality CNC machining services with
            state-of-the-art equipment and expert craftsmanship.
          </p>
          <p className="footer-new__certification">
            ISO 9001:2015 Certified
          </p>
        </div>

        {/* Links Section */}
        <div className="footer-new__links-grid">
          {/* Pages Section */}
          <div className="footer-new__column">
            <h3>Pages</h3>
            <ul className="footer-new__link-list">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => handleLinkClick(link.id)}
                    className="footer-new__link"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Section */}
          <div className="footer-new__column">
            <h3>Services</h3>
            <ul className="footer-new__link-list">
              {serviceLinks.map((service) => (
                <li key={service.id}>
                  <button
                    onClick={() => handleLinkClick("services")}
                    className="footer-new__link"
                  >
                    {service.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Section */}
          <div className="footer-new__column">
            <h3>Get In Touch</h3>
            <ul className="footer-new__contact-list">
              <li>
                <MapPin size={18} />
                <span>
                  B-230, Swarnim Ind. Park-2, Bakrol-Dhamatvan road,
                  Bakrol-Bujrang, Ahmedabad, Gujarat 382430
                </span>
              </li>
              <li>
                <Phone size={18} />
                <span>
                  +91 9825995010 <br /> +91 9173886117
                </span>
              </li>
              <li>
                <Mail size={18} />
                <span>info@avadheng.com</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Contact With Us Section */}
      <div className="footer-new__contact-section">
        <h3>Connect With Us</h3>
        <div className="footer-new__socials">
          {socialLinks.map((link) => {
            const Icon = link.icon;
            return (
              <button
                key={link.name}
                className="footer-new__social-btn"
                onClick={link.action}
                title={link.name}
                aria-label={link.name}
                style={{ "--social-color": link.color }}
              >
                <Icon size={22} strokeWidth={2} />
                <span className="footer-new__social-tooltip">{link.name}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Copyright */}
      <div className="footer-new__copyright">
        <p>&copy; {new Date().getFullYear()} Avadh Enterprise. All rights reserved.</p>
        <p>Quality CNC Machining Services | Made with ❤️ in India</p>
      </div>
    </footer>
  );
};

export default Footer;
