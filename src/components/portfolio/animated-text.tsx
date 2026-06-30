"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type AnimatedTextProps = {
  text: string;
  className?: string;
  delay?: number;
  stagger?: number;
  as?: "h1" | "h2" | "h3" | "p" | "span";
};

/**
 * Word-by-word reveal animation for headlines.
 * Each word fades + rises with a stagger.
 */
export function AnimatedText({
  text,
  className,
  delay = 0,
  stagger = 0.08,
  as = "h1",
}: AnimatedTextProps) {
  const words = text.split(" ");
  const Tag = motion[as] as typeof motion.h1;

  return (
    <Tag
      className={cn("inline-block", className)}
      initial="hidden"
      animate="visible"
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: stagger,
            delayChildren: delay,
          },
        },
      }}
    >
      {words.map((word, i) => (
        <motion.span
          key={`${word}-${i}`}
          className="inline-block whitespace-nowrap"
          variants={{
            hidden: { opacity: 0, y: "0.6em", filter: "blur(8px)" },
            visible: {
              opacity: 1,
              y: 0,
              filter: "blur(0px)",
              transition: {
                duration: 0.7,
                ease: [0.22, 1, 0.36, 1],
              },
            },
          }}
        >
          {word}
          {i < words.length - 1 ? "\u00A0" : ""}
        </motion.span>
      ))}
    </Tag>
  );
}

/**
 * Reveal-on-scroll variant. Use inside scroll-triggered sections.
 */
export function AnimatedTextOnScroll({
  text,
  className,
  delay = 0,
  stagger = 0.06,
  as = "h2",
}: AnimatedTextProps) {
  const words = text.split(" ");
  const Tag = motion[as] as typeof motion.h2;

  return (
    <Tag
      className={cn("inline-block", className)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: stagger,
            delayChildren: delay,
          },
        },
      }}
    >
      {words.map((word, i) => (
        <motion.span
          key={`${word}-${i}`}
          className="inline-block whitespace-nowrap"
          variants={{
            hidden: { opacity: 0, y: "0.5em", filter: "blur(6px)" },
            visible: {
              opacity: 1,
              y: 0,
              filter: "blur(0px)",
              transition: {
                duration: 0.6,
                ease: [0.22, 1, 0.36, 1],
              },
            },
          }}
        >
          {word}
          {i < words.length - 1 ? "\u00A0" : ""}
        </motion.span>
      ))}
    </Tag>
  );
}
