import { BenefitIllustration } from "@/components/illustrations/DecorativeBlob";

const BENEFITS = [
  {
    type: "interviews" as const,
    title: "3x more interviews",
    desc: "Tailor each application and hear back three times more often.",
  },
  {
    type: "ats" as const,
    title: "Fits the job posting",
    desc: "See how well your resume fits any job posting. Under 2 minutes.",
  },
  {
    type: "language" as const,
    title: "Bullets that land",
    desc: "Get experience rewritten in plain language hiring managers scan for.",
  },
  {
    type: "tailored" as const,
    title: "Rewrite for each role",
    desc: "Upload a job description. Every version fits that role, not a generic template.",
  },
];

export default function FeatureGrid() {
  return (
    <div className="benefits-grid">
      {BENEFITS.map((b) => (
        <div key={b.title} className="benefit-card">
          <BenefitIllustration type={b.type} />
          <div>
            <p className="benefit-title">{b.title}</p>
            <p className="benefit-desc">{b.desc}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
