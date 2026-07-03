"use client";

import { motion } from "framer-motion";
import { experience } from "@/lib/portfolio-data";
import { SectionHeading } from "./section-heading";

export function Experience() {
  return (
    <section
      id="experience"
      className="relative bg-ink text-cream py-24 sm:py-32 lg:py-40 grain overflow-hidden"
    >
      {/* Glow */}
      <div className="pointer-events-none absolute top-1/4 -right-40 h-[500px] w-[500px] rounded-full bg-amber/8 blur-[150px]" />
      <div className="pointer-events-none absolute bottom-0 -left-40 h-[400px] w-[400px] rounded-full bg-amber-deep/8 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          index="05"
          eyebrow="Experience"
          title="Shipped, secured, deployed."
          description="A condensed timeline of the systems I've built — every entry represents a real production deployment with authentication, real-time layers, and cloud hosting."
          tone="dark"
        />

        {/* Unified Timeline */}
        <div className="mt-16 flex flex-col gap-12">
          {experience.map((item, i) => (
            <motion.div
              key={`${item.year}-${item.title}`}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                duration: 0.7,
                delay: i * 0.12,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 group"
            >
              {/* Left: Desktop Year */}
              <div className="hidden lg:block lg:col-span-2">
                {/* pt-1 helps align the year's baseline with the title on the right */}
                <div className="font-display text-3xl font-semibold text-amber/80 pt-1">
                  {item.year}
                </div>
              </div>

              {/* Right: Timeline Content */}
              <div className="lg:col-span-10 relative pl-12 sm:pl-16">
                {/* Connecting Line Segment */}
                {/* Extends down through the gap-12 (-bottom-12) to connect seamlessly to the next item */}
                <div 
                  className={`absolute left-3 sm:left-4 top-2 w-px bg-cream/10 z-0 ${
                    i === experience.length - 1 ? "bottom-0" : "-bottom-12"
                  }`} 
                />

                {/* Dot */}
                <span className="absolute left-0 top-1 flex h-7 w-7 items-center justify-center rounded-full border border-amber/40 bg-ink z-10">
                  <span className="h-2 w-2 rounded-full bg-amber" />
                  <span className="absolute inset-0 rounded-full border border-amber/40 animate-pulse-ring" />
                </span>

                {/* Mobile year */}
                <div className="lg:hidden font-mono-label text-xs text-amber mb-1">
                  {item.year}
                </div>

                <h3 className="font-display text-2xl sm:text-3xl font-semibold tracking-tight text-cream">
                  {item.title}
                </h3>
                <p className="mt-1.5 font-mono-label text-xs uppercase tracking-[0.14em] text-amber/80">
                  {item.org}
                </p>
                <p className="mt-4 text-base leading-relaxed text-cream/70 max-w-2xl text-pretty">
                  {item.description}
                </p>

                {/* Hover indicator */}
                <div className="mt-4 h-px w-0 bg-amber transition-all duration-500 group-hover:w-24" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}