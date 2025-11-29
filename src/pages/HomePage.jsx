import React, { useState, useEffect } from "react";
import { Wrench, Cog, Box, ChevronRight } from "lucide-react";

const HomePage = ({ setCurrentPage }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Sectors data with images
  const sectors = [
    { name: "POWER PLANT", image: "assets/powerplant.jpg", description: "Precision components for power generation" },
    { name: "SUGAR MILL", image: "assets/sugarmill.jpg", description: "Specialized parts for sugar processing" },
    { name: "RUBBER", image: "/assets/rubber.jpg", description: "Quality components for rubber industry" },
    { name: "DEFENSE", image: "/assets/defense.jpg", description: "Critical parts for defense applications" },
    { name: "AEROSPACE", image: "/assets/aerospace.jpg", description: "High-precision aerospace components" },
    { name: "CHEMICAL", image: "/assets/chemical.jpg", description: "Corrosion-resistant components" },
    { name: "AUTOMOTIVE", image: "/assets/automotive.jpg", description: "Precision parts for automotive industry" },
    { name: "OIL & GAS", image: "/assets/oilgas.jpg", description: "Heavy-duty components for oil & gas" },
    { name: "PLASTIC MACHINERY", image: "/assets/plastic.jpg", description: "Machined parts for plastic processing" },
    { name: "BLOCK MAKING MACHINERY", image: "/assets/blockmaking.jpg", description: "Durable parts for block making equipment" },
    { name: "STEEL", image: "/assets/steel.jpg", description: "High-strength components for steel industry" },
    { name: "SPACE", image: "/assets/space.jpg", description: "Specialized parts for space missions" },
    { name: "PACKAGING MACHINERY", image: "/assets/packaging.jpg", description: "Precision components for packaging systems" },
  ];

  // Features data
  const features = [
    { Icon: Wrench, color: "#4DB8FF", title: "MACHINING", text: "our state-of-the-art facility is fully developed with high-tech & up to date technological 3-4-5 axis CNC and inspection machines." },
    { Icon: Cog, color: "#FF2D2D", title: "QUALITY", text: "We serve quality product to customers since 2006. We have always believed in fulfilling customers need." },
    { Icon: Box, color: "#4DB8FF", title: "INSPECTION", text: "Every machined workpiece undergoes geometric tolerances check to make it precise with customers enquiry." },
    { 
      Icon: () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#4DB8FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ margin: "0 auto 1rem", display: "block" }}>
          <path d="M18 21a8 8 0 0 0-16 0" />
          <circle cx="10" cy="8" r="5" />
          <path d="M22 20c0-3.37-2-6.5-4-8a5 5 0 0 0-.45-8.3" />
        </svg>
      ), 
      title: "EXPERT TEAM", 
      text: "our skilled and work-enthusiast team of engineers help to understand customers need and design." 
    },
  ];

  // Specialty sectors for scrollable section
  const specialtySectors = [
    { name: "SPACE APPLICATION", image: "/assets/space.jpg" },
    { name: "COMPOSITES", image: "/assets/aerospace.jpg" },
    { name: "DEFENSE EQUIPMENT'S", image: "/assets/defense.jpg" },
    { name: "POWER PLANT", image: "/assets/powerplant.jpg" },
    { name: "AUTOMOTIVE", image: "/assets/automotive.jpg" },
    { name: "OIL & GAS", image: "/assets/oilgas.jpg" },
    { name: "STEEL", image: "/assets/steel.jpg" },
    { name: "CHEMICAL", image: "/assets/chemical.jpg" },
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
      <div style={{ minHeight: "100vh", backgroundImage: "url('/assets/faccom.jpg')", backgroundSize: "cover", backgroundPosition: "center", backgroundAttachment: "fixed", backgroundRepeat: "no-repeat" }}>
        
        {/* HERO SECTION */}
        <div style={{ color: "white", padding: "8rem 2rem", textAlign: "center" }}>
          <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
            <img src="/indian.png" alt="Company Logo" style={{ width: "300px", height: "auto", objectFit: "contain" }} />
            <p style={{ fontSize: "1.25rem", marginBottom: "2rem", maxWidth: "42rem", margin: "0 auto 2rem", color: "#FFFFFF", textShadow: "2px 2px 4px rgba(0, 0, 0, 0.8)", fontWeight: "500" }}>
              ALL MACHINING SOLUTIONS UNDER ONE ROOF
            </p>
            <button onClick={() => setCurrentPage("contact")} style={{ backgroundColor: "#FF2D2D", color: "white", padding: "0.75rem 2rem", borderRadius: "0.5rem", fontWeight: "600", border: "none", cursor: "pointer", fontSize: "1rem", boxShadow: "0 4px 6px rgba(0, 0, 0, 0.3)" }}
              onMouseEnter={(e) => { e.target.style.backgroundColor = "#D51F1F"; e.target.style.transform = "scale(1.05)"; e.target.style.transition = "all 0.3s"; }}
              onMouseLeave={(e) => { e.target.style.backgroundColor = "#FF2D2D"; e.target.style.transform = "scale(1)"; }}>
              Contact Us
            </button>
          </div>
        </div>

        {/* SINCE 2006 SECTION */}
        <div style={{ maxWidth: "1000px", margin: "4rem auto", padding: "2rem", lineHeight: "1.8", fontFamily: "'Georgia', serif", backgroundColor: "#ffffff", borderRadius: "10px", boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)" }}>
          <h1 style={{ fontSize: "3rem", fontWeight: "bold", color: "#0539e3ff", marginBottom: "1.5rem", textAlign: "center" }}>SINCE 2006</h1>
          {[
            "We established as a part of manufacturing and machining service industry in 2006.",
            "As the nation grew, our establishments along with our facilities, skills, equipment, machining capabilities, quality control and many more also grew. Mr. Kaushik Patel, a brilliant mindset in growing business and accounting along with Mr. Alpesh Patel, a genius mind full of machinery and mechanical mindset started this industry in Ahmedabad with just one machine.",
            "We are an ISO 9001:2015 certified company, aiming for better machining capabilities and quality control in this mechanical industry. Leveraging cutting edge design technologies such as Mastercam, we ensure high-quality product development.",
            "Our high-end facility is well equipped with systems for machining like Advanced CNCs: VMC, HMC, Turning Centre and H-Boring. We ensure our clients' promises by high-end inspection of quality and geometry on CMM."
          ].map((text, i) => (
            <p key={i} style={{ fontSize: "1.1rem", marginBottom: "1.5rem", fontWeight: "bold", color: "#000000" }}>{text}</p>
          ))}
          <button onClick={() => setCurrentPage("about")} style={{ backgroundColor: "#cc0000", color: "#fff", padding: "0.8rem 2rem", fontSize: "1rem", border: "none", borderRadius: "4px", cursor: "pointer", fontWeight: "bold" }}>
            READ MORE
          </button>
        </div>

        {/* FEATURES SECTION */}
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "4rem 1rem" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "2rem", marginBottom: "4rem" }}>
            {features.map((feature, i) => (
              <div key={i} style={{ textAlign: "center", padding: "1.5rem", backgroundColor: "white", borderRadius: "0.5rem", boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)" }}>
                {feature.Icon.name ? <feature.Icon size={48} color={feature.color} style={{ margin: "0 auto 1rem" }} /> : <feature.Icon />}
                <h3 style={{ fontSize: "1.25rem", fontWeight: "bold", marginBottom: "0.5rem" }}>{feature.title}</h3>
                <p style={{ color: "#4b5563" }}>{feature.text}</p>
              </div>
            ))}
          </div>

          {/* SECTORS WE SERVE SLIDER */}
          <div style={{ marginTop: "4rem" }}>
            <h2 style={{ fontSize: "2.5rem", fontWeight: "bold", textAlign: "center", marginBottom: "3rem", color: "#FFFFFF", textShadow: "3px 3px 8px rgba(0, 0, 0, 0.9)", letterSpacing: "1px" }}>
              Sectors We Serve
            </h2>
            <div style={{ position: "relative", width: "100%", height: "500px", overflow: "hidden", borderRadius: "1rem", boxShadow: "0 10px 30px rgba(0, 0, 0, 0.3)" }}>
              {sectors.map((sector, index) => (
                <div key={index} style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", opacity: currentSlide === index ? 1 : 0, transition: "opacity 1s ease-in-out", backgroundImage: `url(${sector.image})`, backgroundSize: "cover", backgroundPosition: "center" }}>
                  <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", backgroundColor: "rgba(0, 0, 0, 0.5)", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", color: "white" }}>
                    <h3 style={{ fontSize: "3rem", fontWeight: "bold", marginBottom: "1rem", textShadow: "3px 3px 6px rgba(0, 0, 0, 0.8)" }}>{sector.name}</h3>
                    <p style={{ fontSize: "1.25rem", textShadow: "2px 2px 4px rgba(0, 0, 0, 0.8)" }}>{sector.description}</p>
                  </div>
                </div>
              ))}
              <div style={{ position: "absolute", bottom: "2rem", left: "50%", transform: "translateX(-50%)", display: "flex", gap: "0.75rem", zIndex: 10 }}>
                {sectors.map((_, index) => (
                  <button key={index} onClick={() => setCurrentSlide(index)} style={{ width: "12px", height: "12px", borderRadius: "50%", border: "2px solid white", backgroundColor: currentSlide === index ? "white" : "transparent", cursor: "pointer", transition: "all 0.3s" }} aria-label={`Go to slide ${index + 1}`} />
                ))}
              </div>
              <button onClick={() => setCurrentSlide((prev) => (prev - 1 + sectors.length) % sectors.length)} style={{ ...buttonStyle, left: "1rem" }}
                onMouseEnter={(e) => e.target.style.backgroundColor = "rgba(255, 255, 255, 0.5)"}
                onMouseLeave={(e) => e.target.style.backgroundColor = "rgba(255, 255, 255, 0.3)"}>‹</button>
              <button onClick={() => setCurrentSlide((prev) => (prev + 1) % sectors.length)} style={{ ...buttonStyle, right: "1rem" }}
                onMouseEnter={(e) => e.target.style.backgroundColor = "rgba(255, 255, 255, 0.5)"}
                onMouseLeave={(e) => e.target.style.backgroundColor = "rgba(255, 255, 255, 0.3)"}>›</button>
            </div>
          </div>
        </div>
      </div>

      {/* OUR SPECIALTY IN SECTORS SECTION */}
      {/* OUR SPECIALTY IN SECTORS SECTION */}
      <div style={{ backgroundColor: "white", padding: "4rem 2rem", marginTop: "4rem" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "3rem", alignItems: "center" }}>
          <div>
            <p style={{ color: "#FF2D2D", fontSize: "0.875rem", fontWeight: "600", marginBottom: "0.5rem", letterSpacing: "0.05em" }}>Applications</p>
            <h2 style={{ fontSize: "clamp(1.5rem, 4vw, 2.5rem)", fontWeight: "bold", marginBottom: "1.5rem", color: "#000000", lineHeight: "1.2" }}>Our Specialty in Sectors</h2>
            <p style={{ color: "#4b5563", fontSize: "1rem", lineHeight: "1.8", marginBottom: "2rem" }}>
              Pushpak Trademech Limited has been a pioneer in the High Precision Engineering sector since Renowned establish in 1980. Renowned for its meticulous craftsmanship Aerospace, Defence, Space, Application, Mining, Cement Industries, Sugar Mill Plants, Thermal Power Plant, Hydro Power plant Wind Mill, Nuclear, Oil & Gas, Rubber, Railway Automotive and etc.
            </p>
            <button onClick={() => setCurrentPage("about")} style={{ backgroundColor: "#FF2D2D", color: "white", padding: "0.75rem 1.5rem", fontSize: "1rem", border: "none", borderRadius: "4px", cursor: "pointer", fontWeight: "600", display: "inline-flex", alignItems: "center", gap: "0.5rem" }}
              onMouseEnter={(e) => e.target.style.backgroundColor = "#D51F1F"}
              onMouseLeave={(e) => e.target.style.backgroundColor = "#FF2D2D"}>
              Read More <ChevronRight size={20} />
            </button>
          </div>

          <div style={{ position: "relative", width: "100%", overflow: "hidden" }}>
            <div style={{ display: "flex", gap: "1rem", overflowX: "auto", scrollBehavior: "smooth", paddingBottom: "1rem", paddingLeft: "0.5rem", paddingRight: "0.5rem", scrollbarWidth: "thin", scrollbarColor: "#FF2D2D #f1f1f1", WebkitOverflowScrolling: "touch" }} className="scroll-container">
              {specialtySectors.map((sector, i) => (
                <div key={i} className="sector-card" style={{ position: "relative", minWidth: "calc(85vw - 2rem)", maxWidth: "280px", height: "350px", borderRadius: "1rem", overflow: "hidden", boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)", cursor: "pointer", transition: "transform 0.3s", flexShrink: 0 }}
                  onMouseEnter={(e) => e.currentTarget.style.transform = "scale(1.05)"}
                  onMouseLeave={(e) => e.currentTarget.style.transform = "scale(1)"}>
                  <img src={sector.image} alt={sector.name} style={{ width: "100%", height: "100%", objectFit: "cover" }} loading="lazy" />
                  <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "1.5rem", background: "linear-gradient(to top, rgba(0,0,0,0.8), transparent)" }}>
                    <h3 style={{ color: "white", fontSize: "1.25rem", fontWeight: "bold", textShadow: "2px 2px 4px rgba(0,0,0,0.8)" }}>{sector.name}</h3>
                  </div>
                </div>
              ))}
            </div>
            <p style={{ textAlign: "center", color: "#9ca3af", fontSize: "0.875rem", marginTop: "1rem", fontStyle: "italic" }}>← Scroll to see more →</p>
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
    </>
  );
};

export default HomePage;