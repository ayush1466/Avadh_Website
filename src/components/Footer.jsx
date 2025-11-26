import React from 'react';

const Footer = () => {
  return (
    <footer style={{
      backgroundColor: '#111827',
      color: 'white',
      padding: '2rem 0'
    }}>
      <div style={{
        maxWidth: '1280px',
        margin: '0 auto',
        padding: '0 1rem',
        textAlign: 'center'
      }}>
        <p style={{ marginBottom: '0.5rem' }}>
          &copy; 2025 Precision CNC Works. All rights reserved.
        </p>
        <p style={{ color: '#9ca3af', fontSize: '0.875rem' }}>
          Quality CNC Machining Services | ISO 9001:2015 Certified
        </p>
      </div>
    </footer>
  );
};

export default Footer;

