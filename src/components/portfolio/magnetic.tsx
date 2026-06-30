"use client";

import { useRef, ReactNode } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { cn } from "@/lib/utils";

type MagneticProps = {
  children: ReactNode;
  className?: string;
  strength?: number;
  as?: "div" | "button" | "a";
  href?: string;
  onClick?: () => void;
  ariaLabel?: string;
};

/**
 * Wraps children in a magnetic-effect container.
 * On mouse move, the element drifts slightly toward the cursor.
 */
export function Magnetic({
  children,
  className,
  strength = 0.35,
  as = "div",
  href,
  onClick,
  ariaLabel,
}: MagneticProps) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { damping: 18, stiffness: 220, mass: 0.4 });
  const sy = useSpring(y, { damping: 18, stiffness: 220, mass: 0.4 });

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const relX = e.clientX - (rect.left + rect.width / 2);
    const relY = e.clientY - (rect.top + rect.height / 2);
    x.set(relX * strength);
    y.set(relY * strength);
  };

  const handleLeave = () => {
    x.set(0);
    y.set(0);
  };

  const motionProps = {
    ref,
    style: { x: sx, y: sy },
    onMouseMove: handleMove,
    onMouseLeave: handleLeave,
    className,
    "aria-label": ariaLabel,
    onClick,
  };

  if (as === "a" && href) {
    return (
      <motion.a href={href} {...(motionProps as any)}>
        {children}
      </motion.a>
    );
  }
  if (as === "button") {
    return (
      <motion.button type="button" {...(motionProps as any)}>
        {children}
      </motion.button>
    );
  }
  return (
    <motion.div {...(motionProps as any)}>
      {children}
    </motion.div>
  );
}

type MagneticButtonProps = {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "solid" | "outline" | "ghost";
  tone?: "dark" | "light";
  className?: string;
  icon?: ReactNode;
  external?: boolean;
};

/**
 * Premium button with magnetic hover + arrow icon slide.
 */
export function MagneticButton({
  children,
  href,
  onClick,
  variant = "solid",
  tone = "light",
  className,
  icon,
  external,
}: MagneticButtonProps) {
  const isDark = tone === "dark";

  const base =
    "group relative inline-flex items-center justify-center gap-2.5 rounded-full px-6 py-3 text-sm font-medium tracking-wide transition-colors duration-300 overflow-hidden";

  const variants = {
    solid: isDark
      ? "bg-amber text-ink hover:bg-amber-soft"
      : "bg-ink text-cream hover:bg-ink/90",
    outline: isDark
      ? "border border-cream/20 text-cream hover:border-amber hover:text-amber"
      : "border border-ink/20 text-ink hover:border-ink hover:bg-ink hover:text-cream",
    ghost: isDark
      ? "text-cream/80 hover:text-amber"
      : "text-ink/80 hover:text-amber-deep",
  };

  const inner = (
    <>
      <span className="relative z-10">{children}</span>
      {icon && (
        <span className="relative z-10 transition-transform duration-300 group-hover:translate-x-1">
          {icon}
        </span>
      )}
    </>
  );

  return (
    <Magnetic
      as={href ? "a" : "button"}
      href={href}
      onClick={onClick}
      strength={0.25}
      className={cn(base, variants[variant], className)}
      ariaLabel={typeof children === "string" ? children : undefined}
    >
      {/* hover fill */}
      <span
        className={cn(
          "absolute inset-0 -z-0 origin-left scale-x-0 transition-transform duration-500 ease-out group-hover:scale-x-100",
          isDark ? "bg-cream/10" : "bg-amber/20"
        )}
      />
      {inner}
      {external && (
        <span className="sr-only">opens in a new tab</span>
      )}
    </Magnetic>
  );
}
