import React from 'react';

const ApplicationsPage = () => {
  const applications = [
    {
      industry: "Automotive",
      description: "Engine components, transmission parts, brake systems, and custom fixtures for automotive manufacturing.",
      examples: ["Pistons", "Cylinder Heads", "Gear Components", "Brake Calipers"]
    },
    {
      industry: "Aerospace",
      description: "High-precision components for aircraft and spacecraft with strict quality standards and material requirements.",
      examples: ["Turbine Blades", "Structural Components", "Landing Gear Parts", "Engine Mounts"]
    },
    {
      industry: "Medical",
      description: "Surgical instruments, implants, and medical device components manufactured to medical-grade specifications.",
      examples: ["Surgical Tools", "Orthopedic Implants", "Dental Instruments", "Prosthetics"]
    },
    {
      industry: "Electronics",
      description: "Precision housings, heat sinks, and mounting brackets for electronic devices and telecommunications equipment.",
      examples: ["Heat Sinks", "PCB Fixtures", "Connector Housings", "Shielding Components"]
    },
    {
      industry: "Industrial Equipment",
      description: "Custom machine parts, tooling, fixtures, and replacement components for industrial machinery.",
      examples: ["Jigs & Fixtures", "Die Components", "Shafts & Pins", "Hydraulic Parts"]
    },
    {
      industry: "Defense",
      description: "Military-grade components with highest precision standards for defense applications and equipment.",
      examples: ["Weapon Components", "Vehicle Parts", "Communication Devices", "Optics Mounts"]
    }
  ];

  return (
    <div style={{
      maxWidth: '1280px',
      margin: '0 auto',
      padding: '4rem 1rem'
    }}>
      <h1 style={{
        fontSize: '2.25rem',
        fontWeight: 'bold',
        marginBottom: '1rem'
      }}>
        Applications
      </h1>
      <p style={{
        fontSize: '1.25rem',
        color: '#4b5563',
        marginBottom: '3rem'
      }}>
        Serving diverse industries with precision CNC machining solutions
      </p>
      
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
        gap: '2rem'
      }}>
        {applications.map((app, index) => (
          <div key={index} style={{
            backgroundColor: 'white',
            borderRadius: '0.5rem',
            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
            padding: '1.5rem'
          }}>
            <h3 style={{
              fontSize: '1.5rem',
              fontWeight: 'bold',
              color: '#1e3a8a',
              marginBottom: '0.75rem'
            }}>
              {app.industry}
            </h3>
            <p style={{
              color: '#4b5563',
              marginBottom: '1rem'
            }}>
              {app.description}
            </p>
            <div style={{
              borderTop: '1px solid #e5e7eb',
              paddingTop: '1rem'
            }}>
              <h4 style={{
                fontWeight: '600',
                marginBottom: '0.5rem',
                color: '#374151'
              }}>
                Examples:
              </h4>
              <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '0.5rem'
              }}>
                {app.examples.map((example, idx) => (
                  <span key={idx} style={{
                    backgroundColor: '#dbeafe',
                    color: '#1e40af',
                    padding: '0.25rem 0.75rem',
                    borderRadius: '9999px',
                    fontSize: '0.875rem'
                  }}>
                    {example}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ApplicationsPage;