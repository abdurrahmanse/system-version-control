import { InfoHero } from "@/modules/info/components/info-hero";
import { ABOUT_HERO, ABOUT_SECTIONS, ABOUT_STACK, ABOUT_STACK_SECTION } from "@/modules/info/data/about";
import { CardGrid } from "@/shared/components/cards/card-grid";
import { InfoCard } from "@/shared/components/cards/info-card";
import { PageMain } from "@/shared/components/common/page-main";
import { Section } from "@/shared/components/section/section";
import { Badge } from "@/shared/ui/badge";

export function AboutView() {
  return (
    <PageMain>
      <InfoHero copy={ABOUT_HERO} />
      {ABOUT_SECTIONS.map((s) => (
        <Section key={s.copy.title} copy={s.copy}>
          <CardGrid>
            {s.items.map((i) => (
              <InfoCard key={i.title} icon={i.icon} title={i.title} text={i.text} />
            ))}
          </CardGrid>
        </Section>
      ))}
      <Section copy={ABOUT_STACK_SECTION}>
        <div className="flex flex-wrap gap-3">
          {ABOUT_STACK.map((t) => (
            <Badge key={t} variant="outline" className="h-8 px-3">
              {t}
            </Badge>
          ))}
        </div>
      </Section>
    </PageMain>
  );
}
