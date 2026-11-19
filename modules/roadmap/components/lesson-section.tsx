import type { ReactNode } from "react";

import { Reveal } from "@/shared/motion/reveal";

export function LessonSection({ title, children }: { title: string; children: ReactNode }) {
  return (
    <Reveal>
      <section className="border-t-4 border-double border-edge pt-8">
        <h2 className="mb-6 font-heading text-3xl font-bold tracking-tight">{title}</h2>
        {children}
      </section>
    </Reveal>
  );
}
