import ResumePageIllustration, {
  AFTER_BULLETS,
  BEFORE_BULLETS,
} from "@/components/illustrations/ResumePageIllustration";

const ROLE = "Software Engineer Intern · Aurora Labs · 2024 – 2025";

function BeforeAfterArrow() {
  return (
    <svg
      className="before-after-arrow"
      width="48"
      height="48"
      viewBox="0 0 56 56"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path
        d="M8 28h32M32 16l12 12-12 12"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function BeforeAfterShowcase() {
  return (
    <div className="before-after-showcase">
      <div className="before-after-column">
        <p className="before-after-external-label before-after-external-label--weak">
          Before
        </p>
        <ResumePageIllustration
          variant="weak"
          role={ROLE}
          bullets={BEFORE_BULLETS}
          matchScore={34}
          label="Before"
        />
      </div>

      <div className="before-after-divider" aria-hidden>
        <BeforeAfterArrow />
      </div>

      <div className="before-after-column">
        <p className="before-after-external-label before-after-external-label--strong">
          After
        </p>
        <ResumePageIllustration
          variant="strong"
          role={ROLE}
          bullets={AFTER_BULLETS}
          matchScore={89}
          label="After"
        />
      </div>
    </div>
  );
}
