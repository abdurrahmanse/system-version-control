import { ArrowDown } from "lucide-react";
import { Fragment } from "react";

import { FlowArrow } from "@/shared/components/diagrams/flow-arrow";
import { FlowNode } from "@/shared/components/diagrams/flow-node";
import { Stagger, StaggerItem } from "@/shared/motion/stagger";
import type { FlowNodeData } from "@/shared/types/content";

type Props = { nodes: readonly FlowNodeData[]; label: string; perRow?: number };

const chunk = <T,>(list: readonly T[], size: number) =>
  Array.from({ length: Math.ceil(list.length / size) }, (_, i) => list.slice(i * size, i * size + size));

// Left-to-right flowchart that wraps into rows of `perRow` nodes and stacks on small screens.
export function Flowchart({ nodes, label, perRow = 4 }: Props) {
  const rows = chunk(nodes, perRow);
  return (
    <figure aria-label={label} className="space-y-3">
      {rows.map((row, r) => (
        <Fragment key={r}>
          <Stagger as="ol" className="flex flex-col gap-2 md:flex-row md:items-stretch">
            {row.map((node, i) => (
              <Fragment key={node.title}>
                <StaggerItem as="li" className="md:flex-1">
                  <FlowNode node={node} />
                </StaggerItem>
                {i < row.length - 1 ? <FlowArrow /> : null}
              </Fragment>
            ))}
          </Stagger>
          {r < rows.length - 1 ? (
            <div aria-hidden className="flex justify-center text-signal">
              <ArrowDown className="size-5" />
            </div>
          ) : null}
        </Fragment>
      ))}
    </figure>
  );
}
