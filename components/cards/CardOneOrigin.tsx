import CTAButton from "@/components/ui/CTAButton";
import ResumeMockup from "@/components/ui/ResumeMockup";

const HERO_STATS = [
  { stat: "2 min", label: "To match a job post" },
  { stat: "89%", label: "Avg resume fit" },
  { stat: "Free", label: "To start" },
];

export default function CardOneOrigin() {
  return (
    <article className="hero-grid">
      <div className="hero-content">
        <header>
          <h1 className="hero-headline">
            Your resume deserves
            <br />
            <span className="text-green">more than silence.</span>
          </h1>
          <p className="hero-subhead">
            ResumeEdge AI matches your resume to any job posting in under 2 minutes.
          </p>

          <p className="prose-on-dark max-w-xl">
            Upload your job description. ResumeEdge shows what to change and
            rewrites your experience so it fits the role.
          </p>
        </header>

        <div className="hero-cta-row mt-10">
          <CTAButton href="/lead-form">Try It Free</CTAButton>
          <p className="hero-trust-note">No card required</p>
        </div>

        <div className="hero-stats">
          {HERO_STATS.map((item) => (
            <div key={item.label} className="hero-stat">
              <p className="hero-stat-value">{item.stat}</p>
              <p className="hero-stat-label">{item.label}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="hero-visual">
        <div className="hero-glow" aria-hidden />
        <ResumeMockup />
      </div>
    </article>
  );
}
