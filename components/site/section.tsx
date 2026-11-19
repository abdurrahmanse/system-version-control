import type { LucideIcon } from "lucide-react";
import type { ReactNode } from "react";

type SectionProps = {
  icon: LucideIcon;
  numeral: string;
  eyebrow?: string;
  title: string;
  description?: string;
  children: ReactNode;
};

// Classical numbered section: roman numeral, serif title, double rule.
export function Section({ icon: Icon, numeral, eyebrow, title, description, children }: SectionProps) {
  return (
    <section className="border-t-4 border-double border-foreground">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <div className="mb-12 grid gap-6 md:grid-cols-[auto_1fr] md:items-end">
          <span className="font-heading text-7xl font-semibold leading-none text-signal sm:text-8xl">{numeral}</span>
          <div className="max-w-2xl">
            <p className="mb-3 flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
              <Icon className="size-4" />
              {eyebrow}
            </p>
            <h2 className="text-balance font-heading text-3xl font-semibold tracking-tight sm:text-5xl">{title}</h2>
            {description ? <p className="mt-3 text-balance text-muted-foreground">{description}</p> : null}
          </div>
        </div>
        {children}
      </div>
    </section>
  );
}

// Square icon tile used inside cards.
export function IconTile({ icon: Icon }: { icon: LucideIcon }) {
  return (
    <span className="mb-3 flex size-10 items-center justify-center border-2 border-foreground bg-secondary text-foreground">
      <Icon className="size-5" />
    </span>
  );
}
