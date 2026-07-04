/** HSB → hex conversions for ResumeEdge design tokens (all spacing multiples of 4px) */

function hsbToHex(h: number, s: number, b: number): string {
  const sat = s / 100;
  const bri = b / 100;
  const c = bri * sat;
  const x = c * (1 - Math.abs(((h / 60) % 2) - 1));
  const m = bri - c;
  let r = 0,
    g = 0,
    bl = 0;
  if (h < 60) {
    r = c;
    g = x;
  } else if (h < 120) {
    r = x;
    g = c;
  } else if (h < 180) {
    g = c;
    bl = x;
  } else if (h < 240) {
    g = x;
    bl = c;
  } else if (h < 300) {
    r = x;
    bl = c;
  } else {
    r = c;
    bl = x;
  }
  const toHex = (n: number) =>
    Math.round((n + m) * 255)
      .toString(16)
      .padStart(2, "0");
  return `#${toHex(r)}${toHex(g)}${toHex(bl)}`;
}

export const colors = {
  navy: hsbToHex(220, 85, 15),
  white: hsbToHex(0, 0, 100),
  black: hsbToHex(0, 0, 8),
  green: hsbToHex(145, 90, 85),
  orange: hsbToHex(28, 95, 95),
  grey60: hsbToHex(0, 0, 92),
  greyLight: hsbToHex(0, 0, 96),
} as const;

export const spacing = {
  1: 4,
  2: 8,
  3: 12,
  4: 16,
  5: 20,
  6: 24,
  8: 32,
  10: 40,
  12: 48,
  16: 64,
  20: 80,
} as const;

export const typography = {
  body: { size: 18, lineHeight: 1.65 },
  subhead: { size: 21, lineHeight: 1.5 },
  h1: { size: 52, lineHeight: 1.1 },
} as const;

export const layout = {
  navHeight: 64,
  headerOffset: 64,
  sectionPaddingY: { mobile: 80, desktop: 96 },
  containerMaxWidth: 1152,
  navTop: 0,
  navZIndex: 50,
} as const;
