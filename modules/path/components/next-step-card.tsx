"use client";

import { ArrowRight, Rocket } from "lucide-react";
import Link from "next/link";

import { lessonCode, lessonHref, LESSONS, nextLesson, stepsByLesson } from "@/modules/curriculum";
import { PATH_UI as T } from "@/modules/path/data/path";
import { useProgress } from "@/modules/progress";
import { Button } from "@/shared/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/shared/ui/card";

// "What should I do now?" Reads your progress and points at the right lesson. Before progress loads it shows lesson 1.
export function NextStepCard() {
  const { hydrated, persisted } = useProgress();
  const done = new Set(hydrated ? LESSONS.filter((l) => persisted.lessons[String(l.n)]).map((l) => l.n) : []);
  const lesson = nextLesson(done);

  if (!lesson) {
    return (
      <Card className="border-signal">
        <CardHeader>
          <CardTitle className="font-heading text-2xl">{T.allDone}</CardTitle>
          <CardDescription>{T.allDoneText}</CardDescription>
        </CardHeader>
        <CardContent>
          <Button asChild>
            <Link href="/practice">
              {T.allDoneCta}
              <ArrowRight data-icon="inline-end" />
            </Link>
          </Button>
        </CardContent>
      </Card>
    );
  }

  const steps = stepsByLesson(lesson.n);
  const first = steps[0];
  return (
    <Card className="border-signal">
      <CardHeader>
        <p className="flex items-center gap-2 font-label text-xs tracking-[0.2em] text-signal uppercase">
          <Rocket className="size-4" />
          {done.size === 0 ? T.startLabel : T.nextLabel} · {lessonCode(lesson.n)}
        </p>
        <CardTitle className="font-heading text-3xl">{lesson.title}</CardTitle>
        <CardDescription>{lesson.summary}</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-wrap gap-3">
        <Button asChild>
          <Link href={lessonHref(lesson.n)}>
            {T.openLesson}
            <ArrowRight data-icon="inline-end" />
          </Link>
        </Button>
        {first ? (
          <Button asChild variant="outline">
            <Link href={`/guide/${first.chapter}#step-${first.id}`}>{T.openGuide}</Link>
          </Button>
        ) : null}
      </CardContent>
    </Card>
  );
}
