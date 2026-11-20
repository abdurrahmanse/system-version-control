import { ExampleJourneyGraph } from "@/modules/example/components/example-journey-graph";
import { EXAMPLE_COPY, EXAMPLE_HERO } from "@/modules/example/data/example";
import { exampleNav } from "@/modules/example/views/example-nav";
import { TopicPage } from "@/shared/components/layout/topic-page";

// Hub: the whole AgroFarm journey as one clickable path.
export function ExampleView() {
  return (
    <TopicPage intro={EXAMPLE_HERO} nav={{ items: exampleNav(), label: EXAMPLE_COPY.navLabel }}>
      <ExampleJourneyGraph />
    </TopicPage>
  );
}
