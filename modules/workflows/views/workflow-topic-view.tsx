import { notFound } from "next/navigation";

import { MergeCards } from "@/modules/workflows/components/merge-cards";
import { StrategyPicker } from "@/modules/workflows/components/strategy-picker";
import {
  WF_LANE_LABELS,
  WF_LIFECYCLE_LABEL,
  WF_LIFECYCLE_NODES,
  WF_NAV,
  WF_REBASE_ALT,
  WF_REBASE_PANELS,
  WF_RELEASE_LABEL,
  WF_RELEASE_NODES,
  WF_TOPIC_INTROS,
  WF_TOPICS,
  WF_UNDO_LABELS,
  WF_UNDO_TREE,
  type WorkflowTopicSlug,
} from "@/modules/workflows/data/workflows";
import { DecisionTree } from "@/shared/components/diagrams/decision-tree";
import { Flowchart } from "@/shared/components/diagrams/flowchart";
import { LaneDiagram } from "@/shared/components/diagrams/lane-diagram";
import { MergeRebaseDiagram } from "@/shared/components/diagrams/merge-rebase-diagram";
import { pagerFor, TopicPage } from "@/shared/components/layout/topic-page";

export const WF_SUBNAV = [
  { href: "/workflows", label: WF_NAV.overview },
  ...WF_TOPICS.map((t) => ({ href: `/workflows/${t.slug}`, label: t.title })),
];

function Body({ slug }: { slug: WorkflowTopicSlug }) {
  switch (slug) {
    case "strategies":
      return <StrategyPicker />;
    case "github-flow":
      return <LaneDiagram labels={WF_LANE_LABELS} />;
    case "merging":
      return (
        <>
          <MergeCards />
          <MergeRebaseDiagram panels={WF_REBASE_PANELS} alt={WF_REBASE_ALT} />
        </>
      );
    case "pull-requests":
      return <Flowchart label={WF_LIFECYCLE_LABEL} nodes={WF_LIFECYCLE_NODES} perRow={4} />;
    case "undo":
      return <DecisionTree tree={WF_UNDO_TREE} labels={WF_UNDO_LABELS} label={WF_UNDO_LABELS.group} />;
    case "releasing":
      return <Flowchart label={WF_RELEASE_LABEL} nodes={WF_RELEASE_NODES} perRow={4} />;
  }
}

export function WorkflowTopicView({ slug }: { slug: string }) {
  const topic = WF_TOPICS.find((t) => t.slug === slug);
  if (!topic) notFound();
  return (
    <TopicPage
      intro={WF_TOPIC_INTROS[topic.slug]}
      nav={{ items: WF_SUBNAV, label: WF_NAV.label }}
      pager={pagerFor(
        WF_TOPICS,
        topic.slug,
        (t) => `/workflows/${t.slug}`,
        (t) => t.title,
      )}
    >
      <Body slug={topic.slug} />
    </TopicPage>
  );
}
