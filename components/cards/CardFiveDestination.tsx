"use client";

import { useScrollToSection } from "@/components/canvas/ScrollContext";
import { FOOTER_EXPLORE_COLUMNS, FOOTER_NAV_ITEMS } from "@/lib/cards";
import Logo from "@/components/brand/Logo";
import ComingSoonModal, { useComingSoonModal } from "@/components/ui/ComingSoonModal";

function LinkedInIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 114.126 0 2.063 2.063 0 01-2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function XIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
    </svg>
  );
}

const SOCIAL_LINKS = [
  { label: "LinkedIn", Icon: LinkedInIcon },
  { label: "X (Twitter)", Icon: XIcon },
  { label: "Instagram", Icon: InstagramIcon },
] as const;

const COMPANY_LINKS = ["About", "FAQ", "Help Center"] as const;

const LEGAL_LINKS = [
  "Privacy Policy",
  "Terms of Service",
  "Cookie Policy",
] as const;

function FooterNavLink({
  link,
  scrollToSection,
}: {
  link: (typeof FOOTER_NAV_ITEMS)[number];
  scrollToSection: (target: string) => void;
}) {
  return (
    <a
      href={`/${link.target}`}
      onClick={(e) => {
        e.preventDefault();
        scrollToSection(link.target);
      }}
      className="footer-link"
    >
      {link.label}
    </a>
  );
}

function FooterPlaceholderLink({
  label,
  onComingSoon,
}: {
  label: string;
  onComingSoon: () => void;
}) {
  return (
    <a
      href="#"
      onClick={(e) => {
        e.preventDefault();
        onComingSoon();
      }}
      className="footer-link"
    >
      {label}
    </a>
  );
}

export default function CardFiveDestination() {
  const scrollToSection = useScrollToSection();
  const { isOpen, open, close } = useComingSoonModal();

  return (
    <footer>
      <div className="footer-grid">
        <div className="footer-brand">
          <Logo size="lg" className="mb-2" />
          <p className="prose-on-dark footer-brand-tagline">
            Upload a job description. See what to fix and get a tailored resume in under 2 minutes.
          </p>
          <p className="footer-trust-line">Built for recent grads.</p>
        </div>

        <div className="footer-links-col">
          <p className="footer-col-heading">Explore</p>
          <div className="footer-explore-cols">
            {FOOTER_EXPLORE_COLUMNS.map((column) => (
              <ul key={column[0]?.label ?? "explore-col"} className="footer-link-list">
                {column.map((link) => (
                  <li key={link.label}>
                    <FooterNavLink link={link} scrollToSection={scrollToSection} />
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>

        <div className="footer-company-col">
          <p className="footer-col-heading">Company</p>
          <ul className="footer-link-list">
            {COMPANY_LINKS.map((label) => (
              <li key={label}>
                <FooterPlaceholderLink label={label} onComingSoon={open} />
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-legal-col">
          <p className="footer-col-heading">Legal</p>
          <ul className="footer-link-list">
            {LEGAL_LINKS.map((label) => (
              <li key={label}>
                <FooterPlaceholderLink label={label} onComingSoon={open} />
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-contact-col">
          <p className="footer-col-heading">Contact</p>
          <div className="footer-contact-block">
            <p className="footer-contact-line footer-contact-line--intro">
              Questions? Reach out anytime.
            </p>
            <p className="footer-contact-line">
              <a href="mailto:support@resumeedge.ai" className="footer-link">
                support@resumeedge.ai
              </a>
            </p>
            <p className="footer-contact-line footer-contact-line--muted">
              San Francisco, CA
            </p>
            <div className="footer-social-row">
              {SOCIAL_LINKS.map(({ label, Icon }) => (
                <button
                  key={label}
                  type="button"
                  onClick={open}
                  aria-label={label}
                  className="social-icon-link"
                >
                  <Icon />
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="footer-meta-row">
        <p className="footer-copyright">© 2026 ResumeEdge. All rights reserved.</p>
      </div>

      <div className="footer-disclaimer-bar">
        <p className="footer-disclaimer">
          Disclaimer: This website is created for educational purposes as part of a
          university assignment. Content, statistics, testimonials, and company
          references are fictional and should not be taken as fact.
        </p>
      </div>

      <ComingSoonModal
        open={isOpen}
        onClose={close}
        titleId="footer-coming-soon-title"
      />
    </footer>
  );
}
