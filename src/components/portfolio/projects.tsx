"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Github } from "lucide-react";
import { projects, type Project } from "@/lib/portfolio-data";
import { SectionHeading } from "./section-heading";
import { Magnetic } from "./magnetic";
import { cn } from "@/lib/utils";

const accentMap = {
  amber: {
    chip: "bg-amber text-ink",
    ring: "group-hover:border-amber/50",
    glow: "group-hover:bg-amber/10",
    num: "text-amber",
    metric: "text-amber-deep",
  },
  cream: {
    chip: "bg-cream text-ink",
    ring: "group-hover:border-cream/50",
    glow: "group-hover:bg-cream/10",
    num: "text-cream",
    metric: "text-cream/80",
  },
  dark: {
    chip: "bg-ink text-cream",
    ring: "group-hover:border-ink/50",
    glow: "group-hover:bg-ink/5",
    num: "text-ink",
    metric: "text-ink/70",
  },
} as const;

function ProjectCard({ project, i }: { project: Project; i: number }) {
  const accent = accentMap[project.accent];

  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{
        duration: 0.7,
        delay: i * 0.1,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={cn(
        "group relative grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 rounded-3xl border border-ink/10 bg-white p-6 sm:p-8 lg:p-10 transition-all duration-500 hover:shadow-[0_30px_80px_-30px_rgba(10,10,10,0.25)]",
        accent.ring
      )}
    >
      {/* Left side: index, year, role */}
      <div className="lg:col-span-3 flex lg:flex-col justify-between lg:justify-start gap-4">
        <div>
          <div className="flex items-center gap-3">
            <span className="font-display text-6xl lg:text-7xl font-semibold leading-none text-ink/10">
              {project.index}
            </span>
            <span
              className={cn(
                "inline-flex items-center rounded-full px-3 py-1 font-mono-label text-[10px] uppercase tracking-[0.14em]",
                accent.chip
              )}
            >
              {project.year}
            </span>
          </div>
          <p className="mt-3 font-mono-label text-[11px] uppercase tracking-[0.16em] text-muted-foreground">
            {project.role}
          </p>
        </div>
      </div>

      {/* Middle: name, tagline, description, highlights */}
      <div className="lg:col-span-6">
        <h3 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight leading-[1.05]">
          {project.name}
        </h3>
        <p className="mt-3 text-base sm:text-lg text-muted-foreground leading-relaxed text-pretty">
          {project.tagline}
        </p>
        <p className="mt-5 text-sm sm:text-base leading-relaxed text-ink/70 text-pretty">
          {project.description}
        </p>

        <ul className="mt-6 space-y-2.5">
          {project.highlights.map((h, hi) => (
            <motion.li
              key={hi}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 + hi * 0.08 }}
              className="flex gap-3 text-sm text-ink/80"
            >
              <span className={cn("mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full", accent.num)} />
              <span className="leading-relaxed">{h}</span>
            </motion.li>
          ))}
        </ul>

        {/* Stack */}
        <div className="mt-6 flex flex-wrap gap-1.5">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="inline-flex items-center rounded-md border border-ink/10 bg-cream-soft px-2.5 py-1 font-mono-label text-[10px] uppercase tracking-[0.1em] text-ink/70"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Right: metrics + actions */}
      <div className="lg:col-span-3 flex flex-col gap-5">
        {project.metrics && (
          <div className="grid grid-cols-3 lg:grid-cols-1 gap-3">
            {project.metrics.map((m) => (
              <div
                key={m.label}
                className="rounded-xl border border-ink/10 bg-cream-soft/50 p-2.5"
              >
                <div className={cn("font-display text-lg font-semibold", accent.metric)}>
                  {m.value}
                </div>
                <div className="mt-0.5 text-[10px] uppercase tracking-[0.12em] text-muted-foreground leading-tight">
                  {m.label}
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="flex flex-col gap-2 mt-auto">
          <Magnetic
            as="a"
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            strength={0.15}
            className="inline-flex items-center justify-between gap-2 rounded-full border border-ink/15 bg-white px-5 py-2.5 text-sm font-medium text-ink transition-colors hover:border-ink hover:bg-ink hover:text-cream"
          >
            <span className="inline-flex items-center gap-2">
              <Github size={15} strokeWidth={1.5} /> View Code
            </span>
            <ArrowUpRight size={15} strokeWidth={1.5} />
          </Magnetic>
        </div>
      </div>

      {/* Hover gradient sheen on the whole card */}
      <div
        className={cn(
          "pointer-events-none absolute -top-32 -right-32 h-64 w-64 rounded-full blur-3xl transition-all duration-700",
          accent.glow
        )}
      />
    </motion.article>
  );
}

export function Projects() {
  return (
    <section
      id="projects"
      className="relative bg-cream text-ink py-24 sm:py-32 lg:py-40"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
          <SectionHeading
            index="04"
            eyebrow="Selected Work"
            title="Three systems. All shipped solo."
            description="Every project below was designed, built, secured, and deployed end-to-end. They're not coursework — they're production systems with real users, real money, and real security constraints."
          />

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="font-mono-label text-xs text-muted-foreground"
          >
            <span className="text-amber-deep">{projects.length}</span> / {projects.length} featured
          </motion.div>
        </div>

        <div className="mt-14 flex flex-col gap-5 lg:gap-6">
          {projects.map((p, i) => (
            <ProjectCard key={p.id} project={p} i={i} />
          ))}
        </div>

        {/* See more on GitHub */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12 flex flex-col items-center gap-4 rounded-3xl border border-dashed border-ink/20 bg-cream-soft/40 p-8 text-center"
        >
          <p className="font-display text-xl text-ink/80 italic">
            More experiments, broken builds, and work-in-progress on GitHub.
          </p>
          <Magnetic
            as="a"
            href="https://github.com/udayrajsaroj"
            target="_blank"
            rel="noopener noreferrer"
            strength={0.2}
            className="inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-medium text-cream transition-colors hover:bg-ink/90"
          >
            <Github size={16} strokeWidth={1.5} />
            Browse github.com/udayrajsaroj
            <ArrowUpRight size={16} strokeWidth={1.5} />
          </Magnetic>
        </motion.div>
      </div>
    </section>
  );
}
