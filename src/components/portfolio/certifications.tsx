"use client";

import { motion } from "framer-motion";
import { Award, BadgeCheck, ExternalLink } from "lucide-react";
import { certifications } from "@/lib/portfolio-data";
import { SectionHeading } from "./section-heading";
import { Magnetic } from "./magnetic";

export function Certifications() {
  return (
    <section
      id="certifications"
      className="relative bg-cream-soft text-ink py-24 sm:py-32 lg:py-40"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          index="07"
          eyebrow="Certifications"
          title="Practical, job-simulated training."
          description="Job simulations from TCS and Deloitte through the Forage platform — not passive video courses, but hands-on exercises that mirror real enterprise engineering and security work."
        />

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-6">
          {certifications.map((cert, i) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                duration: 0.6,
                delay: i * 0.12,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group relative overflow-hidden rounded-3xl border border-ink/10 bg-white p-7 sm:p-8 transition-all duration-500 hover:border-amber/40 hover:shadow-[0_20px_60px_-20px_rgba(255,182,39,0.25)]"
            >
              <div className="pointer-events-none absolute -top-20 -right-20 h-40 w-40 rounded-full bg-amber/0 blur-3xl transition-all duration-700 group-hover:bg-amber/15" />

              <div className="relative flex items-start justify-between gap-4">
                <div className="flex items-center gap-4">
                  <span className="relative flex h-14 w-14 items-center justify-center rounded-2xl border border-amber/30 bg-amber/10 text-amber-deep">
                    <Award size={26} strokeWidth={1.5} />
                    <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-amber text-ink">
                      <BadgeCheck size={12} strokeWidth={2.5} />
                    </span>
                  </span>
                </div>
                <span className="font-mono-label text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
                  {cert.date}
                </span>
              </div>

              <h3 className="relative mt-5 font-display text-2xl font-semibold leading-tight tracking-tight">
                {cert.title}
              </h3>
              <p className="relative mt-1.5 font-mono-label text-xs uppercase tracking-[0.14em] text-amber-deep">
                {cert.issuer}
              </p>
              <p className="relative mt-4 text-sm leading-relaxed text-ink/70 text-pretty">
                {cert.description}
              </p>

              <div className="relative mt-6 flex flex-wrap gap-1.5">
                {cert.skills.map((skill) => (
                  <span
                    key={skill}
                    className="inline-flex items-center rounded-md border border-ink/10 bg-cream-soft px-2.5 py-1 font-mono-label text-[10px] uppercase tracking-[0.1em] text-ink/70"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              {/* Footer line */}
              <div className="relative mt-6 flex items-center justify-between">
                <div className="font-mono-label text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
                  Verified · Forage
                </div>
                <Magnetic
                  as="a"
                  href="https://www.theforage.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  strength={0.2}
                  className="inline-flex items-center gap-1.5 text-xs text-ink/70 transition-colors hover:text-amber-deep"
                >
                  Forage platform
                  <ExternalLink size={12} strokeWidth={1.5} />
                </Magnetic>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-10 rounded-2xl border border-dashed border-ink/15 bg-white/40 p-5 text-center"
        >
          <p className="font-mono-label text-xs uppercase tracking-[0.16em] text-muted-foreground">
            <span className="text-amber-deep">2</span> corporate job simulations ·
            <span className="text-amber-deep"> 6+</span> months hands-on practice ·
            <span className="text-amber-deep"> 100%</span> completion rate
          </p>
        </motion.div>
      </div>
    </section>
  );
}
