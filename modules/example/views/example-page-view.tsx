import { notFound } from "next/navigation";

import { ExampleArchitectureGraph } from "@/modules/example/components/example-architecture-graph";
import { ExampleSteps } from "@/modules/example/components/example-steps";
import {
  BRANCH_GRAPH,
  BRANCH_RULES,
  CI_DEPLOY_FLOW,
  CI_DEPLOY_LABEL,
  CI_PR_FLOW,
  CI_PR_LABEL,
  DB_FLOW,
  DB_LABEL,
  FEATURE_FLOW,
  FEATURE_FLOW_LABEL,
  INCIDENT_LABELS,
  INCIDENT_TREE,
  PROTECT_FLOW,
  PROTECT_LABEL,
  RELEASE_FLOW,
  RELEASE_LABEL,
  REPO_FLOW,
  REPO_FLOW_LABEL,
  SECURITY_FLOW,
  SECURITY_LABEL,
} from "@/modules/example/data/diagrams";
import { EXAMPLE_COPY, EXAMPLE_PAGES, type ExampleSlug } from "@/modules/example/data/example";
import { EXAMPLE_STEPS } from "@/modules/example/data/steps";
import { exampleNav } from "@/modules/example/views/example-nav";
import { CardGrid } from "@/shared/components/cards/card-grid";
import { InfoCard } from "@/shared/components/cards/info-card";
import { BranchGraph } from "@/shared/components/diagrams/branch-graph";
import { DecisionTree } from "@/shared/components/diagrams/decision-tree";
import { Flowchart } from "@/shared/components/diagrams/flowchart";
import { pagerFor, TopicPage } from "@/shared/components/layout/topic-page";

function Diagrams({ slug }: { slug: ExampleSlug }) {
  switch (slug) {
    case "architecture":
      return <ExampleArchitectureGraph />;
    case "repository":
      return <Flowchart label={REPO_FLOW_LABEL} nodes={REPO_FLOW} perRow={4} />;
    case "branches":
      return (
        <>
          <BranchGraph data={BRANCH_GRAPH} />
          <CardGrid className="md:grid-cols-2 lg:grid-cols-4">
            {BRANCH_RULES.map((rule) => (
              <InfoCard key={rule.title} icon={rule.icon} title={rule.title} text={rule.text} />
            ))}
          </CardGrid>
        </>
      );
    case "feature-flow":
      return <Flowchart label={FEATURE_FLOW_LABEL} nodes={FEATURE_FLOW} perRow={4} />;
    case "ci-cd":
      return (
        <>
          <Flowchart label={CI_PR_LABEL} nodes={CI_PR_FLOW} perRow={4} />
          <Flowchart label={CI_DEPLOY_LABEL} nodes={CI_DEPLOY_FLOW} perRow={5} />
        </>
      );
    case "releases":
      return <Flowchart label={RELEASE_LABEL} nodes={RELEASE_FLOW} perRow={5} />;
    case "protection":
      return <Flowchart label={PROTECT_LABEL} nodes={PROTECT_FLOW} perRow={5} />;
    case "security":
      return <Flowchart label={SECURITY_LABEL} nodes={SECURITY_FLOW} perRow={5} />;
    case "database":
      return <Flowchart label={DB_LABEL} nodes={DB_FLOW} perRow={4} />;
    case "incidents":
      return <DecisionTree tree={INCIDENT_TREE} labels={INCIDENT_LABELS} label={INCIDENT_LABELS.group} />;
  }
}

// One example page: the diagram first, then the numbered commands with their results.
export function ExamplePageView({ slug }: { slug: string }) {
  const index = EXAMPLE_PAGES.findIndex((page) => page.slug === slug);
  const page = EXAMPLE_PAGES[index];
  if (!page) notFound();

  const next = EXAMPLE_PAGES[index + 1];
  return (
    <TopicPage
      intro={{
        badge: EXAMPLE_COPY.stepBadge(index + 1, EXAMPLE_PAGES.length),
        icon: page.icon,
        title: { top: `${page.title}:`, accent: page.tagline },
        description: page.text,
        primary: next
          ? { label: `${EXAMPLE_COPY.next}: ${next.title}`, href: `/example/${next.slug}` }
          : { label: EXAMPLE_COPY.back, href: "/example" },
      }}
      nav={{ items: exampleNav(), label: EXAMPLE_COPY.navLabel }}
      pager={pagerFor(
        EXAMPLE_PAGES,
        page.slug,
        (item) => `/example/${item.slug}`,
        (item) => item.title,
      )}
    >
      <Diagrams slug={page.slug} />
      <ExampleSteps steps={EXAMPLE_STEPS[page.slug]} />
    </TopicPage>
  );
}
