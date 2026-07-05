"use client";

import { createContext, useContext } from "react";

export type ScrollToSectionFn = (slug: string, smooth?: boolean) => void;

type ScrollContextValue = {
  scrollToSection: ScrollToSectionFn;
  activeSection: string;
};

const ScrollContext = createContext<ScrollContextValue | null>(null);

export function ScrollProvider({
  scrollToSection,
  activeSection,
  children,
}: {
  scrollToSection: ScrollToSectionFn;
  activeSection: string;
  children: React.ReactNode;
}) {
  return (
    <ScrollContext.Provider value={{ scrollToSection, activeSection }}>
      {children}
    </ScrollContext.Provider>
  );
}

export function useScrollToSection(): ScrollToSectionFn {
  const ctx = useContext(ScrollContext);
  if (!ctx) {
    return (slug: string) => {
      const el = document.getElementById(slug);
      el?.scrollIntoView({ behavior: "smooth", block: "start" });
    };
  }
  return ctx.scrollToSection;
}

export function useActiveSection(): string {
  const ctx = useContext(ScrollContext);
  return ctx?.activeSection ?? "cardone";
}
