interface StepIllustrationProps {
  step: 1 | 2 | 3;
  className?: string;
}

export function StepIllustration({ step, className = "" }: StepIllustrationProps) {
  if (step === 1) return <UploadStepIllustration className={className} />;
  if (step === 2) return <AnalysisStepIllustration className={className} />;
  return <PolishedStepIllustration className={className} />;
}

function UploadStepIllustration({ className }: { className?: string }) {
  return (
    <svg
      className={`step-illustration ${className}`}
      width="120"
      height="120"
      viewBox="0 0 80 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <rect x="8" y="12" width="64" height="56" rx="12" fill="#ecfdf5" stroke="#22d96e" strokeWidth="1.5" />
      <path
        d="M40 28v20M32 36l8-8 8 8"
        stroke="#061a2e"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <rect x="22" y="54" width="36" height="4" rx="2" fill="#94a3b8" opacity="0.5" />
      <rect x="48" y="4" width="24" height="32" rx="4" fill="white" stroke="#061a2e" strokeWidth="1.5" />
      <rect x="52" y="10" width="16" height="3" rx="1.5" fill="#061a2e" />
      <rect x="52" y="16" width="12" height="2" rx="1" fill="#cbd5e1" />
      <rect x="52" y="21" width="14" height="2" rx="1" fill="#cbd5e1" />
      <rect x="52" y="26" width="10" height="2" rx="1" fill="#e2e8f0" />
    </svg>
  );
}

function AnalysisStepIllustration({ className }: { className?: string }) {
  return (
    <svg
      className={`step-illustration ${className}`}
      width="120"
      height="120"
      viewBox="0 0 80 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <rect x="14" y="10" width="40" height="52" rx="6" fill="white" stroke="#061a2e" strokeWidth="1.5" />
      <rect x="20" y="18" width="20" height="4" rx="2" fill="#061a2e" />
      <rect x="20" y="26" width="28" height="2.5" rx="1.25" fill="#e2e8f0" />
      <rect x="20" y="32" width="24" height="2.5" rx="1.25" fill="#e2e8f0" />
      <rect x="20" y="38" width="26" height="2.5" rx="1.25" fill="#fef3c7" stroke="#f5a623" strokeWidth="0.5" />
      <rect x="20" y="44" width="22" height="2.5" rx="1.25" fill="#e2e8f0" />
      <circle cx="58" cy="52" r="18" fill="#061a2e" />
      <path
        d="M52 52l4 4 8-10"
        stroke="#22d96e"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M58 20l2 6 6 1-4.5 4.5 1 6-4.5-3-4.5 3 1-6L50 27l6-1z"
        fill="#22d96e"
        opacity="0.9"
      />
      <circle cx="68" cy="18" r="3" fill="#f5a623" opacity="0.8" />
      <circle cx="12" cy="58" r="2" fill="#22d96e" opacity="0.6" />
    </svg>
  );
}

function PolishedStepIllustration({ className }: { className?: string }) {
  return (
    <svg
      className={`step-illustration ${className}`}
      width="120"
      height="120"
      viewBox="0 0 80 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <rect x="16" y="6" width="44" height="58" rx="6" fill="white" stroke="#22d96e" strokeWidth="2" />
      <rect x="16" y="6" width="44" height="5" rx="6" fill="#22d96e" />
      <rect x="24" y="18" width="22" height="4" rx="2" fill="#061a2e" />
      <rect x="24" y="26" width="30" height="2.5" rx="1.25" fill="#e2e8f0" />
      <rect x="24" y="32" width="28" height="2.5" rx="1.25" fill="#d1fae5" />
      <rect x="24" y="38" width="26" height="2.5" rx="1.25" fill="#d1fae5" />
      <rect x="24" y="44" width="24" height="2.5" rx="1.25" fill="#e2e8f0" />
      <circle cx="58" cy="58" r="16" fill="#22d96e" />
      <path
        d="M51 58l5 5 10-12"
        stroke="white"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
