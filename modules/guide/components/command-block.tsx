import { Terminal } from "lucide-react";

import { CopyButton } from "@/modules/guide/components/copy-button";

// Command shown in a terminal-style bar with a copy button.
export function CommandBlock({ command }: { command: string }) {
  return (
    <div className="flex items-center justify-between gap-2 border-2 border-edge bg-background px-3 py-2 shadow-[3px_3px_0_0_var(--shadow-hard)]">
      <code className="flex min-w-0 items-center gap-2 font-code text-sm">
        <Terminal className="size-4 shrink-0 text-signal" />
        <span className="break-all whitespace-pre-wrap">{command}</span>
      </code>
      <CopyButton text={command} />
    </div>
  );
}
