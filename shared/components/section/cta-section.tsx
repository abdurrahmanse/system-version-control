import { ArrowRight } from "lucide-react";
import Link from "next/link";

import { Container } from "@/shared/components/layout/container";
import { Reveal } from "@/shared/motion/reveal";
import type { CtaCopy } from "@/shared/types/content";
import { Button } from "@/shared/ui/button";

export function CtaSection({ copy }: { copy: CtaCopy }) {
  const Icon = copy.icon;
  return (
    <section className="border-t-4 border-double border-edge">
      <Container className="py-24">
        <Reveal className="mx-auto flex max-w-3xl flex-col items-center gap-4 text-center">
          <span className="flex size-14 items-center justify-center border-2 border-edge bg-signal text-primary-foreground shadow-[4px_4px_0_0_var(--shadow-hard)]">
            <Icon className="size-6" />
          </span>
          <h2 className="font-heading text-4xl font-bold tracking-tight text-balance sm:text-5xl">{copy.title}</h2>
          <p className="text-balance text-muted-foreground">{copy.description}</p>
          <Button asChild size="lg" className="mt-2 h-11 px-5">
            <Link href={copy.href}>
              {copy.label}
              <ArrowRight data-icon="inline-end" />
            </Link>
          </Button>
        </Reveal>
      </Container>
    </section>
  );
}
