"use client";

import { createContext, useContext } from "react";

export type ScrollToSectionFn = (slug: string, smooth?: boolean) => void;

const ScrollContext = createContext<ScrollToSectionFn | null>(null);

export function ScrollProvider({
  scrollToSection,
  children,
}: {
  scrollToSection: ScrollToSectionFn;
  children: React.ReactNode;
}) {
  return (
    <ScrollContext.Provider value={scrollToSection}>
      {children}
    </ScrollContext.Provider>
  );
}

export function useScrollToSection(): ScrollToSectionFn {
  const fn = useContext(ScrollContext);
  if (!fn) {
    return (slug: string) => {
      const el = document.getElementById(slug);
      el?.scrollIntoView({ behavior: "smooth", block: "start" });
    };
  }
  return fn;
}
