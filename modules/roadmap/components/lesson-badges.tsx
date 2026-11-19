import { lessonCode } from "@/modules/curriculum";
import { LevelBadge } from "@/shared/components/common/level-badge";
import { Badge } from "@/shared/ui/badge";

export function LessonBadges({ n, level }: { n: number; level: string }) {
  return (
    <div className="mb-1 flex items-center gap-2">
      <Badge>{lessonCode(n)}</Badge>
      <LevelBadge level={level} />
    </div>
  );
}
