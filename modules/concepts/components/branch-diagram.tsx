import { GRAPH_LABELS } from "@/modules/concepts/data/concepts";
import { Card, CardContent } from "@/shared/ui/card";

const MAIN = [30, 120, 210, 380, 550, 650];
const FEATURE = [330, 430];
const LABEL = { fontSize: 12, fontFamily: "var(--font-jetbrains-mono)" } as const;

// Static illustration: main, a feature branch and the merge back.
export function BranchDiagram() {
  return (
    <Card>
      <CardContent>
        <svg viewBox="0 0 720 220" role="img" aria-label={GRAPH_LABELS.alt} className="w-full text-foreground">
          <g fill="none" strokeWidth="2">
            <path d="M30 60 H690" stroke="currentColor" opacity="0.5" />
            <path d="M210 60 C250 60 250 160 290 160 H470 C510 160 510 60 550 60" stroke="var(--signal)" />
          </g>
          {MAIN.map((x) => (
            <rect
              key={x}
              x={x - 8}
              y={52}
              width="16"
              height="16"
              fill="var(--background)"
              stroke="currentColor"
              strokeWidth="2"
            />
          ))}
          {FEATURE.map((x) => (
            <rect
              key={x}
              x={x - 8}
              y={152}
              width="16"
              height="16"
              fill="var(--background)"
              stroke="var(--signal)"
              strokeWidth="2"
            />
          ))}
          <text x="30" y="36" {...LABEL} fill="currentColor">
            {GRAPH_LABELS.main}
          </text>
          <text x="320" y="196" {...LABEL} fill="var(--signal)">
            {GRAPH_LABELS.feature}
          </text>
          <text x="550" y="36" {...LABEL} fill="currentColor">
            {GRAPH_LABELS.merge}
          </text>
          <text x="620" y="96" {...LABEL} fill="currentColor">
            {GRAPH_LABELS.head}
          </text>
        </svg>
      </CardContent>
    </Card>
  );
}
