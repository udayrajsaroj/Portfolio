"use client";

import { motion, useInView, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";
import { personal } from "@/lib/portfolio-data";
import { SectionHeading } from "./section-heading";
import { AnimatedTextOnScroll } from "./animated-text";

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const mv = useMotionValue(0);
  const spring = useSpring(mv, { damping: 24, stiffness: 80 });
  const display = useTransform(spring, (v) => Math.round(v).toString() + suffix);

  useEffect(() => {
    if (inView) mv.set(value);
  }, [inView, value, mv]);

  return <motion.span ref={ref}>{display}</motion.span>;
}

export function About() {
  return (
    <section
      id="about"
      className="relative bg-cream text-ink py-24 sm:py-32 lg:py-40"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          index="02"
          eyebrow="About"
          title="Engineer first. Security mindset always."
        />

        {/* Lead + body */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          <div className="lg:col-span-7">
            <AnimatedTextOnScroll
              text={personal.about.lead}
              as="p"
              className="font-display text-2xl sm:text-3xl lg:text-4xl font-medium leading-[1.2] tracking-tight text-ink text-balance"
            />

            <div className="mt-8 space-y-6">
              {personal.about.body.map((para, i) => (
                <motion.p
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{
                    duration: 0.6,
                    delay: 0.1 * i,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="text-base sm:text-lg leading-relaxed text-muted-foreground text-pretty"
                >
                  {para}
                </motion.p>
              ))}
            </div>
          </div>

          {/* Stats panel */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 lg:pl-8 lg:border-l lg:border-ink/10"
          >
            <div className="font-mono-label text-xs uppercase tracking-[0.18em] text-amber-deep">
              By the numbers
            </div>
            <div className="mt-6 grid grid-cols-2 gap-6">
              {personal.about.stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.15 + i * 0.08 }}
                  className="group"
                >
                  <div className="font-display text-5xl sm:text-6xl font-semibold text-ink leading-none">
                    <Counter value={stat.value} suffix={stat.suffix} />
                  </div>
                  <div className="mt-2 text-sm text-muted-foreground leading-snug">
                    {stat.label}
                  </div>
                  <div className="mt-3 h-px w-full bg-ink/10">
                    <motion.div
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: 0.3 + i * 0.08 }}
                      className="h-full origin-left bg-amber"
                      style={{ width: `${60 + i * 10}%` }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Currently learning */}
            <div className="mt-10 rounded-2xl border border-ink/10 bg-white/50 p-5 backdrop-blur-sm">
              <div className="font-mono-label text-[11px] uppercase tracking-[0.18em] text-amber-deep">
                Currently leveling up
              </div>
              <div className="mt-3 flex flex-wrap gap-2">
                {["TypeScript", "Docker", "System Design", "Advanced Security"].map(
                  (tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center gap-1.5 rounded-full border border-ink/15 bg-cream px-3 py-1 text-xs text-ink/80"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-amber" />
                      {tag}
                    </span>
                  )
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
