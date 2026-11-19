import { CHAPTERS } from "@/modules/curriculum";
import { getChapterIndex, neighbours } from "@/modules/curriculum";
import { PrevNext } from "@/shared/components/common/prev-next";

export function ChapterNav({ slug }: { slug: string }) {
  const { prev, next } = neighbours(CHAPTERS, getChapterIndex(slug));
  return (
    <PrevNext
      prev={prev ? { href: `/guide/${prev.slug}`, title: `${prev.n}. ${prev.title}` } : undefined}
      next={next ? { href: `/guide/${next.slug}`, title: `${next.n}. ${next.title}` } : undefined}
    />
  );
}
