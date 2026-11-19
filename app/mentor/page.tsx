import type { Metadata } from "next";
import {
  BadgeCheck,
  BookCheck,
  Bot,
  CircleHelp,
  FileText,
  Hand,
  Hourglass,
  Rocket,
  Scale,
  Search,
  ShieldAlert,
  ShieldCheck,
  Siren,
  TriangleAlert,
} from "lucide-react";

import { CtaSection } from "@/components/site/cta-section";
import { Accent, Hero } from "@/components/site/hero";
import { IconTile, Section } from "@/components/site/section";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata: Metadata = { title: "AI Mentor" };

const rules = [
  { icon: Search, title: "Truth over fluency", text: "No invented commands, flags or URLs. If unsure, it says so." },
  { icon: BadgeCheck, title: "Verify before claiming", text: "Checks git help, installed package docs and official sources first." },
  { icon: Hourglass, title: "Version aware", text: "This repo uses new major versions. APIs are read, not remembered." },
  { icon: Scale, title: "No bias", text: "Merge vs rebase vs squash: trade-offs shown, opinions labelled as opinions." },
  { icon: Hand, title: "Teaching mode", text: "You type the Git commands. The mentor explains and never commits for you." },
  { icon: ShieldAlert, title: "Safety first", text: "Risk explained and consent asked before reset --hard, force push or clean." },
];

const sources = [
  "The tool itself: git help, --help, command output",
  "Installed files: node_modules README and types",
  "Official documentation: git-scm.com, docs.github.com",
  "Blogs and forums: never sufficient alone",
];

const guarded = ["git push", "git reset", "git clean", "git rebase", "git branch -D", "git commit", "git merge", "gh pr merge"];

export default function MentorPage() {
  return (
    <main>
      <Hero
        badge="Verified · unbiased · read-only"
        badgeIcon={ShieldCheck}
        title={
          <>
            An AI mentor that
            <br />
            <Accent>shows its sources.</Accent>
          </>
        }
        description="The project ships a written constitution for AI agents. It exists to stop hallucinations, one-sided advice and unsafe shortcuts while you learn."
        primary={{ label: "See the rules", href: "#rules", icon: FileText }}
        secondary={{ label: "Back to the roadmap", href: "/roadmap", icon: Bot }}
      />

      <div id="rules" />
      <Section icon={BookCheck} numeral="I" eyebrow="The constitution" title="Six rules every answer must follow">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {rules.map(({ icon, title, text }) => (
            <Card key={title}>
              <CardHeader>
                <IconTile icon={icon} />
                <CardTitle className="font-heading text-xl">{title}</CardTitle>
                <CardDescription>{text}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </Section>

      <Section
        icon={Search}
        numeral="II"
        eyebrow="Evidence ranking"
        title="Where facts come from"
        description="Higher on the list wins when sources disagree."
      >
        <ol className="max-w-2xl space-y-3">
          {sources.map((s, i) => (
            <li key={s} className="flex items-center gap-4 border-2 border-foreground bg-card p-3 shadow-[3px_3px_0_0_var(--foreground)]">
              <span className="font-heading text-3xl text-signal">{i + 1}</span>
              {s}
            </li>
          ))}
        </ol>
      </Section>

      <Section
        icon={CircleHelp}
        numeral="III"
        eyebrow="In practice"
        title="What an honest answer looks like"
        description="Every claim carries a label so you know how much to trust it."
      >
        <Card className="max-w-3xl">
          <CardHeader>
            <CardTitle className="font-heading text-xl">Q: Why not just use git push --force?</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-sm">
            <p>
              <Badge className="mr-2">Verified</Badge>
              <code className="font-mono">--force-with-lease</code> refuses to overwrite the remote if someone else pushed
              commits you have not seen. Plain <code className="font-mono">--force</code> overwrites regardless.
            </p>
            <p>
              <Badge variant="outline" className="mr-2">Docs</Badge>
              See git-scm.com/docs/git-push
            </p>
            <p>
              <Badge variant="secondary" className="mr-2">Unverified</Badge>
              GitHub settings paths can change. Confirm them in the GitHub docs.
            </p>
          </CardContent>
        </Card>
      </Section>

      <Section
        icon={Siren}
        numeral="IV"
        eyebrow="Guardrails"
        title="Commands that always ask first"
        description="Configured in .claude/settings.json so risky actions need your permission."
      >
        <div className="flex flex-wrap gap-3">
          {guarded.map((cmd) => (
            <Badge key={cmd} variant="outline" className="h-8 gap-2 px-3">
              <TriangleAlert />
              {cmd}
            </Badge>
          ))}
        </div>
      </Section>

      <CtaSection
        icon={Rocket}
        title="Learn with a mentor you can check"
        description="Verify any answer in five minutes with docs/ai/VERIFY.md."
        href="/roadmap"
        label="Start the roadmap"
      />
    </main>
  );
}
