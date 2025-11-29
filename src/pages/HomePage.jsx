import React, { useState, useEffect } from "react";
import { Wrench, Cog, Box, ChevronRight } from "lucide-react";

const HomePage = ({ setCurrentPage }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Sectors data with images
  const sectors = [
    {
      name: "POWER PLANT",
      image: "assets/powerplant.jpg",
      description: "Precision components for power generation",
    },
    {
      name: "SUGAR MILL",
      image: "assets/sugarmill.jpg",
      description: "Specialized parts for sugar processing",
    },
    {
      name: "RUBBER",
      image: "/assets/rubber.jpg",
      description: "Quality components for rubber industry",
    },
    {
      name: "DEFENSE",
      image: "/assets/defense.jpg",
      description: "Critical parts for defense applications",
    },
    {
      name: "AEROSPACE",
      image: "/assets/aerospace.jpg",
      description: "High-precision aerospace components",
    },
    {
      name: "CHEMICAL",
      image: "/assets/chemical.jpg",
      description: "Corrosion-resistant components",
    },
    {
      name: "AUTOMOTIVE",
      image: "/assets/automotive.jpg",
      description: "Precision parts for automotive industry",
    },
    {
      name: "OIL & GAS",
      image: "/assets/oilgas.jpg",
      description: "Heavy-duty components for oil & gas",
    },
    {
      name: "PLASTIC MACHINERY",
      image: "/assets/plastic.jpg",
      description: "Machined parts for plastic processing",
    },
    {
      name: "BLOCK MAKING MACHINERY",
      image: "/assets/blockmaking.jpg",
      description: "Durable parts for block making equipment",
    },
    {
      name: "STEEL",
      image: "/assets/steel.jpg",
      description: "High-strength components for steel industry",
    },
    {
      name: "SPACE",
      image: "/assets/space.jpg",
      description: "Specialized parts for space missions",
    },
    {
      name: "PACKAGING MACHINERY",
      image: "/assets/packaging.jpg",
      description: "Precision components for packaging systems",
    },
  ];

  // Auto-slide effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % sectors.length);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, [sectors.length]);

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundImage: "url('/assets/fac2.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* HERO SECTION */}
      <div
        style={{
          color: "white",
          padding: "8rem 2rem",
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <div style={{ textAlign: "center" }}>
            <img
              src="/indian.png"
              alt="Company Logo"
              style={{
                width: "300px", // change size if needed
                height: "auto",
                objectFit: "contain",
              }}
            />
          </div>

          <p
            style={{
              fontSize: "1.25rem",
              marginBottom: "2rem",
              maxWidth: "42rem",
              margin: "0 auto 2rem",
              color: "#FFFFFF",
              textShadow: "2px 2px 4px rgba(0, 0, 0, 0.8)",
              fontWeight: "500",
            }}
          >
            ALL MACHINING SOLUTIONS UNDER ONE ROOF
          </p>

          {/* BUTTON */}
          <button
            onClick={() => setCurrentPage("contact")}
            style={{
              backgroundColor: "#FF2D2D",
              color: "white",
              padding: "0.75rem 2rem",
              borderRadius: "0.5rem",
              fontWeight: "600",
              border: "none",
              cursor: "pointer",
              fontSize: "1rem",
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.3)",
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = "#D51F1F";
              e.target.style.transform = "scale(1.05)";
              e.target.style.transition = "all 0.3s";
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = "#FF2D2D";
              e.target.style.transform = "scale(1)";
            }}
          >
            Contact Us
          </button>
        </div>
      </div>
      {/* SINCE 2006 TEXT SECTION */}
      <div
        style={{
          maxWidth: "1000px",
          margin: "4rem auto",
          padding: "2rem",
          lineHeight: "1.8",
          fontFamily: "'Georgia', serif",
          backgroundColor: "#ffffff",
          borderRadius: "10px",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
        }}
      >
        {/* Heading */}
        <h1
          style={{
            fontSize: "3rem",
            fontWeight: "bold",
            color: "#0539e3ff",
            marginBottom: "1.5rem",
            textAlign: "center",
          }}
        >
          SINCE 2006
        </h1>

        {/* Paragraphs */}
        <p
          style={{
            fontSize: "1.1rem",
            marginBottom: "1.5rem",
            fontWeight: "bold",
            color: "#000000",
          }}
        >
          We established as a part of manufacturing and machining service
          industry in 2006.
        </p>

        <p
          style={{
            fontSize: "1.1rem",
            marginBottom: "1.5rem",
            fontWeight: "bold",
            color: "#000000",
          }}
        >
          As the nation grew, our establishments along with our facilities,
          skills, equipment, machining capabilities, quality control and many
          more also grew. Mr. Kaushik Patel, a brilliant mindset in growing
          business and accounting along with Mr. Alpesh Patel, a genius mind
          full of machinery and mechanical mindset started this industry in
          Ahmedabad with just one machine.
        </p>

        <p
          style={{
            fontSize: "1.1rem",
            marginBottom: "1.5rem",
            fontWeight: "bold",
            color: "#000000",
          }}
        >
          We are an ISO 9001:2015 certified company, aiming for better machining
          capabilities and quality control in this mechanical industry.
          Leveraging cutting edge design technologies such as Mastercam, we
          ensure high-quality product development.
        </p>

        <p
          style={{
            fontSize: "1.1rem",
            marginBottom: "2rem",
            fontWeight: "bold",
            color: "#000000",
          }}
        >
          Our high-end facility is well equipped with systems for machining like
          Advanced CNCs: VMC, HMC, Turning Centre and H-Boring. We ensure our
          clients' promises by high-end inspection of quality and geometry on
          CMM.
        </p>

        {/* READ MORE BUTTON */}
        <button
          onClick={() => setCurrentPage("about")}
          style={{
            backgroundColor: "#cc0000",
            color: "#fff",
            padding: "0.8rem 2rem",
            fontSize: "1rem",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
            fontWeight: "bold",
          }}
        >
          READ MORE
        </button>
      </div>
      {/* FEATURES SECTION */}
      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "4rem 1rem",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "2rem",
            marginBottom: "4rem",
          }}
        >
          {/* Card 1 */}
          <div
            style={{
              textAlign: "center",
              padding: "1.5rem",
              backgroundColor: "white",
              borderRadius: "0.5rem",
              boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
            }}
          >
            <Wrench
              size={48}
              color="#4DB8FF"
              style={{ margin: "0 auto 1rem" }}
            />
            <h3
              style={{
                fontSize: "1.25rem",
                fontWeight: "bold",
                marginBottom: "0.5rem",
              }}
            >
              MACHINING
            </h3>
            <p style={{ color: "#4b5563" }}>
              our state-of-the-art facility is fully developed with high-tech &
              up to date technological 3-4-5 axis CNC and inspection machines.
            </p>
          </div>

          {/* Card 2 */}
          <div
            style={{
              textAlign: "center",
              padding: "1.5rem",
              backgroundColor: "white",
              borderRadius: "0.5rem",
              boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
            }}
          >
            <Cog size={48} color="#FF2D2D" style={{ margin: "0 auto 1rem" }} />
            <h3
              style={{
                fontSize: "1.25rem",
                fontWeight: "bold",
                marginBottom: "0.5rem",
              }}
            >
              QUALITY
            </h3>
            <p style={{ color: "#4b5563" }}>
              We serve quality product to customers since 2006. We have always
              believed in fulfilling customers need.
            </p>
          </div>

          {/* Card 3 */}
          <div
            style={{
              textAlign: "center",
              padding: "1.5rem",
              backgroundColor: "white",
              borderRadius: "0.5rem",
              boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
            }}
          >
            <Box size={48} color="#4DB8FF" style={{ margin: "0 auto 1rem" }} />
            <h3
              style={{
                fontSize: "1.25rem",
                fontWeight: "bold",
                marginBottom: "0.5rem",
              }}
            >
              INSPECTION
            </h3>
            <p style={{ color: "#4b5563" }}>
              Every machined workpiece undergoes geometric tolerances check to
              make it precise with customers enquiry.
            </p>
          </div>

          {/* card 4 */}
          <div
            style={{
              textAlign: "center",
              padding: "1.5rem",
              backgroundColor: "white",
              borderRadius: "0.5rem",
              boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="48"
              height="48"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#4DB8FF"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{ margin: "0 auto 1rem", display: "block" }}
            >
              <path d="M18 21a8 8 0 0 0-16 0" />
              <circle cx="10" cy="8" r="5" />
              <path d="M22 20c0-3.37-2-6.5-4-8a5 5 0 0 0-.45-8.3" />
            </svg>

            <h3
              style={{
                fontSize: "1.25rem",
                fontWeight: "bold",
                marginBottom: "0.5rem",
              }}
            >
              EXPERT TEAM
            </h3>
            <p style={{ color: "#4b5563" }}>
              our skilled and work-enthusiast team of engineers help to
              understand customers need and design.
            </p>
          </div>
        </div>

        {/* SECTORS WE SERVE - SLIDER SECTION */}
        <div style={{ marginTop: "4rem" }}>
          <h2
            style={{
              fontSize: "2.5rem",
              fontWeight: "bold",
              textAlign: "center",
              marginBottom: "3rem",
              color: "#FFFFFF",
              textShadow: "3px 3px 8px rgba(0, 0, 0, 0.9)",
              letterSpacing: "1px",
            }}
          >
            Sectors We Serve
          </h2>

          {/* Slider Container */}
          <div
            style={{
              position: "relative",
              width: "100%",
              height: "500px",
              overflow: "hidden",
              borderRadius: "1rem",
              boxShadow: "0 10px 30px rgba(0, 0, 0, 0.3)",
            }}
          >
            {/* Slides */}
            {sectors.map((sector, index) => (
              <div
                key={index}
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  opacity: currentSlide === index ? 1 : 0,
                  transition: "opacity 1s ease-in-out",
                  backgroundImage: `url(${sector.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                {/* Dark Overlay */}
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    backgroundColor: "rgba(0, 0, 0, 0.5)",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    color: "white",
                  }}
                >
                  <h3
                    style={{
                      fontSize: "3rem",
                      fontWeight: "bold",
                      marginBottom: "1rem",
                      textShadow: "3px 3px 6px rgba(0, 0, 0, 0.8)",
                    }}
                  >
                    {sector.name}
                  </h3>
                  <p
                    style={{
                      fontSize: "1.25rem",
                      textShadow: "2px 2px 4px rgba(0, 0, 0, 0.8)",
                    }}
                  >
                    {sector.description}
                  </p>
                </div>
              </div>
            ))}

            {/* Navigation Dots */}
            <div
              style={{
                position: "absolute",
                bottom: "2rem",
                left: "50%",
                transform: "translateX(-50%)",
                display: "flex",
                gap: "0.75rem",
                zIndex: 10,
              }}
            >
              {sectors.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  style={{
                    width: "12px",
                    height: "12px",
                    borderRadius: "50%",
                    border: "2px solid white",
                    backgroundColor:
                      currentSlide === index ? "white" : "transparent",
                    cursor: "pointer",
                    transition: "all 0.3s",
                  }}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>

            {/* Previous Button */}
            <button
              onClick={() =>
                setCurrentSlide(
                  (prev) => (prev - 1 + sectors.length) % sectors.length
                )
              }
              style={{
                position: "absolute",
                left: "1rem",
                top: "50%",
                transform: "translateY(-50%)",
                backgroundColor: "rgba(255, 255, 255, 0.3)",
                border: "2px solid white",
                color: "white",
                fontSize: "1.5rem",
                width: "50px",
                height: "50px",
                borderRadius: "50%",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                zIndex: 10,
                transition: "all 0.3s",
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = "rgba(255, 255, 255, 0.5)";
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = "rgba(255, 255, 255, 0.3)";
              }}
            >
              ‹
            </button>

            {/* Next Button */}
            <button
              onClick={() =>
                setCurrentSlide((prev) => (prev + 1) % sectors.length)
              }
              style={{
                position: "absolute",
                right: "1rem",
                top: "50%",
                transform: "translateY(-50%)",
                backgroundColor: "rgba(255, 255, 255, 0.3)",
                border: "2px solid white",
                color: "white",
                fontSize: "1.5rem",
                width: "50px",
                height: "50px",
                borderRadius: "50%",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                zIndex: 10,
                transition: "all 0.3s",
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = "rgba(255, 255, 255, 0.5)";
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = "rgba(255, 255, 255, 0.3)";
              }}
            >
              ›
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
