# ResumeEdge — Memory Bank

Project feedback history and design decisions. Reference this before making layout, copy, or component changes.

---

## Brand Guidelines

| Rule | Detail |
|------|--------|
| **Name** | **ResumeEdge** — never "RESUMEEDGE AI" or all-caps variants |
| **Voice** | Use **ResumeEdge** (product name) in marketing copy — not "we" / "our" for the company or product. First-person user quotes (testimonials) and educational disclaimer third-person text are exempt. |
| **Wordmark** | Letter-based: **Resume** + **Edge** (Edge in brand green). No document/file icon in the logo |
| **Favicon** | White **R** on navy blue background (`app/icon.svg`) |
| **Colors** | Deep navy, white, electric green accents; orange CTA only |
| **References** | Design quality bar: **MyPerfectResume.com**, Teal, Rezi, Novoresume, Linear |

---

## Assignment Section Structure (scroll order)

1. **Hero** — bold headline, speed + tailoring subhead (under 2 min only — no 24h), "Try It Free" CTA, resume mockup visual (`cardone`)
2. **Problem** — dedicated 3-column pain points (`section-problem` in `cardtwo`)
3. **How It Works** — horizontal 3-step row: Upload (job description + resume) → AI Analysis (under 2 min) → Download tailored resume with rewritten bullets + PDF (under 2 min) (`section-how-it-works`)
4. **Before & After** — side-by-side weak vs strong bullets, red/green tint (`section-before-after`)
5. **Benefits** — 4 outcome-focused items with green checkmarks (`section-benefits`)
6. **Pricing** — Free Scan / Resume Rewrite $19 / Job Hunt Pack $39 (`cardfour`)
7. **Testimonials** — horizontal carousel, auto-scroll, pause + zoom on hover (`cardthree`)
8. **Trust badges** — "As seen in" + real career-media wordmarks (Forbes, Business Insider, The Muse, Glassdoor, LinkedIn), static row (`PressLogos` in `cardthree`)
9. **Lead form** — conversion zone with "Try It Free" form (`#lead-form`, after `cardthree`)
10. **CTA strip** — full-width green accent before footer, "Try It Free" → `#lead-form` (`cardfive`)
11. **Footer** — links, social SVGs, copyright, educational disclaimer (`cardfive`)

Social proof (testimonials + press) sits after pricing and before the lead form. Hero uses narrative copy for pain points (no pill chips); Problem section is always separate.

---

## Layout Rules

- **Vertical full-bleed sections** — alternating navy → white → light grey (`#f1f5f9`) backgrounds; scroll-snap viewport sections on nav targets. **Scroll order pattern** (each row must contrast with its neighbor):
  | # | Section | Background |
  |---|---------|------------|
  | 1 | Hero | Navy gradient (`section-hero`) |
  | 2 | Problem | White `#ffffff` |
  | 3 | How It Works | Light grey `#f1f5f9` |
  | 4 | Before & After | White `#ffffff` |
  | 5 | Benefits | Light grey `#f1f5f9` |
  | 6 | Pricing | White `#ffffff` — not navy (too harsh) and not grey (matches Benefits) |
  | 7 | Testimonials | White → `#f8fafc` gradient (`section-trust`) |
  | 8 | Lead form | Light grey gradient (`section-block--form`) |
  | 9 | Footer | Navy gradient (`section-footer`) |
  Pricing decorative blob: small green corner accent (bottom-left), not full-bleed tint — Benefits uses navy blob on the right.
- **No floating card frames** on a navy canvas; use full-width section backgrounds
- **Unified container**: all sections use `.section-container` — stepped `--container-max` via CSS variable (`72rem` default → `80rem` at 1280px → `88rem` at 1536px → `96rem` at 1920px+), `px-6 lg:px-8` (2.5rem at 1536px+); nav bar uses same container
- **Large-screen responsive scaling (xl+)**: On wide viewports (1280px / 1536px / 1920px+), content scales up proportionally — do not leave tiny elements in empty margins. Increase `--container-max`, typography caps (`clamp()` on hero headline + section titles), hero grid gap + mockup scale, problem card padding, before/after showcase + resume mockups, pricing card padding/gap, conversion zone, footer grid gap. Preserve viewport vertical centering, Benefits→Pricing flush (no peek), mobile stack, and compact footer height.
- **Vertical centering (viewport sections)**: outer `.viewport-section` fills `min-height: calc(100svh - var(--header-offset))` on tablet/desktop; `.section-container` is a flex column with `justify-content: center` so **heading + main content + `.section-bottom-cta` center as one group**. Do not pin the CTA with `mt-auto` on the outer section. Mobile (`max-width: 767px`): `min-height: auto`, container `justify-content: flex-start`. **Pricing** (`viewport-section--pricing`): `min-height: auto`, flush after Benefits — no pricing peek. **Form**: keeps viewport min-height with centered conversion zone. Symmetric section-block padding (48px / 64px lg); no asymmetric compare padding.
- **Alignment**: hero split layout (left copy, right visual); all other sections left-align headings, leads, and grids to container left edge; press logos remain centered
- **Typography scale**: section titles clamp to 56px desktop (was 48px); hero headline clamp to 72px (was 64px); leads 20–22px; body scales 18→20px at xl+
- **How it works**: clean horizontal step row — no cramped side-by-side demo panel
- **Before/After**: distinct section, separate from How It Works
- **Educational disclaimer**: full-width strip at the very bottom of the page
- **Fictional content disclaimer**: required on the site

