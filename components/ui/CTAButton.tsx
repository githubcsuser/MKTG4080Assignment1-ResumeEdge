"use client";

import { useScrollToSection } from "@/components/canvas/ScrollContext";
import { getCardBySlug } from "@/lib/cards";

interface CTAButtonProps {
  href?: string;
  onClick?: () => void;
  children: React.ReactNode;
  type?: "button" | "submit";
  className?: string;
}

function isInternalHref(href: string) {
  const slug = href.replace(/^\//, "");
  return Boolean(getCardBySlug(slug) || slug.startsWith("section-") || slug === "lead-form");
}

export default function CTAButton({
  href,
  onClick,
  children,
  type = "button",
  className = "",
}: CTAButtonProps) {
  const scrollToSection = useScrollToSection();

  const base =
    "inline-flex items-center justify-center rounded-xl px-8 py-3.5 text-base font-bold text-white bg-orange hover:brightness-105 active:scale-[0.98] transition-all cursor-pointer border-none shadow-md shadow-orange/25";

  function handleClick(e: React.MouseEvent) {
    if (href && isInternalHref(href)) {
      e.preventDefault();
      scrollToSection(href.replace(/^\//, ""));
      return;
    }
    onClick?.();
  }

  if (href) {
    if (isInternalHref(href)) {
      return (
        <a href={href} onClick={handleClick} className={`${base} no-underline ${className}`}>
          {children}
        </a>
      );
    }
    return (
      <a href={href} className={`${base} no-underline ${className}`}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className={`${base} ${className}`}>
      {children}
    </button>
  );
}
