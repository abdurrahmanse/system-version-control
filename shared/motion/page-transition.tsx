"use client";

import * as m from "motion/react-m";
import { usePathname } from "next/navigation";
import type { ReactNode } from "react";

import { MOTION } from "@/shared/motion/config";
import { directionFor, offsetFor } from "@/shared/motion/variants";

// Slides the page in from the side configured for its route.
// Only transform is animated, so content is visible immediately (no flash, no JS required).
export function PageTransition({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const offset = offsetFor(directionFor(pathname));
  return (
    <m.div
      initial={offset}
      animate={{ x: 0, y: 0 }}
      transition={{ duration: MOTION.duration, ease: MOTION.ease }}
      className="flex flex-1 flex-col"
    >
      {children}
    </m.div>
  );
}
