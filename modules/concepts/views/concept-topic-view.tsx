import { notFound } from "next/navigation";

import { AreasFlow } from "@/modules/concepts/components/areas-flow";
import { BranchDiagram } from "@/modules/concepts/components/branch-diagram";
import { CommandsTabs } from "@/modules/concepts/components/commands-tabs";
import { MistakesCarousel } from "@/modules/concepts/components/mistakes-carousel";
import { ResetModes } from "@/modules/concepts/components/reset-modes";
import {
  CONCEPT_TOPIC_INTROS,
  CONCEPT_TOPICS,
  CONCEPTS_NAV,
  CONCEPTS_VS_CARDS,
  type ConceptTopicSlug,
  MISTAKES,
  ONE_CHANGE,
  VOCAB,
} from "@/modules/concepts/data/concepts";
import { CardGrid } from "@/shared/components/cards/card-grid";
import { InfoCard } from "@/shared/components/cards/info-card";
import { Flowchart } from "@/shared/components/diagrams/flowchart";
import { pagerFor, TopicPage } from "@/shared/components/layout/topic-page";

const NAV = [
  { href: "/concepts", label: CONCEPTS_NAV.overview },
  ...CONCEPT_TOPICS.map((t) => ({ href: `/concepts/${t.slug}`, label: t.title })),
];

function Body({ slug }: { slug: ConceptTopicSlug }) {
  switch (slug) {
    case "git-vs-github":
      return (
        <CardGrid className="md:grid-cols-2 lg:grid-cols-2">
          {CONCEPTS_VS_CARDS.map((c) => (
            <InfoCard key={c.title} icon={c.icon} title={c.title} text={c.text} href={c.href} />
          ))}
        </CardGrid>
      );
    case "four-places":
      return <AreasFlow />;
    case "history":
      return (
        <>
          <BranchDiagram />
          <CardGrid>
            {VOCAB.map((v) => (
              <InfoCard key={v.title} icon={v.icon} title={v.title} text={v.text} href={v.href} />
            ))}
          </CardGrid>
        </>
      );
    case "commands":
      return <CommandsTabs />;
    case "reset":
      return <ResetModes />;
    case "one-change":
      return <Flowchart label={ONE_CHANGE.label} nodes={ONE_CHANGE.nodes} perRow={3} />;
    case "mistakes":
      return <MistakesCarousel items={MISTAKES.items} />;
  }
}

export function ConceptTopicView({ slug }: { slug: string }) {
  const topic = CONCEPT_TOPICS.find((t) => t.slug === slug);
  if (!topic) notFound();
  return (
    <TopicPage
      intro={CONCEPT_TOPIC_INTROS[topic.slug]}
      nav={{ items: NAV, label: CONCEPTS_NAV.label }}
      pager={pagerFor(
        CONCEPT_TOPICS,
        topic.slug,
        (t) => `/concepts/${t.slug}`,
        (t) => t.title,
      )}
    >
      <Body slug={topic.slug} />
    </TopicPage>
  );
}
