import React, { useState, useEffect } from "react";
import { Wrench, Cog, Box, ChevronRight } from "lucide-react";
import ClientsSlider from "/src/components/ClientsSlider";

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

  // Features data
  const features = [
    {
      Icon: Wrench,
      color: "#4DB8FF",
      title: "MACHINING",
      text: "our state-of-the-art facility is fully developed with high-tech & up to date technological 3-4-5 axis CNC and inspection machines.",
    },
    {
      Icon: Cog,
      color: "#FF2D2D",
      title: "QUALITY",
      text: "We serve quality product to customers since 2006. We have always believed in fulfilling customers need.",
    },
    {
      Icon: Box,
      color: "#4DB8FF",
      title: "INSPECTION",
      text: "Every machined workpiece undergoes geometric tolerances check to make it precise with customers enquiry.",
    },
    {
      Icon: () => (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="25"
          height="25"
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
      ),
      title: "EXPERT TEAM",
      text: "our skilled and work-enthusiast team of engineers help to understand customers need and design.",
    },
  ];


  // Auto-slide effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % sectors.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [sectors.length]);

  const buttonStyle = {
    position: "absolute",
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
  };

  return (
    <>
      {/* SECTION WITH FACTORY BACKGROUND */}
      <div style={{ position: "relative", minHeight: "100vh" }}>
        {/* Background that doesn't zoom */}
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: "url('/assets/newbg.webp')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            zIndex: 0,
            WebkitBackfaceVisibility: "hidden",
            WebkitTransform: "translate3d(0,0,0)",
            transform: "translate3d(0,0,0)",
          }}
        />

        {/* Content wrapper with higher z-index */}
        <div style={{ position: "relative", zIndex: 1 }}>
          {/* HERO SECTION */}
          <div
            style={{
              color: "white",
              padding: "8rem 2rem",
              textAlign: "center",
            }}
          >
            <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
              <img
                src="/indian.png"
                alt="Company Logo"
                style={{ width: "300px", height: "auto", objectFit: "contain" }}
              />
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

          {/* SINCE 2006 SECTION */}
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
          <h1
  style={{
    fontSize: "3.2rem",
    fontWeight: "600",
    letterSpacing: "0.25em",
    color: "#122f6cff",
    marginBottom: "1.5rem",
    textAlign: "center",
    fontFamily: "'Oswald', 'Montserrat', sans-serif",
  }}
>
  SINCE 2006
