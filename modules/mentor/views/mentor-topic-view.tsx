import { notFound } from "next/navigation";

import { ExampleAnswer } from "@/modules/mentor/components/example-answer";
import { GuardrailList } from "@/modules/mentor/components/guardrail-list";
import { MentorGraph } from "@/modules/mentor/components/mentor-graph";
import { SourceRanking } from "@/modules/mentor/components/source-ranking";
import { MENTOR_NAV, MENTOR_TOPIC_INTROS, MENTOR_TOPICS, type MentorTopicSlug } from "@/modules/mentor/data/mentor";
import { SafeSection } from "@/shared/components/common/safe-section";
import { pagerFor, TopicPage } from "@/shared/components/layout/topic-page";

export const MENTOR_SUBNAV = [
  { href: "/mentor", label: MENTOR_NAV.overview },
  ...MENTOR_TOPICS.map((t) => ({ href: `/mentor/${t.slug}`, label: t.title })),
];

function Body({ slug }: { slug: MentorTopicSlug }) {
  switch (slug) {
    case "sources":
      return <SourceRanking />;
    case "how-it-answers":
      return (
        <>
          <SafeSection>
            <MentorGraph />
          </SafeSection>
          <ExampleAnswer />
        </>
      );
    case "guardrails":
      return <GuardrailList />;
  }
}

export function MentorTopicView({ slug }: { slug: string }) {
  const topic = MENTOR_TOPICS.find((t) => t.slug === slug);
  if (!topic) notFound();
  return (
    <TopicPage
      intro={MENTOR_TOPIC_INTROS[topic.slug]}
      nav={{ items: MENTOR_SUBNAV, label: MENTOR_NAV.label }}
      pager={pagerFor(
        MENTOR_TOPICS,
        topic.slug,
        (t) => `/mentor/${t.slug}`,
        (t) => t.title,
      )}
    >
      <Body slug={topic.slug} />
    </TopicPage>
  );
}
