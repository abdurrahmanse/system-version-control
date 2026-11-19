import { FileText, Lock } from "lucide-react";

import type { HeroCopy } from "@/shared/types/content";

type Doc = { hero: HeroCopy; updated: string; note?: string; sections: { title: string; body: string[] }[] };

export const PRIVACY: Doc = {
  hero: {
    badge: "Privacy",
    icon: Lock,
    title: { top: "Your data stays", accent: "on your device." },
    description: "What this site stores, what it does not, and why.",
    primary: { label: "Back home", href: "/" },
  },
  updated: "2026-11-19",
  sections: [
    {
      title: "What we collect",
      body: [
        "Nothing is sent to us automatically. There are no accounts, no analytics and no advertising or tracking cookies.",
      ],
    },
    {
      title: "What is stored on your device",
      body: [
        "Your learning progress and study goal are saved in your browser's local storage under the key git-field-guide:progress.",
        "Your theme choice (light, dark or system) is saved in local storage under the key theme.",
        "You can remove both at any time by clearing site data or using the reset button on the progress page.",
      ],
    },
    {
      title: "The feedback form",
      body: [
        "The contact form sends your message to this site's own demo endpoint, which validates it and returns a receipt. The demo endpoint does not store the message.",
      ],
    },
    {
      title: "Fonts and third parties",
      body: [
        "Fonts are downloaded at build time and served from this site. Links to GitHub, git-scm.com and other sites are external; their privacy policies apply once you leave.",
      ],
    },
  ],
};

export const TERMS: Doc = {
  hero: {
    badge: "Terms",
    icon: FileText,
    title: { top: "Plain-language", accent: "terms of use." },
    description: "Educational content, provided as is.",
    primary: { label: "Back home", href: "/" },
  },
  updated: "2026-11-19",
  note: "This is a plain-language template, not legal advice. Have it reviewed before using it for a public or commercial service.",
  sections: [
    {
      title: "Educational use",
      body: ["The content is provided for learning. It is provided as is, without warranty of any kind."],
    },
    {
      title: "Run commands carefully",
      body: [
        "Some Git commands rewrite or delete history. Practise them in a sandbox repository first and verify every command with the official documentation before using it on real work.",
      ],
    },
    {
      title: "Trademarks",
      body: [
        "Git, GitHub and other names are trademarks of their respective owners. This project is independent and not affiliated with or endorsed by them.",
      ],
    },
    { title: "Changes", body: ["These terms and the content may change. The changelog lists notable changes."] },
  ],
};