</h1>

            {[
              "We established as a part of manufacturing and machining service industry in 2006.",
              "As the nation grew, our establishments along with our facilities, skills, equipment, machining capabilities, quality control and many more also grew. Mr. Kaushik Patel, a brilliant mindset in growing business and accounting along with Mr. Alpesh Patel, a genius mind full of machinery and mechanical mindset started this industry in Ahmedabad with just one machine.",
              "We are an ISO 9001:2015 certified company, aiming for better machining capabilities and quality control in this mechanical industry. Leveraging cutting edge design technologies such as Mastercam, we ensure high-quality product development.",
              "Our high-end facility is well equipped with systems for machining like Advanced CNCs: VMC, HMC, Turning Centre and H-Boring. We ensure our clients' promises by high-end inspection of quality and geometry on CMM.",
            ].map((text, i) => (
              <p
                key={i}
                style={{
                  fontSize: "1.1rem",
                  marginBottom: "1.5rem",
                  fontFamily: "'Roboto', 'Helvetica Neue', Arial, sans-serif",
                  color: "#000000",
                }}
              >
                {text}
              </p>
            ))}
            <button
              onClick={() => setCurrentPage("about")}
              style={{
                backgroundColor: "#cc0000",
                color: "#ffff",
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
              {features.map((feature, i) => (
                <div
                  key={i}
                  style={{
                    textAlign: "center",
                    padding: "1.5rem",
                    backgroundColor: "white",
                    borderRadius: "0.5rem",
                    boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
                  }}
                >
                  {feature.Icon.name ? (
                    <feature.Icon
                      size={48}
                      color={feature.color}
                      style={{ margin: "0 auto 1rem" }}
                    />
                  ) : (
                    <feature.Icon />
                  )}
                  <h3
                    style={{
                      fontSize: "1.25rem",
                      fontWeight: "bold",
                      marginBottom: "0.5rem",
                    }}
                  >
                    {feature.title}
                  </h3>
                  <p style={{ color: "#4b5563" }}>{feature.text}</p>
                </div>
              ))}
            </div>

            {/* SECTORS WE SERVE SLIDER */}
            <div style={{ marginTop: "4rem" }}>
              <h2
                style={{
                  fontSize: "clamp(1.6rem, 4vw, 2.5rem)",
                  fontWeight: "700",
                  textAlign: "center",
                  marginBottom: "3rem",
                  color: "#FFFFFF",
                  letterSpacing: "1px",
                  textShadow: "0 10px 30px rgba(0,0,0,.6)",
                }}
              >
                Sectors We Serve
              </h2>

              <div
                style={{
                  position: "relative",
                  width: "100%",
                  height: "clamp(360px, 55vh, 520px)",
                  overflow: "hidden",
                  borderRadius: "20px",
                  boxShadow: "0 25px 60px rgba(0,0,0,.45)",
                }}
              >
                {sectors.map((sector, index) => {
                  const active = currentSlide === index;

                  return (
                    <div
                      key={index}
                      style={{
                        position: "absolute",
                        inset: 0,
                        opacity: active ? 1 : 0,
                        transition: "opacity 0.9s ease",
                        overflow: "hidden",
                      }}
                    >
                      {/* Image */}
                      <div
                        style={{
                          position: "absolute",
                          inset: 0,
                          backgroundImage: `url(${sector.image})`,
                          backgroundSize: "cover",
                          backgroundPosition: "center",
                          transform: active ? "scale(1.07)" : "scale(1)",
                          transition: "transform 6s ease",
                        }}
                      />

                      {/* Overlay */}
                      <div
                        style={{
                          position: "absolute",
                          inset: 0,
                          background:
                            window.innerWidth > 768
                              ? "linear-gradient(90deg, rgba(0,0,0,.75) 0%, rgba(0,0,0,.4) 45%, rgba(0,0,0,.15) 100%)"
                              : "linear-gradient(to top, rgba(0,0,0,.75), rgba(0,0,0,.2))",
                        }}
                      />

                      {/* Text */}
                      <div
                        style={{
                          position: "absolute",
                          left: window.innerWidth > 768 ? "6%" : "50%",
                          bottom: window.innerWidth > 768 ? "auto" : "8%",
                          top: window.innerWidth > 768 ? "50%" : "auto",
                          transform:
                            window.innerWidth > 768
                              ? active
                                ? "translateY(-50%)"
                                : "translateY(-40%)"
                              : "translateX(-50%)",
                          opacity: active ? 1 : 0,
                          transition: "all 0.8s ease",
                          maxWidth: window.innerWidth > 768 ? "520px" : "90%",
                          padding:
                            window.innerWidth > 768 ? "2.5rem" : "1.4rem",
                          borderRadius: "16px",
                          backdropFilter:
                            window.innerWidth > 768 ? "blur(8px)" : "blur(4px)",
                          background:
                            window.innerWidth > 768
                              ? "rgba(255,255,255,.08)"
                              : "rgba(0,0,0,.35)",
                          color: "#fff",
                          textAlign:
                            window.innerWidth > 768 ? "left" : "center",
                        }}
                      >
                        <h3
                          style={{
                            fontSize: "clamp(1.5rem, 5vw, 3rem)",
                            fontWeight: "800",
                            marginBottom: "0.6rem",
                            lineHeight: 1.2,
                          }}
                        >
                          {sector.name}
                        </h3>

                        <p
                          style={{
                            fontSize: "clamp(0.95rem, 3.5vw, 1.15rem)",
                            lineHeight: 1.6,
                            color: "#E5E7EB",
                          }}
                        >
                          {sector.description}
                        </p>
                      </div>
                    </div>
                  );
                })}

                {/* Indicators */}
                <div
                  style={{
                    position: "absolute",
                    bottom: "14px",
                    left: "50%",
                    transform: "translateX(-50%)",
                    display: "flex",
                    gap: "10px",
                    zIndex: 10,
                  }}
                >
                  {sectors.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      style={{
                        width: currentSlide === index ? "26px" : "10px",
                        height: "10px",
                        borderRadius: "999px",
                        border: "none",
                        background:
                          currentSlide === index
                            ? "#FFFFFF"
                            : "rgba(255,255,255,.45)",
                        transition: "all .35s ease",
                        cursor: "pointer",
                      }}
                    />
                  ))}
                </div>

                {/* Arrows */}
                {["‹", "›"].map((arrow, i) => (
                  <button
                    key={arrow}
                    onClick={() =>
                      setCurrentSlide((prev) =>
                        i === 0
                          ? (prev - 1 + sectors.length) % sectors.length
                          : (prev + 1) % sectors.length
                      )
                    }
                    style={{
                      position: "absolute",
                      top: "50%",
                      [i === 0 ? "left" : "right"]: "12px",
                      transform: "translateY(-50%)",
                      width: "44px",
                      height: "44px",
                      borderRadius: "50%",
                      border: "none",
                      background: "rgba(255,255,255,.18)",
                      backdropFilter: "blur(6px)",
                      color: "#fff",
                      fontSize: "1.8rem",
                      cursor: "pointer",
                      zIndex: 10,
                    }}
                  >
                    {arrow}
                  </button>
                ))}
              
              </div>
            </div>
            
            {/* CLIENTS SLIDER */}
            <ClientsSlider />
            
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
