"use client";

import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  /** Seconds of stagger, for cascading a group of siblings. */
  delay?: number;
  className?: string;
  as?: "div" | "li" | "section";
};

/**
 * Scroll entry for section content. Motivation: sequence. Sections resolve as the
 * reader arrives at them rather than all at once on load, which keeps the reading
 * order obvious on a long page. Collapses to static under reduced motion.
 */
export function Reveal({ children, delay = 0, className, as = "div" }: RevealProps) {
  const reduce = useReducedMotion();
  const Component = motion[as];

  return (
    <Component
      className={className}
      initial={reduce ? false : { opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </Component>
  );
}
