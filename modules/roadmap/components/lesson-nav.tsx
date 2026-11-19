import { LESSONS } from "@/modules/curriculum";
import { lessonCode, lessonHref, neighbours } from "@/modules/curriculum";
import { PrevNext } from "@/shared/components/common/prev-next";

export function LessonNav({ n }: { n: number }) {
  const { prev, next } = neighbours(
    LESSONS,
    LESSONS.findIndex((l) => l.n === n),
  );
  return (
    <PrevNext
      prev={prev ? { href: lessonHref(prev.n), title: `${lessonCode(prev.n)} ${prev.title}` } : undefined}
      next={next ? { href: lessonHref(next.n), title: `${lessonCode(next.n)} ${next.title}` } : undefined}
    />
  );
}
