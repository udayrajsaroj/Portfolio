"use client";

import { motion } from "framer-motion";
import { personal } from "@/lib/portfolio-data";

/**
 * Abstract SVG "portrait" — composed of layered concentric rings,
 * a generative gradient orb, and rotating dashed circles. Replaces
 * a profile photo with something more distinctive and on-brand.
 */
export function AbstractPortrait() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.85 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.2, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="relative aspect-square w-[280px] sm:w-[340px] lg:w-[380px]"
    >
      {/* Glow behind */}
      <div className="absolute inset-0 rounded-full bg-amber/20 blur-[80px]" />

      <svg
        viewBox="0 0 400 400"
        className="relative h-full w-full"
        aria-label={`Abstract portrait for ${personal.name}`}
      >
        <defs>
          <radialGradient id="orb-grad" cx="35%" cy="30%" r="80%">
            <stop offset="0%" stopColor="#ffd07a" />
            <stop offset="40%" stopColor="#ffb627" />
            <stop offset="80%" stopColor="#c98a0c" />
            <stop offset="100%" stopColor="#0a0a0a" />
          </radialGradient>

          <linearGradient id="ring-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ffb627" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#ffb627" stopOpacity="0.1" />
          </linearGradient>

          <linearGradient id="ring-grad-2" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#faf7f2" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#faf7f2" stopOpacity="0.05" />
          </linearGradient>

          <filter id="soft-glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="6" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Outermost dashed ring — slow reverse spin */}
        <g
          className="animate-slow-spin-rev"
          style={{ transformOrigin: "200px 200px" }}
        >
          <circle
            cx="200"
            cy="200"
            r="190"
            fill="none"
            stroke="url(#ring-grad-2)"
            strokeWidth="1"
            strokeDasharray="2 8"
          />
        </g>

        {/* Mid ring with ticks */}
        <g
          className="animate-slow-spin"
          style={{ transformOrigin: "200px 200px" }}
        >
          <circle
            cx="200"
            cy="200"
            r="170"
            fill="none"
            stroke="url(#ring-grad)"
            strokeWidth="1"
            strokeDasharray="1 4"
          />
          {Array.from({ length: 36 }).map((_, i) => {
            const angle = (i * 10 * Math.PI) / 180;
            const r1 = 168;
            const r2 = i % 3 === 0 ? 158 : 163;
            const x1 = 200 + r1 * Math.cos(angle);
            const y1 = 200 + r1 * Math.sin(angle);
            const x2 = 200 + r2 * Math.cos(angle);
            const y2 = 200 + r2 * Math.sin(angle);
            return (
              <line
                key={i}
                x1={x1}
                y1={y1}
                x2={x2}
                y2={y2}
                stroke="#ffb627"
                strokeOpacity={i % 3 === 0 ? 0.8 : 0.3}
                strokeWidth="1"
              />
            );
          })}
        </g>

        {/* Inner ring */}
        <circle
          cx="200"
          cy="200"
          r="148"
          fill="none"
          stroke="#faf7f2"
          strokeOpacity="0.08"
          strokeWidth="1"
        />

        {/* The orb — main visual anchor */}
        <motion.g
          animate={{
            scale: [1, 1.02, 1],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{ transformOrigin: "200px 200px" }}
        >
          <circle
            cx="200"
            cy="200"
            r="130"
            fill="url(#orb-grad)"
            filter="url(#soft-glow)"
          />
          {/* Specular highlight */}
          <ellipse
            cx="170"
            cy="160"
            rx="48"
            ry="32"
            fill="#faf7f2"
            opacity="0.25"
            transform="rotate(-25 170 160)"
          />
        </motion.g>

        {/* Monogram inside orb */}
        <text
          x="200"
          y="222"
          textAnchor="middle"
          className="font-display"
          fontFamily="var(--font-playfair), Georgia, serif"
          fontSize="92"
          fontWeight="700"
          fill="#0a0a0a"
          opacity="0.9"
        >
          {personal.initials}
        </text>

        {/* Floating accent dots */}
        <motion.circle
          cx="80"
          cy="120"
          r="4"
          fill="#ffb627"
          animate={{ y: [0, -10, 0], opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.circle
          cx="330"
          cy="280"
          r="3"
          fill="#ffd07a"
          animate={{ y: [0, 8, 0], opacity: [0.3, 0.9, 0.3] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
        <motion.circle
          cx="340"
          cy="80"
          r="2"
          fill="#faf7f2"
          animate={{ y: [0, -6, 0], opacity: [0.2, 0.8, 0.2] }}
          transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        />

        {/* Corner brackets — framing */}
        <g stroke="#ffb627" strokeWidth="1" fill="none" opacity="0.5">
          <path d="M 30 60 L 30 30 L 60 30" />
          <path d="M 340 30 L 370 30 L 370 60" />
          <path d="M 370 340 L 370 370 L 340 370" />
          <path d="M 60 370 L 30 370 L 30 340" />
        </g>

        {/* Coordinate labels */}
        <text
          x="30"
          y="22"
          className="font-mono-label"
          fontFamily="var(--font-jetbrains), monospace"
          fontSize="8"
          fill="#faf7f2"
          opacity="0.4"
        >
          19.42°N
        </text>
        <text
          x="370"
          y="22"
          textAnchor="end"
          className="font-mono-label"
          fontFamily="var(--font-jetbrains), monospace"
          fontSize="8"
          fill="#faf7f2"
          opacity="0.4"
        >
          72.82°E
        </text>
        <text
          x="30"
          y="388"
          className="font-mono-label"
          fontFamily="var(--font-jetbrains), monospace"
          fontSize="8"
          fill="#faf7f2"
          opacity="0.4"
        >
          MUMBAI · IN
        </text>
        <text
          x="370"
          y="388"
          textAnchor="end"
          className="font-mono-label"
          fontFamily="var(--font-jetbrains), monospace"
          fontSize="8"
          fill="#faf7f2"
          opacity="0.4"
        >
          v2.0 · 2026
        </text>
      </svg>
    </motion.div>
  );
}
