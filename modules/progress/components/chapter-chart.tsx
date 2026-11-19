"use client";

import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

import { CHAPTERS, stepsByChapter } from "@/modules/curriculum";
import { PROGRESS_UI as T } from "@/modules/progress/data/progress";
import { useProgress } from "@/modules/progress/hooks/use-progress";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/shared/ui/card";
import { Skeleton } from "@/shared/ui/skeleton";

// Steps completed per guide chapter (recharts).
export function ChapterChart() {
  const { hydrated, persisted } = useProgress();
  const data = CHAPTERS.map((c) => {
    const steps = stepsByChapter(c.slug);
    const done = hydrated ? steps.filter((s) => persisted.steps[String(s.id)]).length : 0;
    return { chapter: String(c.n), done, remaining: steps.length - done };
  });
  return (
    <Card>
      <CardHeader>
        <CardTitle className="font-heading text-xl">{T.chapterChartTitle}</CardTitle>
        <CardDescription>{T.chapterChartDescription}</CardDescription>
      </CardHeader>
      <CardContent className="h-72">
        {hydrated ? (
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data} margin={{ left: -16 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="var(--edge)" strokeOpacity={0.4} vertical={false} />
              <XAxis dataKey="chapter" tick={{ fill: "var(--foreground)", fontSize: 12 }} stroke="var(--edge)" />
              <YAxis allowDecimals={false} tick={{ fill: "var(--foreground)", fontSize: 12 }} stroke="var(--edge)" />
              <Tooltip contentStyle={{ background: "var(--card)", border: "2px solid var(--edge)", borderRadius: 0 }} />
              <Legend />
              <Bar dataKey="done" name={T.chartSeries.done} stackId="a" fill="var(--signal)" />
              <Bar
                dataKey="remaining"
                name={T.chartSeries.remaining}
                stackId="a"
                fill="var(--muted-foreground)"
                fillOpacity={0.4}
              />
            </BarChart>
          </ResponsiveContainer>
        ) : (
          <Skeleton className="h-full w-full" />
        )}
      </CardContent>
    </Card>
  );
}
