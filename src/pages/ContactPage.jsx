import React from 'react';
import { MapPin, Phone, Mail, Send } from 'lucide-react';

const ContactPage = () => {
  const handleWhatsAppClick = () => {
    const phoneNumber = "919876543210";
    const message = "Hello, I would like to inquire about your CNC machining services. Please provide more information regarding pricing, lead times, and capabilities.";
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <div style={{
      maxWidth: '1280px',
      margin: '0 auto',
      padding: '4rem 1rem'
    }}>
      <h1 style={{
        fontSize: '2.25rem',
        fontWeight: 'bold',
        marginBottom: '2rem',
        color: '#1e3a8a'
      }}>
        Contact Us
      </h1>
      
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '2rem',
        marginBottom: '2rem'
      }}>
        <div style={{
          backgroundColor: 'white',
          borderRadius: '0.5rem',
          boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
          padding: '1.5rem'
        }}>
          <h2 style={{
            fontSize: '1.5rem',
            fontWeight: 'bold',
            marginBottom: '1.5rem',
            color: '#dc2626'
          }}>
            Get In Touch
          </h2>
          
          <div style={{ marginBottom: '1.5rem' }}>
            <div style={{
              display: 'flex',
              alignItems: 'flex-start',
              marginBottom: '1rem'
            }}>
              <MapPin color="#1e3a8a" style={{ marginTop: '0.25rem', marginRight: '0.75rem' }} />
              <div>
                <h3 style={{ fontWeight: '600', marginBottom: '0.25rem' }}>Address</h3>
                <p style={{ color: '#4b5563' }}>
                  Plot No. 123, Industrial Area Phase-2,<br />
                  Ahmedabad, Gujarat 382330, India
                </p>
              </div>
            </div>
            <div style={{
              display: 'flex',
              alignItems: 'flex-start',
              marginBottom: '1rem'
            }}>
              <Phone color="#1e3a8a" style={{ marginTop: '0.25rem', marginRight: '0.75rem' }} />
              <div>
                <h3 style={{ fontWeight: '600', marginBottom: '0.25rem' }}>Phone</h3>
                <p style={{ color: '#4b5563' }}>+91 98765 43210</p>
              </div>
            </div>
            
            <div style={{ display: 'flex', alignItems: 'flex-start' }}>
              <Mail color="#1e3a8a" style={{ marginTop: '0.25rem', marginRight: '0.75rem' }} />
              <div>
                <h3 style={{ fontWeight: '600', marginBottom: '0.25rem' }}>Email</h3>
                <p style={{ color: '#4b5563' }}>info@precisioncncworks.com</p>
              </div>
            </div>
          </div>

          <button
            onClick={handleWhatsAppClick}
            style={{
              width: '100%',
              backgroundColor: '#dc2626',
              color: 'white',
              padding: '0.75rem 1.5rem',
              borderRadius: '0.5rem',
              fontWeight: '600',
              border: 'none',
              cursor: 'pointer',
              fontSize: '1rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
            onMouseEnter={(e) => e.target.style.backgroundColor = '#b91c1c'}
            onMouseLeave={(e) => e.target.style.backgroundColor = '#dc2626'}
          >
            <Send size={20} style={{ marginRight: '0.5rem' }} />
            Send WhatsApp Inquiry
          </button>
        </div>

        <div style={{
          backgroundColor: 'white',
          borderRadius: '0.5rem',
          boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
          padding: '1.5rem'
        }}>
          <h2 style={{
            fontSize: '1.5rem',
            fontWeight: 'bold',
            marginBottom: '1.5rem',
            color: '#dc2626'
          }}>
            Business Hours
          </h2>

          <div>
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              paddingBottom: '0.5rem',
              borderBottom: '1px solid #e5e7eb',
              marginBottom: '0.75rem'
            }}>
              <span style={{ fontWeight: '600' }}>Monday - Friday</span>
              <span style={{ color: '#4b5563' }}>9:00 AM - 6:00 PM</span>
            </div>

            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              paddingBottom: '0.5rem',
              borderBottom: '1px solid #e5e7eb',
              marginBottom: '0.75rem'
            }}>
              <span style={{ fontWeight: '600' }}>Saturday</span>
              <span style={{ color: '#4b5563' }}>9:00 AM - 2:00 PM</span>
            </div>

            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              paddingBottom: '0.5rem',
              borderBottom: '1px solid #e5e7eb'
            }}>
              <span style={{ fontWeight: '600' }}>Sunday</span>
              <span style={{ color: '#4b5563' }}>Closed</span>
            </div>
          </div>

          <div style={{
            marginTop: '2rem',
            padding: '1rem',
            backgroundColor: '#eff6ff',
            borderRadius: '0.5rem'
          }}>
            <h3 style={{
              fontWeight: '600',
              marginBottom: '0.5rem',
              color: '#1e3a8a'
            }}>
              Quick Response
            </h3>
            <p style={{
              fontSize: '0.875rem',
              color: '#374151'
            }}>
              We typically respond within 24 hours during business days. For urgent matters, please call us directly.
            </p>
          </div>
        </div>
      </div>

      <div style={{
        backgroundColor: 'white',
        borderRadius: '0.5rem',
        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
        padding: '1.5rem'
      }}>
        <h2 style={{
          fontSize: '1.5rem',
          fontWeight: 'bold',
          marginBottom: '1rem',
          color: '#dc2626'
        }}>
          Our Location
        </h2>

        <div style={{
          width: '100%',
          height: '400px',
          backgroundColor: '#e5e7eb',
          borderRadius: '0.5rem',
          overflow: 'hidden'
        }}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d235013.74843013582!2d72.41493075!3d23.020181899999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e848aba5bd449%3A0x4fcedd11614f6516!2sAhmedabad%2C%20Gujarat%2C%20India!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Factory Location"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
