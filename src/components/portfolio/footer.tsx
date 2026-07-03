"use client";

import { motion } from "framer-motion";
import { ArrowUp } from "lucide-react";
import { personal } from "@/lib/portfolio-data";
import { Magnetic } from "./magnetic";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative bg-ink text-cream border-t border-cream/10">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          {/* Brand */}
          <div className="md:col-span-5">
            <div className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-full border border-amber/40 bg-amber/10">
                <span className="font-display text-sm font-bold text-amber">
                  {personal.initials}
                </span>
              </span>
              <span className="font-display text-lg font-semibold">
                {personal.firstName}
                <span className="text-amber">.</span>
                {personal.lastName}
              </span>
            </div>
            <p className="mt-4 max-w-sm text-sm text-cream/60 leading-relaxed">
              Full-Stack Engineer building secure, human-centered software.
              Currently open to SDE, cyber/infra trainee, and remote roles.
            </p>
          </div>

          {/* Quick nav */}
          <div className="md:col-span-4">
            <div className="font-mono-label text-[10px] uppercase tracking-[0.18em] text-cream/40 mb-4">
              Navigate
            </div>
            <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm">
              {[
                { label: "About", href: "#about" },
                { label: "Skills", href: "#skills" },
                { label: "Work", href: "#projects" },
                { label: "Experience", href: "#experience" },
                { label: "Education", href: "#education" },
                { label: "Certs", href: "#certifications" },
                { label: "Contact", href: "#contact" },
              ].map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-cream/70 hover:text-amber transition-colors w-fit"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Socials + back to top */}
          <div className="md:col-span-3 flex flex-col gap-4">
            <div className="font-mono-label text-[10px] uppercase tracking-[0.18em] text-cream/40">
              Elsewhere
            </div>
            <div className="flex flex-col gap-2 text-sm">
              <a
                href="https://github.com/udayrajsaroj"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cream/70 hover:text-amber transition-colors w-fit"
              >
                GitHub ↗
              </a>
              <a
                href="https://www.linkedin.com/in/udayraj-saroj"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cream/70 hover:text-amber transition-colors w-fit"
              >
                LinkedIn ↗
              </a>
              <a
                href={`mailto:${personal.email}`}
                className="text-cream/70 hover:text-amber transition-colors w-fit"
              >
                Email ↗
              </a>
            </div>
          </div>
        </div>

        {/* Big signature */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mt-14 pt-10 border-t border-cream/10"
        >
          <div className="font-display text-[11vw] sm:text-7xl lg:text-8xl xl:text-9xl font-semibold leading-none tracking-tight text-cream/10 hover:text-cream/20 transition-colors duration-700">
            {personal.name}
          </div>
        </motion.div>

        {/* Bottom bar */}
        <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="font-mono-label text-[11px] uppercase tracking-[0.14em] text-cream/40">
            © {year} {personal.name}. Built with Next.js, Tailwind, Framer Motion.
          </div>
          <div className="flex items-center gap-4">
            <span className="font-mono-label text-[11px] uppercase tracking-[0.14em] text-cream/40">
              {personal.location}
            </span>
            <Magnetic
              as="button"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              strength={0.3}
              className="group inline-flex items-center gap-2 rounded-full border border-cream/15 px-4 py-2 font-mono-label text-[11px] uppercase tracking-[0.14em] text-cream/70 hover:text-amber hover:border-amber/40 transition-colors"
              ariaLabel="Back to top"
            >
              <ArrowUp size={13} strokeWidth={1.5} className="group-hover:-translate-y-0.5 transition-transform" />
              Top
            </Magnetic>
          </div>
        </div>
      </div>
    </footer>
  );
}
