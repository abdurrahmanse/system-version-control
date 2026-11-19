type Labels = { main: string; feature: string; pr: string; merge: string; tag: string; alt: string };

const MAIN = [40, 130, 250, 560, 680];
const FEATURE = [330, 410, 490];
const FONT = { fontSize: 12, fontFamily: "var(--font-jetbrains-mono)" } as const;

// GitHub Flow drawn as lanes: main, a short-lived feature branch, the pull request and a release tag.
export function LaneDiagram({ labels }: { labels: Labels }) {
  return (
    <figure className="overflow-hidden border-2 border-edge bg-card p-3 shadow-[4px_4px_0_0_var(--shadow-hard)]">
      <svg viewBox="0 0 760 230" role="img" aria-label={labels.alt} className="w-full text-foreground">
        <g fill="none" strokeWidth="2">
          <path d="M20 70 H740" stroke="currentColor" opacity="0.5" />
          <path d="M250 70 C290 70 290 160 330 160 H490 C530 160 530 70 560 70" stroke="var(--signal)" />
          <path d="M680 70 V30" stroke="var(--signal)" />
        </g>
        {MAIN.map((x) => (
          <rect
            key={x}
            x={x - 8}
            y={62}
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
        <rect x="505" y="188" width="116" height="24" fill="var(--signal)" />
        <text x="513" y="204" {...FONT} fill="var(--primary-foreground)">
          {labels.pr}
        </text>
        <path d="M680 30 h54 v16 h-54 z" fill="var(--signal)" />
        <text x="688" y="42" {...FONT} fill="var(--primary-foreground)">
          {labels.tag}
        </text>
        <text x="20" y="48" {...FONT} fill="currentColor">
          {labels.main}
        </text>
        <text x="330" y="190" {...FONT} fill="var(--signal)">
          {labels.feature}
        </text>
        <text x="520" y="104" {...FONT} fill="currentColor">
          {labels.merge}
        </text>
      </svg>
    </figure>
  );
}
