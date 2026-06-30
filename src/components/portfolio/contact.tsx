"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { ArrowUpRight, Copy, Check, Github, Linkedin, Mail, Phone, MapPin } from "lucide-react";
import { personal } from "@/lib/portfolio-data";
import { AnimatedTextOnScroll } from "./animated-text";
import { Magnetic, MagneticButton } from "./magnetic";
import { toast } from "sonner";

export function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(personal.email);
      setCopied(true);
      toast.success("Email copied to clipboard");
      setTimeout(() => setCopied(false), 2000);
    } catch {
      toast.error("Couldn't copy — please copy manually");
    }
  };

  const socials = [
    {
      icon: Github,
      label: "GitHub",
      handle: "@udayrajsaroj",
      href: "https://github.com/udayrajsaroj",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      handle: "in/udayraj-saroj",
      href: "https://www.linkedin.com/in/udayraj-saroj",
    },
    {
      icon: Mail,
      label: "Email",
      handle: personal.email,
      href: `mailto:${personal.email}`,
    },
    {
      icon: Phone,
      label: "Phone",
      handle: personal.phone,
      href: `tel:${personal.phone.replace(/\s/g, "")}`,
    },
  ];

  return (
    <section
      id="contact"
      className="grain relative bg-ink text-cream py-24 sm:py-32 lg:py-40 overflow-hidden"
    >
      {/* Glows */}
      <div className="pointer-events-none absolute top-0 left-1/4 h-[500px] w-[500px] rounded-full bg-amber/15 blur-[150px]" />
      <div className="pointer-events-none absolute bottom-0 right-1/4 h-[400px] w-[400px] rounded-full bg-amber-deep/10 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        {/* Status badge */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
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

        {/* Big headline */}
        <div className="mt-10 max-w-5xl">
          <AnimatedTextOnScroll
            text="Let's build something worth shipping."
            as="h2"
            className="font-display text-5xl sm:text-7xl lg:text-8xl font-semibold leading-[0.95] tracking-tight text-cream"
          />
          <AnimatedTextOnScroll
            text="Open to SDE, cyber/infra, internships, and remote."
            as="p"
            delay={0.3}
            className="mt-6 block font-display text-2xl sm:text-3xl italic text-amber-grad font-medium"
          />
        </div>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-8 max-w-2xl text-base sm:text-lg leading-relaxed text-cream/70 text-pretty"
        >
          {personal.availability.detail}. If you're hiring for a role that values
          someone who can both ship features and reason about access control, I'd
          love to hear from you.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-10 flex flex-wrap items-center gap-3"
        >
          <MagneticButton
            href={`mailto:${personal.email}`}
            variant="solid"
            tone="dark"
            icon={<ArrowUpRight size={16} />}
          >
            Send an email
          </MagneticButton>
          <MagneticButton onClick={copyEmail} variant="outline" tone="dark" icon={copied ? <Check size={16} /> : <Copy size={16} />}>
            {copied ? "Copied" : "Copy email"}
          </MagneticButton>
        </motion.div>

        {/* Socials grid */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {socials.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <Magnetic
                as="a"
                href={s.href}
                target={s.href.startsWith("http") ? "_blank" : undefined}
                rel={s.href.startsWith("http") ? "noopener noreferrer" : undefined}
                strength={0.15}
                className="group flex h-full flex-col justify-between gap-6 rounded-2xl border border-cream/10 bg-cream/[0.02] p-5 transition-colors hover:border-amber/40 hover:bg-cream/[0.04]"
              >
                <div className="flex items-center justify-between">
                  <s.icon size={22} strokeWidth={1.5} className="text-cream/60 group-hover:text-amber transition-colors" />
                  <ArrowUpRight
                    size={16}
                    strokeWidth={1.5}
                    className="text-cream/30 group-hover:text-amber transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </div>
                <div>
                  <div className="font-mono-label text-[10px] uppercase tracking-[0.16em] text-cream/40">
                    {s.label}
                  </div>
                  <div className="mt-1 text-sm text-cream/90 truncate">
                    {s.handle}
                  </div>
                </div>
              </Magnetic>
            </motion.div>
          ))}
        </div>

        {/* Location pill */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-10 inline-flex items-center gap-2.5 font-mono-label text-xs uppercase tracking-[0.16em] text-cream/50"
        >
          <MapPin size={13} strokeWidth={1.5} className="text-amber" />
          {personal.location} · IST (UTC+5:30)
        </motion.div>
      </div>
    </section>
  );
}
