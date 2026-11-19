export function HeroDescription({ children }: { children: string }) {
  return <p className="max-w-2xl text-lg text-balance text-muted-foreground">{children}</p>;
}
