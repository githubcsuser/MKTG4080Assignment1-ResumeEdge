export default function ResumeMockup() {
  return (
    <div className="resume-mockup-wrapper" aria-hidden>
      <svg
        viewBox="0 0 340 440"
        className="resume-mockup-svg"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="resume-bg" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="100%" stopColor="#f8fafc" />
          </linearGradient>
          <linearGradient id="score-ring" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#22d96e" />
            <stop offset="100%" stopColor="#10b981" />
          </linearGradient>
          <filter id="mockup-shadow" x="-10%" y="-10%" width="120%" height="120%">
            <feDropShadow dx="0" dy="12" stdDeviation="20" floodColor="#061a2e" floodOpacity="0.25" />
          </filter>
        </defs>

        {/* Back card */}
        <rect
          x="40"
          y="24"
          width="260"
          height="360"
          rx="12"
          fill="white"
          opacity="0.15"
          transform="rotate(6 170 204)"
        />

        {/* Main resume card */}
        <g filter="url(#mockup-shadow)">
          <rect x="50" y="40" width="260" height="360" rx="12" fill="url(#resume-bg)" />
          <rect x="50" y="40" width="260" height="8" rx="12" fill="#22d96e" />
          <rect x="50" y="44" width="260" height="4" fill="#22d96e" />

          {/* Header */}
          <rect x="72" y="68" width="120" height="10" rx="5" fill="#061a2e" />
          <rect x="72" y="86" width="90" height="6" rx="3" fill="#94a3b8" />
          <rect x="72" y="98" width="70" height="5" rx="2.5" fill="#cbd5e1" />

          {/* Score badge */}
          <circle cx="268" cy="88" r="28" fill="#ecfdf5" stroke="url(#score-ring)" strokeWidth="4" />
          <text x="268" y="84" textAnchor="middle" fontSize="16" fontWeight="700" fill="#059669">
            92
          </text>
          <text x="268" y="98" textAnchor="middle" fontSize="8" fill="#64748b">
            Fit
          </text>

          {/* Section: Experience */}
          <rect x="72" y="124" width="60" height="6" rx="3" fill="#22d96e" opacity="0.8" />
          <rect x="72" y="140" width="200" height="5" rx="2.5" fill="#e2e8f0" />
          <rect x="72" y="152" width="180" height="5" rx="2.5" fill="#e2e8f0" />
          <rect x="72" y="164" width="190" height="5" rx="2.5" fill="#e2e8f0" />
          <rect x="72" y="176" width="160" height="5" rx="2.5" fill="#e2e8f0" />

          {/* Highlighted bullet */}
          <rect x="72" y="196" width="8" height="8" rx="2" fill="#22d96e" opacity="0.3" />
          <rect x="86" y="196" width="170" height="5" rx="2.5" fill="#061a2e" opacity="0.7" />
          <rect x="86" y="208" width="150" height="5" rx="2.5" fill="#e2e8f0" />

          {/* Section: Skills */}
          <rect x="72" y="232" width="44" height="6" rx="3" fill="#f5a623" opacity="0.8" />
          <rect x="72" y="248" width="52" height="18" rx="9" fill="#ecfdf5" stroke="#22d96e" strokeWidth="1" />
          <rect x="80" y="255" width="36" height="4" rx="2" fill="#059669" />
          <rect x="132" y="248" width="52" height="18" rx="9" fill="#fff7ed" stroke="#f5a623" strokeWidth="1" />
          <rect x="140" y="255" width="36" height="4" rx="2" fill="#ea580c" />
          <rect x="192" y="248" width="52" height="18" rx="9" fill="#eff6ff" stroke="#3b82f6" strokeWidth="1" />
          <rect x="200" y="255" width="36" height="4" rx="2" fill="#2563eb" />

          {/* Section: Education */}
          <rect x="72" y="284" width="56" height="6" rx="3" fill="#061a2e" opacity="0.6" />
          <rect x="72" y="300" width="160" height="5" rx="2.5" fill="#e2e8f0" />
          <rect x="72" y="312" width="140" height="5" rx="2.5" fill="#e2e8f0" />
        </g>

        {/* Floating AI badge */}
        <g filter="url(#mockup-shadow)">
          <rect x="16" y="320" width="110" height="44" rx="10" fill="#061a2e" />
          <circle cx="36" cy="342" r="10" fill="#22d96e" />
          <path d="M32 342 L35 345 L40 339" stroke="white" strokeWidth="1.5" fill="none" strokeLinecap="round" />
          <rect x="52" y="332" width="60" height="5" rx="2.5" fill="white" opacity="0.9" />
          <rect x="52" y="342" width="44" height="4" rx="2" fill="white" opacity="0.5" />
        </g>

        {/* Floating metric */}
        <g filter="url(#mockup-shadow)">
          <rect x="220" y="16" width="100" height="52" rx="10" fill="white" />
          <text x="270" y="38" textAnchor="middle" fontSize="9" fill="#64748b" fontWeight="600">
            CALLBACKS
          </text>
          <text x="270" y="56" textAnchor="middle" fontSize="18" fontWeight="700" fill="#22d96e">
            3×
          </text>
        </g>
      </svg>
    </div>
  );
}
