"use client";

import { useEffect } from "react";
import { SECTION_ENTER_ORDER } from "@/lib/cards";
import { useScrollToSection } from "./ScrollContext";
import { layout } from "@/lib/tokens";

function shouldSkipEnterNavigation(): boolean {
  const el = document.activeElement;
  if (!el || !(el instanceof HTMLElement)) return false;

  const tag = el.tagName;
  if (tag === "INPUT" || tag === "TEXTAREA" || tag === "SELECT") return true;
  if (el.isContentEditable) return true;

  return false;
}

function getCurrentSectionIndex(): number {
  const anchor = window.scrollY + layout.headerOffset + 1;
  let currentIndex = 0;

  for (let i = 0; i < SECTION_ENTER_ORDER.length; i++) {
    const el = document.getElementById(SECTION_ENTER_ORDER[i]);
    if (!el) continue;

    const top = el.getBoundingClientRect().top + window.scrollY;
    if (top <= anchor) {
      currentIndex = i;
    }
  }

  return currentIndex;
}

export function navigateToNextSection(
  scrollToSection: (slug: string, smooth?: boolean) => void
): void {
  const currentIndex = getCurrentSectionIndex();
  const isLast = currentIndex >= SECTION_ENTER_ORDER.length - 1;
  const nextTarget = isLast ? "cardone" : SECTION_ENTER_ORDER[currentIndex + 1];

  scrollToSection(nextTarget);
}

export function useSectionEnterNavigation() {
  const scrollToSection = useScrollToSection();

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key !== "Enter") return;
      if (e.shiftKey || e.ctrlKey || e.metaKey || e.altKey) return;
      if (shouldSkipEnterNavigation()) return;

      e.preventDefault();
      navigateToNextSection(scrollToSection);
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [scrollToSection]);
}
