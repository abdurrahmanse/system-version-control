import Link from "next/link";
import { ArrowRight, type LucideIcon } from "lucide-react";

import { Button } from "@/components/ui/button";

export function CtaSection({
  icon: Icon,
  title,
  description,
  href,
  label,
}: {
  icon: LucideIcon;
  title: string;
  description: string;
  href: string;
  label: string;
}) {
  return (
    <section className="border-t-4 border-double border-foreground">
      <div className="mx-auto flex max-w-3xl flex-col items-center gap-4 px-4 py-24 text-center sm:px-6">
        <span className="flex size-14 items-center justify-center border-2 border-foreground bg-signal text-primary-foreground shadow-[4px_4px_0_0_var(--foreground)]">
          <Icon className="size-6" />
        </span>
        <h2 className="text-balance font-heading text-4xl font-semibold tracking-tight sm:text-5xl">{title}</h2>
        <p className="text-balance text-muted-foreground">{description}</p>
        <Button asChild size="lg" className="mt-2 h-11 px-5">
          <Link href={href}>
            {label}
            <ArrowRight data-icon="inline-end" />
          </Link>
        </Button>
      </div>
    </section>
  );
}
