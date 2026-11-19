export type Strategy = {
  name: string;
  how: string;
  bestFor: string;
  watchOut: string;
};

export const STRATEGIES: Strategy[] = [
  {
    name: "GitHub Flow",
    how: "main is always deployable. Short-lived feature branches and pull requests.",
    bestFor: "Web apps with continuous deployment, small to medium teams.",
    watchOut: "Versioned releases need extra tagging discipline.",
  },
  {
    name: "Trunk-based",
    how: "Very small, frequent changes to main, often behind feature flags.",
    bestFor: "Mature CI/CD with strong automated tests.",
    watchOut: "Requires discipline and reliable tests.",
  },
  {
    name: "Git Flow",
    how: "main, develop, release/* and hotfix/* branches.",
    bestFor: "Software that supports several released versions at once.",
    watchOut: "Heavy process; often too much for a web app.",
  },
];

export type MergeType = { name: string; result: string; goodWhen: string; tradeOff: string };

export const MERGE_TYPES: MergeType[] = [
  {
    name: "Merge commit",
    result: "All commits plus one merge commit.",
    goodWhen: "You want the full story preserved.",
    tradeOff: "History can become busy.",
  },
  {
    name: "Squash and merge",
    result: "The whole PR becomes one commit.",
    goodWhen: "PRs contain many wip commits.",
    tradeOff: "Individual commit history is lost.",
  },
  {
    name: "Rebase and merge",
    result: "Commits replayed linearly on main.",
    goodWhen: "You want a linear history with every commit.",
    tradeOff: "New hashes; requires rebase understanding.",
  },
];
