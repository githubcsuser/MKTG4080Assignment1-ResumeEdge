type BlobVariant = "problem" | "how-it-works" | "benefits" | "pricing" | "form" | "reviews";

interface DecorativeBlobProps {
  variant: BlobVariant;
}

export default function DecorativeBlob({ variant }: DecorativeBlobProps) {
  return (
    <div className={`decorative-blob decorative-blob--${variant}`} aria-hidden>
      {variant === "pricing" && (
        <svg
          className="decorative-resume-watermark"
          viewBox="0 0 120 156"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect x="10" y="8" width="100" height="140" rx="8" stroke="#061a2e" strokeWidth="1.5" opacity="0.06" />
          <rect x="22" y="24" width="50" height="6" rx="3" fill="#061a2e" opacity="0.05" />
          <rect x="22" y="38" width="70" height="4" rx="2" fill="#061a2e" opacity="0.04" />
          <rect x="22" y="48" width="60" height="4" rx="2" fill="#061a2e" opacity="0.04" />
          <rect x="22" y="58" width="65" height="4" rx="2" fill="#061a2e" opacity="0.04" />
        </svg>
      )}
    </div>
  );
}

export function ProblemIllustration() {
  return (
    <svg
      className="problem-illustration"
      width="120"
      height="80"
      viewBox="0 0 120 94"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <rect x="18" y="18" width="52" height="68" rx="5" fill="white" stroke="#cbd5e1" strokeWidth="1.5" transform="rotate(-8 44 52)" />
      <rect x="34" y="12" width="52" height="68" rx="5" fill="white" stroke="#94a3b8" strokeWidth="1.5" transform="rotate(4 60 46)" />
      <rect x="50" y="8" width="52" height="68" rx="5" fill="white" stroke="#061a2e" strokeWidth="1.5" />
      <rect x="58" y="18" width="28" height="4" rx="2" fill="#e2e8f0" />
      <rect x="58" y="26" width="36" height="3" rx="1.5" fill="#e2e8f0" />
      <rect x="58" y="33" width="32" height="3" rx="1.5" fill="#e2e8f0" />
      <circle cx="88" cy="58" r="14" fill="#fef2f2" stroke="#f87171" strokeWidth="2" />
      <path d="M82 58h12M88 52v12" stroke="#ef4444" strokeWidth="2.5" strokeLinecap="round" transform="rotate(45 88 58)" />
    </svg>
  );
}

export function BenefitIllustration({ type }: { type: "interviews" | "ats" | "language" | "tailored" }) {
  const common = "benefit-illustration";

  if (type === "interviews") {
    return (
      <svg className={common} width="48" height="48" viewBox="0 0 48 48" fill="none" aria-hidden>
        <rect x="4" y="28" width="8" height="14" rx="2" fill="#d1fae5" />
        <rect x="16" y="20" width="8" height="22" rx="2" fill="#22d96e" />
        <rect x="28" y="12" width="8" height="30" rx="2" fill="#061a2e" />
        <path d="M6 28l14-8 10 6 12-14" stroke="#22d96e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }

  if (type === "ats") {
    return (
      <svg className={common} width="48" height="48" viewBox="0 0 48 48" fill="none" aria-hidden>
        <rect x="8" y="6" width="32" height="36" rx="4" fill="white" stroke="#061a2e" strokeWidth="1.5" />
        <rect x="14" y="14" width="20" height="3" rx="1.5" fill="#061a2e" />
        <rect x="14" y="21" width="16" height="2" rx="1" fill="#e2e8f0" />
        <rect x="14" y="27" width="18" height="2" rx="1" fill="#e2e8f0" />
        <rect x="6" y="30" width="36" height="12" rx="3" fill="#061a2e" opacity="0.9" />
        <rect x="12" y="35" width="24" height="2" rx="1" fill="#22d96e" />
      </svg>
    );
  }

  if (type === "language") {
    return (
      <svg className={common} width="48" height="48" viewBox="0 0 48 48" fill="none" aria-hidden>
        <path
          d="M8 12c0-2 2-4 6-4h12c4 0 6 2 6 4v8c0 6-4 10-12 14-8-4-12-8-12-14v-8z"
          fill="#ecfdf5"
          stroke="#22d96e"
          strokeWidth="1.5"
        />
        <rect x="14" y="14" width="12" height="2" rx="1" fill="#061a2e" />
        <rect x="14" y="19" width="10" height="2" rx="1" fill="#94a3b8" />
        <rect x="14" y="24" width="8" height="2" rx="1" fill="#94a3b8" />
        <circle cx="36" cy="32" r="10" fill="#061a2e" />
        <path d="M32 32h8M36 28v8" stroke="#22d96e" strokeWidth="1.5" strokeLinecap="round" transform="rotate(0 36 32)" />
        <text x="36" y="35" textAnchor="middle" fontSize="10" fill="#22d96e" fontWeight="700">
          ✓
        </text>
      </svg>
    );
  }

  return (
    <svg className={common} width="48" height="48" viewBox="0 0 48 48" fill="none" aria-hidden>
      <circle cx="24" cy="24" r="18" fill="#ecfdf5" stroke="#22d96e" strokeWidth="1.5" />
      <circle cx="24" cy="24" r="12" stroke="#22d96e" strokeWidth="1.5" />
      <circle cx="24" cy="24" r="6" stroke="#061a2e" strokeWidth="1.5" />
      <circle cx="24" cy="24" r="2.5" fill="#061a2e" />
      <path d="M24 6v6M24 36v6M6 24h6M36 24h6" stroke="#22d96e" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function QuoteWatermark() {
  return (
    <svg
      className="quote-watermark"
      viewBox="0 0 120 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path
        d="M30 70c-8 0-14-6-14-16 0-14 10-24 24-30l4 8c-10 4-16 10-16 18 0 2 2 4 4 4h6v22H30zm50 0c-8 0-14-6-14-16 0-14 10-24 24-30l4 8c-10 4-16 10-16 18 0 2 2 4 4 4h6v22H80z"
        fill="#061a2e"
        opacity="0.04"
      />
    </svg>
  );
}
