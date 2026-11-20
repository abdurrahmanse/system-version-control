"use client";

import { RotateCcw } from "lucide-react";
import { useState } from "react";

import { QUIZ_COPY, type QuizQuestion } from "@/modules/tracks/data/quiz";
import { cn } from "@/shared/lib/utils";
import { Button } from "@/shared/ui/button";

// One question at a time is not needed: every question is on the page, feedback appears right after a choice.
export function QuizSection({ questions }: { questions: readonly QuizQuestion[] }) {
  const [picked, setPicked] = useState<Record<number, number>>({});
  const right = questions.filter((item, index) => picked[index] === item.answer).length;
  const answered = Object.keys(picked).length;

  return (
    <div className="space-y-6">
      {questions.map((item, index) => {
        const choice = picked[index];
        return (
          <fieldset key={item.question} className="space-y-2 border-2 border-edge bg-card p-4">
            <legend className="px-1 font-heading text-lg font-bold">{`${index + 1}. ${item.question}`}</legend>
            <div className="grid gap-2 md:grid-cols-2">
              {item.options.map((option, optionIndex) => {
                const chosen = choice === optionIndex;
                const reveal = choice !== undefined;
                return (
                  <button
                    key={option}
                    type="button"
                    disabled={reveal}
                    onClick={() => setPicked((current) => ({ ...current, [index]: optionIndex }))}
                    className={cn(
                      "border-2 border-edge px-3 py-2 text-left text-sm transition-colors hover:bg-secondary disabled:cursor-default",
                      reveal && optionIndex === item.answer && "border-signal bg-signal/20 font-bold",
                      chosen && optionIndex !== item.answer && "line-through opacity-60",
                    )}
                  >
                    {option}
                  </button>
                );
              })}
            </div>
            {choice !== undefined ? (
              <p className="text-sm text-muted-foreground" role="status">
                <strong>{choice === item.answer ? QUIZ_COPY.correct : QUIZ_COPY.wrong}</strong> {item.why}
              </p>
            ) : null}
          </fieldset>
        );
      })}
      <div className="flex flex-wrap items-center gap-4">
        <p className="font-label text-sm tracking-wider uppercase" aria-live="polite">
          {answered > 0 ? QUIZ_COPY.score(right, questions.length) : null}
        </p>
        {answered > 0 ? (
          <Button variant="outline" onClick={() => setPicked({})}>
            <RotateCcw data-icon="inline-start" />
            {QUIZ_COPY.reset}
          </Button>
        ) : null}
      </div>
    </div>
  );
}
