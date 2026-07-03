"use client";

import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail, MapPin } from "lucide-react";
import { personal } from "@/lib/portfolio-data";
import { AnimatedText } from "./animated-text";
import { MagneticButton, Magnetic } from "./magnetic";
import { AbstractPortrait } from "./abstract-portrait";

export function Hero() {
  return (
    <section
      id="hero"
      className="grain relative min-h-screen w-full overflow-hidden bg-ink text-cream"
    >
      {/* Ambient glows */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute -top-40 -right-20 h-[600px] w-[600px] rounded-full bg-amber/15 blur-[140px]" />
        <div className="absolute bottom-0 -left-40 h-[500px] w-[500px] rounded-full bg-amber-deep/10 blur-[120px]" />
        <div className="absolute top-1/2 left-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-amber/5 blur-[80px]" />
      </div>

      {/* Vertical labels (left & right rails) */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 hidden md:flex w-12 items-center justify-center">
        <span className="font-mono-label text-[10px] uppercase tracking-[0.4em] text-cream/30 [writing-mode:vertical-rl]">
          Portfolio · 2026
        </span>
      </div>
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 hidden md:flex w-12 items-center justify-center">
        <span className="font-mono-label text-[10px] uppercase tracking-[0.4em] text-cream/30 [writing-mode:vertical-rl]">
          {personal.location}
        </span>
      </div>

      {/* Main content */}
      <div className="relative z-20 mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-5 sm:px-8 md:px-16 pt-28 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* Left: text */}
          <div className="lg:col-span-7 xl:col-span-8">
            {/* Status badge */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-flex items-center gap-2.5 rounded-full border border-cream/15 bg-cream/[0.03] px-4 py-1.5 backdrop-blur-sm"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              </span>
              <span className="font-mono-label text-[11px] uppercase tracking-[0.18em] text-cream/70">
                {personal.availability.status}
              </span>
            </motion.div>

            {/* Eyebrow */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-8 font-mono-label text-xs uppercase tracking-[0.22em] text-amber"
            >
              {personal.firstName} {personal.lastName} — {personal.location}
            </motion.p>

            {/* Headline */}
            <h1 className="mt-4 font-display text-5xl sm:text-6xl lg:text-8xl font-semibold leading-[0.95] tracking-tight text-balance">
              <AnimatedText
                key={0}
                as="span"
                text={personal.heroHeadline[0]}
                delay={0.3}
                className="block text-cream"
              />{" "}
              <AnimatedText
                key={1}
                as="span"
                text={personal.heroHeadline[1]}
                delay={0.45}
                className="block text-cream italic font-medium"
              />{" "}
              <AnimatedText
                key={2}
                as="span"
                text={personal.heroHeadline[2]}
                delay={0.6}
                className="block text-cream"
              />{" "}
              <AnimatedText
                key={3}
                as="span"
                text={personal.heroHeadline[3]}
                delay={0.75}
                className="block text-cream"
              />
            </h1>

            {/* Sub */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 1.0 }}
              className="mt-8 max-w-xl text-base sm:text-lg leading-relaxed text-cream/70 text-pretty"
            >
              {personal.heroSub}
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 1.15 }}
              className="mt-10 flex flex-wrap items-center gap-3"
            >
              <MagneticButton
                href="#projects"
                variant="solid"
                tone="dark"
                icon={<ArrowDown size={16} />}
              >
                View selected work
              </MagneticButton>
              <MagneticButton
                href="#contact"
                variant="outline"
                tone="dark"
              >
                Get in touch
              </MagneticButton>
            </motion.div>

            {/* Socials */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 1.3 }}
              className="mt-10 flex items-center gap-5"
            >
              {[
                { icon: Github, href: "https://github.com/udayrajsaroj", label: "GitHub" },
                { icon: Linkedin, href: "https://www.linkedin.com/in/udayraj-saroj", label: "LinkedIn" },
                { icon: Mail, href: "mailto:udayrajsaroj55@gmail.com", label: "Email" },
              ].map((s) => (
                <Magnetic
                  key={s.label}
                  as="a"
                  href={s.href}
                  strength={0.4}
                  className="text-cream/50 transition-colors hover:text-amber"
                  ariaLabel={s.label}
                >
                  <s.icon size={20} strokeWidth={1.5} />
                </Magnetic>
              ))}
              <span className="ml-2 inline-flex items-center gap-1.5 font-mono-label text-[11px] uppercase tracking-[0.16em] text-cream/40">
                <MapPin size={11} strokeWidth={1.5} /> Open to remote
              </span>
            </motion.div>
          </div>

          {/* Right: abstract portrait */}
          <div className="lg:col-span-5 xl:col-span-4 flex justify-center lg:justify-end">
            <AbstractPortrait />
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.button
          onClick={() =>
            document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })
          }
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-cream/40 hover:text-amber transition-colors"
          aria-label="Scroll to about"
        >
          <span className="font-mono-label text-[10px] uppercase tracking-[0.3em]">
            Scroll
          </span>
          <span className="relative flex h-10 w-6 justify-center rounded-full border border-cream/20">
            <motion.span
              animate={{ y: [0, 14, 0], opacity: [1, 0.2, 1] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
              className="mt-1.5 h-2 w-px bg-amber"
            />
          </span>
        </motion.button>
      </div>

      {/* Bottom marquee */}
      <div className="relative z-20 border-t border-cream/10 bg-ink-soft/50 backdrop-blur-sm">
        <div className="flex overflow-hidden py-4">
          <div className="flex animate-marquee whitespace-nowrap">
            {Array.from({ length: 2 }).map((_, i) => (
              <div key={i} className="flex items-center">
                {["MERN Stack", "RBAC & IAM", "Real-Time Systems", "Flutter", "Socket.io", "JWT Auth", "Razorpay", "WebSockets", "TypeScript", "Docker"].map(
                  (word) => (
                    <span
                      key={word}
                      className="mx-6 font-display text-lg italic text-cream/30"
                    >
                      {word}
                      <span className="ml-12 text-amber">✦</span>
                    </span>
                  )
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