---

## Copy Rules

- **Short, sharp copy** — no buzzwords, no em-dashes
- **Body text**: 18px, strong contrast; never black text on navy
- **Paragraphs**: left-aligned, not justified
- **Tone**: confident, encouraging, modern — target anxious fresh grads 21–26
- **Brand voice**: refer to the product as **ResumeEdge**, not "we" or "our" (e.g. "ResumeEdge shows…", "ResumeEdge will contact you…"). Testimonial first-person quotes and educational disclaimer copy are exempt.
- **Hero copy stack** (H1 → subhead → body → CTA → trust note): no pain hook line; "silence" appears only in the H1. Subhead = AI value + speed (plain English, no ATS/keyword jargon). Body = workflow (upload JD, what to change, rewrite). Subhead and body must complement, not repeat. No `hero-narrative` (removed Jul 2026). Trust reassurance = muted `.hero-trust-note` beside or below CTA — never a pill/chip badge.
  - **H1**: *Your resume deserves more than silence.*
  - **Subhead**: *ResumeEdge AI matches your resume to any job posting in under 2 minutes.*
  - **Body**: *Upload your job description. ResumeEdge shows what to change and rewrites your experience so it fits the role.*
  - **Hero stats** (below CTA): 2 min · To match a job post | 89% · Avg resume fit | Free · To start — plain English; no "keyword match" or ATS jargon
- **Section labels**: Benefits, Pricing (not Features / Pick a plan)
- **One primary CTA**: **"Try It Free"** — hero, CTA strip, form submit only
- **Press logos**: real well-known career/resume brands (Forbes, Business Insider, The Muse, Glassdoor, LinkedIn) — educational wordmark SVGs, static row, NOT orbit animation
- **Job market tips**: checkbox on lead form (**default checked**)

### Time claims (single speed — AI delivery)

| Claim | Use for |
|-------|---------|
| **under 2 minutes** | Hero subhead, free scan, posting-fit benefit, How It Works steps 2–3, Free Scan tier, Resume Rewrite rewrite + download |

- Beta product is AI-focused: scan, rewrite, and download all happen in **under 2 minutes**. No human review or 24-hour delivery claims.
- Do not say "30 seconds" or "one business day."
- **Hero, footer, benefits, pricing, and How It Works** must stay consistent — no 24-hour delivery anywhere.
- Testimonial quotes may say "in minutes" colloquially; marketing copy uses **under 2 minutes** only.

### Pricing tier bullets (`PricingCircles.tsx`)

Plain English for anxious recent grads. Short, sharp, no buzzwords, no em-dashes. Avoid jargon: no "ATS score", "keyword match", "keyword gaps", "optimization", "per posting", or "priority support" in tier bullets or hero stats.

| Tier | Bullets |
|------|---------|
| **Free Scan** | How well your resume matches one job · Results in under 2 minutes · Missing words recruiters look for · 3 ways to improve your bullet points |
| **Resume Rewrite** | Everything in Free Scan · Full resume rewrite for each job you upload · Rewritten bullets ready in under 2 minutes · Download a ready-to-send PDF |
| **Job Hunt Pack** | Everything in Resume Rewrite · Cover letter written for that job · Better LinkedIn headline · Get help faster |

### Problem section pain points (`PAIN_POINTS` in `CardThreeDiscovery`)

Three beats of one job-search frustration arc for recent grads (21–26). Stat-led parallel titles, 2 short sentences per body. Plain English, no em-dashes. Prefer round stats ("Most", "500+") over precise percentages; middle card = volume + ATS/keyword filter only (no no-feedback angle); right card = ghosting + never know what went wrong (not another filter stat). Stats are plausible marketing demo numbers (educational disclaimer applies).

