"use client";

import { useState } from "react";
import Image from "next/image";
import { TESTIMONIALS, type Testimonial } from "@/lib/reviewerPhotos";

function TestimonialCard({
  t,
  isHovered,
  onEnter,
  onLeave,
}: {
  t: Testimonial;
  isHovered: boolean;
  onEnter: () => void;
  onLeave: () => void;
}) {
  return (
    <blockquote
      className={`testimonial-card${isHovered ? " testimonial-card--hovered" : ""}`}
      role="listitem"
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
    >
      <footer className="testimonial-header">
        <Image
          src={t.photo}
          alt={`${t.name}, graduate reviewer`}
          width={56}
          height={56}
          className="testimonial-avatar-img"
        />
        <div className="testimonial-identity">
          <strong className="testimonial-name">{t.name}</strong>
          <span className="testimonial-university">{t.university}</span>
          <span className="testimonial-degree">{t.degree}</span>
        </div>
      </footer>
      <p className="testimonial-quote">&ldquo;{t.quote}&rdquo;</p>
      <div className="testimonial-outcome">{t.outcome}</div>
    </blockquote>
  );
}

export default function ReviewCarousel() {
  const [paused, setPaused] = useState(false);
  const [hoveredKey, setHoveredKey] = useState<string | null>(null);

  const duplicated = [...TESTIMONIALS, ...TESTIMONIALS];

  return (
    <div className="testimonial-carousel-wrap">
      <div
        className={`testimonial-marquee-track${paused ? " testimonial-marquee-track--paused" : ""}`}
        role="list"
        aria-label="Graduate reviews"
      >
        {duplicated.map((t, i) => {
          const key = `${t.name}-${i}`;
          return (
            <TestimonialCard
              key={key}
              t={t}
              isHovered={hoveredKey === key}
              onEnter={() => {
                setPaused(true);
                setHoveredKey(key);
              }}
              onLeave={() => {
                setPaused(false);
                setHoveredKey(null);
              }}
            />
          );
        })}
      </div>
    </div>
  );
}
