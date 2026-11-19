import { MENTOR_SOURCES } from "@/modules/mentor/data/mentor";
import { ExternalLink } from "@/shared/components/common/external-link";
import { Stagger, StaggerItem } from "@/shared/motion/stagger";

export function SourceRanking() {
  return (
    <Stagger as="ol" className="max-w-2xl space-y-3">
      {MENTOR_SOURCES.map((s, i) => (
        <StaggerItem
          key={s.text}
          as="li"
          className="flex items-center gap-4 border-2 border-edge bg-card p-3 shadow-[3px_3px_0_0_var(--shadow-hard)]"
        >
          <span className="font-heading text-3xl text-signal">{i + 1}</span>
          <span className="flex flex-wrap items-center gap-x-4 gap-y-1">
            {s.text}
            {s.links.map((l) => (
              <ExternalLink key={l.href} href={l.href}>
                {l.label}
              </ExternalLink>
            ))}
          </span>
        </StaggerItem>
      ))}
    </Stagger>
  );
}