| # | Title | Body | Beat |
|---|-------|------|------|
| 1 | Most new grads send one resume everywhere | Same PDF for every posting. Recruiters spot it in seconds. | Same resume everywhere |
| 2 | 500+ applicants per entry-level role | Software filters resumes before a human reads them. If yours does not match the posting, it never reaches the hiring manager. | Competition + ATS filter |
| 3 | Apply for weeks. Hear nothing. | You send application after application and never hear back. No one tells you what went wrong or how to fix it. | Ghosting + no feedback |

### How It Works steps (`STEPS` in `CardThreeDiscovery`)

Job description before resume — matches hero body and lead-form copy. Step descriptions: action-oriented plain English; no "ATS score" or "keyword match" jargon.

| Step | Title | Description |
|------|-------|-------------|
| 1 | Upload | Upload your job description and resume. |
| 2 | AI Analysis | See what to fix so your resume fits the role. Takes under 2 minutes. |
| 3 | Download tailored resume | Get rewritten bullets and a ready-to-send PDF in under 2 minutes. |

### Benefits cards (`BENEFITS` in `FeatureGrid.tsx`)

Four outcome-focused items with green checkmarks. Titles: short benefit headlines (stats OK). Descriptions: action-oriented plain English; no "ATS", "keyword match", or passive noun phrases. Align with hero / How It Works voice.

| # | Title | Description |
|---|-------|-------------|
| 1 | 3x more interviews | Tailor each application and hear back three times more often. |
| 2 | Fits the job posting | See how well your resume fits any job posting. Under 2 minutes. |
| 3 | Bullets that land | Get experience rewritten in plain language hiring managers scan for. |
| 4 | Rewrite for each role | Upload a job description. Every version fits that role, not a generic template. |

---

## Component Specs

### Navigation
- **8 items**: Home, Why Us, How It Works, Compare, Benefits, Pricing, Testimonials, Try Free
- **Why Us** → `#section-problem` (Problem section; heading unchanged)
- **No Demo** in nav or footer
- **Labels**: product-style menu (not assignment section names); footer Explore links mirror nav via `FOOTER_NAV_ITEMS`

### Review carousel (`ReviewCarousel`)
- Infinite auto-scroll right to left; pause + zoom on hover
- **10 reviews** with international universities: CUHK, NUS, HKU, LSE, UCL, NTU, Toronto, Melbourne, Stanford, Michigan
- **Photorealistic undergrad photos** — ages 20–24, casual student look (`public/avatars/reviewer-XX.webp`)
- **Ethnicity matched to name** in `lib/reviewerPhotos.ts`
- Regenerate via `python3 scripts/generate_avatars.py`

### Trust / press (`PressLogos`)
- Static horizontal logo row under testimonials
- Real career-media brand wordmarks (Forbes, Business Insider, The Muse, Glassdoor, LinkedIn) — educational assignment SVGs, not official trademark assets

### Lead form (`LeadFormSection`, `#lead-form`)
- **Heading**: *Match your first resume in under 2 minutes*
- **Section-lead**: *Upload your job description and resume. In under 2 minutes, AI tells you what to fix so you fit the role. No card required.* — plain English, AI obvious, no ATS/keyword jargon; job description before resume (matches hero body + How It Works step 1)
- **Conversion benefits** (bullets): How well your resume fits that job · Missing words recruiters look for · Better bullet points for that role
- **Email + Password** registration (no full name field)
- **Job market tips** checkbox — **checked by default**, optional
- **Terms and conditions** checkbox — **required** to submit ("I agree to the terms and conditions")
- Primary submit: orange **"Register to start"** (`CTAButton`)
- Secondary **"Register by Gmail"** — outline button below submit with Google icon; UI-only demo (no OAuth). Click opens shared `ComingSoonModal` (*To be implemented soon.*).
- Labels use `.form-field` with **4px gap** above inputs (`globals.css`)
- **Success state** (after submit): heading **"You're all set!"**; body thanks for signing up, states product is in beta, promises contact at launch — **no ATS score or delivery claims**. Copy: *Thanks for signing up. ResumeEdge is still in beta. ResumeEdge will contact you at launch.*

