import React, { useState } from 'react';
import { Menu, X, Cog } from 'lucide-react';

const Navigation = ({ currentPage, setCurrentPage }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'services', label: 'Services' },
    { id: 'applications', label: 'Applications' },
    { id: 'brochure', label: 'Brochure' },
    { id: 'contact', label: 'Contact Us' }
  ];

  return (
    <nav style={{
      backgroundColor: '#111827',
      color: 'white',
      position: 'sticky',
      top: 0,
      zIndex: 50,
      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
    }}>
      <div style={{
        maxWidth: '1280px',
        margin: '0 auto',
        padding: '0 1rem'
      }}>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          height: '64px'
        }}>
          <div style={{ display: 'flex', alignItems: 'center' }}>
          {/* for logo changing */}
            {/* <Cog size={32} color="#60a5fa" />  */}
            <span style={{
              fontWeight: 'bold',
              fontSize: '1.25rem',
              marginLeft: '0.5rem'
            }}>
              Avadh Engineering
            </span>
          </div>
          
          <div style={{ display: 'none' }} className="desktop-menu">
            {navItems.map(item => (
              <button
                key={item.id}
                onClick={() => setCurrentPage(item.id)}
                style={{
                  background: 'none',
                  border: 'none',
                  color: currentPage === item.id ? '#60a5fa' : 'white',
                  cursor: 'pointer',
                  padding: '0.5rem',
                  fontSize: '1rem',
                  borderBottom: currentPage === item.id ? '2px solid #60a5fa' : 'none'
                }}
                onMouseEnter={(e) => e.target.style.color = '#60a5fa'}
                onMouseLeave={(e) => e.target.style.color = currentPage === item.id ? '#60a5fa' : 'white'}
              >
                {item.label}
              </button>
            ))}
          </div>
          
          <button 
            onClick={() => setIsOpen(!isOpen)}
            style={{
              background: 'none',
              border: 'none',
              color: 'white',
              cursor: 'pointer',
              padding: '0.5rem'
            }}
            className="mobile-menu-button"
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
        
        {isOpen && (
          <div style={{ paddingBottom: '1rem' }} className="mobile-nav">
            {navItems.map(item => (
              <button
                key={item.id}
                onClick={() => { 
                  setCurrentPage(item.id); 
                  setIsOpen(false); 
                }}
                style={{
                  display: 'block',
                  width: '100%',
                  textAlign: 'left',
                  padding: '0.5rem 0',
                  background: 'none',
                  border: 'none',
                  color: currentPage === item.id ? '#60a5fa' : 'white',
                  cursor: 'pointer',
                  fontSize: '1rem'
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

