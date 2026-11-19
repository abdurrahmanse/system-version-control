// Decorative commit graph used as a hero/section backdrop. Purely visual (aria-hidden).
export function GitGraph({ className = "" }: { className?: string }) {
  const main = [60, 190, 320, 450, 580, 710, 840, 970, 1100];
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
      {/* main */}
      <path d="M0 110 H1160" className="text-foreground/20" />
      {/* feature branch (signal) */}
      <path d="M190 110 C240 110 240 220 300 220 H640 C700 220 700 110 710 110" className="text-signal/60" />
      {/* hotfix branch */}
      <path d="M450 110 C500 110 500 320 560 320 H900 C960 320 960 110 970 110" className="text-foreground/20" />
      {main.map((x) => (
        <rect key={x} x={x - 7} y={103} width="14" height="14" className="fill-background text-foreground/35" />
      ))}
      {[340, 440, 540, 620].map((x) => (
        <rect key={x} x={x - 6} y={214} width="12" height="12" className="fill-background text-signal/70" />
      ))}
      {[600, 700, 800].map((x) => (
        <rect key={x} x={x - 6} y={314} width="12" height="12" className="fill-background text-foreground/30" />
      ))}
    </svg>
  );
}
