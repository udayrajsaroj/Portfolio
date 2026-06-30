"use client";

import { useSyncExternalStore, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

/**
 * Subscribe to whether the current pointer is "fine" (mouse vs touch).
 * Uses useSyncExternalStore to stay SSR-safe and avoid setState-in-effect.
 */
function useFinePointer() {
  return useSyncExternalStore(
    (onChange) => {
      const mq = window.matchMedia("(pointer: fine)");
      mq.addEventListener("change", onChange);
      return () => mq.removeEventListener("change", onChange);
    },
    () => window.matchMedia("(pointer: fine)").matches,
    () => false // SSR snapshot
  );
}

/**
 * Magnetic cursor — desktop only (pointer: fine).
 * Renders a small amber dot that trails the mouse, plus a larger ring
 * that lags slightly behind. Hovering interactive elements grows the ring.
 */
export function MagneticCursor() {
  const enabled = useFinePointer();
  const [hovering, setHovering] = useState(false);
  const [hidden, setHidden] = useState(false);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const ringX = useSpring(cursorX, { damping: 22, stiffness: 280, mass: 0.6 });
  const ringY = useSpring(cursorY, { damping: 22, stiffness: 280, mass: 0.6 });

  // Attach mouse listeners only when enabled.
  useSyncExternalStore(
    () => {
      if (!enabled) return () => {};
      document.documentElement.classList.add("magnetic-active");

      const move = (e: MouseEvent) => {
        cursorX.set(e.clientX);
        cursorY.set(e.clientY);

        const target = e.target as HTMLElement;
        const interactive = target.closest(
          'a, button, [role="button"], [data-cursor="hover"], input, textarea, select'
        );
        setHovering(Boolean(interactive));
      };
      const leave = () => setHidden(true);
      const enter = () => setHidden(false);

      window.addEventListener("mousemove", move);
      document.addEventListener("mouseleave", leave);
      document.addEventListener("mouseenter", enter);

      return () => {
        window.removeEventListener("mousemove", move);
        document.removeEventListener("mouseleave", leave);
        document.removeEventListener("mouseenter", enter);
        document.documentElement.classList.remove("magnetic-active");
      };
    },
    () => null,
    () => null
  );

  if (!enabled) return null;

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-[9999]"
      style={{ opacity: hidden ? 0 : 1, transition: "opacity 200ms" }}
    >
      <motion.div
        className="fixed top-0 left-0 -translate-x-1/2 -translate-y-1/2 rounded-full border border-amber/60"
        style={{ x: ringX, y: ringY }}
        animate={{
          width: hovering ? 56 : 36,
          height: hovering ? 56 : 36,
          backgroundColor: hovering ? "rgba(255,182,39,0.12)" : "rgba(255,182,39,0)",
        }}
        transition={{ duration: 0.25, ease: "easeOut" }}
      />
      <motion.div
        className="fixed top-0 left-0 -translate-x-1/2 -translate-y-1/2 rounded-full bg-amber"
        style={{ x: cursorX, y: cursorY, width: 6, height: 6 }}
      />
    </div>
  );
}
