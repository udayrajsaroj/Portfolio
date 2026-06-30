"use client";

import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import { education, beyondCode } from "@/lib/portfolio-data";
import { SectionHeading } from "./section-heading";

export function Education() {
  return (
    <section
      id="education"
      className="relative bg-cream text-ink py-24 sm:py-32 lg:py-40"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          index="06"
          eyebrow="Education"
          title="Foundations in IT & science."
          description="Formal training in information technology, with a foundation that pairs software engineering with the analytical rigor of a science background."
        />

        <div className="mt-14 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
          {/* Education list */}
          <div className="lg:col-span-8 space-y-4">
            {education.map((edu, i) => (
              <motion.div
                key={edu.degree}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.6,
                  delay: i * 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="group relative flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8 rounded-2xl border border-ink/10 bg-white p-6 transition-all duration-400 hover:border-amber/40 hover:shadow-[0_15px_50px_-20px_rgba(255,182,39,0.2)]"
              >
                <div className="flex items-center gap-4">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-amber/30 bg-amber/10 text-amber-deep">
                    <GraduationCap size={22} strokeWidth={1.5} />
                  </span>
                  <span className="font-mono-label text-xs uppercase tracking-[0.16em] text-muted-foreground sm:hidden">
                    {edu.year}
                  </span>
                </div>

                <div className="flex-1">
                  <h3 className="font-display text-xl sm:text-2xl font-semibold tracking-tight">
                    {edu.degree}
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {edu.institution}
                  </p>
                  <p className="mt-2 text-sm text-ink/70 leading-relaxed">
                    {edu.detail}
                  </p>
                </div>

                <div className="hidden sm:block">
                  <span className="font-display text-3xl font-semibold text-ink/15 group-hover:text-amber/40 transition-colors">
                    {edu.year}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Beyond code sidebar */}
          <motion.aside
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-4 rounded-3xl border border-ink/10 bg-ink p-7 text-cream relative overflow-hidden grain"
          >
            <div className="pointer-events-none absolute -top-20 -right-20 h-40 w-40 rounded-full bg-amber/20 blur-3xl" />
            <div className="relative">
              <div className="font-mono-label text-xs uppercase tracking-[0.18em] text-amber">
                Beyond code
              </div>
              <h3 className="mt-3 font-display text-2xl font-semibold tracking-tight">
                What shapes how I think.
              </h3>
              <div className="mt-6 space-y-5">
                {beyondCode.map((item, i) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, x: 16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                  >
                    <div className="font-display text-base font-medium text-cream">
                      {item.label}
                    </div>
                    <div className="mt-1 text-xs text-cream/60 leading-relaxed">
                      {item.detail}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.aside>
        </div>
      </div>
    </section>
  );
}
