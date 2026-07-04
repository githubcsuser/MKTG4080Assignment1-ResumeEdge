"use client";

import { NAV_ITEMS } from "@/lib/cards";
import { useScrollToSection } from "@/components/canvas/ScrollContext";
import Logo from "@/components/brand/Logo";

export default function TopNav() {
  const scrollToSection = useScrollToSection();

  const navLinks = NAV_ITEMS.filter((item) => !("isCta" in item && item.isCta));
  const ctaItem = NAV_ITEMS.find((item) => "isCta" in item && item.isCta);

  return (
    <header className="site-header fixed top-0 left-0 right-0 z-50">
      <nav
        className="site-header-nav border-b border-white/10"
        aria-label="Main navigation"
      >
        <div className="section-container flex items-center justify-between h-full gap-4 min-w-0 !py-0">
          <a
            href="/cardone"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("cardone");
            }}
            className="no-underline hover:opacity-90 transition-opacity shrink-0"
          >
            <Logo size="sm" />
          </a>

          <ul className="nav-list flex items-center justify-end gap-0.5 md:gap-1 h-full m-0 p-0 list-none min-w-0 flex-1">
            {navLinks.map((item) => (
              <li key={item.label} className="nav-item shrink-0">
                <a
                  href={`/${item.target}`}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(item.target);
                  }}
                  className="nav-link flex items-center h-11 min-h-[44px] px-2.5 md:px-3 text-slate-50 no-underline hover:text-green transition-colors whitespace-nowrap rounded-lg hover:bg-white/5"
                >
                  {item.label}
                </a>
              </li>
            ))}
            {ctaItem && (
              <li className="nav-item shrink-0">
                <a
                  href={`/${ctaItem.target}`}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(ctaItem.target);
                  }}
                  className="nav-link nav-link--cta flex items-center h-11 min-h-[44px] no-underline whitespace-nowrap"
                >
                  {ctaItem.label}
                </a>
              </li>
            )}
          </ul>
        </div>
      </nav>
    </header>
  );
}
