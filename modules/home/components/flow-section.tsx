import { HOME_FLOW } from "@/modules/home/data/home";
import { Flowchart } from "@/shared/components/diagrams/flowchart";
import { Section } from "@/shared/components/section/section";

export function FlowSection() {
  return (
    <Section copy={HOME_FLOW}>
      <Flowchart label={HOME_FLOW.label} nodes={HOME_FLOW.nodes} perRow={3} />
    </Section>
  );
}
