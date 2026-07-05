export type CardId =
  | "cardone"
  | "cardtwo"
  | "cardthree"
  | "cardfour"
  | "cardfive";

export interface CardMeta {
  id: CardId;
  slug: string;
  label: string;
  subtitle: string;
  bgClass: string;
}

export const CARDS: CardMeta[] = [
  {
    id: "cardone",
    slug: "cardone",
    label: "Product",
    subtitle: "Hero",
    bgClass: "section-hero",
  },
  {
    id: "cardtwo",
    slug: "cardtwo",
    label: "Product Flow",
    subtitle: "Problem through Benefits",
    bgClass: "section-discovery",
  },
  {
    id: "cardfour",
    slug: "cardfour",
    label: "Pricing",
    subtitle: "Plans",
    bgClass: "section-pricing",
  },
  {
    id: "cardthree",
    slug: "cardthree",
    label: "Reviews",
    subtitle: "Testimonials & Trust",
    bgClass: "section-trust",
  },
  {
    id: "cardfive",
    slug: "cardfive",
    label: "Company",
    subtitle: "CTA & Footer",
    bgClass: "section-footer",
  },
];

export const CARD_MAP = Object.fromEntries(
  CARDS.map((c) => [c.slug, c])
) as Record<CardId, CardMeta>;

export const NAV_ITEMS = [
  { label: "Home", target: "cardone" },
  { label: "Why Us", target: "section-problem" },
  { label: "How It Works", target: "section-how-it-works" },
  { label: "Compare", target: "section-before-after" },
  { label: "Benefits", target: "section-benefits" },
  { label: "Pricing", target: "cardfour" },
  { label: "Testimonials", target: "cardthree" },
  { label: "Try Free", target: "lead-form", isCta: true },
] as const;

export const FOOTER_NAV_ITEMS = NAV_ITEMS.filter(
  (item) => !("isCta" in item && item.isCta)
);

/** Keyboard Enter navigation order — mirrors NAV_ITEMS targets (excludes footer). */
export const SECTION_ENTER_ORDER = NAV_ITEMS.map((item) => item.target);

export const LAST_SECTION_ENTER_TARGET =
  SECTION_ENTER_ORDER[SECTION_ENTER_ORDER.length - 1];

/** Explore footer links split into two columns (nav order, column-first). */
export const FOOTER_EXPLORE_COLUMNS = [
  FOOTER_NAV_ITEMS.slice(0, 4),
  FOOTER_NAV_ITEMS.slice(4),
] as const;

export function getCardBySlug(slug: string): CardMeta | undefined {
  return CARD_MAP[slug as CardId];
}

export function getCardById(id: string): CardMeta | undefined {
  return CARDS.find((c) => c.id === id);
}