### Footer (`CardFiveDestination`, `.footer-grid`)
- **Layout**: 5 columns desktop — Brand | Explore | Company | Legal | Contact (Company and Legal are sibling columns, top-aligned headings — not stacked in one cell); tablet 2-col (brand full-width, then pairs); mobile single stack. Grid spans full container width on lg+ with `repeat(5, max-content)` + `justify-content: space-between` so inter-column spacing is equal between headings (free width goes into gaps, not empty space inside `1fr` tracks — avoids Company↔Legal looking twice as wide as Brand↔Explore). Brand content capped ~280px; Contact content capped ~260px. Explore uses `.footer-explore-cols` (two independent flex lists, 4+3 split). Minimum `column-gap` via `clamp(1.25rem, 0.5rem + 1.5vw, 2rem)`; explore inner gap uses `clamp(1rem, 0.5rem + 1vw, 1.5rem)`. Grid has subtle bottom divider; meta row (copyright only) above disclaimer bar.
- **Brand column**: Logo, tagline (*Upload a job description. See what to fix and get a tailored resume in under 2 minutes.* — no 24h), green trust line (*Built for recent grads.*). No newsletter signup in footer (registration lives in `#lead-form`).
- **Explore**: two independent flex columns via `FOOTER_EXPLORE_COLUMNS` (4+3 split of `FOOTER_NAV_ITEMS`, mirrors nav order column-first; no Try Free). Desktop side-by-side at lg+; mobile stacks both lists. Avoids single-list CSS grid row coupling (tall left-col label no longer stretches gap before right-col links).
- **Company** (`.footer-company-col`): About, FAQ, Help Center — `href="#"` placeholders; open shared `ComingSoonModal`.
- **Legal** (`.footer-legal-col`): Privacy Policy, Terms of Service, Cookie Policy — `href="#"` placeholders; open shared `ComingSoonModal`.
- **Contact**: bordered block — intro line, email, location, social SVG icons (LinkedIn, X, Instagram) as `button type="button"`; each opens shared `ComingSoonModal`.
- **Explore** nav links (Home, Why Us, etc.) keep real scroll routes — no modal.
- **Meta row**: copyright only; legal links live in the Legal column (single source, no duplicate meta nav).
- **Disclaimer**: full-width strip at very bottom (unchanged).
- Keep footer **compact**; no CTA or signup form in footer (lead capture is `#lead-form` only).
- Social media **SVG logos** (brand-appropriate)

---

## Never Do

| Avoid | Why |
|-------|-----|
| Diagonal canvas with overlapping cards | Unreadable; user rejected early layout |
| Rotating orbit badges | Distracting, gimmicky |
| Generic Lucide icons everywhere | Looks template-y |
| Multiple competing CTAs / orange buttons | One clear "Try It Free" |
| Random pain-points red callout box | Use dedicated Problem section instead |
| Pill chips, pill trust badges, or extra pain lines in hero | Hero is H1 → subhead → body → CTA + muted trust note only; Problem section covers pain |
| Adult / corporate headshots for reviews | Must look like undergrads (20–24) |
| Handshake / WayUp press logos | Meaningless to target users; use recognizable career brands instead |
| Merging Before/After into How It Works | Assignment requires distinct sections |
| Side-by-side cramped How It Works demo | Use clean horizontal step row |

---

## Technical Notes

- **ComingSoonModal** (`components/ui/ComingSoonModal.tsx`): reusable dialog — message *To be implemented soon.*, `role="dialog"`, `aria-modal`, dismiss via OK, backdrop click, or Escape. Hook: `useComingSoonModal()` → `{ isOpen, open, close }`. Used by `LeadForm` (Gmail register) and `CardFiveDestination` (Company, Legal, social icons).
- **Stack**: Next.js 15, React 19, Tailwind CSS 4, TypeScript
- **Routing**: Path anchors `/cardone`–`/cardfive` via `app/[[...section]]/page.tsx`
- **Card mapping**: cardone=Hero, cardtwo=Problem/HowItWorks/BeforeAfter/Benefits, cardfour=Pricing, cardthree=Reviews+Trust, lead-form=Sign Up (after cardthree), cardfive=CTA+Footer
- **Review images**: Local WebP in `public/avatars/`; Unsplash IDs in `scripts/generate_avatars.py`
- **Dev HMR**: `npm run dev` → `next dev --turbo`

---

## Dev Server Workflow

- After any code changes that affect the UI, **automatically restart the dev server** (kill port 3000 + `npm run dev`) without asking the user.
- Do **not** tell the user to restart `npm run dev` — just do it.
- HMR handles most hot updates, but the user prefers a **full restart after agent changes**.

---

## Design Evolution (timeline)

1. **Initial**: Diagonal canvas, 5 overlapping cards → rejected
2. **Pivot**: Vertical full-bleed sections
3. **Assignment redesign**: MyPerfectResume-quality patterns; 10 distinct sections; Problem + Before/After split out; static press logos; CTA strip; nav realigned
