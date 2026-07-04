"use client";

import { useState } from "react";

type PressOutlet = {
  name: string;
  src: string;
  imgWidth?: number;
  imgHeight?: number;
};

export const PRESS_OUTLETS: readonly PressOutlet[] = [
  { name: "LinkedIn", src: "/press-logos/linkedin.svg" },
  { name: "Forbes", src: "/press-logos/forbes.svg" },
  { name: "Business Insider", src: "/press-logos/business-insider.svg" },
  { name: "The Muse", src: "/press-logos/the-muse.svg", imgWidth: 140, imgHeight: 40 },
  { name: "Glassdoor", src: "/press-logos/glassdoor.svg" },
  { name: "Fortune", src: "/press-logos/fortune.svg" },
  { name: "Fast Company", src: "/press-logos/fast-company.svg" },
  { name: "Wired", src: "/press-logos/wired.svg" },
  { name: "Harvard Business Review", src: "/press-logos/hbr.svg" },
  { name: "CNBC", src: "/press-logos/cnbc.svg" },
];

export default function PressLogoCarousel() {
  const [paused, setPaused] = useState(false);
  const duplicated = [...PRESS_OUTLETS, ...PRESS_OUTLETS];

  return (
    <div
      className="press-logo-carousel-wrap"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div
        className={`press-logo-marquee-track${paused ? " press-logo-marquee-track--paused" : ""}`}
        role="list"
        aria-label="Featured in media outlets"
      >
        {duplicated.map((outlet, i) => (
          <div key={`${outlet.name}-${i}`} className="press-logo-slot" role="listitem">
            <img
              src={outlet.src}
              alt={outlet.name}
              className="press-logo-img"
              width={outlet.imgWidth}
              height={outlet.imgHeight}
              loading="lazy"
              decoding="async"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
