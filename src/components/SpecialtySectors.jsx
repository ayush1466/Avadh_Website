import React from "react";
import { ChevronRight } from "lucide-react";

const SpecialtySectors = ({ setCurrentPage }) => {
  const specialtySectors = [
    { name: "INFRASTRUCTURE", image: "/assets/img8.jpeg" },
    { name: "VMC 3000x2000", image: "/assets/img3.jpeg" },
    { name: "VMC", image: "/assets/img7.jpeg" },
    { name: "HMC 400x400", image: "/assets/img6.jpeg" },
    { name: "HMC 630x630", image: "/assets/img4.jpeg" },
    { name: "HMC 300x300", image: "/assets/img5.jpeg" },
    { name: "H-BORING", image: "/assets/img1.jpg" },
    { name: "H-BORINGx2", image: "/assets/img2.jpeg" },
  ];

  return (
     <div
            style={{
              backgroundColor: "white",
              padding: "4rem 2rem",
              marginTop: "4rem",
              position: "relative",
              zIndex: 1,
            }}
          >
            <div
              style={{
                maxWidth: "1280px",
                margin: "0 auto",
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                gap: "3rem",
                alignItems: "center",
              }}
            >
              <div>
                <p
                  style={{
                    color: "#FF2D2D",
                    fontSize: "0.875rem",
                    fontWeight: "600",
                    marginBottom: "0.5rem",
                    letterSpacing: "0.05em",
                  }}
                >
                  Our Facility
                </p>
                <h2
                  style={{
                    fontSize: "clamp(1.5rem, 4vw, 2.5rem)",
                    fontWeight: "bold",
                    marginBottom: "1.5rem",
                    color: "#000000",
                    lineHeight: "1.2",
                  }}
                >
                  Where Quality Manufacturing Takes Shape
                </h2>
                <p
                  style={{
                    color: "#4b5563",
                    fontSize: "1rem",
                    lineHeight: "1.8",
                    marginBottom: "2rem",
                  }}
                >
                  Avadh Enterprise is a technologically advanced and structurally
                  strong manufacturing space designed for high-precision work and
                  timely execution. Supported by modern CNC machinery, reliable
                  infrastructure, and an experienced technical team, we ensure
                  superior quality and efficiency in every sector we cater to.
                </p>
              </div>
    
              <div
                style={{ position: "relative", width: "100%", overflow: "hidden" }}
              >
                <div
                  style={{
                    display: "flex",
                    gap: "1rem",
                    overflowX: "auto",
                    scrollBehavior: "smooth",
                    paddingBottom: "1rem",
                    paddingLeft: "0.5rem",
                    paddingRight: "0.5rem",
                    scrollbarWidth: "thin",
                    scrollbarColor: "#FF2D2D #f1f1f1",
                    WebkitOverflowScrolling: "touch",
                  }}
                  className="scroll-container"
                >
                  {specialtySectors.map((sector, i) => (
                    <div
                      key={i}
                      className="sector-card"
                      style={{
                        position: "relative",
                        minWidth: "calc(85vw - 2rem)",
                        maxWidth: "280px",
                        height: "350px",
                        borderRadius: "1rem",
                        overflow: "hidden",
                        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
                        cursor: "pointer",
                        transition: "transform 0.3s",
                        flexShrink: 0,
                      }}
                      onMouseEnter={(e) =>
                        (e.currentTarget.style.transform = "scale(1.05)")
                      }
                      onMouseLeave={(e) =>
                        (e.currentTarget.style.transform = "scale(1)")
                      }
                    >
                      <img
                        src={sector.image}
                        alt={sector.name}
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                        }}
                        loading="lazy"
                      />
                      <div
                        style={{
                          position: "absolute",
                          bottom: 0,
                          left: 0,
                          right: 0,
                          padding: "1.5rem",
                          background:
                            "linear-gradient(to top, rgba(0,0,0,0.8), transparent)",
                        }}
                      >
                        <h3
                          style={{
                            color: "white",
                            fontSize: "1.25rem",
                            fontWeight: "bold",
                            textShadow: "2px 2px 4px rgba(0,0,0,0.8)",
                          }}
                        >
                          {sector.name}
                        </h3>
                      </div>
                    </div>
                  ))}
                </div>
                <p
                  style={{
                    textAlign: "center",
                    color: "#9ca3af",
                    fontSize: "0.875rem",
                    marginTop: "1rem",
                    fontStyle: "italic",
                  }}
                >
                  ← Scroll to see more →
                </p>
                <style>{`
                  .scroll-container {
                    -webkit-overflow-scrolling: touch;
                    scroll-snap-type: x mandatory;
                  }
                  
                  .sector-card {
                    scroll-snap-align: start;
                  }
                  
                  /* Mobile optimization */
                  @media (max-width: 768px) {
                    .scroll-container {
                      gap: 0.75rem !important;
                      padding-left: 1rem !important;
                      padding-right: 1rem !important;
                    }
                    
                    .sector-card {
                      min-width: calc(80vw) !important;
                      max-width: calc(80vw) !important;
                      height: 300px !important;
                    }
                  }
                  
                  @media (min-width: 769px) {
                    .sector-card {
                      min-width: 280px !important;
                      max-width: 280px !important;
                    }
                  }
                  
                  .scroll-container::-webkit-scrollbar { 
                    height: 8px; 
                  }
                  .scroll-container::-webkit-scrollbar-track { 
                    background: #f1f1f1; 
                    border-radius: 10px; 
                  }
                  .scroll-container::-webkit-scrollbar-thumb { 
                    background: #FF2D2D; 
                    border-radius: 10px; 
                  }
                  .scroll-container::-webkit-scrollbar-thumb:hover { 
                    background: #D51F1F; 
                  }
                `}</style>
              </div>
            </div>
          </div>
  );
};

export default SpecialtySectors;
