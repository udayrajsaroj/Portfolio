"use client";

import { motion, useScroll, useSpring } from "framer-motion";

/**
 * Top scroll progress bar — amber gradient that fills as user scrolls.
 */
export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[2px] origin-left z-[100]"
      style={{
        scaleX,
        background:
          "linear-gradient(90deg, #c98a0c 0%, #ffb627 50%, #ffd07a 100%)",
      }}
      aria-hidden
    />
  );
}
