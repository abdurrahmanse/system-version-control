import { HOME_METHOD } from "@/modules/home/data/home";
import { CardGrid } from "@/shared/components/cards/card-grid";
import { InfoCard } from "@/shared/components/cards/info-card";
import { Section } from "@/shared/components/section/section";

export function MethodSection() {
  return (
    <Section copy={HOME_METHOD}>
      <CardGrid className="lg:grid-cols-4">
        {HOME_METHOD.steps.map((s, i) => (
          <InfoCard key={s.title} icon={s.icon} title={`0${i + 1} · ${s.title}`} text={s.text} href={s.href} />
        ))}
      </CardGrid>
    </Section>
  );
}
