import {
  Bell,
  Bug,
  CheckCheck,
  CircleHelp,
  CloudUpload,
  Cog,
  Database,
  Eye,
  FlaskConical,
  FolderGit2,
  GitBranch,
  GitCommitHorizontal,
  GitMerge,
  GitPullRequest,
  Globe,
  Hammer,
  KeyRound,
  Lock,
  Palette,
  Rocket,
  ScanSearch,
  Server,
  ShieldCheck,
  Tag,
  Trash2,
  Undo2,
  Users,
  Workflow,
} from "lucide-react";

import type { BranchGraphData, Decision, FlowNodeData } from "@/shared/types/content";
import type { GraphEdgeData, GraphNodeData } from "@/shared/types/graph";

// ---- 1. the system as a connection graph ----
export const ARCH_LABEL = "AgroFarm parts and what depends on what";
export const ARCH_NODES: readonly GraphNodeData[] = [
  { id: "web", title: "apps/web", text: "Farmer dashboard (Next.js)", icon: Globe, col: 0, row: 0 },
  { id: "ui", title: "packages/ui", text: "Shared components", icon: Palette, col: 0, row: 1 },
  { id: "api", title: "apps/api", text: "REST API (Node.js)", icon: Server, col: 1, row: 0, tone: "signal" },
  { id: "worker", title: "apps/worker", text: "Alerts and reports", icon: Bell, col: 1, row: 1 },
  { id: "db", title: "packages/db", text: "Schema and migrations", icon: Database, col: 2, row: 0, tone: "signal" },
  { id: "infra", title: "infra/", text: "Servers as code", icon: Cog, col: 3, row: 0 },
  { id: "ci", title: ".github/workflows", text: "CI/CD pipelines", icon: Workflow, col: 3, row: 1 },
];
export const ARCH_EDGES: readonly GraphEdgeData[] = [
  { from: "web", to: "ui", label: "imports components" },
  { from: "web", to: "api", label: "calls over HTTP" },
  { from: "api", to: "db", label: "reads and writes" },
  { from: "worker", to: "db", label: "reads and writes" },
  { from: "ci", to: "api", label: "tests and builds" },
  { from: "ci", to: "infra", label: "deploys through" },
];

// ---- 2. repository ----
export const REPO_FLOW_LABEL = "Creating the repository";
export const REPO_FLOW: readonly FlowNodeData[] = [
  { title: "Local folder", text: "Folders for each part.", icon: FolderGit2 },
  { title: "git init", text: "History starts on main.", icon: GitCommitHorizontal, command: "git init -b main" },
  { title: "First commit", text: "Skeleton saved.", icon: Tag },
  { title: "GitHub repo", text: "Remote created and pushed.", icon: Globe, command: "gh repo create", tone: "signal" },
];

// ---- 3. branches ----
export const BRANCH_GRAPH: BranchGraphData = {
  label: "AgroFarm branches: feature branches merge into main; a release branch is tagged; a hotfix leaves the tag",
  lanes: [
    { id: "main", label: "main" },
    { id: "crop", label: "feature/crop-planner" },
    { id: "alerts", label: "feature/alerts" },
    { id: "release", label: "release/1.2" },
    { id: "hotfix", label: "hotfix/login-fix" },
  ],
  commits: [
    { id: "m0", lane: "main", col: 0, label: "init" },
    { id: "m1", lane: "main", col: 1, label: "web shell" },
    { id: "p1", lane: "crop", col: 2, label: "planner" },
    { id: "m2", lane: "main", col: 3, label: "merge PR #12" },
    { id: "a1", lane: "alerts", col: 4, label: "alerts" },
    { id: "m3", lane: "main", col: 5, label: "merge PR #15" },
    { id: "r1", lane: "release", col: 6, label: "rc fixes" },
    { id: "m4", lane: "main", col: 7, label: "release", tag: "v1.2.0" },
    { id: "h1", lane: "hotfix", col: 8, label: "fix login" },
    { id: "m5", lane: "main", col: 9, label: "hotfix", tag: "v1.2.1" },
  ],
  links: [
    { from: "m1", to: "p1" },
    { from: "p1", to: "m2" },
    { from: "m2", to: "a1" },
    { from: "a1", to: "m3" },
    { from: "m3", to: "r1" },
    { from: "r1", to: "m4" },
    { from: "m4", to: "h1" },
    { from: "h1", to: "m5" },
  ],
};
export const BRANCH_RULES = [
  { icon: GitBranch, title: "main", text: "Always deployable. Nobody pushes to it directly." },
  { icon: GitCommitHorizontal, title: "feature/*", text: "One task, one or two days, branched from main." },
  { icon: Tag, title: "release/x.y", text: "Freeze and test a version. Only fixes allowed." },
  { icon: Undo2, title: "hotfix/*", text: "Starts from the live tag. Fixes production fast." },
] as const;

