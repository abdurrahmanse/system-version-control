// Decorative commit graph used as a hero backdrop. Purely visual (aria-hidden).
const MAIN = [60, 190, 320, 450, 580, 710, 840, 970, 1100];
const FEATURE = [340, 440, 540, 620];
const HOTFIX = [600, 700, 800];

export function GitGraph({ className = "" }: { className?: string }) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 1160 420"
      preserveAspectRatio="xMidYMid slice"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path d="M0 110 H1160" className="text-foreground/20" />
      <path d="M190 110 C240 110 240 220 300 220 H640 C700 220 700 110 710 110" className="text-signal/60" />
      <path d="M450 110 C500 110 500 320 560 320 H900 C960 320 960 110 970 110" className="text-foreground/15" />
      {MAIN.map((x) => (
        <rect key={x} x={x - 7} y={103} width="14" height="14" className="fill-background text-foreground/35" />
      ))}
      {FEATURE.map((x) => (
        <rect key={x} x={x - 6} y={214} width="12" height="12" className="fill-background text-signal/70" />
      ))}
      {HOTFIX.map((x) => (
        <rect key={x} x={x - 6} y={314} width="12" height="12" className="fill-background text-foreground/30" />
      ))}
    </svg>
  );
}
