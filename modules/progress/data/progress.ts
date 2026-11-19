import { Gauge } from "lucide-react";

import type { HeroCopy } from "@/shared/types/content";

export const PROGRESS_HERO: HeroCopy = {
  badge: "Stored in your browser",
  icon: Gauge,
  title: { top: "See how far", accent: "you have come." },
  description: "Your progress is saved locally on this device only. Nothing is uploaded.",
  primary: { label: "Continue learning", href: "/roadmap" },
  secondary: { label: "Open the guide", href: "/guide" },
};

export const PROGRESS_UI = {
  overviewTitle: "Overview",
  chartTitle: "Progress by level",
  chartDescription: "Completed lessons out of total, per level.",
  chapterChartTitle: "Guide steps by chapter",
  chapterChartDescription: "Completed steps out of total, per chapter.",
  chartSeries: { done: "Completed", remaining: "Remaining" },
  tableTitle: "All lessons",
  tableDescription: "Click a column header to sort.",
  columns: { lesson: "Lesson", title: "Title", level: "Level", status: "Status" },
  goalTitle: "Study goal",
  goalDescription: "Pick a finish date. We calculate the pace you need.",
  goalNone: "No goal set yet.",
  goalPace: (perWeek: string, weeks: number) =>
    `About ${perWeek} lessons per week for ${weeks} week${weeks === 1 ? "" : "s"}.`,
  goalPast: "Pick a date in the future.",
  goalClear: "Clear goal",
  lastActivity: "Last activity",
  never: "Never",
  transferTitle: "Back up and restore",
  transferDescription: "Export your progress to a JSON file, or restore a backup. The server validates the file first.",
  exportLabel: "Export progress",
  importLabel: "Import backup",
  importing: "Importing…",
  exportDone: "Backup downloaded",
  importFailed: "That file is not a valid progress backup.",
  importDone: (lessons: number, steps: number) => `Restored ${lessons} lessons and ${steps} steps`,
  lessonsLoading: "Loading lessons…",
  lessonsError: "Could not load the lessons.",
  reset: "Reset all progress",
  resetConfirm: "This clears completed lessons, steps, challenges and your goal on this device. It cannot be undone.",
  resetDone: "Progress reset",
  stepsDone: "Guide steps done",
  lessonsDone: "Lessons done",
  challengesDone: "Challenges solved",
  percent: (n: number) => `${n}% complete`,
} as const;
