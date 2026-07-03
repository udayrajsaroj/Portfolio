"use client";

import { motion } from "framer-motion";
import { skillCategories } from "@/lib/portfolio-data";
import { SectionHeading } from "./section-heading";
import { cn } from "@/lib/utils";

const levelStyles = {
  core: {
    label: "Core",
    dot: "bg-amber",
    chip: "border-amber/30 bg-amber/10 text-ink",
  },
  working: {
    label: "Working",
    dot: "bg-amber-deep",
    chip: "border-ink/15 bg-white text-ink/80",
  },
  learning: {
    label: "Learning",
    dot: "bg-muted-foreground",
    chip: "border-ink/10 bg-cream-soft text-muted-foreground",
  },
};

export function Skills() {
  return (
    <section
      id="skills"
      className="relative bg-cream-soft text-ink py-24 sm:py-32 lg:py-40"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          index="03"
          eyebrow="Toolkit"
          title="The stack I ship with."
          description="A working toolkit spanning frontend, backend, infrastructure, and security — sharpened by shipping real production systems."
        />

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-6">
          {skillCategories.map((cat, ci) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: ci * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="group relative overflow-hidden rounded-3xl border border-ink/10 bg-white p-6 sm:p-8 transition-all duration-500 hover:border-amber/40 hover:shadow-[0_20px_60px_-20px_rgba(255,182,39,0.25)]"
            >
              {/* hover gradient sheen */}
              <div className="pointer-events-none absolute -top-20 -right-20 h-40 w-40 rounded-full bg-amber/0 blur-3xl transition-all duration-700 group-hover:bg-amber/15" />

              <div className="relative flex items-start justify-between">
                <div>
                  <h3 className="font-display text-2xl sm:text-3xl font-semibold tracking-tight">
                    {cat.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed max-w-sm">
                    {cat.blurb}
                  </p>
                </div>
                <span className="font-mono-label text-xs text-muted-foreground/60">
                  0{ci + 1}
                </span>
              </div>

              <div className="relative mt-6">
                <p className="font-mono-label text-xs uppercase tracking-[0.15em]">
                  {cat.skills.map(s => s.name).join(', ')}
                </p>
              </div>

              {/* Bottom accent line */}
              <div className="relative mt-6 h-px w-full bg-ink/5">
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.9, delay: 0.3 + ci * 0.08, ease: [0.22, 1, 0.36, 1] }}
                  className="h-full origin-left bg-gradient-to-r from-amber to-amber-deep"
                  style={{ width: "40%" }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Legend */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-muted-foreground"
        >
          <span className="font-mono-label uppercase tracking-[0.18em]">Legend:</span>
          {Object.entries(levelStyles).map(([key, val]) => (
            <span key={key} className="inline-flex items-center gap-2">
              <span className={cn("h-1.5 w-1.5 rounded-full", val.dot)} />
              {val.label}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
