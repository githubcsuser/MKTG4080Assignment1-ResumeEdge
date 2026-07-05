import FeatureGrid from "@/components/ui/FeatureGrid";
import BeforeAfterShowcase from "@/components/ui/BeforeAfterShowcase";
import SectionBottomCta from "@/components/ui/SectionBottomCta";
import SectionEnterHint from "@/components/ui/SectionEnterHint";
import DecorativeBlob, { ProblemIllustration } from "@/components/illustrations/DecorativeBlob";
import { StepIllustration } from "@/components/illustrations/StepIllustrations";

const PAIN_POINTS = [
  {
    title: "Most new grads send one resume everywhere",
    desc: "Same PDF for every posting. Recruiters spot it in seconds.",
  },
  {
    title: "500+ applicants per entry-level role",
    desc: "Software filters resumes before a human reads them. If yours does not match the posting, it never reaches the hiring manager.",
  },
  {
    title: "Apply for weeks. Hear nothing.",
    desc: "You send application after application and never hear back. No one tells you what went wrong or how to fix it.",
  },
];

const STEPS = [
  {
    step: 1 as const,
    title: "Upload",
    desc: "Upload your job description and resume.",
  },
  {
    step: 2 as const,
    title: "AI Analysis",
    desc: "See what to fix so your resume fits the role. Takes under 2 minutes.",
  },
  {
    step: 3 as const,
    title: "Download tailored resume",
    desc: "Get rewritten bullets and a ready-to-send PDF in under 2 minutes.",
  },
];

export default function CardThreeDiscovery() {
  return (
    <>
      <div
        id="section-problem"
        className="section-block section-block--problem viewport-section section-block--decorated"
      >
        <DecorativeBlob variant="problem" />
        <div className="section-container flex flex-col">
          <header className="section-header">
            <div className="section-header-illustration">
              <ProblemIllustration />
            </div>
            <h2 className="section-title">The job search should not feel this blind</h2>
            <p className="section-lead">
              Fresh grads send the same resume to every posting. Most never hear back.
            </p>
          </header>

          <div className="problem-grid">
            {PAIN_POINTS.map((point) => (
              <div key={point.title} className="problem-card">
                <h3 className="problem-card-title">{point.title}</h3>
                <p className="problem-card-desc">{point.desc}</p>
              </div>
            ))}
          </div>

          <SectionBottomCta />
        </div>
        <SectionEnterHint />
      </div>

      <div
        id="section-how-it-works"
        className="section-block section-block--how-it-works viewport-section section-block--decorated"
      >
        <DecorativeBlob variant="how-it-works" />
        <div className="section-container flex flex-col">
          <header className="section-header">
            <h2 className="section-title">How it works</h2>
            <p className="section-lead">
              Three steps from upload to interview-ready resume.
            </p>
          </header>

          <ol className="steps-row">
            {STEPS.map((s) => (
              <li key={s.step} className="steps-row-item">
                <StepIllustration step={s.step} />
                <div className="steps-row-copy">
                  <span className="steps-row-step-num" aria-hidden>
                    Step {s.step}
                  </span>
                  <span className="steps-row-title">{s.title}</span>
                  <span className="steps-row-desc">{s.desc}</span>
                </div>
              </li>
            ))}
          </ol>

          <SectionBottomCta />
        </div>
        <SectionEnterHint />
      </div>

      <div
        id="section-before-after"
        className="section-block section-block--before-after viewport-section"
      >
        <div className="section-container flex flex-col">
          <header className="section-header">
            <h2 className="section-title">Compare</h2>
            <p className="section-lead">
              See how vague bullets become stronger lines that fit the posting.
            </p>
          </header>

          <BeforeAfterShowcase />

          <SectionBottomCta />
        </div>
        <SectionEnterHint />
      </div>

      <div
        id="section-benefits"
        className="section-block section-block--benefits viewport-section section-block--decorated"
      >
        <DecorativeBlob variant="benefits" />
        <div className="section-container flex flex-col">
          <header className="section-header">
            <h2 className="section-title section-title--benefits">Benefits</h2>
            <p className="section-lead">
              Outcomes that matter when you are competing against hundreds of applicants.
            </p>
          </header>
          <FeatureGrid />
          <SectionBottomCta />
        </div>
        <SectionEnterHint />
      </div>
    </>
  );
}
