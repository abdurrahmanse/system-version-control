import { MENTOR_RULES } from "@/modules/mentor/data/mentor";
import { CardGrid } from "@/shared/components/cards/card-grid";
import { InfoCard } from "@/shared/components/cards/info-card";

export function RuleGrid() {
  return (
    <CardGrid>
      {MENTOR_RULES.map((r) => (
        <InfoCard key={r.title} icon={r.icon} title={r.title} text={r.text} href={r.href} />
      ))}
    </CardGrid>
  );
}
