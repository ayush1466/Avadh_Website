
import React, { useState } from 'react';
import { Mail, Phone, MapPin, Linkedin, Facebook, Instagram, ChevronDown } from 'lucide-react';

const Footer = ({ setCurrentPage }) => {
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const handleWhatsAppClick = () => {
    const url = `https://wa.me/9825995010?text=${encodeURIComponent("Hello, I would like to inquire about your CNC machining services.")}`;
    window.open(url, '_blank');
  };

  const socialLinks = [
    { name: 'Email', icon: Mail, color: '#60a5fa', action: () => window.location.href = 'avadheng@gmail.com' },
    { name: 'LinkedIn', icon: Linkedin, color: '#0A66C2', action: () => window.open('https://www.linkedin.com/company/avadh-enterprise2011/', '_blank') },
    { name: 'Facebook', icon: Facebook, color: '#1877F2', action: () => window.open('https://www.facebook.com/yourcompany', '_blank') },
    { name: 'Instagram', icon: Instagram, color: '#E1306C', action: () => window.open('https://www.instagram.com/avadheng/?igsh=MTc2OWk0bWl2d2dpOA%3D%3D#', '_blank') }
  ];

  const quickLinks = [
    { id: 'home', label: 'Home',path: '/' },
    { id: 'about', label: 'About Us', },
    { id: 'applications', label: 'Applications' },
    { id: 'brochure', label: 'Brochure' },
    { id: 'contact', label: 'Contact Us' }
  ];

  const serviceLinks = [
    { id: 'services', label: 'CNC Machining Job Work' },
    { id: 'services', label: 'Mold for Block Making Machine' },
    { id: 'services', label: 'General Services' }
  ];

  const handleLinkClick = (pageId) => {
    setCurrentPage(pageId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const linkStyle = {
    background: 'none',
    border: 'none',
    color: '#0F172A',
    cursor: 'pointer',
    fontSize: '0.875rem',
    padding: '0.25rem 0',
    textAlign: 'left',
    transition: 'color 0.3s'
  };

  const SocialButton = ({ link }) => {
    const Icon = link.icon;
    return (
      <button
        onClick={link.action}
        style={{
          width: '45px',
          height: '45px',
          borderRadius: '50%',
          backgroundColor: `${link.color}1A`,
          border: `2px solid ${link.color}`,
          color: link.color,
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          transition: 'all 0.3s'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = link.color;
          e.currentTarget.style.color = 'white';
          e.currentTarget.style.transform = 'scale(1.1)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = `${link.color}1A`;
          e.currentTarget.style.color = link.color;
          e.currentTarget.style.transform = 'scale(1)';
        }}
        title={link.name}
      >
        <Icon size={20} />
      </button>
    );
  };

  return (
    <footer style={{
      backgroundColor: '#ADD8E6',
      backdropFilter: 'blur(10px)',
      color: 'white',
      padding: '3rem 0 1rem',
      marginTop: '4rem',
      borderTop: '1px solid rgba(255, 255, 255, 0.1)'
    }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1rem' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '2rem',
          marginBottom: '2rem'
        }}>
          
          {/* Company Info */}
          <div>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '1rem', color: '#0F172A' }}>
              Precision CNC Works
            </h3>
            <p style={{ color: '#0F172A', fontSize: '0.875rem', lineHeight: '1.6', marginBottom: '1rem' }}>
              Leading provider of high-quality CNC machining services with state-of-the-art equipment and expert craftsmanship.
              with trust and greed to encourage new technologies and business opportunities,Avadh always strengthens its relationship with their clients.
            </p>
            <p style={{ color: '#0F172A', fontSize: '0.75rem', fontStyle: 'italic' }}>
              ISO 9001:2015 Certified
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 style={{ fontSize: '1.1rem', fontWeight: 'bold', marginBottom: '1rem', color: '#0F172A' }}>
              Quick Links
            </h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {quickLinks.map(link => (
                <li key={link.id} style={{ marginBottom: '0.5rem' }}>
                  <button
                    onClick={() => handleLinkClick(link.id)}
                    style={linkStyle}
                    onMouseEnter={(e) => e.target.style.color = '#60a5fa'}
                    onMouseLeave={(e) => e.target.style.color = '#0F172A'}
                  >
                    → {link.label}
                  </button>
                </li>
              ))}
              
              {/* Services Dropdown */}
              <li style={{ marginBottom: '0.5rem' }}>
                <button
                  onClick={() => setIsServicesOpen(!isServicesOpen)}
                  style={{ ...linkStyle, display: 'flex', alignItems: 'center', gap: '0.5rem' }}
                  onMouseEnter={(e) => e.target.style.color = '#60a5fa'}
                  onMouseLeave={(e) => e.target.style.color = '#0F172A'}
                >
                  → Services
                  <ChevronDown 
                    size={14} 
                    style={{
                      transform: isServicesOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                      transition: 'transform 0.3s'
                    }}
                  />
                </button>
                
                {isServicesOpen && (
                  <ul style={{ listStyle: 'none', padding: '0.5rem 0 0 1rem', margin: 0 }}>
                    {serviceLinks.map(service => (
                      <li key={service.id} style={{ marginBottom: '0.4rem' }}>
                        <button
                          onClick={() => handleLinkClick(service.id)}
                          style={{ ...linkStyle, color: '#0F172A', fontSize: '0.813rem' }}
                          onMouseEnter={(e) => e.target.style.color = '#60a5fa'}
                          onMouseLeave={(e) => e.target.style.color = '#0F172A'}
                        >
                          • {service.label}
                        </button>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 style={{ fontSize: '1.1rem', fontWeight: 'bold', marginBottom: '1rem', color: '#0F172A' }}>
              Contact Info
            </h3>
            <div style={{ color: '#0F172A', fontSize: '0.875rem' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '0.75rem' }}>
                <MapPin size={16} style={{ marginRight: '0.5rem', marginTop: '0.25rem', flexShrink: 0 }} />
                <span>B-230, Swarnim Ind. Park-2, Bakrol-Dhamatvan road, Bakrol-Bujrang,<br />Ahmedabad, Gujarat 382430</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '0.75rem' }}>
                <Phone size={16} style={{ marginRight: '0.5rem' }} />
                <span>+91 9825995010 <br /> +91 9173886117  </span>
              
              </div>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <Mail size={16} style={{ marginRight: '0.5rem' }} />
                <span>avadheng@gmail.com</span>
              </div>
            </div>
          </div>

          {/* Social Media */}
          <div>
            <h3 style={{ fontSize: '1.1rem', fontWeight: 'bold', marginBottom: '1rem', color: '#0F172A' }}>
              Connect With Us
            </h3>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              {/* WhatsApp */}
              <button
                onClick={handleWhatsAppClick}
                style={{
                  width: '45px',
                  height: '45px',
                  borderRadius: '50%',
                  backgroundColor: 'rgba(37, 211, 102, 0.1)',
                  border: '2px solid #25D366',
                  color: '#25D366',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'all 0.3s'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#25D366';
                  e.currentTarget.style.color = 'white';
                  e.currentTarget.style.transform = 'scale(1.1)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(37, 211, 102, 0.1)';
                  e.currentTarget.style.color = '#25D366';
                  e.currentTarget.style.transform = 'scale(1)';
                }}
                title="WhatsApp"
              >
                <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
              </button>

              {socialLinks.map((link, index) => (
                <SocialButton key={index} link={link} />
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div style={{
          borderTop: '1px solid rgba(255, 255, 255, 0.1)',
          paddingTop: '1.5rem',
          marginTop: '2rem',
          textAlign: 'center'
        }}>
          <p style={{ color: '#0F172A', fontSize: '0.875rem', marginBottom: '0.5rem' }}>
            &copy;Avadh Enterprise
          </p>
          <p style={{ color: '#0F172A', fontSize: '0.75rem' }}>
            Quality CNC Machining Services | Made with ❤️ in India
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer