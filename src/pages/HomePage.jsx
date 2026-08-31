import React, { useEffect, useRef, useState } from "react";
import { Box, ChevronLeft, ChevronRight, Cog, ShieldCheck, Wrench } from "lucide-react";
import anime from "animejs";
import gsap from "gsap";
import AuroraBackground from "../components/ui/AuroraBackground";
import ClientsSlider from "../components/ClientsSlider";
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
  const homeRef = useRef(null);

  useEffect(() => {
    const home = homeRef.current;
    const media = gsap.matchMedia();
    let observer;
    let accentPulse;

    media.add("(prefers-reduced-motion: no-preference)", () => {
      const context = gsap.context(() => {
        gsap.timeline({ defaults: { ease: "power3.out" } })
          .from(".home-hero-frame", { autoAlpha: 0, y: 18, duration: 0.8 })
          .from(".home-hero-cover", { scale: 1.035, autoAlpha: 0, duration: 1.5 }, "-=0.65")
          .from(".home-mobile-hero-copy h1 span:not(.home-copy-separator)", {
            autoAlpha: 0,
            y: 22,
            stagger: 0.11,
            duration: 0.72,
          }, "-=0.8")
          .from(".home-mobile-hero-copy p", { autoAlpha: 0, y: 14, duration: 0.55 }, "-=0.42");

        observer = new IntersectionObserver(
          (entries, entryObserver) => {
            entries.forEach((entry) => {
              if (!entry.isIntersecting) return;

              gsap.fromTo(entry.target, { autoAlpha: 0, y: 24 }, {
                autoAlpha: 1,
                y: 0,
                duration: 0.7,
                ease: "power3.out",
              });
              entryObserver.unobserve(entry.target);
            });
          },
          { rootMargin: "0px 0px -12%" },
        );

        home.querySelectorAll(".home-reveal").forEach((item) => observer.observe(item));

        accentPulse = anime({
          targets: ".home-hero-accent",
          scaleX: [0.45, 1],
          opacity: [0.55, 1],
          duration: 1500,
          easing: "easeInOutSine",
          direction: "alternate",
          loop: true,
        });

      }, home);

      return () => {
        observer?.disconnect();
        accentPulse?.pause();
        context.revert();
      };
    });

    return () => media.revert();
  }, []);

  useEffect(() => {
    const slides = homeRef.current
      ? [...homeRef.current.querySelectorAll(".home-slide")]
      : [];
    const activeSlide = slides.find((slide) => slide.classList.contains("is-active"));
    if (!activeSlide) return;

    const inactiveSlides = slides.filter((slide) => slide !== activeSlide);
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      gsap.set(slides, { autoAlpha: 0, scale: 1 });
      gsap.set(activeSlide, { autoAlpha: 1 });
      return;
    }

    gsap.to(inactiveSlides, {
      autoAlpha: 0,
      scale: 1,
      duration: 0.2,
      ease: "power1.out",
      overwrite: true,
    });

    gsap.fromTo(activeSlide, { autoAlpha: 0, scale: 1.02 }, {
      autoAlpha: 1,
      scale: 1,
      duration: 0.75,
      ease: "power2.out",
      overwrite: true,
    });
  }, [currentSlide]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % componentSlides.length);
    }, 3200);

    return () => clearInterval(interval);
  }, []);

  return (
    <main ref={homeRef} className="home-page">
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
            <span className="home-hero-accent" aria-hidden="true" />
            <p>All machining solutions under one roof</p>
          </div>
        </div>
      </AuroraBackground>

      <section className="home-about-section">
        <div className="home-shell">
          <div className="home-about-card home-reveal">
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
                <article key={feature.title} className="home-feature-card home-reveal">
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
          <div className="home-section-header home-reveal">
            <span className="home-kicker">Portfolio</span>
            <h2>Our Engineered Components</h2>
          </div>

          <div className="home-slider-card home-reveal">
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

      <section className="home-clients-section">
        <div className="home-shell">
          <ClientsSlider />
        </div>
      </section>
    </main>
  );
};

export default HomePage;
