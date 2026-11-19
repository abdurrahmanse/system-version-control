import { TriangleAlert } from "lucide-react";

export function LessonPitfalls({ items }: { items: readonly string[] }) {
  return (
    <ul className="space-y-2 text-sm">
      {items.map((p) => (
        <li key={p} className="flex items-start gap-2">
          <TriangleAlert className="mt-0.5 size-4 shrink-0 text-signal" />
          {p}
        </li>
      ))}
    </ul>
  );
}
