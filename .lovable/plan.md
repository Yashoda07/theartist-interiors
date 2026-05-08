## Plan: The Artist Interiors — Design & UX Overhaul

Targeted edits only — no full rebuilds. Section order becomes: Home → About → Experience → Skills & Services → Portfolio → Testimonials → Contact (footer).

---

### 1. Global Typography & Performance
- Audit fonts: keep `Cormorant Garamond` (display) + `DM Sans` (body). Remove any handwritten/script fallbacks. Ensure headings use display font, body uses DM Sans, uppercase labels for tags.
- Hierarchy: section headings `text-display-lg`, subheadings `text-xl md:text-2xl` muted, labels small uppercase.
- Keep beige/brown palette as-is.
- Subtle hover: `hover-lift`, scale 1.02, 200ms easings only.

### 2. Hero Section (`HeroSection.tsx`)
- Headline "We Design your Desires" — replace italic Cormorant with cleaner styling: keep Cormorant but remove italic on "your Desires", use `font-light tracking-tight` and a single weight for professional feel. Drop the muted "We"/"your" color split (cleaner, single-tone with accent on key word).
- Logo asset: replace `src/assets/logo.png` with new URL `https://i.postimg.cc/gjH2ykr5/artist-logo-zoomed.png`. Ensure background container in About uses warm gradient (already done) — confirm no white/blue flash.

### 3. About Section (`AboutSection.tsx`)
- Subheading "Crafting Spaces, Building Dreams" — switch to clean professional style (Cormorant light, no script).
- Add small line "BSc in Interior Designing" right under the subheading (move from bottom).
- Layout: circular image container on right (desktop), `rounded-full` medium size (~280px). Profile pic shown by default; click toggles to logo with smooth crossfade/flip.
- Wrap description text around the circle using CSS `shape-outside: circle()` with floated image on desktop. Mobile: stacked.

### 4. Experience (`ExperienceSection.tsx`)
- Add one extra bullet point to each experience entry (except last). Fix vertical timeline alignment + spacing.

### 5. Skills & Services — MERGED
- Delete `SkillsSection.tsx` content; rebuild as combined `SkillsServicesSection.tsx` (or repurpose existing Services).
- Header: "Skills and Services Provided" (display-lg) + "Areas of mastery and what we offer" (subheading).
- Cards: reuse existing Services card design exactly, equal-size grid. Three cards:
  1. Interior Design
  2. 3D Visualization
  3. Floor Planning (replaces Site Execution)
- Each card on click → navigates to `/portfolio?category=<cat>` (or scrolls Portfolio with filter).
- Remove "Let's design your home" CTA.
- Add **moving skills band**: horizontal marquee using CSS `@keyframes` translateX. Show 5 items desktop/tablet, 3 mobile (via overflow window). Skills: Space Planning, Creative Thinking, Strategic Communication, Material Selection, Project Coordination, Color Theory, Vendor Management. Subtle bg-card strip, uppercase tracked DM Sans.

### 6. Portfolio (`PortfolioSection.tsx`)
- Convert grid to **Pinterest-style masonry** using CSS `columns-2 md:columns-3 lg:columns-4` with `break-inside-avoid` items.
- Keep 5–8 demo items mixing images + 1–2 videos. Mixed natural aspect ratios (no forced height).
- "View Full Portfolio" link to `/portfolio` page remains.

### 7. Testimonials (`TestimonialsSection.tsx`) — Dual Mode
- Header: "Testimonials" + subheading "Verified results from real clients".
- Toggle buttons: **Transformation & Reviews** (default) | **Client Feedback**.
- **Mode A — Transformation:** Card with before/after images side-by-side, name • location, project title, highlight line, full quote, 5★. Carousel: mobile swipe (touch), desktop "Next Client →" button.
- **Mode B — Client Feedback:** Same card layout but video instead of before/after. Muted autoplay, click toggles sound. Same metadata.
- Progress indicator "2 / 5" below cards.
- Use placeholder images from existing portfolio assets and a sample video URL for demo.

### 8. Contact / Footer (`Footer.tsx`)
- Restructure as clean responsive footer: 3 columns desktop (Brand | Get in Touch | Social), stacked mobile.
- Email: use `break-all` + smaller font so long text doesn't break layout. Truncate with full link.
- Social row: Phone/WhatsApp, Email, Instagram, LinkedIn, Pinterest (add Pinterest icon link).
- Proper spacing, accent dividers.

### 9. Navigation Alignment
- Confirm `scroll-padding-top` (3.5rem mobile / 5rem desktop) matches actual navbar height. Apply `scroll-margin-top` per section identically. Remove any extra `pt-*` that adds gap. Section starts flush below header on click.

### 10. Index page order update
- Update `Index.tsx` order: Hero → About → Experience → SkillsServices → Portfolio → Testimonials → Footer.
- Update `Navbar.tsx` links accordingly (single "Skills & Services" item instead of separate ones).

---

### Technical Notes
- Use CSS `shape-outside` for text wrap (desktop only with media query).
- Marquee: pure CSS `@keyframes scroll` + duplicated track for seamless loop, pause on hover.
- Masonry: CSS columns (lighter than JS lib).
- Testimonials state: `useState` for mode + index; `framer-motion` for slide transitions (already installed).
- Logo download via curl into `src/assets/logo.png`.
- All animations ≤ 300ms, GPU-friendly transforms.

### Files to Edit
- `src/assets/logo.png` (replace)
- `src/components/HeroSection.tsx`
- `src/components/AboutSection.tsx`
- `src/components/ExperienceSection.tsx`
- `src/components/SkillsSection.tsx` → replaced with merged SkillsServicesSection
- `src/components/ServicesSection.tsx` → removed from Index
- `src/components/PortfolioSection.tsx`
- `src/components/TestimonialsSection.tsx`
- `src/components/Footer.tsx`
- `src/components/Navbar.tsx`
- `src/pages/Index.tsx`
- `src/index.css` (marquee keyframes, shape-outside helper, nav offsets verify)
