import PricingCircles from "@/components/ui/PricingCircles";
import LeadForm from "@/components/ui/LeadForm";
import SectionBottomCta from "@/components/ui/SectionBottomCta";
import SectionEnterHint from "@/components/ui/SectionEnterHint";
import DecorativeBlob from "@/components/illustrations/DecorativeBlob";

export default function CardFourInteraction() {
  return (
    <article>
      <div className="viewport-section viewport-section--pricing section-block section-block--pricing section-block--decorated">
        <DecorativeBlob variant="pricing" />
        <div className="section-container flex flex-col">
          <header className="section-header">
            <h2 className="section-title">Pricing</h2>
            <p className="section-lead">
              Match your resume to any posting. Start free, upgrade when you need more.
            </p>
          </header>

          <PricingCircles />
          <SectionBottomCta />
        </div>
        <SectionEnterHint />
      </div>
    </article>
  );
}

export function LeadFormSection() {
  return (
    <div
      id="lead-form"
      className="viewport-section viewport-section--form section-block section-block--form section-block--decorated"
    >
      <DecorativeBlob variant="form" />
      <div className="section-container">
        <p className="section-eyebrow">Get started free</p>
        <div className="conversion-zone">
          <div className="conversion-grid">
            <div className="conversion-copy">
              <h2 className="section-title mb-4">Match your first resume in under 2 minutes</h2>
              <p className="section-lead mb-12">
                Upload your job description and resume. In under 2 minutes, AI tells you what to fix so you fit the role. No card required.
              </p>
              <ul className="conversion-benefits">
                {[
                  "How well your resume fits that job",
                  "Missing words recruiters look for",
                  "Better bullet points for that role",
                ].map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="conversion-form">
              <LeadForm />
            </div>
          </div>
        </div>
      </div>
      <SectionEnterHint isLast />
    </div>
  );
}
