import type { BranchGraphData } from "@/shared/types/content";

const COL = 88;
const ROW = 62;
const LEFT = 150;
const TOP = 44;
const LANE_COLORS = ["text-foreground", "text-signal", "text-muted-foreground", "text-foreground", "text-signal"];
const FONT = { fontFamily: "var(--font-jetbrains-mono)" } as const;

// A Git branch diagram: one horizontal lane per branch, commits as squares, curves for branch-offs and merges.
// Scrolls sideways inside its own box on small screens; a screen-reader list describes the same graph.
export function BranchGraph({ data }: { data: BranchGraphData }) {
  const laneIndex = new Map(data.lanes.map((lane, i) => [lane.id, i]));
  const maxCol = Math.max(...data.commits.map((c) => c.col));
  const width = LEFT + maxCol * COL + 70;
  const height = TOP + (data.lanes.length - 1) * ROW + 56;
  const pos = new Map(
    data.commits.map((c) => [c.id, { x: LEFT + c.col * COL, y: TOP + (laneIndex.get(c.lane) ?? 0) * ROW }]),
  );

  const laneSegments = data.lanes.flatMap((lane, i) => {
    const row = data.commits.filter((c) => c.lane === lane.id).sort((a, b) => a.col - b.col);
    return row.slice(1).map((c, k) => ({
      key: `${lane.id}-${c.id}`,
      from: row[k]!,
      to: c,
      color: LANE_COLORS[i % LANE_COLORS.length]!,
    }));
  });

  return (
    <figure className="border-2 border-edge bg-card p-3 shadow-[4px_4px_0_0_var(--shadow-hard)]">
      <div className="overflow-x-auto">
        <svg
          viewBox={`0 0 ${width} ${height}`}
          width={width}
          height={height}
          role="img"
          aria-label={data.label}
          className="mx-auto h-auto max-w-full min-w-[640px] text-foreground"
        >
          {data.lanes.map((lane, i) => (
            <text
              key={lane.id}
              x={12}
              y={TOP + i * ROW + 4}
              fontSize="12"
              fontWeight="700"
              fill="currentColor"
              style={FONT}
            >
              {lane.label}
            </text>
          ))}
          <g fill="none" strokeWidth="2">
            {laneSegments.map((s) => {
              const a = pos.get(s.from.id)!;
              const b = pos.get(s.to.id)!;
              return (
                <path
                  key={s.key}
                  d={`M${a.x} ${a.y} H${b.x}`}
                  stroke="currentColor"
                  className={s.color}
                  opacity="0.7"
                />
              );
            })}
            {data.links.map((link) => {
              const a = pos.get(link.from);
              const b = pos.get(link.to);
              if (!a || !b) return null;
              const mid = (a.x + b.x) / 2;
              return (
                <path
                  key={`${link.from}-${link.to}`}
                  d={`M${a.x} ${a.y} C${mid} ${a.y} ${mid} ${b.y} ${b.x} ${b.y}`}
                  stroke="var(--signal)"
                  strokeDasharray="5 4"
                />
              );
            })}
          </g>
          {data.commits.map((c) => {
            const p = pos.get(c.id)!;
            const color = LANE_COLORS[(laneIndex.get(c.lane) ?? 0) % LANE_COLORS.length]!;
            return (
              <g key={c.id} className={color}>
                <rect
                  x={p.x - 7}
                  y={p.y - 7}
                  width="14"
                  height="14"
                  fill="var(--background)"
                  stroke="currentColor"
                  strokeWidth="2"
                />
                {c.label ? (
                  <text
                    x={p.x}
                    y={p.y + 25}
                    textAnchor="middle"
                    fontSize="10"
                    fill="var(--muted-foreground)"
                    style={FONT}
                  >
                    {c.label}
                  </text>
                ) : null}
                {c.tag ? (
                  <text
                    x={p.x}
                    y={p.y - 14}
                    textAnchor="middle"
                    fontSize="11"
                    fontWeight="700"
                    fill="var(--signal)"
                    style={FONT}
                  >
                    {c.tag}
                  </text>
                ) : null}
              </g>
            );
          })}
        </svg>
      </div>
      <figcaption className="sr-only">
        <ul>
          {data.lanes.map((lane) => (
            <li key={lane.id}>
              {lane.label}:{" "}
              {data.commits
                .filter((c) => c.lane === lane.id)
                .sort((a, b) => a.col - b.col)
                .map((c) => c.label ?? c.tag ?? c.id)
                .join(", ")}
            </li>
          ))}
        </ul>
      </figcaption>
    </figure>
  );
}
