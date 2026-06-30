---
Task ID: portfolio-build
Agent: main (Super Z)
Task: Build a premium Awwwards-inspired developer portfolio for Udayraj Saroj based on his resume and 3 reference portfolios (digbijayalenka, carlos-rojas, austinserb).

Work Log:
- Extracted text from both resume PDFs (MERN variant + Security/IAM variant) using pdftotext
- Batched 8 clarifying questions covering positioning / style / palette / photo / links / extra sections / target roles / copywriting
- User chose: Hybrid Generalist positioning, Dark+Editorial hybrid style, picker-chosen palette, abstract art portrait, GitHub-only links, Certifications section, all 4 target role tracks, professional rewrite
- Initialized Next.js 16 + TypeScript + Tailwind 4 + shadcn/ui environment via init-fullstack.sh
- Designed custom amber-gold + cream + ink palette in globals.css with grain texture, marquee, slow-spin, float, pulse-ring keyframes
- Loaded Inter + Playfair Display + JetBrains Mono fonts via next/font
- Built centralized data file at src/lib/portfolio-data.ts (all bio/projects/skills/education/certs/links)
- Built reusable primitives: MagneticCursor (useSyncExternalStore for SSR-safe fine-pointer detection), ScrollProgress, SectionHeading, AnimatedText (word-by-word blur reveal), Magnetic wrapper + MagneticButton
- Built Navbar with IntersectionObserver active-section tracking + mobile slide-in menu + animated underline
- Built Hero with animated SVG portrait (orb, rotating dashed rings, monogram, coordinate labels), status badge, marquee strip
- Built About with animated stat counters, lead paragraph, "currently learning" panel
- Built Skills as 4-category grid (Frontend / Backend / Database & Infra / Security & Mobile) with level chips (core/working/learning)
- Built Projects as large 12-col cards with index, year chip, role, stack, highlights, metrics, GitHub CTA
- Built Experience timeline with year rail, animated dots, hover accent line
- Built Education cards + "Beyond Code" sidebar (guitar/chess/gaming)
- Built Certifications grid for TCS Forage + Deloitte Forage with skill tags
- Built Contact CTA with copy-email toast (sonner), 4-up socials grid, location pill
- Built Footer with big signature, quick nav, back-to-top magnetic button
- Added SEO: full metadata, OpenGraph, Twitter cards, JSON-LD Person schema, custom SVG OG image, SVG favicon
- Fixed two runtime issues caught by Agent Browser:
  - <h1> nested inside <h1> (AnimatedText was defaulting to h1; switched Hero's calls to as="span")
  - Duplicate React keys on year "2026" in Experience (changed to include title in key)
- Verified lint clean, no console errors, all 8 sections render at desktop + mobile viewports
- Verified navbar smooth-scroll navigation works (clicked "Work", scrolled to Projects section)
- Verified Copy email button fires sonner toast

Stage Summary:
- Stack: Next.js 16 App Router + TypeScript 5 + Tailwind CSS 4 + shadcn/ui + Framer Motion 12
- 17 reusable components in src/components/portfolio/
- All content centralized in src/lib/portfolio-data.ts (one file to edit)
- 8 sections: Hero → About → Skills → Projects → Experience → Education → Certifications → Contact + Footer
- Lint: clean. Dev server: 200 OK. Agent Browser: no errors, all sections interactive.
- Deliverable: live preview at the sandbox URL; full README.md with customization guide.
