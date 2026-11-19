type Panel = { title: string; caption: string };

const FONT = { fontSize: 11, fontFamily: "var(--font-jetbrains-mono)" } as const;

function Dot({ x, y, signal = false, label }: { x: number; y: number; signal?: boolean; label: string }) {
  const stroke = signal ? "var(--signal)" : "currentColor";
  return (
    <g>
      <rect x={x - 9} y={y - 9} width="18" height="18" fill="var(--background)" stroke={stroke} strokeWidth="2" />
      <text x={x} y={y + 4} textAnchor="middle" {...FONT} fill={stroke}>
        {label}
      </text>
    </g>
  );
}

// Three miniature graphs: before, after merge, after rebase.
export function MergeRebaseDiagram({ panels, alt }: { panels: readonly [Panel, Panel, Panel]; alt: string }) {
  const [before, merged, rebased] = panels;
  return (
    <figure aria-label={alt} className="grid gap-4 md:grid-cols-3">
      {[
        {
          p: before,
          body: (
            <>
              <path d="M30 40 H170" stroke="currentColor" strokeWidth="2" />
              <path d="M70 40 L100 80 H150" stroke="var(--signal)" strokeWidth="2" fill="none" />
              <Dot x={30} y={40} label="A" />
              <Dot x={70} y={40} label="B" />
              <Dot x={130} y={40} label="E" />
              <Dot x={110} y={80} signal label="C" />
              <Dot x={150} y={80} signal label="D" />
            </>
          ),
        },
        {
          p: merged,
          body: (
            <>
              <path d="M30 40 H170" stroke="currentColor" strokeWidth="2" />
              <path d="M70 40 L100 80 H130 L160 40" stroke="var(--signal)" strokeWidth="2" fill="none" />
              <Dot x={30} y={40} label="A" />
              <Dot x={70} y={40} label="B" />
              <Dot x={120} y={40} label="E" />
              <Dot x={160} y={40} label="M" />
              <Dot x={100} y={80} signal label="C" />
              <Dot x={130} y={80} signal label="D" />
            </>
          ),
        },
        {
          p: rebased,
          body: (
            <>
              <path d="M30 40 H190" stroke="currentColor" strokeWidth="2" />
              <Dot x={30} y={40} label="A" />
              <Dot x={70} y={40} label="B" />
              <Dot x={110} y={40} label="E" />
              <Dot x={150} y={40} signal label="C′" />
              <Dot x={190} y={40} signal label="D′" />
            </>
          ),
        },
      ].map(({ p, body }) => (
        <div key={p.title} className="border-2 border-edge bg-card p-3 shadow-[3px_3px_0_0_var(--shadow-hard)]">
          <svg viewBox="0 0 220 110" aria-hidden className="w-full text-foreground">
            {body}
          </svg>
          <p className="font-heading text-lg font-bold">{p.title}</p>
          <p className="text-sm text-muted-foreground">{p.caption}</p>
        </div>
      ))}
    </figure>
  );
}
