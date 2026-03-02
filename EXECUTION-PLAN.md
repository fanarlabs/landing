# Fanar Website — Execution Plan

**Goal:** Build a minimal, premium landing page for Fanar (AI-powered apps company)
**Style:** Dark theme, inspired by [daylst.com](https://daylst.com) — clean scroll experience
**Sections:** Hero + Products + Footer
**Stack:** Next.js (App Router) + Tailwind CSS v4 + shadcn/ui + Framer Motion
**Deploy:** Vercel

---

## Phase 1 — Project Setup

**Goal:** Initialize Next.js project with all dependencies and base configuration.

### Steps

1. Initialize Next.js project with App Router & TypeScript
2. Install dependencies:
   - `tailwindcss` v4 + `@tailwindcss/postcss`
   - `shadcn/ui` (init with dark theme)
   - `framer-motion` (entrance animations)
   - `ogl` (required by LightRays component)
3. Configure Tailwind v4 with custom theme:
   ```css
   @theme {
     --color-gold: #d4a843;
     --color-cyan: #55b5c4;
     --color-blue: #3b82f6;
     --color-daylst: #22c55e;
     --color-tourida: #f97316;
   }
   ```
4. Set up project structure:
   ```
   src/
   ├── app/
   │   ├── layout.tsx        (root layout, fonts, metadata)
   │   ├── page.tsx           (home page — assembles all sections)
   │   └── globals.css        (Tailwind imports + custom theme)
   ├── components/
   │   ├── ui/                (shadcn components)
   │   ├── sections/          (Hero, Products, Footer)
   │   └── backgrounds/       (LightRays component)
   └── public/
       └── images/            (logos — already exist)
   ```
5. Configure fonts (Geist Sans + Geist Mono or Inter)
6. Set up base `layout.tsx` with dark theme (`className="dark"` on `<html>`)
7. Set up base metadata (title, description, Open Graph)
8. Add `.gitignore`, verify dev server runs

### Deliverable
- `npm run dev` works, blank dark page renders, all deps installed

---

## Phase 2 — Hero Section

**Goal:** Full-viewport hero with LightRays background, Fanar branding, and scroll indicator.

### Steps

1. Copy LightRays component from reactbits (JSX + CSS) into `src/components/backgrounds/`
   - Adapt to TypeScript + Next.js (`"use client"` directive)
   - Props: `raysOrigin="top-center"`, `raysColor="#d4a843"` (gold), `raysSpeed=0.5`
2. Build Hero section layout:
   - Full viewport height (`min-h-screen`)
   - Centered content stack (flex column, items-center)
   - LightRays as absolute background layer
3. Hero content (top to bottom):
   - Fanar logo (`/images/fanar-logo-light.png`) — medium size
   - Tagline: **"AI-Powered Apps for Everyday Life"**
   - Subtitle: "Like the lighthouse guiding ships through darkness, Fanar illuminates the path forward with technology that understands and adapts to human needs."
   - CTA button: **"Explore Our Products"** → scrolls to Products section
4. Add scroll indicator at bottom:
   - Thin vertical line + "scroll" label
   - Subtle pulse animation
5. Framer Motion entrance animations:
   - Logo: fade-in (0.3s delay)
   - Tagline: fade-up word-by-word (0.5s delay, 100ms stagger)
   - Subtitle: fade-up (0.8s delay)
   - CTA: fade-up (1.0s delay)

### Design Specs
- Background: `bg-black` with LightRays overlay (gold-tinted)
- Text: `text-white` primary, `text-white/60` secondary
- CTA button: gold background (`bg-gold`), dark text, rounded-full, glow shadow
- Responsive: stack vertically, scale text sizes

### Deliverable
- Hero section renders full screen with animated LightRays and entrance animations

---

## Phase 3 — Products Section

**Goal:** Showcase Daylst and Tourida with product cards.

### Steps

1. Section container with heading:
   - Label: "OUR PRODUCTS" (uppercase, small, tracked, `text-white/40`)
   - Heading: **"Intelligent apps that adapt to you"**
2. Two product cards side by side (grid, stack on mobile):

   **Card: Daylst**
   - Logo: `/images/daylst-logo-light.png`
   - Name: "Daylst"
   - Tagline: "AI-Powered Routine Coach"
   - Status badge: "Live" (green dot + text)
   - 3-4 feature bullets (from BUSINESS.md)
   - CTA: "Visit daylst.com" → external link
   - Accent color: `--color-daylst` (#22c55e)

   **Card: Tourida**
   - Logo: `/images/tourida-logo-light.png`
   - Name: "Tourida"
   - Tagline: "AI Travel Companion"
   - Status badge: "Coming Soon" (orange dot + text)
   - 3-4 feature bullets (from BUSINESS.md)
   - CTA: "Stay Updated" (disabled/muted style)
   - Accent color: `--color-tourida` (#f97316)

3. Card design:
   - `bg-white/5` background with `border border-white/10`
   - Rounded corners (`rounded-2xl`), generous padding
   - Hover: subtle border glow in accent color
4. Framer Motion: cards fade-up on scroll (viewport intersection trigger)

### Design Specs
- Section background: `bg-black` (continuous)
- Cards: glassmorphism style (subtle transparency + border)
- Spacing: `py-24` section padding, `gap-8` between cards
- Responsive: 2-column on desktop, 1-column stacked on mobile

### Deliverable
- Products section with two animated cards, links work

---

## Phase 4 — Footer

**Goal:** Minimal footer with brand, contact links, and social icons.

### Steps

1. Thin divider line (`border-t border-white/10`)
2. Footer layout (flex between or centered):
   - Left: Fanar logo (small) + copyright "2025 Fanar. All rights reserved."
   - Right: Social links (Twitter/X, GitHub, LinkedIn) as icons
   - Center (mobile): email link `hello@fanar.ai`
3. Keep it minimal — 1-2 rows max
4. Links open in new tab (`target="_blank" rel="noopener"`)

### Design Specs
- Background: `bg-black` (continuous)
- Text: `text-white/40` for copyright, `text-white/60` for links
- Padding: `py-8`
- Icons: Lucide React icons (simple, consistent)

### Deliverable
- Footer renders with working social links

---

## Phase 5 — Polish & Responsive

**Goal:** Final visual polish, animations, and responsive testing.

### Steps

1. Smooth scroll behavior (`scroll-behavior: smooth` on html)
2. Review all animations — ensure no jank, respect `prefers-reduced-motion`
3. Responsive testing at breakpoints:
   - Mobile: 375px (iPhone SE)
   - Tablet: 768px (iPad)
   - Desktop: 1280px+
4. Fine-tune spacing, font sizes, and layout at each breakpoint
5. Add subtle section transitions (gradient fades between sections)
6. Test LightRays performance on mobile — reduce DPR if needed
7. Ensure all images use `next/image` with proper sizing

### Deliverable
- Site looks polished on all screen sizes, animations are smooth

---

## Phase 6 — SEO & Performance

**Goal:** Optimize for search engines and achieve 90+ Lighthouse score.

### Steps

1. Metadata in `layout.tsx`:
   - Title: "Fanar — AI-Powered Apps for Everyday Life"
   - Description: from BUSINESS.md mission statement
   - Open Graph: title, description, image (create OG image or use logo)
   - Twitter card: summary_large_image
   - Favicon: add proper favicon set
2. Add `robots.txt` and `sitemap.xml` (Next.js built-in)
3. Performance audit:
   - Lazy load LightRays (already has IntersectionObserver)
   - Ensure no layout shifts (CLS)
   - Preload critical fonts
   - Minimize JS bundle (check for unnecessary imports)
4. Accessibility:
   - Proper heading hierarchy (h1 → h2 → h3)
   - Alt text on all images
   - Color contrast check (white on black = good)
   - Focus states on interactive elements

### Deliverable
- Lighthouse: 90+ Performance, 100 Accessibility, 100 Best Practices, 90+ SEO

---

## Phase 7 — Deploy to Vercel

**Goal:** Push to GitHub and deploy on Vercel.

### Steps

1. Final git commit with all changes
2. Push to GitHub repo (`fanar-ai/fanar` or similar)
3. Connect repo to Vercel
4. Configure domain: `fanar.ai` (if available)
5. Verify production build, check for any SSR issues
6. Test production URL on multiple devices

### Deliverable
- Live site at production URL

---

## Summary

| Phase | What | Key Output |
|-------|------|------------|
| 1 | Project Setup | Dev server running, deps installed |
| 2 | Hero Section | LightRays + branding + animations |
| 3 | Products Section | Daylst & Tourida cards |
| 4 | Footer | Contact & social links |
| 5 | Polish & Responsive | Mobile-ready, smooth animations |
| 6 | SEO & Performance | 90+ Lighthouse, proper metadata |
| 7 | Deploy | Live on Vercel |

**Approach:** We build phase by phase. Each phase is reviewed before moving to the next.
