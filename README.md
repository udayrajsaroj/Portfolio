<div align="center">

# Udayraj Saroj — Developer Portfolio

A premium, Awwwards-inspired developer portfolio built with **Next.js 16**, **TypeScript**, **Tailwind CSS 4**, **Framer Motion**, and **shadcn/ui**.

[![Next.js](https://img.shields.io/badge/Next.js-16-black?logo=next.js)](https://nextjs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-38BDF8?logo=tailwind-css&logoColor=white)](https://tailwindcss.com)
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fudayrajsaroj%2FPortfolio)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](./LICENSE)

</div>

---

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

---

## 🧱 Tech Stack

| Layer        | Choice                                                |
| ------------ | ----------------------------------------------------- |
| Framework    | Next.js 16 (App Router)                               |
| Language     | TypeScript 5                                          |
| Styling      | Tailwind CSS 4 + custom design tokens                 |
| UI           | shadcn/ui (New York) + Lucide icons                   |
| Animation    | Framer Motion 12                                      |
| Data         | Prisma + SQLite (file-based, optional)                |
| Auth         | next-auth (optional)                                  |
| i18n         | next-intl                                             |
| Fonts        | Playfair Display · Inter · JetBrains Mono (next/font) |

---

## 📂 Project Structure

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

---

## 🚀 Local Development

### Prerequisites

- **Node.js 20+** (or **Bun 1.1+** — recommended for speed)
- **Git**

### Setup

```bash
# 1. Clone the repo
git clone https://github.com/udayrajsaroj/Portfolio.git
cd Portfolio

# 2. Install dependencies
npm install        # or: bun install

# 3. (Optional) Set up the database
npm run db:push    # creates a local SQLite db via Prisma

# 4. Start the dev server
npm run dev        # http://localhost:3000
```

### Available Scripts

| Command            | Description                                |
| ------------------ | ------------------------------------------ |
| `npm run dev`      | Start dev server with HMR on port 3000     |
| `npm run build`    | Production build (standalone output)       |
| `npm run start`    | Run the production build                   |
| `npm run lint`     | Run ESLint                                 |
| `npm run db:push`  | Push Prisma schema to SQLite               |
| `npm run db:reset` | Reset the database                         |

---

## 🌐 Deploy to Vercel

The fastest way to deploy is via the **Vercel CLI** or the one-click button below.

### Option A — One-click (no CLI)

1. Click: [![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fudayrajsaroj%2FPortfolio)
2. Sign in to Vercel with GitHub
3. Vercel auto-detects Next.js — leave all defaults
4. Click **Deploy** — your site is live in ~60 seconds

### Option B — Vercel CLI

```bash
# 1. Install the CLI
npm i -g vercel

# 2. Login
vercel login

# 3. Deploy (preview)
vercel

# 4. Deploy to production
vercel --prod
```

### Environment Variables

The portfolio is **fully static** and ships with zero required env vars. The included Prisma schema is optional and used only for future dynamic features.

| Variable       | Required | Purpose                |
| -------------- | -------- | ---------------------- |
| `DATABASE_URL` | No       | SQLite path (optional) |

---

## ✏️ How to Customize

All content — **bio, projects, skills, education, certifications, links** — lives in a single file:

📄 **`src/lib/portfolio-data.ts`** — edit this one file to update anything across the site.

### Add a profile photo

Replace the abstract portrait:

1. Drop a photo at `public/profile.jpg`
2. In `src/components/portfolio/hero.tsx`, swap `<AbstractPortrait />` for an `<Image>` element

### Update project demo links

In `src/lib/portfolio-data.ts`, each project has a `github` field. To add live demos, add a `demo: "https://..."` field (the type already supports it).

### Change the accent color

Edit `--color-amber` in `src/app/globals.css` (`:root` and `.dark` blocks). Search/replace `#ffb627` to retheme everything in one pass.

---

## 🎨 Design System

- **Primary accent**: `#FFB627` (amber gold)
- **Ink (background)**: `#0A0A0A`
- **Cream (light bg)**: `#FAF7F2`
- **Display font**: Playfair Display (headings)
- **Body font**: Inter (paragraphs)
- **Mono font**: JetBrains Mono (labels, code, indices)

Custom keyframes live in `globals.css`: marquee, slow-spin, float, pulse-ring, grain shimmer.

---

## 📜 License

MIT — fork, remix, and ship. Attribution appreciated but not required.

---

<div align="center">

Made with care by **[Udayraj Saroj](https://github.com/udayrajsaroj)**

⭐ Star this repo if it helped you build something.

</div>
