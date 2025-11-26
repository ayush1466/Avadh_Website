import React from 'react';
import { ChevronRight } from 'lucide-react';

const ServicesPage = () => {
  const services = [
    {
      title: "CNC Milling",
      description: "Multi-axis CNC milling for complex geometries and tight tolerances. Perfect for prototypes and production runs.",
      features: ["3-5 Axis Milling", "Aluminum, Steel, Titanium", "Tolerance: ±0.001mm"]
    },
    {
      title: "CNC Turning",
      description: "Precision turning operations for cylindrical parts with excellent surface finish and dimensional accuracy.",
      features: ["Swiss-Type Turning", "High-Speed Machining", "Live Tooling Capabilities"]
    },
    {
      title: "Wire EDM",
      description: "Wire electrical discharge machining for intricate cuts and hard materials that are difficult to machine conventionally.",
      features: ["Complex Profiles", "Hard Materials", "Fine Surface Finish"]
    },
    {
      title: "Surface Grinding",
      description: "High-precision surface grinding for flat surfaces and parallel requirements with exceptional flatness.",
      features: ["Precision Grinding", "Large Capacity", "Mirror Finish"]
    },
    {
      title: "Prototype Development",
      description: "Rapid prototyping services to bring your designs to life quickly for testing and validation.",
      features: ["Fast Turnaround", "Design Support", "Material Selection"]
    },
    {
      title: "Production Machining",
      description: "High-volume production runs with consistent quality and efficient manufacturing processes.",
      features: ["Batch Production", "Quality Control", "Cost-Effective"]
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
        Our Services
      </h1>
      <p style={{
        fontSize: '1.25rem',
        color: '#4b5563',
        marginBottom: '3rem'
      }}>
        Comprehensive CNC machining solutions for all your manufacturing needs
      </p>
      
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '2rem'
      }}>
        {services.map((service, index) => (
          <div 
            key={index}
            style={{
              backgroundColor: 'white',
              borderRadius: '0.5rem',
              boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
              padding: '1.5rem',
              transition: 'box-shadow 0.3s'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = '0 10px 15px -3px rgba(0, 0, 0, 0.1)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
            }}
          >
            <h3 style={{
              fontSize: '1.25rem',
              fontWeight: 'bold',
              color: '#1e3a8a',
              marginBottom: '0.75rem'
            }}>
              {service.title}
            </h3>
            <p style={{
              color: '#4b5563',
              marginBottom: '1rem'
            }}>
              {service.description}
            </p>
            <ul style={{
              listStyle: 'none',
              padding: 0
            }}>
              {service.features.map((feature, idx) => (
                <li key={idx} style={{
                  display: 'flex',
                  alignItems: 'center',
                  fontSize: '0.875rem',
                  color: '#374151',
                  marginBottom: '0.5rem'
                }}>
                  <ChevronRight size={16} color="#3b82f6" style={{ marginRight: '0.5rem' }} />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesPage;

