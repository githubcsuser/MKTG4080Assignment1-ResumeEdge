"use client";

import { useEffect, useCallback, useRef } from "react";
import { usePathname } from "next/navigation";
import { CARDS, getCardBySlug, getCardById } from "@/lib/cards";
import { layout } from "@/lib/tokens";

/** Shared flag — observer ignores updates while programmatic scroll is active */
export const isScrollingProgrammatically = { current: false };

function getSectionTop(el: HTMLElement): number {
  const top = el.getBoundingClientRect().top + window.scrollY;
  return top - layout.headerOffset;
}

export function useCardScroll() {
  const pathname = usePathname();
  const activeSlugRef = useRef<string>("cardone");
  const initialScrollDoneRef = useRef(false);

  const scrollToSection = useCallback((target: string, smooth = true) => {
    const card = getCardBySlug(target);
    const el = card
      ? document.getElementById(card.id)
      : document.getElementById(target);

    if (!el) return;

    isScrollingProgrammatically.current = true;

    const parentCard =
      card ??
      (() => {
        const section = el.closest("section[data-card]") as HTMLElement | null;
        return section ? getCardById(section.id) : undefined;
      })();

    if (parentCard) {
      activeSlugRef.current = parentCard.slug;

      const newPath = `/${parentCard.slug}`;
      if (window.location.pathname !== newPath) {
        window.history.replaceState(null, "", newPath);
      }
    }

    const top = getSectionTop(el);
    window.scrollTo({ top, behavior: smooth ? "smooth" : "auto" });

    const release = () => {
      isScrollingProgrammatically.current = false;
    };

    if (smooth) {
      let settled = 0;
      const onScroll = () => {
        settled = 0;
      };
      const checkSettled = () => {
        settled += 1;
        if (settled >= 3) {
          window.removeEventListener("scroll", onScroll);
          release();
        } else {
          requestAnimationFrame(checkSettled);
        }
      };
      window.addEventListener("scroll", onScroll, { passive: true });
      setTimeout(() => {
        window.removeEventListener("scroll", onScroll);
        release();
      }, 1200);
      requestAnimationFrame(checkSettled);
    } else {
      setTimeout(release, 100);
    }
  }, []);

  /* Initial load only — scroll to URL section once, never on replaceState */
  useEffect(() => {
    if (initialScrollDoneRef.current) return;
    initialScrollDoneRef.current = true;

    const slug = pathname.replace(/^\//, "") || "cardone";
    if (getCardBySlug(slug)) {
      requestAnimationFrame(() => scrollToSection(slug, false));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  /* Passive observer — URL sync only, never scrolls */
  useEffect(() => {
    const sections = CARDS.map((c) => document.getElementById(c.id)).filter(
      Boolean
    ) as HTMLElement[];

    if (!sections.length) return;

    let debounceTimer: ReturnType<typeof setTimeout> | null = null;

    const observer = new IntersectionObserver(
      (entries) => {
        if (isScrollingProgrammatically.current) return;

        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (!visible.length) return;

        const card = getCardById(visible[0].target.id);
        if (!card || card.slug === activeSlugRef.current) return;

        if (debounceTimer) clearTimeout(debounceTimer);

        debounceTimer = setTimeout(() => {
          if (isScrollingProgrammatically.current) return;

          activeSlugRef.current = card.slug;

          const newPath = `/${card.slug}`;
          if (window.location.pathname !== newPath) {
            window.history.replaceState(null, "", newPath);
          }
        }, 80);
      },
      {
        rootMargin: `-${layout.headerOffset}px 0px -50% 0px`,
        threshold: [0.2, 0.4, 0.6],
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      observer.disconnect();
      if (debounceTimer) clearTimeout(debounceTimer);
    };
  }, []);

  return { scrollToSection };
}
