import { ArrowDown, ArrowRight } from "lucide-react";

export function AreaArrow({ command }: { command: string }) {
  return (
    <div className="flex flex-col items-center justify-center gap-1 text-signal md:min-w-24">
      <code className="font-label text-xs">{command}</code>
      <ArrowRight className="hidden size-5 md:block" />
      <ArrowDown className="size-5 md:hidden" />
    </div>
  );
}
