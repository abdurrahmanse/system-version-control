"use client";

import { Bar, BarChart, CartesianGrid, LabelList, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

import { PACKAGE_GROUPS } from "@/modules/toolbox/data/packages";
import { PACKAGES_CHART } from "@/modules/toolbox/data/toolbox";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/shared/ui/card";

const data = PACKAGE_GROUPS.map((g) => ({ name: g.title, count: g.items.length }));

// Horizontal bar chart: how many packages each category contains (recharts).
export function PackageChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="font-heading text-xl">{PACKAGES_CHART.title}</CardTitle>
        <CardDescription>{PACKAGES_CHART.description}</CardDescription>
      </CardHeader>
      <CardContent className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} layout="vertical" margin={{ left: 24, right: 24 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="var(--edge)" strokeOpacity={0.4} horizontal={false} />
            <XAxis
              type="number"
              allowDecimals={false}
              tick={{ fill: "var(--foreground)", fontSize: 12 }}
              stroke="var(--edge)"
            />
            <YAxis
              type="category"
              dataKey="name"
              width={150}
              tick={{ fill: "var(--foreground)", fontSize: 12 }}
              stroke="var(--edge)"
            />
            <Tooltip contentStyle={{ background: "var(--card)", border: "2px solid var(--edge)", borderRadius: 0 }} />
            <Bar dataKey="count" name={PACKAGES_CHART.series} fill="var(--signal)">
              <LabelList dataKey="count" position="right" fill="var(--foreground)" />
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
