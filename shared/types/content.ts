import type { LucideIcon } from "lucide-react";

export type Cta = { label: string; href: string; icon?: LucideIcon };

export type HeroCopy = {
  badge: string;
  icon: LucideIcon;
  title: { top: string; bottom?: string; accent: string };
  description: string;
  primary: Cta;
  secondary?: Cta;
  command?: string;
};

export type SectionCopy = {
  numeral: string;
  icon: LucideIcon;
  eyebrow: string;
  title: string;
  description?: string;
};

export type CtaCopy = { icon: LucideIcon; title: string; description: string; href: string; label: string };

// ---- diagrams ----
export type FlowNodeData = {
  title: string;
  text?: string;
  command?: string;
  href?: string;
  icon?: LucideIcon;
  tone?: "default" | "signal";
};

export type DecisionAnswer = { answer: string; text?: string; command?: string; href?: string; danger?: boolean };
export type Decision = { question: string; yes: DecisionBranch; no: DecisionBranch };
export type DecisionBranch = Decision | DecisionAnswer;

// ---- branch graph ----
export type BranchLane = { id: string; label: string };
// `col` is the horizontal position (0-based). Commits in the same lane are joined in column order.
export type BranchCommit = { id: string; lane: string; col: number; label?: string; tag?: string };
// A curve between commits in different lanes: a branch starting or a merge.
export type BranchLink = { from: string; to: string; label?: string };
export type BranchGraphData = {
  label: string;
  lanes: readonly BranchLane[];
  commits: readonly BranchCommit[];
  links: readonly BranchLink[];
};
