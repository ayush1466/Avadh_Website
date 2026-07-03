import React, { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Instagram,
  ChevronDown,
  Factory,
} from "lucide-react";
import "./Footer.css";

const Footer = ({ setCurrentPage }) => {
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const handleWhatsAppClick = () => {
    const url = `https://wa.me/9825995010?text=${encodeURIComponent("Hello, I would like to inquire about your CNC machining services.")}`;
    window.open(url, "_blank");
  };

  const socialLinks = [
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

  const SocialButton = ({ link }) => {
    const Icon = link.icon;

    return (
      <button
        className="site-footer__social-button"
        onClick={link.action}
        style={{ "--social-color": link.color }}
        title={link.name}
        aria-label={link.name}
      >
        <Icon size={19} />
      </button>
    );
  };

  return (
    <footer className="site-footer">
      <div className="site-footer__pattern" aria-hidden="true" />
      <div className="site-footer__glow" aria-hidden="true" />

      <div className="site-footer__shell">
        <div className="site-footer__grid">
          <section className="site-footer__brand-card">
            <div className="site-footer__brand-lockup">
              <div className="site-footer__brand-icon">
                <img src="logo.jpg" alt="" sizes="24" />
              </div>
              <h3>Precision CNC Works</h3>
            </div>
            <p>
              Leading provider of high-quality CNC machining services with
              state-of-the-art equipment and expert craftsmanship. with trust
              and greed to encourage new technologies and business
              opportunities,Avadh always strengthens its relationship with their
              clients.
            </p>
            <span className="site-footer__certification">
              ISO 9001:2015 Certified
            </span>
          </section>

          <section className="site-footer__column">
            <h3>Quick Links</h3>
            <ul className="site-footer__link-list">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <button onClick={() => handleLinkClick(link.id)}>
                    <span aria-hidden="true" />
                    {link.label}
                  </button>
                </li>
              ))}

              <li>
                <button
                  className="site-footer__services-toggle"
                  onClick={() => setIsServicesOpen((value) => !value)}
                  aria-expanded={isServicesOpen}
                >
                  <span aria-hidden="true" />
                  Services
                  <ChevronDown
                    size={14}
                    className={isServicesOpen ? "is-open" : ""}
                  />
                </button>

                <div
                  className={`site-footer__services-panel ${
                    isServicesOpen ? "is-open" : ""
                  }`}
                >
                  <ul>
                    {serviceLinks.map((service) => (
                      <li key={service.id}>
                        <button onClick={() => handleLinkClick("services")}>
                          {service.label}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            </ul>
          </section>

          <section className="site-footer__column">
            <h3>Contact Info</h3>
            <ul className="site-footer__contact-list">
              <li>
                <MapPin size={18} />
                <span>
                  B-230, Swarnim Ind. Park-2, Bakrol-Dhamatvan road,
                  Bakrol-Bujrang,
                  <br />
                  Ahmedabad, Gujarat 382430
                </span>
              </li>
              <li>
                <Phone size={18} />
                <span>
                  +91 9825995010 <br /> +91 9173886117{" "}
                </span>
              </li>
              <li>
                <Mail size={18} />
                <span>info@avadheng.com</span>
              </li>
            </ul>
          </section>

          <section className="site-footer__column">
            <h3>Connect With Us</h3>
            <div className="site-footer__socials">
              <button
                className="site-footer__social-button site-footer__social-button--whatsapp"
                onClick={handleWhatsAppClick}
                title="WhatsApp"
                aria-label="WhatsApp"
              >
                <svg width="22" height="22" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
              </button>

              {socialLinks.map((link) => (
                <SocialButton key={link.name} link={link} />
              ))}
            </div>
          </section>
        </div>

        <div className="site-footer__bottom">
          <p>&copy;Avadh Enterprise</p>
          <p>Quality CNC Machining Services | Made with &hearts; in India</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
