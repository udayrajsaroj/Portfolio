# Udayraj Saroj — Developer Portfolio

A premium, Awwwards-inspired developer portfolio built with Next.js 16 (App Router), TypeScript, Tailwind CSS, Framer Motion, and shadcn/ui.

## ✨ Highlights

- **Hybrid dark + editorial design** — dark hero (premium feel) → light editorial body → dark contact CTA
- **Amber gold accent palette** (`#FFB627` on `#0A0A0A` + cream `#FAF7F2`)
- **Magnetic cursor** — desktop-only amber dot + lagging ring that grows on interactive hover
- **Scroll progress bar**, sticky navbar with active-section tracking, mobile slide-in menu
- **Animated SVG portrait** — generative orb, rotating dashed rings, monogram, coordinate labels
- **Word-by-word text reveal** on hero + section headings (Framer Motion stagger with blur)
- **Counters** that animate when scrolled into view
- **SEO**: full metadata, Open Graph, Twitter cards, JSON-LD Person schema, custom OG image, SVG favicon
- **Responsive**: mobile-first, tested at 390px and 1440px viewports
- **Accessibility**: semantic HTML, ARIA labels, keyboard-navigable, screen-reader text

## 🧱 Tech Stack

| Layer | Choice |
|------|--------|
| Framework | Next.js 16 (App Router) |
| Language | TypeScript 5 |
| Styling | Tailwind CSS 4 + custom design tokens |
| UI Components | shadcn/ui (New York) + Lucide icons |
| Animation | Framer Motion 12 |
| Fonts | Playfair Display (display) · Inter (body) · JetBrains Mono (labels) |

## 📂 Structure

```
src/
├── app/
│   ├── globals.css         # Design tokens (dark + light), utilities, keyframes
│   ├── layout.tsx          # Fonts, metadata, JSON-LD, Toaster
│   └── page.tsx            # Page assembly
├── components/
│   ├── portfolio/
│   │   ├── magnetic-cursor.tsx     # Custom amber cursor (desktop)
│   │   ├── scroll-progress.tsx     # Top progress bar
│   │   ├── navbar.tsx              # Sticky nav + mobile menu
│   │   ├── hero.tsx                # Full-screen hero
│   │   ├── abstract-portrait.tsx   # Animated SVG portrait
│   │   ├── animated-text.tsx       # Word-by-word reveal
│   │   ├── section-heading.tsx     # Reusable heading w/ index
│   │   ├── magnetic.tsx            # Magnetic wrapper + button
│   │   ├── about.tsx               # Bio + animated stat counters
│   │   ├── skills.tsx              # Categorized skill grid
│   │   ├── projects.tsx            # Large project cards
│   │   ├── experience.tsx          # Timeline
│   │   ├── education.tsx           # Cards + "beyond code"
│   │   ├── certifications.tsx      # TCS + Deloitte Forage
│   │   ├── contact.tsx             # CTA + socials + copy email
│   │   └── footer.tsx              # Big signature + links
│   └── ui/                         # shadcn/ui components
└── lib/
    ├── portfolio-data.ts           # ALL content lives here
    └── utils.ts                    # cn() helper

public/
├── favicon.svg
└── og-image.svg
```

## ✏️ How to customize

All content — bio, projects, skills, education, certifications, links — lives in **`src/lib/portfolio-data.ts`**. Edit that one file to update anything across the site.

### Add a profile photo
Replace the abstract portrait:
1. Drop a photo at `public/profile.jpg`
2. In `src/components/portfolio/hero.tsx`, swap `<AbstractPortrait />` for an `<Image>` element

### Update project demo links
In `src/lib/portfolio-data.ts`, each project has a `github` field. To add live demos, add a `demo: "https://..."` field (the type already supports it).

### Change the accent color
Edit `--color-amber` in `src/app/globals.css` (`:root` and `.dark` blocks). Search/replace `#ffb627` to retheme everything in one pass.

## 🚀 Local development

```bash
bun install
bun run dev        # http://localhost:3000
bun run lint       # ESLint
bun run build      # Production build
```

## 🌐 Deployment

Optimized for Vercel:
1. Push to GitHub
2. Import the repo at [vercel.com/new](https://vercel.com/new)
3. No env vars needed — it's a static portfolio
4. Deploy

## 📄 License

MIT — yours to fork, remix, and ship.
