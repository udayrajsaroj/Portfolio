"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { navItems, personal } from "@/lib/portfolio-data";
import { cn } from "@/lib/utils";
import { Magnetic } from "./magnetic";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("hero");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = navItems
      .map((i) => document.getElementById(i.id))
      .filter(Boolean) as HTMLElement[];

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) setActive(visible[0].target.id);
      },
      {
        rootMargin: "-30% 0px -55% 0px",
        threshold: [0, 0.25, 0.5, 1],
      }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const handleNav = (id: string) => {
    setOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          scrolled
            ? "py-3 backdrop-blur-xl bg-ink/60 border-b border-cream/10"
            : "py-5 bg-transparent border-b border-transparent"
        )}
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 sm:px-8">
          {/* Logo */}
          <Magnetic
            as="button"
            onClick={() => handleNav("hero")}
            strength={0.2}
            className="group flex items-center gap-2.5"
            ariaLabel="Back to top"
          >
            <span className="relative flex h-9 w-9 items-center justify-center rounded-full border border-amber/40 bg-amber/10">
              <span className="font-display text-sm font-bold text-amber">
                {personal.initials}
              </span>
              <span className="absolute inset-0 rounded-full border border-amber/40 animate-pulse-ring" />
            </span>
            <span className="hidden sm:flex flex-col leading-none">
              <span className="font-display text-sm font-semibold text-cream">
                {personal.firstName}
                <span className="text-amber">.</span>
                {personal.lastName}
              </span>
              <span className="font-mono-label text-[10px] uppercase tracking-[0.18em] text-cream/40 mt-0.5">
                Full-Stack Engineer
              </span>
            </span>
          </Magnetic>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNav(item.id)}
                className={cn(
                  "relative px-3 py-2 font-mono-label text-xs uppercase tracking-[0.14em] transition-colors duration-300",
                  active === item.id
                    ? "text-amber"
                    : "text-cream/55 hover:text-cream"
                )}
              >
                <span className="mr-1.5 text-[10px] opacity-60">{item.index}</span>
                {item.label}
                {active === item.id && (
                  <motion.span
                    layoutId="nav-active"
                    className="absolute -bottom-px left-3 right-3 h-px bg-amber"
                    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  />
                )}
              </button>
            ))}
          </div>

          {/* CTA + mobile toggle */}
          <div className="flex items-center gap-2">
            <Magnetic
              as="a"
              href="#contact"
              strength={0.2}
              onClick={() => handleNav("contact")}
              className="hidden md:inline-flex items-center gap-2 rounded-full bg-amber px-5 py-2.5 text-xs font-medium uppercase tracking-[0.14em] text-ink transition-colors hover:bg-amber-soft"
            >
              Let's talk
            </Magnetic>

            <button
              onClick={() => setOpen((v) => !v)}
              className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-full border border-cream/15 text-cream"
              aria-label={open ? "Close menu" : "Open menu"}
            >
              {open ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            <div
              className="absolute inset-0 bg-ink/95 backdrop-blur-xl"
              onClick={() => setOpen(false)}
            />
            <motion.nav
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="relative flex h-full flex-col items-center justify-center gap-2 px-6"
            >
              {navItems.map((item, i) => (
                <motion.button
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 * i + 0.1 }}
                  onClick={() => handleNav(item.id)}
                  className={cn(
                    "flex items-center gap-4 py-3 font-display text-3xl font-medium",
                    active === item.id ? "text-amber" : "text-cream/80"
                  )}
                >
                  <span className="font-mono-label text-xs text-cream/40">
                    {item.index}
                  </span>
                  {item.label}
                </motion.button>
              ))}
              <motion.a
                href="mailto:udayrajsaroj55@gmail.com"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="mt-8 rounded-full bg-amber px-6 py-3 text-sm font-medium uppercase tracking-[0.14em] text-ink"
              >
                Let's talk
              </motion.a>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
