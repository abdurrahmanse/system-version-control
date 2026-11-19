import { CommandLine } from "@/shared/components/common/command-line";

export function LessonCommandList({ commands }: { commands: readonly string[] }) {
  return (
    <ul className="space-y-1.5">
      {commands.map((c) => (
        <li key={c}>
          <CommandLine command={c} />
        </li>
      ))}
    </ul>
  );
}
