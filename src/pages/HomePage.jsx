import React, { useEffect, useState } from "react";
import { Box, ChevronLeft, ChevronRight, Cog, ShieldCheck, Wrench } from "lucide-react";
import AuroraBackground from "../components/ui/AuroraBackground";
import "./homepage.css";

const aboutParagraphs = [
  "We established as a part of manufacturing and machining service industry in 2006.",
  "As the nation grew, our establishments along with our facilities, skills, equipment, machining capabilities, quality control and many more also grew. Mr. Kaushik Patel, a brilliant mindset in growing business and accounting along with Mr. Alpesh Patel, a genius mind full of machinery and mechanical mindset started this industry in Ahmedabad with just one machine.",
  "We are an ISO 9001:2015 certified company, aiming for better machining capabilities and quality control in this mechanical industry. Leveraging cutting edge design technologies such as Mastercam, we ensure high-quality product development.",
  "Our high-end facility is well equipped with systems for machining like Advanced CNCs: VMC, HMC, Turning Centre and H-Boring. We ensure our clients' promises by high-end inspection of quality and geometry on CMM.",
];

const featureCards = [
  {
    Icon: Wrench,
    title: "MACHINING",
    text: "our state-of-the-art facility is fully developed with high-tech & up to date technological 3-4-5 axis CNC and inspection machines.",
    color: "#0f6cbd",
  },
  {
    Icon: Cog,
    title: "QUALITY",
    text: "We serve quality product to customers since 2006. We have always believed in fulfilling customers need.",
    color: "#d92d20",
  },
  {
    Icon: ShieldCheck,
    title: "INSPECTION",
    text: "Every machined workpiece undergoes geometric tolerances check to make it precise with customers enquiry.",
    color: "#0f6cbd",
  },
  {
    Icon: Box,
    title: "EXPERT TEAM",
    text: "our skilled and work-enthusiast team of engineers help to understand customers need and design.",
    color: "#d92d20",
  },
];

const componentSlides = [
  { image: "/assets/comps/comp_1.webp" },
  { image: "/assets/comps/comp_2.webp" },
  { image: "/assets/comps/comp_3.webp" },
  { image: "/assets/comps/comp_4.webp" },
  { image: "/assets/comps/comp_5.webp" },
  { image: "/assets/comps/comp_6.webp" },
  { image: "/assets/comps/comp_7.webp" },
  { image: "/assets/comps/comp_8.webp" },
  { image: "/assets/comps/comp_9.webp" },
  { image: "/assets/comps/comp_10.webp" },
  { image: "/assets/comps/comp_11.webp" },
  { image: "/assets/comps/comp_12.webp" },
];

const HomePage = ({ setCurrentPage }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % componentSlides.length);
    }, 3200);

    return () => clearInterval(interval);
  }, []);

  return (
    <main className="home-page">
      <AuroraBackground className="home-hero" as="section">
        <div className="home-hero-frame">
          <picture className="home-hero-picture">
            <source media="(max-width: 767px)" srcSet="/phone_cover.png" />
            <img
              className="home-hero-cover"
              src="/desktop_cover.png"
              alt="Avadh Engineering Excellence"
              decoding="async"
              fetchPriority="high"
            />
          </picture>
          <div className="home-mobile-hero-copy">
            <h1>
              <span className="home-copy-red">Accuracy</span>
              <span className="home-copy-separator">.</span>
              <span>Precision</span>
              <span className="home-copy-separator">.</span>
              <span className="home-copy-green">Innovation</span>
            </h1>
            <p>All machining solutions under one roof</p>
          </div>
        </div>
      </AuroraBackground>

      <section className="home-about-section">
        <div className="home-shell">
          <div className="home-about-card">
            <span className="home-kicker">About Us</span>
            <h1>SINCE 2006</h1>
            <div className="home-about-text">
              {aboutParagraphs.map((text, index) => (
                <p key={index}>{text}</p>
              ))}
            </div>
            <button
              className="home-link-button"
              onClick={() => setCurrentPage("about")}
            >
              READ MORE
            </button>
          </div>
        </div>
      </section>

      <section className="home-features-section">
        <div className="home-shell">
          <div className="home-features-grid">
            {featureCards.map((feature) => {
              const Icon = feature.Icon;

              return (
                <article key={feature.title} className="home-feature-card">
                  <div
                    className="home-feature-icon"
                    style={{ color: feature.color }}
                  >
                    <Icon size={32} strokeWidth={2.1} />
                  </div>
                  <h3>{feature.title}</h3>
                  <p>{feature.text}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="home-components-section">
        <div className="home-shell">
          <div className="home-section-header">
            <span className="home-kicker">Portfolio</span>
            <h2>Our Engineered Components</h2>
          </div>

          <div className="home-slider-card">
            <div className="home-slider-stage">
              {componentSlides.map((slide, index) => (
                <div
                  key={slide.image}
                  className={`home-slide ${
                    currentSlide === index ? "is-active" : ""
                  }`}
                  aria-hidden={currentSlide !== index}
                >
                  <div
                    className="home-slide-image"
                    style={{ backgroundImage: `url(${slide.image})` }}
                  />
                </div>
              ))}
            </div>

            <div className="home-slider-controls">
              <button
                className="home-slider-arrow"
                aria-label="Previous component"
                onClick={() =>
                  setCurrentSlide(
                    (prev) =>
                      (prev - 1 + componentSlides.length) %
                      componentSlides.length,
                  )
                }
              >
                <ChevronLeft size={22} />
              </button>

              <div className="home-slider-dots">
                {componentSlides.map((slide, index) => (
                  <button
                    key={slide.image}
                    className={`home-slider-dot ${
                      currentSlide === index ? "is-active" : ""
                    }`}
                    aria-label={`Go to component ${index + 1}`}
                    onClick={() => setCurrentSlide(index)}
                  />
                ))}
              </div>

              <button
                className="home-slider-arrow"
                aria-label="Next component"
                onClick={() =>
                  setCurrentSlide((prev) => (prev + 1) % componentSlides.length)
                }
              >
                <ChevronRight size={22} />
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default HomePage;
