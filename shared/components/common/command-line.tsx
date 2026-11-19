import { Terminal } from "lucide-react";

export function CommandLine({ command }: { command: string }) {
  return (
    <span className="flex items-center gap-2 border border-edge/40 bg-background px-2 py-1 font-code text-xs">
      <Terminal className="size-3 shrink-0 text-signal" />
      {command}
    </span>
  );
}
