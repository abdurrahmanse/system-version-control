import { Target } from "lucide-react";

import { UI } from "@/shared/data/ui";

export function LessonTask({ task }: { task: string }) {
  return (
    <p className="flex items-start gap-2 text-sm">
      <Target className="mt-0.5 size-4 shrink-0 text-signal" />
      <span>
        <strong className="font-semibold">{UI.projectTask}:</strong> {task}
      </span>
    </p>
  );
}
