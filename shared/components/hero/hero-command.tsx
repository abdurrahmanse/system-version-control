import { Terminal } from "lucide-react";

export function HeroCommand({ command }: { command: string }) {
  return (
    <code className="flex h-11 items-center gap-2 border-2 border-edge bg-background px-4 font-code text-xs">
      <Terminal className="size-4 text-signal" />
      {command}
    </code>
  );
}
