import { PackageChart } from "@/modules/toolbox/components/package-chart";
import { PackageGraph } from "@/modules/toolbox/components/package-graph";
import { PackageGroupCard } from "@/modules/toolbox/components/package-group-card";
import { PACKAGE_GROUPS } from "@/modules/toolbox/data/packages";
import {
  PACKAGES_CATALOG,
  PACKAGES_CHART,
  PACKAGES_GRAPH,
  PACKAGES_HERO,
  PACKAGES_NAV,
} from "@/modules/toolbox/data/toolbox";
import { groupSlug } from "@/modules/toolbox/lib/package-graph";
import { CardGrid } from "@/shared/components/cards/card-grid";
import { SafeSection } from "@/shared/components/common/safe-section";
import { TopicPage } from "@/shared/components/layout/topic-page";
import { SectionHeader } from "@/shared/components/section/section-header";

export const PACKAGES_SUBNAV = [
  { href: "/packages", label: PACKAGES_NAV.overview },
  ...PACKAGE_GROUPS.map((g) => ({ href: `/packages/${groupSlug(g.title)}`, label: g.title })),
];

// Hub: the connection graph, a chart and one card per category (each category has its own page).
export function ToolboxView() {
  return (
    <TopicPage intro={PACKAGES_HERO} nav={{ items: PACKAGES_SUBNAV, label: PACKAGES_NAV.label }}>
      <section>
        <SectionHeader copy={PACKAGES_GRAPH} />
        <SafeSection>
          <PackageGraph />
        </SafeSection>
      </section>
      <section>
        <SectionHeader copy={PACKAGES_CHART} />
        <SafeSection>
          <PackageChart />
        </SafeSection>
      </section>
      <section>
        <SectionHeader copy={PACKAGES_CATALOG} />
        <CardGrid>
          {PACKAGE_GROUPS.map((g) => (
            <PackageGroupCard key={g.title} group={g} href={`/packages/${groupSlug(g.title)}`} />
          ))}
        </CardGrid>
      </section>
    </TopicPage>
  );
}
