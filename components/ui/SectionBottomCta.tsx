"use client";

import CTAButton from "@/components/ui/CTAButton";
import { useScrollToSection } from "@/components/canvas/ScrollContext";

export default function SectionBottomCta() {
  const scrollToSection = useScrollToSection();

  return (
    <div className="section-bottom-cta">
      <CTAButton onClick={() => scrollToSection("lead-form")}>Try It Free</CTAButton>
    </div>
  );
}
