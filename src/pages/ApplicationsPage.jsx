import { useState } from "react";
import "/src/pages/applications.css";

const applicationsData = [
  {
    title: "Power Plants",
    image: "/assets/powerplant.jpg",
    description:
      "Precision-engineered components designed to withstand extreme heat, vibration, and continuous operation in thermal and power generation environments.",
    problem: "High thermal stress, vibration & continuous heavy load",
    solution:
      "Heavy-duty CNC machining combined with reinforced structural fabrication",
    uses: [
      "Boiler Structures",
      "Turbine Base Frames",
      "Heat Exchanger Components",
    ],
  },
  {
    title: "Oil & Gas",
    image: "/assets/oilgas.jpg",
    description:
      "Critical CNC machined components manufactured for high-pressure and corrosive oil & gas operations with strict safety standards.",
    problem: "Extreme pressure, corrosion & safety-critical conditions",
    solution:
      "High-strength precision machining with full material traceability",
    uses: ["Flanges", "Valve Bodies", "Pressure Housings"],
  },
  {
    title: "Infrastructure",
    image: "/assets/infrastructure.jpg",
    description:
      "Structural and load-bearing fabricated components for large-scale infrastructure and construction projects.",
    problem: "Heavy load bearing & long-term durability requirements",
    solution: "Custom fabricated and machined steel components",
    uses: ["Anchor Plates", "Steel Frames", "Support Brackets"],
  },
  {
    title: "Heavy Engineering",
    image: "/assets/heavy.jpg",
    description:
      "Large-scale precision machining solutions for heavy industrial machinery and equipment.",
    problem: "Precision alignment for large & heavy machinery",
    solution:
      "Heavy-duty machining with tight tolerances and robust materials",
    uses: ["Shafts", "Rollers", "Machine Beds"],
  },
  {
    title: "Railways",
    image: "/assets/railways.jpg",
    description:
      "Durable machined components built to perform under high vibration and long service cycles in railway systems.",
    problem: "High vibration & strict safety compliance",
    solution:
      "Robust CNC machined components with quality inspection",
    uses: ["Axle Components", "Mounting Brackets", "Couplers"],
  },
  {
    title: "Defense Support",
    image: "/assets/defense.jpg",
    description:
      "Mission-critical components manufactured with zero tolerance for error and strict quality control.",
    problem: "Zero error tolerance & reliability requirements",
    solution:
      "High-precision CNC machining with strict QA processes",
    uses: ["Mounting Assemblies", "Structural Housings"],
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

      {/* ================= REGIONS ================= */}
      <section className="regions-section">
        <h2>Where Our Applications Operate</h2>
        <p>
          Our engineered components are actively operating across major
          industrial regions of India.
        </p>

        <div className="regions">
          <span>Gujarat</span>
          <span>Maharashtra</span>
          <span>Rajasthan</span>
          <span>Madhya Pradesh</span>
        </div>
      </section>

    </>
  );
}
