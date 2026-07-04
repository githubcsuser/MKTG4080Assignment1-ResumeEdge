import type { ReactNode } from "react";

type Variant = "weak" | "strong";

interface ResumePageIllustrationProps {
  variant: Variant;
  role: string;
  bullets: string[];
  matchScore: number;
  label: string;
  highlightedTerms?: string[];
}

function highlightText(
  text: string,
  terms: string[],
  variant: Variant
): ReactNode {
  if (variant !== "strong" || terms.length === 0) {
    return text;
  }

  const lowerText = text.toLowerCase();
  const matches: { start: number; end: number }[] = [];

  for (const term of terms) {
    const lowerTerm = term.toLowerCase();
    let start = 0;
    while (start < lowerText.length) {
      const index = lowerText.indexOf(lowerTerm, start);
      if (index === -1) break;
      matches.push({ start: index, end: index + term.length });
      start = index + term.length;
    }
  }

  if (matches.length === 0) return text;

  matches.sort((a, b) => a.start - b.start);
  const merged: { start: number; end: number }[] = [];
  for (const match of matches) {
    const last = merged[merged.length - 1];
    if (!last || match.start >= last.end) {
      merged.push(match);
    } else if (match.end > last.end) {
      last.end = match.end;
    }
  }

  const nodes: ReactNode[] = [];
  let cursor = 0;
  merged.forEach((match, i) => {
    if (cursor < match.start) {
      nodes.push(text.slice(cursor, match.start));
    }
    nodes.push(
      <mark key={i} className="resume-page-highlight">
        {text.slice(match.start, match.end)}
      </mark>
    );
    cursor = match.end;
  });
  if (cursor < text.length) {
    nodes.push(text.slice(cursor));
  }

  return nodes;
}

export const STRONG_HIGHLIGHTS = [
  "REST APIs",
  "Python",
  "50K",
  "40%",
  "CI/CD",
  "cross-functional",
  "Agile",
];

export const BEFORE_BULLETS = [
  "Responsible for various software tasks",
  "Helped with team projects",
  "Used Python and Java",
];

export const AFTER_BULLETS = [
  "Built REST APIs serving 50K daily users in Python",
  "Reduced deployment time 40% via CI/CD automation",
  "Collaborated with cross-functional teams on Agile sprints",
];

export default function ResumePageIllustration({
  variant,
  role,
  bullets,
  matchScore,
  label,
  highlightedTerms = STRONG_HIGHLIGHTS,
}: ResumePageIllustrationProps) {
  return (
    <div
      className={`resume-page-illustration resume-page-illustration--${variant}`}
      aria-label={`${label} resume example`}
    >
      <div className="resume-page-paper">
        <div
          className={`resume-page-accent resume-page-accent--${variant}`}
          aria-hidden
        />

        <div className="resume-page-header">
          <p className="resume-page-name">Alex Chen</p>
          <p className="resume-page-contact">
            alex.chen@email.com · San Francisco, CA
          </p>
        </div>

        <div className="resume-page-content">
          <span className="resume-page-section-header">Experience</span>

          <p className={`resume-page-role resume-page-role--${variant}`}>{role}</p>

          <ul className="resume-page-bullets">
            {bullets.map((bullet) => (
              <li
                key={bullet}
                className={`resume-page-bullet resume-page-bullet--${variant}`}
              >
                <span
                  className={`resume-page-dot resume-page-dot--${variant}`}
                  aria-hidden
                />
                <span>{highlightText(bullet, highlightedTerms, variant)}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="resume-page-score-row">
          {variant === "weak" && (
            <span className="resume-page-label-badge resume-page-label-badge--weak">
              Weak
            </span>
          )}
          {variant === "strong" && (
            <span className="resume-page-label-badge resume-page-label-badge--strong">
              Strong
            </span>
          )}
          <span
            className={`resume-page-match-badge resume-page-match-badge--${variant}`}
          >
            {matchScore}% match
          </span>
        </div>
      </div>
    </div>
  );
}
