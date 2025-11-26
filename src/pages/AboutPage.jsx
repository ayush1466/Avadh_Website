import React from 'react';

const AboutPage = () => {
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
        About Us
      </h1>
      
      <div style={{
        backgroundColor: 'white',
        borderRadius: '0.5rem',
        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
        padding: '2rem',
        marginBottom: '2rem'
      }}>
        <p style={{
          fontSize: '1.125rem',
          color: '#374151',
          marginBottom: '1rem',
          lineHeight: '1.75'
        }}>
          Precision CNC Works has been a leader in precision manufacturing for over 15 years. We specialize in high-quality CNC machining services, delivering exceptional results for industries ranging from automotive to aerospace.
        </p>
        <p style={{
          fontSize: '1.125rem',
          color: '#374151',
          marginBottom: '1rem',
          lineHeight: '1.75'
        }}>
          Our state-of-the-art facility houses the latest CNC machines, including multi-axis milling centers, turning centers, and wire EDM machines. This advanced equipment, combined with our team's expertise, allows us to handle projects of any complexity.
        </p>
        <p style={{
          fontSize: '1.125rem',
          color: '#374151',
          lineHeight: '1.75'
        }}>
          We are committed to quality, precision, and customer satisfaction. Our ISO 9001:2015 certification reflects our dedication to maintaining the highest standards in every project we undertake.
        </p>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
        gap: '2rem'
      }}>
        <div style={{
          backgroundColor: '#eff6ff',
          borderRadius: '0.5rem',
          padding: '1.5rem'
        }}>
          <h3 style={{
            fontSize: '1.5rem',
            fontWeight: 'bold',
            color: '#1e3a8a',
            marginBottom: '0.5rem'
          }}>
            5+ 
          </h3>
          <p style={{ color: '#374151' }}>Years of Experience</p>
        </div>
        
        <div style={{
          backgroundColor: '#eff6ff',
          borderRadius: '0.5rem',
          padding: '1.5rem'
        }}>
          <h3 style={{
            fontSize: '1.5rem',
            fontWeight: 'bold',
            color: '#1e3a8a',
            marginBottom: '0.5rem'
          }}>
            500+
          </h3>
          <p style={{ color: '#374151' }}>Projects Completed</p>
        </div>
        
        <div style={{
          backgroundColor: '#eff6ff',
          borderRadius: '0.5rem',
          padding: '1.5rem'
        }}>
          <h3 style={{
            fontSize: '1.5rem',
            fontWeight: 'bold',
            color: '#1e3a8a',
            marginBottom: '0.5rem'
          }}>
            100%
          </h3>
          <p style={{ color: '#374151' }}>Customer Satisfaction</p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;

