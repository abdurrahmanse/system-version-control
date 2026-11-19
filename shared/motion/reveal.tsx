"use client";

import * as m from "motion/react-m";
import type { ReactNode } from "react";

import { type Direction, MOTION } from "@/shared/motion/config";
import { offsetFor } from "@/shared/motion/variants";

type RevealProps = { children: ReactNode; direction?: Direction; delay?: number; className?: string };

// Fades and slides content in once when it scrolls into view.
// Server and client always render the same element (hydration-safe). Users who prefer reduced
// motion are handled by <MotionConfig reducedMotion="user"> in the provider: transforms are
// skipped and only the fade remains.
export function Reveal({ children, direction = "bottom", delay = 0, className }: RevealProps) {
  return (
    <m.div
      className={className}
      initial={{ opacity: 0, ...offsetFor(direction) }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: MOTION.duration, delay, ease: MOTION.ease }}
    >
      {children}
    </m.div>
  );
}
