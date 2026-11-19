import Link from "next/link";

import { lessonCode, lessonHref } from "@/modules/curriculum";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/shared/ui/card";

type Props = { title: string; text: string; lesson: number };

export function MistakeCard({ title, text, lesson }: Props) {
  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle className="font-heading text-xl">{title}</CardTitle>
        <CardDescription>{text}</CardDescription>
      </CardHeader>
      <CardContent>
        <Link
          href={lessonHref(lesson)}
          className="font-label text-xs tracking-wider uppercase underline decoration-signal decoration-2 underline-offset-4 hover:text-signal"
        >
          {lessonCode(lesson)}
        </Link>
      </CardContent>
    </Card>
  );
}
