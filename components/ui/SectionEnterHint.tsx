"use client";

import { useScrollToSection } from "@/components/canvas/ScrollContext";
import { navigateToNextSection } from "@/components/canvas/useSectionEnterNavigation";

type SectionEnterHintProps = {
  variant?: "dark" | "light";
  isLast?: boolean;
};

export default function SectionEnterHint({
  variant = "light",
  isLast = false,
}: SectionEnterHintProps) {
  const scrollToSection = useScrollToSection();
  const label = isLast ? "Return to top" : "Go to next section";

  return (
    <button
      type="button"
      className={`section-enter-hint section-enter-hint--${variant}`}
      aria-label={label}
      onClick={() => navigateToNextSection(scrollToSection)}
    >
      <span aria-hidden="true">Hit </span>
      <kbd className="section-enter-hint__key" aria-hidden="true">
        Enter
      </kbd>
      <span aria-hidden="true">
        {isLast ? " to return to top" : " for next section"}
      </span>
    </button>
  );
}