// ---- 4. feature flow ----
export const FEATURE_FLOW_LABEL = "One feature from idea to merged";
export const FEATURE_FLOW: readonly FlowNodeData[] = [
  { title: "Issue #12", text: "Write the task.", icon: CircleHelp },
  { title: "Branch", text: "From fresh main.", icon: GitBranch },
  { title: "Commit", text: "Small and labelled.", icon: GitCommitHorizontal },
  { title: "Push", text: "Branch goes to GitHub.", icon: CloudUpload },
  { title: "Pull request", text: "Open it, link the issue.", icon: GitPullRequest, tone: "signal" },
  { title: "Review + CI", text: "People and robots check.", icon: Eye },
  { title: "Squash merge", text: "One commit on main.", icon: GitMerge, tone: "signal" },
  { title: "Clean up", text: "Branch deleted.", icon: Trash2 },
];

// ---- 5. CI/CD ----
export const CI_PR_LABEL = "On every pull request";
export const CI_PR_FLOW: readonly FlowNodeData[] = [
  { title: "Lint + types", text: "Style and type errors.", icon: ScanSearch },
  { title: "Unit tests", text: "Fast logic checks.", icon: FlaskConical },
  { title: "Build", text: "Web, API and worker compile.", icon: Hammer },
  { title: "Preview", text: "Temporary URL to try it.", icon: Globe, tone: "signal" },
];
export const CI_DEPLOY_LABEL = "After merge to main";
export const CI_DEPLOY_FLOW: readonly FlowNodeData[] = [
  { title: "Build image", text: "Versioned by commit.", icon: Hammer },
  { title: "Staging", text: "Deploys automatically.", icon: Server },
  { title: "Smoke tests", text: "Does the app start?", icon: CheckCheck },
  { title: "Approval", text: "A person clicks approve.", icon: Users, tone: "signal" },
  { title: "Production", text: "Live for farmers.", icon: Rocket, tone: "signal" },
];

// ---- 6. releases ----
export const RELEASE_LABEL = "From main to a published release";
export const RELEASE_FLOW: readonly FlowNodeData[] = [
  { title: "Freeze", text: "Branch release/1.2.", icon: GitBranch },
  { title: "Test", text: "Fix only what breaks.", icon: FlaskConical },
  { title: "Tag", text: "v1.2.0 on the commit.", icon: Tag, command: "git tag -a v1.2.0" },
  { title: "Release notes", text: "Generated from PRs.", icon: CheckCheck },
  { title: "Deploy", text: "The tag triggers production.", icon: Rocket, tone: "signal" },
];

// ---- 7. protection ----
export const PROTECT_LABEL = "Gates a change passes before it reaches main";
export const PROTECT_FLOW: readonly FlowNodeData[] = [
  { title: "No direct push", text: "Changes need a pull request.", icon: Lock },
  { title: "Reviews", text: "At least one approval.", icon: Eye },
  { title: "Code owners", text: "The owning team approves.", icon: Users },
  { title: "Required checks", text: "CI must be green.", icon: CheckCheck },
  { title: "Merge", text: "Only now main changes.", icon: GitMerge, tone: "signal" },
];

// ---- 8. security ----
export const SECURITY_LABEL = "Security checks that run without anyone remembering";
export const SECURITY_FLOW: readonly FlowNodeData[] = [
  { title: "Dependabot", text: "Opens PRs for updates.", icon: Bug },
  { title: "Secret scanning", text: "Blocks leaked keys.", icon: KeyRound },
  { title: "Code scanning", text: "CodeQL on every PR.", icon: ScanSearch },
  { title: "Signed commits", text: "Know who wrote it.", icon: ShieldCheck },
  { title: "Attestation", text: "Prove how it was built.", icon: Tag, tone: "signal" },
];

// ---- 9. database ----
export const DB_LABEL = "Changing a column without downtime (expand, migrate, contract)";
export const DB_FLOW: readonly FlowNodeData[] = [
  { title: "Expand", text: "Add the new column. Old code still works.", icon: Database },
  { title: "Deploy code", text: "New code writes both columns.", icon: Rocket },
  { title: "Backfill", text: "Copy old data to the new column.", icon: Cog },
  { title: "Contract", text: "Remove the old column in a later release.", icon: Trash2, tone: "signal" },
];

// ---- 10. incidents ----
export const INCIDENT_LABELS = {
  yes: "Yes",
  no: "No",
  group: "Decision tree: what to do when production breaks",
} as const;
export const INCIDENT_TREE: Decision = {
  question: "Did it start after the latest release?",
  yes: {
    question: "Is the fix obvious and tiny?",
    yes: {
      answer: "Hotfix from the tag",
      text: "Branch from the live tag, fix, tag v1.2.1, deploy.",
      command: "git switch -c hotfix/login-fix v1.2.0",
    },
    no: {
      answer: "Roll back first",
      text: "Redeploy the previous release, then fix calmly.",
      command: "gh workflow run deploy.yml --ref v1.1.0 -f environment=production",
      danger: true,
    },
  },
  no: {
    answer: "Revert the merged pull request",
    text: "A revert commit is safe on shared history.",
    command: "git revert -m 1 MERGE_COMMIT",
  },
};
