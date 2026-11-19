import type { ReactNode } from "react";

import { Container } from "@/shared/components/layout/container";
import { SectionHeader } from "@/shared/components/section/section-header";
import { Reveal } from "@/shared/motion/reveal";
import type { SectionCopy } from "@/shared/types/content";

// Classical numbered section: roman numeral, serif title, double rule. Reveals on scroll.
export function Section({ copy, children, id }: { copy: SectionCopy; children: ReactNode; id?: string }) {
  return (
    <section id={id} className="border-t-4 border-double border-edge">
      <Container className="py-20">
        <Reveal>
          <SectionHeader copy={copy} />
        </Reveal>
        {children}
      </Container>
    </section>
  );
}
