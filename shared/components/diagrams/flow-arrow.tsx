import { ArrowDown, ArrowRight } from "lucide-react";

// Connector between two flowchart nodes: right on wide screens, down on narrow ones.
export function FlowArrow() {
  return (
    <li aria-hidden className="flex items-center justify-center text-signal">
      <ArrowRight className="arrow-nudge hidden size-5 md:block" />
      <ArrowDown className="size-5 md:hidden" />
    </li>
  );
}
