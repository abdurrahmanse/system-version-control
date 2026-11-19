import { Check, FileText, Target, Terminal } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import type { Lesson } from "@/lib/lessons";

// Vertical "git log" style rail: each lesson is a commit on the learning branch.
export function LessonTimeline({ lessons }: { lessons: Lesson[] }) {
  return (
    <ol className="relative ml-3 border-l-2 border-foreground">
      {lessons.map((lesson) => (
        <li key={lesson.n} className="relative pb-10 pl-8 last:pb-0">
          <span className="absolute -left-[11px] top-6 size-5 border-2 border-foreground bg-signal" aria-hidden />
          <Card>
            <CardHeader>
              <div className="mb-1 flex items-center gap-2">
                <Badge>L{String(lesson.n).padStart(2, "0")}</Badge>
                <Badge variant="outline">{lesson.level}</Badge>
              </div>
              <CardTitle className="font-heading text-2xl">{lesson.title}</CardTitle>
              <CardDescription className="text-sm">{lesson.summary}</CardDescription>
            </CardHeader>
            <CardContent className="grid gap-6 md:grid-cols-2">
              <div>
                <p className="mb-2 font-mono text-[0.65rem] uppercase tracking-[0.2em] text-muted-foreground">
                  You will learn
                </p>
                <ul className="space-y-1.5 text-sm">
                  {lesson.learn.map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <Check className="size-4 shrink-0 text-signal" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="mb-2 font-mono text-[0.65rem] uppercase tracking-[0.2em] text-muted-foreground">
                  Commands
                </p>
                <ul className="space-y-1.5">
                  {lesson.commands.map((cmd) => (
                    <li
                      key={cmd}
                      className="flex items-center gap-2 border border-foreground/40 bg-background px-2 py-1 font-mono text-xs"
                    >
                      <Terminal className="size-3 shrink-0 text-signal" />
                      {cmd}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex items-start gap-2 text-sm md:col-span-2">
                <Target className="mt-0.5 size-4 shrink-0 text-signal" />
                <span>
                  <strong className="font-semibold">Project task:</strong> {lesson.task}
                </span>
              </div>
              <div className="flex items-center gap-2 font-mono text-xs text-muted-foreground md:col-span-2">
                <FileText className="size-3.5" />
                {lesson.doc}
              </div>
            </CardContent>
          </Card>
        </li>
      ))}
    </ol>
  );
}
