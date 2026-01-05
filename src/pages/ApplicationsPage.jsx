import { useState } from "react";
import "/src/pages/applications.css";

const applicationsData = [
  {
    title: "Defense Support",
    image: "/assets/defense.jpg",
    description:
      "High-precision, mission-critical machined components manufactured under strict quality and confidentiality standards for defense applications.",
    problem: "Zero-tolerance precision & extreme reliability requirements",
    solution:
      "Advanced CNC machining with rigorous inspection and traceability",
    uses: [
      "Structural Housings",
      "Mounting Assemblies",
      "Defense Equipment Frames",
    ],
  },
  {
    title: "Aerospace",
    image: "/assets/aerospace.jpg",
    description:
      "Lightweight yet high-strength aerospace components engineered for performance, safety, and dimensional accuracy.",
    problem: "Tight tolerances & weight optimization",
    solution:
      "Precision CNC machining using aerospace-grade materials",
    uses: [
      "Brackets",
      "Mounting Parts",
      "Structural Aerospace Components",
    ],
  },
  {
    title: "Infrastructure",
    image: "/assets/infa.webp",
    description:
      "Robust fabricated and machined components designed to support heavy loads in large-scale infrastructure projects.",
    problem: "High load bearing & long-term durability",
    solution:
      "Custom steel fabrication with precision machining",
    uses: [
      "Anchor Plates",
      "Support Brackets",
      "Structural Frames",
    ],
  },
  {
    title: "Chemical Industry",
    image: "/assets/chemical.jpg",
    description:
      "Corrosion-resistant machined components for chemical processing plants operating in aggressive environments.",
    problem: "Corrosion, pressure & chemical exposure",
    solution:
      "Material-specific CNC machining with surface protection",
    uses: [
      "Pump Components",
      "Reactor Parts",
      "Valve Bodies",
    ],
  },
  {
    title: "Heavy Engineering",
    image: "/assets/heavy.webp",
    description:
      "Large-scale machining solutions for heavy-duty industrial equipment requiring strength and accuracy.",
    problem: "Machining large components with tight tolerances",
    solution:
      "Heavy-duty CNC machines with reinforced tooling",
    uses: [
      "Machine Beds",
      "Shafts",
      "Rollers",
    ],
  },
  {
    title: "Power Plants",
    image: "/assets/powerplant.jpg",
    description:
      "Precision-engineered components capable of withstanding high temperatures, vibration, and continuous operation in power plants.",
    problem: "Thermal stress & continuous heavy load",
    solution:
      "High-strength machining with heat-resistant materials",
    uses: [
      "Turbine Base Frames",
      "Boiler Structures",
      "Heat Exchanger Parts",
    ],
  },
  {
    title: "Packaging Machinery",
    image: "/assets/packaging.jpg",
    description:
      "Accurate and repeatable machined parts ensuring speed, consistency, and reliability in packaging machinery.",
    problem: "High-speed operation & wear resistance",
    solution:
      "Precision CNC machining with durable finishes",
    uses: [
      "Guide Rails",
      "Machine Frames",
      "Drive Components",
    ],
  },
  {
    title: "Injection Molding Machinery",
    image: "  /assets/injection-molding.webp",
    description:
      "High-precision components engineered for pressure-intensive injection molding machines.",
    problem: "High pressure & dimensional consistency",
    solution:
      "Precision machining with hardened materials",
    uses: [
      "Clamping Units",
      "Plates",
      "Support Structures",
    ],
  },
];


export default function Applications() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeApp = applicationsData[activeIndex];

  return (
    <>
      {/* ================= APPLICATIONS DASHBOARD ================= */}
      <div className="app-root">
        <div className="app-sidebar">
          <h2>OUR FIELDS OF EXPERTISE</h2>

          <div className="tab-list">
            {applicationsData.map((item, index) => (
              <button
                key={index}
                className={activeIndex === index ? "active" : ""}
                onClick={() => setActiveIndex(index)}
              >
                {item.title}
              </button>
            ))}
          </div>
        </div>

        <div className="app-panel">
          <div className="panel-box">
            <div className="image-box">
              <img src={activeApp.image} alt={activeApp.title} />
            </div>

            <div className="panel-content">
              <h1>{activeApp.title}</h1>
              <p className="description">{activeApp.description}</p>

              <div className="panel-section">
                <span>ENGINEERING CHALLENGE</span>
                <p>{activeApp.problem}</p>
              </div>

              <div className="panel-section">
                <span>OUR SOLUTION</span>
                <p>{activeApp.solution}</p>
              </div>

              <div className="panel-section">
                <span>REAL APPLICATIONS</span>
                <div className="chip-row">
                  {activeApp.uses.map((use, i) => (
                    <div key={i} className="chip">
                      {use}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ================= ENGINEERING PROCESS ================= */}
      <section className="process-section">
        <h2>How Our Applications Are Engineered</h2>

        <div className="process-steps">
          {[
            "Requirement Analysis",
            "Material Selection",
            "Precision Machining",
            "Quality Inspection",
            "Final Deployment",
          ].map((step, i) => (
            <div key={i} className="process-step">
              <span>{i + 1}</span>
              <p>{step}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= MACHINES ================= */}
      <section className="machines-section">
        <h2>Machines Behind These Applications</h2>

        <div className="machine-grid">
          <div className="machine-card">
            <h4>CNC Lathe</h4>
            <p>Precision shafts, flanges & cylindrical components</p>
          </div>
          <div className="machine-card">
            <h4>VMC</h4>
            <p>High-accuracy plates, housings & profiles</p>
          </div>
          <div className="machine-card">
            <h4>Heavy Fabrication</h4>
            <p>Structural frames & industrial supports</p>
          </div>
          <div className="machine-card">
            <h4>Surface Grinding</h4>
            <p>Critical finishing & tolerance control</p>
          </div>
        </div>
      </section>

      {/* ================= QUALITY ================= */}
      <section className="quality-section">
        <h2>Quality & Compliance</h2>

        <ul>
          <li>✔ ISO-compliant manufacturing processes</li>
          <li>✔ Material traceability & inspection</li>
          <li>✔ Dimensional accuracy checks</li>
          <li>✔ Safety & performance validation</li>
        </ul>
      </section>

      <section className="regions-section">
        <h2>Our engineered components are actively deployed across major industrial regions around the world.</h2>

      </section>

    </>
  );
}
