"use client";

import { useScrollToSection } from "@/components/canvas/ScrollContext";

function ProductPreview({
  variant,
  hue,
}: {
  variant: "scanner" | "ats" | "review" | "keyword" | "format" | "score" | "upload" | "analysis" | "polished" | "free" | "pro" | "bundle" | "testimonial" | "before" | "after" | "full" | "start";
  hue: number;
}) {
  const accent = `hsl(${hue}, 70%, 50%)`;
  const bg = `hsl(${hue}, 45%, 96%)`;
  const line = `hsl(${hue}, 25%, 78%)`;

  return (
    <svg
      width="120"
      height="80"
      viewBox="0 0 120 80"
      className="rounded-lg shadow-sm"
      aria-hidden
    >
      <defs>
        <linearGradient id={`grad-${variant}-${hue}`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor={bg} />
          <stop offset="100%" stopColor={`hsl(${hue}, 35%, 92%)`} />
        </linearGradient>
      </defs>
      <rect width="120" height="80" fill={`url(#grad-${variant}-${hue})`} rx="8" />
      <rect x="10" y="10" width="100" height="60" fill="white" rx="4" opacity="0.9" />

      {variant === "scanner" && (
        <>
          <circle cx="60" cy="32" r="14" fill="none" stroke={accent} strokeWidth="2.5" />
          <path d="M72 44 L78 50" stroke={accent} strokeWidth="2.5" strokeLinecap="round" />
          <rect x="22" y="50" width="76" height="3" fill={line} rx="1.5" />
          <rect x="22" y="56" width="56" height="3" fill={line} rx="1.5" />
        </>
      )}

      {variant === "ats" && (
        <>
          <rect x="22" y="22" width="76" height="6" fill={accent} rx="3" opacity="0.3" />
          <rect x="22" y="22" width="52" height="6" fill={accent} rx="3" />
          <text x="60" y="44" textAnchor="middle" fontSize="11" fontWeight="700" fill={accent}>
            92%
          </text>
          <rect x="22" y="50" width="76" height="3" fill={line} rx="1.5" />
          <rect x="22" y="56" width="48" height="3" fill={line} rx="1.5" />
        </>
      )}

      {(variant === "review" || variant === "polished" || variant === "pro") && (
        <>
          <rect x="22" y="20" width="40" height="5" fill={accent} rx="2.5" />
          <rect x="22" y="30" width="76" height="3" fill={line} rx="1.5" />
          <rect x="22" y="36" width="68" height="3" fill={line} rx="1.5" />
          <rect x="22" y="42" width="72" height="3" fill={line} rx="1.5" />
          <circle cx="88" cy="56" r="8" fill={accent} opacity="0.2" />
          <path d="M84 56 L87 59 L92 53" stroke={accent} strokeWidth="2" fill="none" strokeLinecap="round" />
        </>
      )}

      {variant === "keyword" && (
        <>
          <rect x="22" y="22" width="28" height="12" fill={accent} rx="6" opacity="0.25" />
          <rect x="54" y="22" width="36" height="12" fill={accent} rx="6" opacity="0.15" />
          <rect x="22" y="40" width="44" height="12" fill={accent} rx="6" opacity="0.2" />
          <rect x="22" y="56" width="76" height="3" fill={line} rx="1.5" />
        </>
      )}

      {variant === "format" && (
        <>
          <rect x="22" y="18" width="76" height="2" fill={accent} rx="1" />
          <rect x="22" y="26" width="56" height="2" fill={line} rx="1" />
          <rect x="22" y="34" width="64" height="2" fill={line} rx="1" />
          <rect x="22" y="42" width="48" height="2" fill={line} rx="1" />
          <rect x="22" y="54" width="76" height="10" fill={accent} rx="2" opacity="0.12" />
        </>
      )}

      {variant === "score" && (
        <>
          <rect x="22" y="40" width="12" height="20" fill={line} rx="2" />
          <rect x="38" y="32" width="12" height="28" fill={accent} rx="2" opacity="0.6" />
          <rect x="54" y="24" width="12" height="36" fill={accent} rx="2" />
          <rect x="70" y="28" width="12" height="32" fill={accent} rx="2" opacity="0.7" />
        </>
      )}

      {variant === "upload" && (
        <>
          <path d="M60 22 L60 42 M52 34 L60 42 L68 34" stroke={accent} strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
          <rect x="30" y="48" width="60" height="16" fill="none" stroke={accent} strokeWidth="1.5" strokeDasharray="4 3" rx="4" />
        </>
      )}

      {variant === "analysis" && (
        <>
          <circle cx="60" cy="38" r="16" fill="none" stroke={accent} strokeWidth="3" strokeDasharray="50 20" />
          <text x="60" y="42" textAnchor="middle" fontSize="10" fontWeight="700" fill={accent}>
            AI
          </text>
        </>
      )}

      {variant === "free" && (
        <>
          <text x="60" y="38" textAnchor="middle" fontSize="18" fontWeight="700" fill={accent}>
            $0
          </text>
          <rect x="30" y="48" width="60" height="3" fill={line} rx="1.5" />
          <rect x="38" y="54" width="44" height="3" fill={line} rx="1.5" />
        </>
      )}

      {variant === "bundle" && (
        <>
          <rect x="28" y="22" width="28" height="36" fill={accent} rx="4" opacity="0.15" />
          <rect x="46" y="26" width="28" height="36" fill={accent} rx="4" opacity="0.25" />
          <rect x="64" y="22" width="28" height="36" fill={accent} rx="4" opacity="0.15" />
        </>
      )}

      {(variant === "testimonial" || variant === "before" || variant === "after" || variant === "full" || variant === "start") && (
        <>
          <circle cx="36" cy="32" r="10" fill={accent} opacity="0.25" />
          <text x="36" y="35" textAnchor="middle" fontSize="8" fontWeight="700" fill={accent}>
            {variant === "before" ? "?" : variant === "after" ? "✓" : "★"}
          </text>
          <rect x="52" y="24" width="46" height="3" fill={line} rx="1.5" />
          <rect x="52" y="32" width="38" height="3" fill={line} rx="1.5" />
          <rect x="52" y="40" width="42" height="3" fill={line} rx="1.5" />
          <rect x="22" y="52" width="76" height="3" fill={variant === "after" ? accent : line} rx="1.5" opacity={variant === "after" ? 0.5 : 1} />
        </>
      )}
    </svg>
  );
}

const PREVIEW_VARIANTS = [
  "scanner", "ats", "review", "keyword", "format", "score",
  "upload", "analysis", "polished", "free", "pro", "bundle",
  "testimonial", "before", "after", "full", "start",
] as const;

type PreviewVariant = (typeof PREVIEW_VARIANTS)[number];

function getPreviewVariant(title: string, index: number): PreviewVariant {
  const key = title.toLowerCase();
  if (key.includes("scan")) return "scanner";
  if (key.includes("ats")) return "ats";
  if (key.includes("human") || key.includes("review")) return "review";
  if (key.includes("keyword")) return "keyword";
  if (key.includes("format")) return "format";
  if (key.includes("score") || key.includes("report")) return "score";
  if (key.includes("upload")) return "upload";
  if (key.includes("analysis") || key.includes("ai")) return "analysis";
  if (key.includes("polish") && key.includes("resume")) return "polished";
  if (key.includes("free")) return "free";
  if (key.includes("pro")) return "pro";
  if (key.includes("bundle") || key.includes("career")) return "bundle";
  if (key.includes("before")) return "before";
  if (key.includes("after")) return "after";
  if (key.includes("full")) return "full";
  if (key.includes("start")) return "start";
  return PREVIEW_VARIANTS[index % PREVIEW_VARIANTS.length];
}

interface NavDropdownProps {
  columns: readonly { title: string; desc: string }[];
  target: string;
  hueBase?: number;
}

export default function NavDropdown({
  columns,
  target,
  hueBase = 200,
}: NavDropdownProps) {
  const scrollToSection = useScrollToSection();

  return (
    <div
      className="nav-dropdown absolute left-1/2 -translate-x-1/2 top-full mt-1 w-[480px] bg-white rounded-xl border border-black/6 p-5 z-50"
      style={{
        boxShadow:
          "0 8px 24px rgba(6, 26, 46, 0.1), 0 24px 48px rgba(6, 26, 46, 0.12)",
      }}
    >
      <div className="grid grid-cols-3 gap-4">
        {columns.map((col, i) => (
          <a
            key={col.title}
            href={`/${target}`}
            onClick={(e) => {
              e.preventDefault();
              scrollToSection(target);
            }}
            className="flex flex-col gap-3 p-3 rounded-xl hover:bg-grey-light transition-all hover:shadow-sm no-underline group"
          >
            <ProductPreview
              variant={getPreviewVariant(col.title, i)}
              hue={hueBase + i * 30}
            />
            <span className="text-sm font-bold text-black leading-snug group-hover:text-green transition-colors">
              {col.title}
            </span>
            <span className="text-sm text-black/65 leading-relaxed">{col.desc}</span>
          </a>
        ))}
      </div>
      <div className="mt-3 pt-3 border-t border-black/10 text-center">
        <a
          href={`/${target}`}
          onClick={(e) => {
            e.preventDefault();
            scrollToSection(target);
          }}
          className="text-sm font-bold text-orange hover:underline no-underline"
        >
          Learn more →
        </a>
      </div>
    </div>
  );
}
