import {
  Bug,
  CircleHelp,
  ClipboardCheck,
  GitPullRequest,
  Mail,
  MessageSquare,
  Send,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

import type { FlowNodeData, HeroCopy, SectionCopy } from "@/shared/types/content";

export const CONTACT_HERO: HeroCopy = {
  badge: "Contact",
  icon: Mail,
  title: { top: "Found a mistake?", accent: "Tell us." },
  description: "Wrong command, unclear step or a lesson you want. A precise report is the fastest way to a fix.",
  primary: { label: "Read the FAQ", href: "/faq" },
  secondary: { label: "Back to the roadmap", href: "/roadmap" },
};

export const CONTACT_FORM_SECTION: SectionCopy = {
  numeral: "I",
  icon: Send,
  eyebrow: "Write to us",
  title: "Send feedback",
  description: "Pick a topic and be specific. Mention the step number and your Git version (git --version).",
};

export const CONTACT_ASIDE = {
  checklist: {
    icon: ClipboardCheck,
    title: "Before you write",
    items: [
      "Check the FAQ for a quick answer",
      "Run git help <command> to confirm the behaviour",
      "Include the step number and your Git version",
      "Never paste secrets, tokens or private keys",
    ],
  },
  channelsTitle: "Other ways to help",
  channels: [
    { icon: Bug, title: "Report a bug", text: "Open an issue in the project repository using the bug template." },
    {
      icon: MessageSquare,
      title: "Ask a question",
      text: "Ask the AI mentor, then verify the answer with docs/ai/VERIFY.md.",
    },
    {
      icon: Sparkles,
      title: "Suggest a lesson",
      text: "Open an issue describing the topic and the commands it should cover.",
    },
  ],
  note: "This demo form validates your message and returns a receipt. It does not store anything.",
} as const;

export const CONTACT_FIX_SECTION: SectionCopy = {
  numeral: "II",
  icon: GitPullRequest,
  eyebrow: "What happens next",
  title: "How a fix travels",
  description: "A reported mistake follows the same workflow this guide teaches.",
};
export const CONTACT_FIX_LABEL = "How a reported mistake becomes a fix";
export const CONTACT_FIX_NODES: FlowNodeData[] = [
  {
    title: "Open an issue",
    text: "Describe the step, the expected result and what you saw.",
    command: "gh issue create",
    icon: Bug,
    href: "/roadmap/issues-projects-templates",
  },
  {
    title: "Verify against the docs",
    text: "The claim is checked with the tool's own help and the official documentation.",
    command: "git help <command>",
    icon: ShieldCheck,
    href: "/mentor",
  },
  {
    title: "Fix in a pull request",
    text: "The correction is reviewed and merged, then listed in the changelog.",
    command: "gh pr create --fill",
    icon: GitPullRequest,
    href: "/roadmap/pull-requests",
    tone: "signal",
  },
];

export const CONTACT_QUICK_SECTION: SectionCopy = {
  numeral: "III",
  icon: CircleHelp,
  eyebrow: "Quick answers",
  title: "You may not need to write at all",
};
export const CONTACT_QUICK = [
  {
    q: "How do I know a command is correct?",
    a: "Run git help <command> or gh <command> --help, then compare with the official docs.",
  },
  { q: "Is my progress safe?", a: "It is stored only in your browser on this device and is never uploaded." },
  { q: "Does the AI mentor run commands for me?", a: "No. It explains and verifies. You type the commands yourself." },
] as const;
export const CONTACT_QUICK_LINK = { label: "See all questions →", href: "/faq" } as const;
