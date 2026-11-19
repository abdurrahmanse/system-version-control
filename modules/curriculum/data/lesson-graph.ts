// How the lessons depend on each other. `LESSON_PREREQUISITES[8] = [7]` means lesson 8 builds on lesson 7.
// The relationships drive the roadmap graph, the "connected topics" graph on every lesson page and the learning path.
export const LESSON_PREREQUISITES: Record<number, readonly number[]> = {
  1: [],
  2: [1],
  3: [2],
  4: [3],
  5: [4],
  6: [5],
  7: [4, 6],
  8: [7],
  9: [8],
  10: [6],
  11: [6],
  12: [6, 10],
  13: [12],
  14: [9],
  15: [12, 14],
};

// Glossary terms each lesson introduces. Used to link a lesson to the glossary.
export const LESSON_TERMS: Record<number, readonly string[]> = {
  1: ["Repository", "Remote"],
  2: ["Commit", "HEAD", "Index (staging area)", "Working tree"],
  3: ["Commit", "Conventional Commits", "Index (staging area)"],
  4: ["Branch", "Merge", "Fast-forward", "Merge commit"],
  5: ["Fetch", "Pull", "Push", "Upstream", "Origin"],
  6: ["Pull request", "Squash"],
  7: ["Conflict", "Merge"],
  8: ["Reflog", "Revert"],
  9: ["Rebase", "Stash", "Squash"],
  10: ["Pull request"],
  11: ["Tag", "Semantic Versioning"],
  12: ["Pull request"],
  13: ["Hook", "Conventional Commits"],
  14: ["Worktree", "Detached HEAD", "Reflog"],
  15: ["Fork", "Upstream"],
};
