import { NextStepCard } from "@/modules/path/components/next-step-card";
import { PathLevelCards } from "@/modules/path/components/path-level-cards";
import { PATH_HERO, PATH_LEVELS_SECTION, PATH_METHOD, PATH_NAV, PATH_NEXT } from "@/modules/path/data/path";
import { PATH_SUBNAV } from "@/modules/path/views/path-level-view";
import { SafeSection } from "@/shared/components/common/safe-section";
import { Flowchart } from "@/shared/components/diagrams/flowchart";
import { TopicPage } from "@/shared/components/layout/topic-page";
import { SectionHeader } from "@/shared/components/section/section-header";

// Hub: your next step, how a lesson works, and the four level pages. No long list.
export function PathView() {
  return (
    <TopicPage intro={PATH_HERO} nav={{ items: PATH_SUBNAV, label: PATH_NAV.label }}>
      <section>
        <SectionHeader copy={PATH_NEXT} />
        <SafeSection>
          <NextStepCard />
        </SafeSection>
      </section>
      <section>
        <SectionHeader copy={PATH_METHOD} />
        <Flowchart label={PATH_METHOD.label} nodes={PATH_METHOD.nodes} perRow={4} />
      </section>
      <section>
        <SectionHeader copy={PATH_LEVELS_SECTION} />
        <PathLevelCards />
      </section>
    </TopicPage>
  );
}
