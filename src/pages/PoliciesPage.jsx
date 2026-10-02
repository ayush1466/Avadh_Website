import React from "react";
import {
  ArrowUpRight,
  Award,
  CheckCircle2,
  FileCheck2,
  FileText,
  ShieldCheck,
} from "lucide-react";
import "./policies.css";

const certificatePath = "/certificates/AVADH%20QUALITY%20POLICY.pdf";
const certificateImagePath = "/certificates/quality-policy.png";

const policyHighlights = [
  {
    icon: ShieldCheck,
    title: "Quality first",
    copy: "Every component is planned, machined, and inspected with dimensional accuracy and consistency in mind.",
  },
  {
    icon: FileCheck2,
    title: "Process discipline",
    copy: "Documented workflows and inspection checkpoints help keep production dependable from enquiry to delivery.",
  },
  {
    icon: CheckCircle2,
    title: "Customer commitment",
    copy: "We work closely with customers to understand technical requirements and deliver fit-for-purpose solutions.",
  },
];

const PoliciesPage = () => {
  return (
    <main className="policies-page">
      <section className="policies-hero">
        <div className="policies-hero__content">
          <p className="policies-eyebrow">Trust, quality, accountability</p>
          <h1>Policies &amp; Certificates</h1>
          <p className="policies-hero__intro">
            A clear view of the standards and commitments behind Avadh
            Enterprise&apos;s precision machining work.
          </p>
        </div>
        <div className="policies-hero__mark" aria-hidden="true">
          <Award size={92} strokeWidth={1.2} />
          <span>ISO 9001:2015</span>
        </div>
      </section>

      <section className="policies-layout" aria-label="Policies and certificates">
        <div className="policies-copy">
          <div className="policies-section-heading">
            <p className="policies-eyebrow">Our approach</p>
            <h2>Built for dependable production</h2>
            <p>
              Quality is part of the process at every stage, from interpreting
              a drawing to checking the finished component.
            </p>
          </div>

          <div className="policy-highlights">
            {policyHighlights.map((highlight) => {
              const PolicyIcon = highlight.icon;

              return (
                <article className="policy-highlight" key={highlight.title}>
                  <span className="policy-highlight__icon" aria-hidden="true">
                    <PolicyIcon size={20} />
                  </span>
                  <div>
                    <h3>{highlight.title}</h3>
                    <p>{highlight.copy}</p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>

        <section className="certificate-panel" aria-labelledby="certificate-title">
          <div className="certificate-panel__header">
            <div>
              <p className="policies-eyebrow">Verified document</p>
              <h2 id="certificate-title">Quality policy</h2>
            </div>
            <FileText size={28} aria-hidden="true" />
          </div>

          <div className="certificate-viewer">
            <img
              src={certificateImagePath}
              alt="Avadh Enterprise quality policy document"
            />
          </div>

          <div className="certificate-panel__footer">
            <span>Quality policy</span>
            <a href={certificatePath} target="_blank" rel="noreferrer">
              Open document <ArrowUpRight size={15} aria-hidden="true" />
            </a>
          </div>
        </section>
      </section>
    </main>
  );
};

export default PoliciesPage;