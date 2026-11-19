"use client";

import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

import { PROGRESS_UI as T } from "@/modules/progress/data/progress";
import { useProgress } from "@/modules/progress/hooks/use-progress";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/shared/ui/card";
import { Skeleton } from "@/shared/ui/skeleton";

// Stacked bars: completed vs remaining lessons for each level (recharts).
export function LevelChart() {
  const { hydrated, levels } = useProgress();
  return (
    <Card>
      <CardHeader>
        <CardTitle className="font-heading text-xl">{T.chartTitle}</CardTitle>
        <CardDescription>{T.chartDescription}</CardDescription>
      </CardHeader>
      <CardContent className="h-72">
        {hydrated ? (
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={levels} margin={{ left: -16 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="var(--foreground)" strokeOpacity={0.15} vertical={false} />
              <XAxis dataKey="level" tick={{ fill: "var(--foreground)", fontSize: 12 }} stroke="var(--foreground)" />
              <YAxis
                allowDecimals={false}
                tick={{ fill: "var(--foreground)", fontSize: 12 }}
                stroke="var(--foreground)"
              />
              <Tooltip
                contentStyle={{ background: "var(--card)", border: "2px solid var(--foreground)", borderRadius: 0 }}
              />
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
