"use client";

import { useScroll } from "motion/react";
import * as m from "motion/react-m";

// Thin accent bar at the top showing how far down the page you are.
export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  return (
    <m.div
      aria-hidden
      style={{ scaleX: scrollYProgress }}
      className="fixed inset-x-0 top-0 z-[60] h-0.5 origin-left bg-signal"
    />
  );
}
