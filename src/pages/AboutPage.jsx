import React, { useState, useEffect } from 'react';
import { Target, Eye, Cog, CheckCircle, FileText, Code, Settings, Search, Package } from 'lucide-react';

const AboutPage = () => {
  const [counters, setCounters] = useState({ year: 2000 });

  useEffect(() => {
    const yearInterval = setInterval(() => {
      setCounters(prev => {
        if (prev.year < 2006) {
          return { ...prev, year: prev.year + 1 };
        }
        clearInterval(yearInterval);
        return prev;
      });
    }, 50);

    return () => clearInterval(yearInterval);
  }, []);

  const stats = [
    { value: counters.year, label: 'Established' },
    { value: 'ISO 9001:2015', label: 'Certified' },
    { value: '5 Steps', label: 'Quality Process' }
  ];

  const industries = [
    'Thermal', 'Hydro', 'Defense', 'Aerospace', 'Aeronautical',
    'Pumps', 'Valves', 'Gears', 'Bearings', 'Marine',
    'Railway', 'Wind Mills', 'Steel', 'Die & Mold', 'Automotive', 'Machineries'
  ];

  const materials = [
    'Titanium', 'Inconel', 'Armor Steel', 'Duplex Steel',
    'Aluminum', 'Copper', 'Bronze', 'Nickel',
    'Carbon Fiber (CFRP)', 'Glass Fiber (GFRP)', 'Ceramic Tile'
  ];

  const processSteps = [
    {
      icon: <FileText style={{ width: '32px', height: '32px' }} />,
      title: 'REQUEST',
      description: 'We work closely with our clients to understand their needs.'
    },
    {
      icon: <Code style={{ width: '32px', height: '32px' }} />,
      title: 'PROGRAMMING',
      description: 'Our Engineers study specifications and develop custom programming.'
    },
    {
      icon: <Settings style={{ width: '32px', height: '32px' }} />,
      title: 'MACHINING',
      description: 'We use high-tech CNC machines with strong tools and instruments.'
    },
    {
      icon: <Search style={{ width: '32px', height: '32px' }} />,
      title: 'INSPECTION',
      description: 'We conduct rigorous quality checks with CMM machine inspection.'
    },
    {
      icon: <Package style={{ width: '32px', height: '32px' }} />,
      title: 'DELIVERY',
      description: 'We deliver your finished products on time and within budget.'
    }
  ];

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(to bottom right, #f8fafc, #dbeafe)',
      overflow: 'hidden'
    }}>
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeInLeft {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fadeInRight {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.8);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes pulse {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.05);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        @keyframes shimmer {
          0% {
            background-position: -1000px 0;
          }
          100% {
            background-position: 1000px 0;
          }
        }

        @keyframes rotateIn {
          from {
            opacity: 0;
            transform: rotate(-180deg) scale(0.5);
          }
          to {
            opacity: 1;
            transform: rotate(0) scale(1);
          }
        }

        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out forwards;
        }

        .animate-fadeInLeft {
          animation: fadeInLeft 0.8s ease-out forwards;
        }

        .animate-fadeInRight {
          animation: fadeInRight 0.8s ease-out forwards;
        }

        .animate-scaleIn {
          animation: scaleIn 0.6s ease-out forwards;
        }

        .animate-pulse-slow {
          animation: pulse 2s ease-in-out infinite;
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        .animate-rotateIn {
          animation: rotateIn 0.8s ease-out forwards;
        }

        .shimmer {
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);
          background-size: 1000px 100%;
          animation: shimmer 2s infinite;
        }

        .card-hover {
          transition: all 0.3s ease;
        }

        .card-hover:hover {
          transform: translateY(-10px) scale(1.02);
          box-shadow: 0 20px 40px rgba(0,0,0,0.15);
        }

        .tag-appear {
          opacity: 0;
          animation: fadeInUp 0.5s ease-out forwards;
        }

        .process-card {
          opacity: 0;
          transform: translateY(30px);
          animation: fadeInUp 0.6s ease-out forwards;
        }

        .button-hover {
          transition: all 0.3s ease;
        }

        .button-hover:hover {
          transform: scale(1.1);
          box-shadow: 0 25px 50px rgba(0,0,0,0.25);
          background-color: #eff6ff;
        }
      `}</style>

      {/* Hero Section */}
      <div style={{
        background: 'linear-gradient(to right, #1e3a8a, #1e40af, #1d4ed8)',
        color: 'white',
        padding: '5rem 1rem',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)',
          backgroundSize: '1000px 100%',
          animation: 'shimmer 2s infinite'
        }}></div>
        
        <div style={{
          maxWidth: '1280px',
          margin: '0 auto',
          position: 'relative',
          zIndex: 10
        }}>
          <h1 style={{
            fontSize: '3rem',
            fontWeight: 'bold',
            marginBottom: '1rem',
            animation: 'fadeInLeft 0.8s ease-out forwards'
          }}>
            About AVADH
          </h1>
          <p style={{
            fontSize: '1.25rem',
            color: '#bfdbfe',
            maxWidth: '48rem',
            animation: 'fadeInRight 0.8s ease-out forwards',
            animationDelay: '0.2s',
            opacity: 0
          }}>
            High Precision Machining Solutions Since 2006
          </p>
        </div>
        
        {/* Floating shape */}
        <div style={{
          position: 'absolute',
          bottom: '2.5rem',
          left: '5rem',
          width: '8rem',
          height: '8rem',
          backgroundColor: '#3b82f6',
          borderRadius: '50%',
          opacity: 0.1,
          animation: 'float 3s ease-in-out infinite',
          animationDelay: '0.5s'
        }}></div>
      </div>

      {/* Stats Section */}
      <div style={{
        maxWidth: '1280px',
        margin: '0 auto',
        padding: '0 1rem',
        marginTop: '-3rem'
      }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '1.5rem',
          marginBottom: '4rem'
        }}>
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="card-hover animate-scaleIn"
              style={{
                backgroundColor: 'white',
                borderRadius: '0.5rem',
                boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
                padding: '1.5rem',
                textAlign: 'center',
                animationDelay: `${index * 0.15}s`,
                opacity: 0
              }}
            >
              <h3 style={{
                fontSize: '1.875rem',
                fontWeight: 'bold',
                color: '#1e3a8a',
                marginBottom: '0.5rem'
              }}>
                {typeof stat.value === 'number' ? stat.value : stat.value}
              </h3>
              <p style={{ color: '#4b5563' }}>{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

  
    {/* Company Story */}
      <div style={{
        maxWidth: '1280px',
        margin: '0 auto',
        padding: '0 1rem',
        marginBottom: '4rem'
      }}>
        <div className="card-hover animate-fadeInUp" style={{
          backgroundColor: 'white',
          borderRadius: '0.75rem',
          boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
          padding: '3rem'
        }}>
          <h2 style={{
            fontSize: '1.875rem',
            fontWeight: 'bold',
            color: '#111827',
            marginBottom: '1.5rem'
          }}>
            Our Story
          </h2>
          <div style={{
            maxWidth: '100%',
            color: '#374151',
            lineHeight: '1.75'
          }}>
            <p className="animate-fadeInUp" style={{
              fontSize: '1.125rem',
              marginBottom: '1rem',
              animationDelay: '0.1s',
              opacity: 0
            }}>
              We established ourselves as a part of the manufacturing and machining service industry in 2006. As the nation grew, our establishments along with our facilities, skills, equipment, machining capabilities, and quality control also grew.
            </p>
            <p className="animate-fadeInUp" style={{
              fontSize: '1.125rem',
              marginBottom: '1rem',
              animationDelay: '0.2s',
              opacity: 0
            }}>
              Founded by <strong>Mr. Kaushik Patel</strong>, a brilliant mindset in growing business and accounting, along with <strong>Mr. Alpesh Patel</strong>, a genius mind full of machinery and mechanical expertise, this industry started in Ahmedabad with just one machine. Today, we are an <strong>ISO 9001:2015 certified company</strong>, aiming for better machining capabilities and quality control in this mechanical industry.
            </p>
            <p className="animate-fadeInUp" style={{
              fontSize: '1.125rem',
              animationDelay: '0.3s',
              opacity: 0
            }}>
              Leveraging cutting-edge design technologies such as Mastercam, we ensure high-quality product development. Our high-end facility is well-equipped with advanced CNCs including VMC, HMC, Turning Centre, and H. Boring. We ensure our clients' promises through high-end inspection of quality and geometry on CMM.
            </p>
          </div>
        </div>
      </div>

      {/* Founders Section */}
      <div style={{
        maxWidth: '1280px',
        margin: '0 auto',
        padding: '0 1rem',
        marginBottom: '4rem'
      }}>
        <div className="animate-fadeInUp" style={{
          textAlign: 'center',
          marginBottom: '3rem'
        }}>
          <h2 style={{
            fontSize: '1.875rem',
            fontWeight: 'bold',
            color: '#111827',
            marginBottom: '1rem'
          }}>
            Meet Our Founders
          </h2>
          <p style={{
            fontSize: '1.125rem',
            color: '#4b5563'
          }}>
            The visionary leaders behind AVADH's success
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '2rem'
        }}>
          {/* Founder */}
          <div className="card-hover animate-fadeInLeft" style={{
            backgroundColor: 'white',
            borderRadius: '0.75rem',
            boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
            padding: '2rem',
            textAlign: 'center'
          }}>
            <div style={{
              width: '180px',
              height: '180px',
              borderRadius: '50%',
              background: 'linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)',
              margin: '0 auto 1.5rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 10px 25px rgba(30, 58, 138, 0.3)',
              overflow: 'hidden'
            }}>
              <div>
             <img src="kaushik.webp" alt="Mr. Kaushik Patel" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
            </div>
            <h3 style={{
              fontSize: '1.5rem',
              fontWeight: 'bold',
              color: '#111827',
              marginBottom: '0.5rem'
            }}>
              Mr. Kaushik Patel
            </h3>
            <p style={{
              fontSize: '1rem',
              color: '#3b82f6',
              fontWeight: '600',
              marginBottom: '1rem'
            }}>
              Founder & Managing Director
            </p>
            <p style={{
              color: '#4b5563',
              lineHeight: '1.6',
              textAlign: 'left'
            }}>
              With a brilliant mindset in business development and accounting, Mr. Kaushik Patel has been the driving force behind AVADH's strategic growth. His vision and financial acumen have transformed the company from a single-machine operation into an ISO 9001:2015 certified industry leader. His commitment to excellence and sustainable business practices continues to guide the company's expansion and success.
            </p>
          </div>

          {/* Co-Founder */}
          <div className="card-hover animate-fadeInRight" style={{
            backgroundColor: 'white',
            borderRadius: '0.75rem',
            boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
            padding: '2rem',
            textAlign: 'center'
          }}>
            <div style={{
              width: '180px',
              height: '180px',
              borderRadius: '50%',
              background: 'linear-gradient(135deg, #4f46e5 0%, #6366f1 100%)',
              margin: '0 auto 1.5rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 10px 25px rgba(79, 70, 229, 0.3)',
              overflow: 'hidden'
            }}>
              <div>
               <img src="alpesh.webp" alt="Mr. Alpesh Patel" style={{ width: '100%', height: '100%', objectFit: 'cover' }} /> 
              </div>
            </div>
            <h3 style={{
              fontSize: '1.5rem',
              fontWeight: 'bold',
              color: '#111827',
              marginBottom: '0.5rem'
            }}>
              Mr. Alpesh Patel
            </h3>
            <p style={{
              fontSize: '1rem',
              color: '#4f46e5',
              fontWeight: '600',
              marginBottom: '1rem'
            }}>
              Co-Founder & Technical Director
            </p>
            <p style={{
              color: '#4b5563',
              lineHeight: '1.6',
              textAlign: 'left'
            }}>
              A genius mind with deep expertise in machinery and mechanical engineering, Mr. Alpesh Patel brings unparalleled technical knowledge to AVADH. His mastery of advanced CNC technologies, precision machining, and quality control systems forms the backbone of the company's operational excellence. His innovative approach to solving complex machining challenges has established AVADH's reputation for delivering superior quality products across diverse industries.
            </p>
          </div>
        </div>
      </div>

      {/* Mission & Vision */}
      <div style={{
        maxWidth: '1280px',
        margin: '0 auto',
        padding: '0 1rem',
        marginBottom: '4rem'
      }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '2rem'
        }}>
          {/* Mission */}
          <div className="card-hover animate-fadeInLeft" style={{
            background: 'linear-gradient(to bottom right, #2563eb, #1e40af)',
            borderRadius: '0.75rem',
            boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
            padding: '2rem',
            color: 'white'
          }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              marginBottom: '1rem'
            }}>
              <div className="animate-pulse-slow">
                <Target style={{ width: '40px', height: '40px', marginRight: '0.75rem' }} />
              </div>
              <h2 style={{
                fontSize: '1.875rem',
                fontWeight: 'bold'
              }}>
                Mission
              </h2>
            </div>
            <p style={{
              color: '#dbeafe',
              lineHeight: '1.75'
            }}>
              Our mission is to satisfy our clients with close tolerances, quality control, and best inspection of geometry. We achieve this through strong relationships with our clients and employees. We focus on a sustainable and safe working environment for better results. Every part we produce should not only meet but exceed our clients' expectations, leading to a great future for our nation. We are dedicated to innovations and always ready to learn and apply new technologies to satisfy our clients' needs.
            </p>
          </div>

          {/* Vision */}
          <div className="card-hover animate-fadeInRight" style={{
            background: 'linear-gradient(to bottom right, #4f46e5, #4338ca)',
            borderRadius: '0.75rem',
            boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
            padding: '2rem',
            color: 'white'
          }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              marginBottom: '1rem'
            }}>
              <div className="animate-pulse-slow">
                <Eye style={{ width: '40px', height: '40px', marginRight: '0.75rem' }} />
              </div>
              <h2 style={{
                fontSize: '1.875rem',
                fontWeight: 'bold'
              }}>
                Vision
              </h2>
            </div>
            <p style={{
              color: '#e0e7ff',
              lineHeight: '1.75'
            }}>
              Our vision is to establish ourselves as the best machining solution provider with superior quality and geometry inspection. We are driven by sustainable and safety-ensured technologies. Our vision is to set new benchmarks which lead to building strong trust all over the world, contributing to a safe and sustainable India.
            </p>
          </div>
        </div>
      </div>

      {/* Capabilities */}
      <div style={{
        maxWidth: '1280px',
        margin: '0 auto',
        padding: '0 1rem',
        marginBottom: '4rem'
      }}>
        <div className="card-hover animate-fadeInUp" style={{
          backgroundColor: 'white',
          borderRadius: '0.75rem',
          boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
          padding: '3rem'
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            marginBottom: '1.5rem'
          }}>
            <div className="animate-rotateIn">
              <Cog style={{ width: '32px', height: '32px', color: '#1d4ed8', marginRight: '0.75rem' }} />
            </div>
            <h2 style={{
              fontSize: '1.875rem',
              fontWeight: 'bold',
              color: '#111827'
            }}>
              Our Capabilities
            </h2>
          </div>
          
          <div style={{ marginBottom: '2rem' }}>
            <h3 style={{
              fontSize: '1.25rem',
              fontWeight: '600',
              color: '#1f2937',
              marginBottom: '0.75rem'
            }}>
              Advanced Infrastructure
            </h3>
            <p style={{
              color: '#374151',
              lineHeight: '1.75'
            }}>
              AVADH has ample infrastructure to Design, Machine, and Deliver with advanced level Quality Check aspects. We feature Large Size Gantry Moving CNC Machining Centers and Advanced Quality Control Equipment.
            </p>
          </div>

          <div style={{ marginBottom: '2rem' }}>
            <h3 style={{
              fontSize: '1.25rem',
              fontWeight: '600',
              color: '#1f2937',
              marginBottom: '0.75rem'
            }}>
              Materials We Work With
            </h3>
            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '0.5rem'
            }}>
              {materials.map((material, index) => (
                <span 
                  key={index}
                  className="tag-appear"
                  style={{
                    backgroundColor: '#dbeafe',
                    color: '#1e40af',
                    padding: '0.25rem 0.75rem',
                    borderRadius: '9999px',
                    fontSize: '0.875rem',
                    fontWeight: '500',
                    animationDelay: `${index * 0.05}s`
                  }}
                >
                  {material}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h3 style={{
              fontSize: '1.25rem',
              fontWeight: '600',
              color: '#1f2937',
              marginBottom: '0.75rem'
            }}>
              Industries We Serve
            </h3>
            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '0.5rem'
            }}>
              {industries.map((industry, index) => (
                <span 
                  key={index}
                  className="tag-appear"
                  style={{
                    backgroundColor: '#f3f4f6',
                    color: '#1f2937',
                    padding: '0.25rem 0.75rem',
                    borderRadius: '9999px',
                    fontSize: '0.875rem',
                    fontWeight: '500',
                    animationDelay: `${index * 0.05}s`
                  }}
                >
                  {industry}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Process */}
      <div style={{
        maxWidth: '1280px',
        margin: '0 auto',
        padding: '0 1rem',
        marginBottom: '4rem'
      }}>
        <div className="animate-fadeInUp" style={{
          textAlign: 'center',
          marginBottom: '3rem'
        }}>
          <h2 style={{
            fontSize: '1.875rem',
            fontWeight: 'bold',
            color: '#111827',
            marginBottom: '1rem'
          }}>
            Our Process
          </h2>
          <p style={{
            fontSize: '1.25rem',
            color: '#4b5563'
          }}>
            5 Steps to a Long-Term Strong Partnership
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
          gap: '1.5rem'
        }}>
          {processSteps.map((step, index) => (
            <div 
              key={index}
              className="card-hover process-card"
              style={{
                backgroundColor: 'white',
                borderRadius: '0.5rem',
                boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
                padding: '1.5rem',
                textAlign: 'center',
                animationDelay: `${index * 0.15}s`
              }}
            >
              <div className="animate-float" style={{
                backgroundColor: '#dbeafe',
                borderRadius: '50%',
                width: '4rem',
                height: '4rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 1rem',
                color: '#1d4ed8',
                animationDelay: `${index * 0.2}s`
              }}>
                {step.icon}
              </div>
              <div className="animate-pulse-slow" style={{
                backgroundColor: '#1d4ed8',
                color: 'white',
                borderRadius: '50%',
                width: '2rem',
                height: '2rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 0.75rem',
                fontSize: '0.875rem',
                fontWeight: 'bold'
              }}>
                {index + 1}
              </div>
              <h3 style={{
                fontSize: '1.125rem',
                fontWeight: 'bold',
                color: '#111827',
                marginBottom: '0.5rem'
              }}>
                {step.title}
              </h3>
              <p style={{
                fontSize: '0.875rem',
                color: '#4b5563'
              }}>
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div style={{
        background: 'linear-gradient(to right, #1e3a8a, #1d4ed8)',
        color: 'white',
        padding: '4rem 1rem',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)',
          backgroundSize: '1000px 100%',
          animation: 'shimmer 2s infinite'
        }}></div>
        <div className="animate-fadeInUp" style={{
          maxWidth: '1024px',
          margin: '0 auto',
          textAlign: 'center',
          position: 'relative',
          zIndex: 10
        }}>
          <h2 style={{
            fontSize: '1.875rem',
            fontWeight: 'bold',
            marginBottom: '1rem'
          }}>
            Ready to Work With Us?
          </h2>
          <p style={{
            fontSize: '1.25rem',
            color: '#bfdbfe',
            marginBottom: '2rem'
          }}>
            Experience precision machining with close tolerances and exceptional quality control.
          </p>
          <button className="button-hover" style={{
            backgroundColor: 'white',
            color: '#1e3a8a',
            padding: '0.75rem 2rem',
            borderRadius: '0.5rem',
            fontWeight: '600',
            border: 'none',
            cursor: 'pointer',
            boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
            fontSize: '1rem'
          }}>
            Get in Touch
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;