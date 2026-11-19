import { MergeTable } from "@/modules/workflows/components/merge-table";
import { StrategyTable } from "@/modules/workflows/components/strategy-table";
import {
  WF_LANE_LABELS,
  WF_LANES,
  WF_LIFECYCLE,
  WF_LIFECYCLE_LABEL,
  WF_LIFECYCLE_NODES,
  WF_MERGES,
  WF_REBASE,
  WF_REBASE_ALT,
  WF_REBASE_PANELS,
  WF_RELEASE,
  WF_RELEASE_LABEL,
  WF_RELEASE_NODES,
  WF_STRATEGIES,
  WF_UNDO,
  WF_UNDO_LABELS,
  WF_UNDO_TREE,
  WORKFLOWS_CTA,
  WORKFLOWS_HERO,
} from "@/modules/workflows/data/workflows";
import { PageMain } from "@/shared/components/common/page-main";
import { DecisionTree } from "@/shared/components/diagrams/decision-tree";
import { Flowchart } from "@/shared/components/diagrams/flowchart";
import { LaneDiagram } from "@/shared/components/diagrams/lane-diagram";
import { MergeRebaseDiagram } from "@/shared/components/diagrams/merge-rebase-diagram";
import { PageIntro } from "@/shared/components/hero/page-intro";
import { CtaSection } from "@/shared/components/section/cta-section";
import { Section } from "@/shared/components/section/section";

export function WorkflowsView() {
  return (
    <PageMain>
      <PageIntro copy={WORKFLOWS_HERO} />
      <Section copy={WF_STRATEGIES}>
        <StrategyTable />
      </Section>
      <Section copy={WF_LANES}>
        <LaneDiagram labels={WF_LANE_LABELS} />
      </Section>
      <Section copy={WF_MERGES}>
        <MergeTable />
      </Section>
      <Section copy={WF_REBASE}>
        <MergeRebaseDiagram panels={WF_REBASE_PANELS} alt={WF_REBASE_ALT} />
      </Section>
      <Section copy={WF_LIFECYCLE}>
        <Flowchart label={WF_LIFECYCLE_LABEL} nodes={WF_LIFECYCLE_NODES} perRow={4} />
      </Section>
      <Section copy={WF_UNDO}>
        <DecisionTree tree={WF_UNDO_TREE} labels={WF_UNDO_LABELS} label={WF_UNDO_LABELS.group} />
      </Section>
      <Section copy={WF_RELEASE}>
        <Flowchart label={WF_RELEASE_LABEL} nodes={WF_RELEASE_NODES} perRow={4} />
      </Section>
      <CtaSection copy={WORKFLOWS_CTA} />
    </PageMain>
  );
}
