export function StepNumber({ n }: { n: number }) {
  return (
    <span className="flex size-9 shrink-0 items-center justify-center border-2 border-edge bg-signal font-label text-xs font-semibold text-primary-foreground">
      {n}
    </span>
  );
}
