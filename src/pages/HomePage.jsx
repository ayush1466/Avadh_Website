import React from 'react';
import { Wrench, Cog, Box, ChevronRight } from 'lucide-react';

const HomePage = ({ setCurrentPage }) => {
  return (
    <div style={{ minHeight: '100vh' }}>
      <div style={{
        background: 'linear-gradient(to right, #1e3a8a, #111827)',
        color: 'white',
        padding: '8rem 2rem',
        textAlign: 'center'
      }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <h1 style={{
            fontSize: '3rem',
            fontWeight: 'bold',
            marginBottom: '1.5rem'
          }}>
            Avadh Engineering
          </h1>
          <p style={{
            fontSize: '1.25rem',
            marginBottom: '2rem',
            maxWidth: '42rem',
            margin: '0 auto 2rem'
          }}>
            Leading provider of high-quality CNC machining services with state-of-the-art equipment and expert craftsmanship
          </p>
          <button 
            onClick={() => setCurrentPage('contact')}
            style={{
              backgroundColor: '#3b82f6',
              color: 'white',
              padding: '0.75rem 2rem',
              borderRadius: '0.5rem',
              fontWeight: '600',
              border: 'none',
              cursor: 'pointer',
              fontSize: '1rem'
            }}
            onMouseEnter={(e) => e.target.style.backgroundColor = '#2563eb'}
            onMouseLeave={(e) => e.target.style.backgroundColor = '#3b82f6'}
          >
            Contact Us
          </button>
        </div>
      </div>

      <div style={{
        maxWidth: '1280px',
        margin: '0 auto',
        padding: '4rem 1rem'
      }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '2rem',
          marginBottom: '4rem'
        }}>
          <div style={{
            textAlign: 'center',
            padding: '1.5rem',
            backgroundColor: 'white',
            borderRadius: '0.5rem',
            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
          }}>
            <Wrench size={48} color="#3b82f6" style={{ margin: '0 auto 1rem' }} />
            <h3 style={{
              fontSize: '1.25rem',
              fontWeight: 'bold',
              marginBottom: '0.5rem'
            }}>
              Advanced Technology
            </h3>
            <p style={{ color: '#4b5563' }}>
              Latest CNC machines for precision manufacturing
            </p>
          </div>

          <div style={{
            textAlign: 'center',
            padding: '1.5rem',
            backgroundColor: 'white',
            borderRadius: '0.5rem',
            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
          }}>
            <Cog size={48} color="#3b82f6" style={{ margin: '0 auto 1rem' }} />
            <h3 style={{
              fontSize: '1.25rem',
              fontWeight: 'bold',
              marginBottom: '0.5rem'
            }}>
              Expert Team
            </h3>
            <p style={{ color: '#4b5563' }}>
              Skilled professionals with years of experience
            </p>
          </div>

          <div style={{
            textAlign: 'center',
            padding: '1.5rem',
            backgroundColor: 'white',
            borderRadius: '0.5rem',
            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
          }}>
            <Box size={48} color="#3b82f6" style={{ margin: '0 auto 1rem' }} />
            <h3 style={{
              fontSize: '1.25rem',
              fontWeight: 'bold',
              marginBottom: '0.5rem'
            }}>
              Quality Assurance
            </h3>
            <p style={{ color: '#4b5563' }}>
              ISO certified processes and quality control
            </p>
          </div>
        </div>

        <div style={{
          backgroundColor: '#f9fafb',
          borderRadius: '0.5rem',
          padding: '2rem'
        }}>
          <h2 style={{
            fontSize: '1.875rem',
            fontWeight: 'bold',
            marginBottom: '1.5rem',
            textAlign: 'center'
          }}>
            Why Choose Us?
          </h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '1.5rem'
          }}>
            <div style={{ display: 'flex', alignItems: 'flex-start' }}>
              <ChevronRight color="#3b82f6" style={{ 
                marginTop: '0.25rem', 
                marginRight: '0.5rem',
                flexShrink: 0 
              }} />
              <div>
                <h4 style={{ fontWeight: '600', marginBottom: '0.25rem' }}>
                  High Precision
                </h4>
                <p style={{ color: '#4b5563' }}>
                  Tolerance up to ±0.001mm for critical components
                </p>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'flex-start' }}>
              <ChevronRight color="#3b82f6" style={{ 
                marginTop: '0.25rem', 
                marginRight: '0.5rem',
                flexShrink: 0 
              }} />
              <div>
                <h4 style={{ fontWeight: '600', marginBottom: '0.25rem' }}>
                  Fast Turnaround
                </h4>
                <p style={{ color: '#4b5563' }}>
                  Quick delivery without compromising quality
                </p>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'flex-start' }}>
              <ChevronRight color="#3b82f6" style={{ 
                marginTop: '0.25rem', 
                marginRight: '0.5rem',
                flexShrink: 0 
              }} />
              <div>
                <h4 style={{ fontWeight: '600', marginBottom: '0.25rem' }}>
                  Competitive Pricing
                </h4>
                <p style={{ color: '#4b5563' }}>
                  Best rates in the industry
                </p>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'flex-start' }}>
              <ChevronRight color="#3b82f6" style={{ 
                marginTop: '0.25rem', 
                marginRight: '0.5rem',
                flexShrink: 0 
              }} />
              <div>
                <h4 style={{ fontWeight: '600', marginBottom: '0.25rem' }}>
                  Custom Solutions
                </h4>
                <p style={{ color: '#4b5563' }}>
                  Tailored manufacturing for your specific needs
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;