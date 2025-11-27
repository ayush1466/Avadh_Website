import React from 'react';
import { FileText, ChevronRight, Download } from 'lucide-react';

const BrochurePage = () => {
  // Function to handle PDF download
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/company-brochure.pdf'; // Your PDF file name in public folder
    link.download = 'Precision-CNC-Works-Brochure.pdf'; // Name when downloaded
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
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
        marginBottom: '2rem'
      }}>
        Company Brochure
      </h1>
      
      <div style={{
        background: 'linear-gradient(to right, #3b82f6, #1d4ed8)',
        color: 'white',
        borderRadius: '0.5rem',
        padding: '3rem',
        marginBottom: '2rem',
        textAlign: 'center'
      }}>
        <FileText size={96} style={{ margin: '0 auto 1.5rem', display: 'block' }} />
        <h2 style={{
          fontSize: '1.875rem',
          fontWeight: 'bold',
          marginBottom: '1rem'
        }}>
          Download Our Brochure
        </h2>
        <p style={{
          fontSize: '1.25rem',
          marginBottom: '2rem'
        }}>
          Get detailed information about our services, capabilities, and quality standards
        </p>
        
        {/* Download Button with Icon */}
        <button 
          onClick={handleDownload}
          style={{
            backgroundColor: 'white',
            color: '#1d4ed8',
            padding: '0.75rem 2rem',
            borderRadius: '0.5rem',
            fontWeight: '600',
            border: 'none',
            cursor: 'pointer',
            fontSize: '1rem',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem'
          }}
          onMouseEnter={(e) => e.target.style.backgroundColor = '#f3f4f6'}
          onMouseLeave={(e) => e.target.style.backgroundColor = 'white'}
        >
          <Download size={20} />
          Download PDF Brochure
        </button>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '2rem'
      }}>
        <div style={{
          backgroundColor: 'white',
          borderRadius: '0.5rem',
          boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
          padding: '1.5rem'
        }}>
          <h3 style={{
            fontSize: '1.25rem',
            fontWeight: 'bold',
            marginBottom: '1rem'
          }}>
            What's Inside
          </h3>
          <ul style={{
            listStyle: 'none',
            padding: 0
          }}>
            <li style={{
              display: 'flex',
              alignItems: 'flex-start',
              marginBottom: '0.75rem'
            }}>
              <ChevronRight color="#3b82f6" style={{ 
                marginTop: '0.25rem', 
                marginRight: '0.5rem',
                flexShrink: 0 
              }} />
              <span>Complete service catalog with technical specifications</span>
            </li>
            <li style={{
              display: 'flex',
              alignItems: 'flex-start',
              marginBottom: '0.75rem'
            }}>
              <ChevronRight color="#3b82f6" style={{ 
                marginTop: '0.25rem', 
                marginRight: '0.5rem',
                flexShrink: 0 
              }} />
              <span>Detailed machine capabilities and tolerances</span>
            </li>
            <li style={{
              display: 'flex',
              alignItems: 'flex-start',
              marginBottom: '0.75rem'
            }}>
              <ChevronRight color="#3b82f6" style={{ 
                marginTop: '0.25rem', 
                marginRight: '0.5rem',
                flexShrink: 0 
              }} />
              <span>Case studies and success stories</span>
            </li>
            <li style={{
              display: 'flex',
              alignItems: 'flex-start',
              marginBottom: '0.75rem'
            }}>
              <ChevronRight color="#3b82f6" style={{ 
                marginTop: '0.25rem', 
                marginRight: '0.5rem',
                flexShrink: 0 
              }} />
              <span>Quality certifications and standards</span>
            </li>
            <li style={{
              display: 'flex',
              alignItems: 'flex-start',
              marginBottom: '0.75rem'
            }}>
              <ChevronRight color="#3b82f6" style={{ 
                marginTop: '0.25rem', 
                marginRight: '0.5rem',
                flexShrink: 0 
              }} />
              <span>Material options and finishing services</span>
            </li>
          </ul>
        </div>

        <div style={{
          backgroundColor: 'white',
          borderRadius: '0.5rem',
          boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
          padding: '1.5rem'
        }}>
          <h3 style={{
            fontSize: '1.25rem',
            fontWeight: 'bold',
            marginBottom: '1rem'
          }}>
            Technical Specifications
          </h3>
          <div style={{ marginBottom: '1rem' }}>
            <h4 style={{
              fontWeight: '600',
              color: '#374151',
              marginBottom: '0.25rem'
            }}>
              Machining Capacity
            </h4>
            <p style={{ color: '#4b5563' }}>
              Up to 2000mm x 1000mm x 800mm
            </p>
          </div>
          <div style={{ marginBottom: '1rem' }}>
            <h4 style={{
              fontWeight: '600',
              color: '#374151',
              marginBottom: '0.25rem'
            }}>
              Tolerance
            </h4>
            <p style={{ color: '#4b5563' }}>
              Standard: ±0.01mm, Precision: ±0.001mm
            </p>
          </div>
          <div style={{ marginBottom: '1rem' }}>
            <h4 style={{
              fontWeight: '600',
              color: '#374151',
              marginBottom: '0.25rem'
            }}>
              Materials
            </h4>
            <p style={{ color: '#4b5563' }}>
              Aluminum, Steel, Stainless Steel, Titanium, Brass, Plastics
            </p>
          </div>
          <div>
            <h4 style={{
              fontWeight: '600',
              color: '#374151',
              marginBottom: '0.25rem'
            }}>
              Surface Finish
            </h4>
            <p style={{ color: '#4b5563' }}>
              Ra 0.4μm to 3.2μm
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrochurePage;