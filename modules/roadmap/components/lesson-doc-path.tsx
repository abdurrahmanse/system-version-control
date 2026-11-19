import { FileText } from "lucide-react";

export function LessonDocPath({ path }: { path: string }) {
  return (
    <p className="flex items-center gap-2 font-code text-xs text-muted-foreground">
      <FileText className="size-3.5" />
      {path}
    </p>
  );
}
