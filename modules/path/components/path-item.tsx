"use client";

import { Check } from "lucide-react";
import Link from "next/link";

import { lessonCode, lessonHref, type PathItem as Item } from "@/modules/curriculum";
import { PathStepLink } from "@/modules/path/components/path-step-link";
import { PATH_UI as T } from "@/modules/path/data/path";
import { LessonDoneButton } from "@/modules/progress";
import { cn } from "@/shared/lib/utils";
import { Reveal } from "@/shared/motion/reveal";

type Props = { item: Item; state: "done" | "next" | "todo" };

// A lesson on the learning path: its title plus the four steps to finish it.
export function PathItem({ item, state }: Props) {
  const { lesson, chapters, challenge, stepCount } = item;
  const firstChapter = chapters[0];
  return (
    <li className="relative pb-10 pl-10 last:pb-0">
      <span
        aria-hidden
        className={cn(
          "absolute top-1 -left-[15px] flex size-7 items-center justify-center border-2 border-edge font-label text-xs font-bold",
          state === "done" && "bg-signal text-primary-foreground",
          state === "next" && "border-signal bg-signal/20 text-signal",
          state === "todo" && "bg-card",
        )}
      >
        {state === "done" ? <Check className="size-4" /> : lesson.n}
      </span>
      <Reveal direction="right">
        <div
          className={cn(
            "space-y-3 border-2 bg-card p-4 shadow-[3px_3px_0_0_var(--shadow-hard)]",
            state === "next" ? "border-signal" : "border-edge",
          )}
        >
          <div className="flex flex-wrap items-center gap-2">
            <span className="font-label text-xs font-bold text-signal">{lessonCode(lesson.n)}</span>
            <span className="font-label text-xs tracking-wider text-muted-foreground uppercase">{lesson.level}</span>
            {state === "next" ? (
              <span className="bg-signal px-2 font-label text-xs text-primary-foreground uppercase">{T.nextBadge}</span>
            ) : null}
            {state === "done" ? (
              <span className="border border-edge px-2 font-label text-xs uppercase">{T.doneBadge}</span>
            ) : null}
          </div>
          <h3 className="font-heading text-2xl font-bold">
            <Link href={lessonHref(lesson.n)} className="hover:text-signal">
              {lesson.title}
            </Link>
          </h3>
          <p className="text-sm text-muted-foreground">{lesson.summary}</p>
          <div className="flex flex-wrap items-center gap-2">
            <PathStepLink n={1} label={T.stepRead} icon={T.icons.read} href={lessonHref(lesson.n)} />
            {firstChapter ? (
              <PathStepLink
                n={2}
                label={`${T.stepRun} · ${T.commands(stepCount)}`}
                icon={T.icons.run}
                href={`/guide/${firstChapter.slug}`}
              />
            ) : null}
            {challenge ? (
              <PathStepLink n={3} label={T.stepPractise} icon={T.icons.practise} href={`/practice/${challenge.id}`} />
            ) : null}
            <span className="flex items-center gap-2">
              <span className="font-label text-xs text-signal">{challenge ? 4 : 3}</span>
              <LessonDoneButton n={lesson.n} />
            </span>
          </div>
        </div>
      </Reveal>
    </li>
  );
}
