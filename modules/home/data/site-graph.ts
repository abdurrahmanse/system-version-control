import { BookOpen, Gauge, Library, Route, ScrollText, ShieldCheck, Swords, Terminal, Workflow } from "lucide-react";

import type { GraphEdgeData, GraphNodeData } from "@/shared/types/graph";

// How the pages of the guide lead into each other. Columns read left to right: understand, learn, rehearse, track.
export const SITE_GRAPH_NODES: GraphNodeData[] = [
  {
    id: "concepts",
    title: "Concepts",
    text: "The mental models behind Git.",
    href: "/concepts",
    icon: ScrollText,
    col: 0,
    row: 0,
  },
  { id: "glossary", title: "Glossary", text: "Every term, A to Z.", href: "/glossary", icon: Library, col: 0, row: 2 },
  {
    id: "roadmap",
    title: "Roadmap",
    text: "Twenty-five lessons, track by track.",
    href: "/roadmap",
    icon: Route,
    col: 1,
    row: 0,
    tone: "signal",
  },
  {
    id: "guide",
    title: "Guide",
    text: "All 150 commands, step by step.",
    href: "/guide",
    icon: Terminal,
    col: 1,
    row: 1,
  },
  {
    id: "mentor",
    title: "AI Mentor",
    text: "Rules that keep answers honest.",
    href: "/mentor",
    icon: ShieldCheck,
    col: 1,
    row: 2,
  },
  {
    id: "workflows",
    title: "Workflows",
    text: "How teams branch, merge and release.",
    href: "/workflows",
    icon: Workflow,
    col: 2,
    row: 0,
  },
  {
    id: "practice",
    title: "Practice",
    text: "Put commands in the right order.",
    href: "/practice",
    icon: Swords,
    col: 2,
    row: 1,
  },
  {
    id: "progress",
    title: "Progress",
    text: "Charts, goal and backup.",
    href: "/progress",
    icon: Gauge,
    col: 3,
    row: 1,
  },
  {
    id: "path",
    title: "Learning path",
    text: "Your next step, always one click away.",
    href: "/tracks",
    icon: BookOpen,
    col: 3,
    row: 0,
  },
];

export const SITE_GRAPH_EDGES: GraphEdgeData[] = [
  { from: "concepts", to: "roadmap", label: "learn the idea" },
  { from: "glossary", to: "guide", label: "look up terms" },
  { from: "roadmap", to: "guide", label: "run the commands" },
  { from: "roadmap", to: "workflows", label: "see the team flow" },
  { from: "guide", to: "practice", label: "rehearse" },
  { from: "workflows", to: "practice", label: "try the flow" },
  { from: "mentor", to: "guide", label: "verify answers" },
  { from: "practice", to: "progress", label: "track it" },
  { from: "roadmap", to: "path", label: "follow it" },
  { from: "path", to: "progress", label: "see results" },
];
