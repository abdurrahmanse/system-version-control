"use client";

import * as m from "motion/react-m";
import type { ReactNode } from "react";

import { MOTION } from "@/shared/motion/config";

const container = { hidden: {}, show: { transition: { staggerChildren: MOTION.stagger } } };
const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: MOTION.duration, ease: MOTION.ease } },
};

type StaggerProps = { children: ReactNode; className?: string; as?: "div" | "ol" | "ul" };
type ItemProps = { children: ReactNode; className?: string; as?: "div" | "li" };

// Children (StaggerItem) animate in one after another when the group enters the viewport.
// `as` keeps the markup semantic: render the group as <ol>/<ul> and the items as <li>.
// Same element on server and client (hydration-safe); reduced motion is handled by MotionConfig.
export function Stagger({ children, className, as = "div" }: StaggerProps) {
  const Tag = m[as];
  return (
    <Tag
      className={className}
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-60px" }}
    >
      {children}
    </Tag>
  );
}

export function StaggerItem({ children, className, as = "div" }: ItemProps) {
  const Tag = m[as];
  return (
    <Tag className={className} variants={item}>
      {children}
    </Tag>
  );
}
