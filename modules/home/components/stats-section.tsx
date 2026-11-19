import { LESSONS, LEVELS, STEPS } from "@/modules/curriculum";
import { HOME_STATS } from "@/modules/home/data/home";
import { getPackageCount } from "@/modules/toolbox";
import { CardGrid } from "@/shared/components/cards/card-grid";
import { StatCard } from "@/shared/components/cards/stat-card";
import { Section } from "@/shared/components/section/section";

const VALUES: Record<string, number> = {
  lessons: LESSONS.length,
  steps: STEPS.length,
  levels: LEVELS.length,
  packages: getPackageCount(),
};

export function StatsSection() {
  return (
    <Section copy={HOME_STATS}>
      <CardGrid className="lg:grid-cols-4">
        {HOME_STATS.items.map((item) => (
          <StatCard key={item.key} icon={item.icon} value={VALUES[item.key] ?? 0} label={item.label} href={item.href} />
        ))}
      </CardGrid>
    </Section>
  );
}
