import { UI } from "@/shared/data/ui";

export function SkipLink() {
  return (
    <a
      href="#main-content"
      className="sr-only z-[70] bg-foreground px-4 py-2 font-label text-xs text-background uppercase focus:not-sr-only focus:fixed focus:top-4 focus:left-4"
    >
      {UI.skipToContent}
    </a>
  );
}
