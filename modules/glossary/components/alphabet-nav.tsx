export function AlphabetNav({ letters }: { letters: string[] }) {
  return (
    <nav aria-label="A to Z" className="flex flex-wrap gap-1">
      {letters.map((l) => (
        <a
          key={l}
          href={`#letter-${l}`}
          className="flex size-8 items-center justify-center border-2 border-edge font-label text-xs hover:bg-foreground hover:text-background"
        >
          {l}
        </a>
      ))}
    </nav>
  );
}
