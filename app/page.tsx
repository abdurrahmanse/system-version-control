import {
  BookOpen,
  Bot,
  Eye,
  GitBranch,
  GitCommitHorizontal,
  GitPullRequest,
  Package,
  Repeat,
  Rocket,
  Route,
  ShieldCheck,
  Terminal,
  Library,
  Layers,
} from "lucide-react";
import Link from "next/link";

import { CtaSection } from "@/components/site/cta-section";
import { Accent, Hero } from "@/components/site/hero";
import { IconTile, Section } from "@/components/site/section";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { LESSONS, LEVELS } from "@/lib/lessons";

const stats = [
  { icon: BookOpen, value: String(LESSONS.length), label: "Lessons" },
  { icon: Layers, value: String(LEVELS.length), label: "Levels" },
  { icon: Package, value: "39", label: "Packages to practice with" },
  { icon: GitBranch, value: "1", label: "Real repository" },
];

const loop = [
  { icon: BookOpen, title: "Read", text: "One short lesson: the idea first, the commands second." },
  { icon: Terminal, title: "Type", text: "You run every command yourself. The AI only explains." },
  { icon: GitPullRequest, title: "Ship", text: "Each lesson becomes a branch, a pull request and a merge." },
  { icon: Eye, title: "Verify", text: "Check the result with --help and the official docs." },
];

export default function Home() {
  return (
    <main>
      <Hero
        badge="Git & GitHub · end to end"
        badgeIcon={GitCommitHorizontal}
        title={
          <>
            Learn version control,
            <br />
            from zero to <Accent>Pro Max.</Accent>
          </>
        }
        description="A field guide with a real repository to practice on. Fifteen lessons take you from your first commit to bisect, rebase, CI and open-source pull requests."
        primary={{ label: "Start the roadmap", href: "/roadmap", icon: Route }}
        secondary={{ label: "Read the concepts", href: "/concepts", icon: Library }}
        command="git init"
      />

      <Section icon={Library} numeral="I" eyebrow="At a glance" title="Everything in one repository">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map(({ icon, value, label }) => (
            <Card key={label}>
              <CardHeader>
                <IconTile icon={icon} />
                <CardTitle className="font-heading text-5xl">{value}</CardTitle>
                <CardDescription className="font-mono text-xs uppercase tracking-wider">{label}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </Section>

      <Section
        icon={Route}
        numeral="II"
        eyebrow="The path"
        title="Four levels, fifteen lessons"
        description="Finish each level before the next. Every lesson ends with a checkpoint you can verify yourself."
      >
        <div className="grid gap-4 md:grid-cols-2">
          {LEVELS.map((level) => {
            const lessons = LESSONS.filter((l) => l.level === level.name);
            return (
              <Card key={level.name}>
                <CardHeader>
                  <div className="flex items-baseline justify-between">
                    <CardTitle className="font-heading text-3xl">{level.name}</CardTitle>
                    <span className="font-heading text-4xl text-signal">{level.numeral}</span>
                  </div>
                  <CardDescription>{level.tagline}</CardDescription>
                </CardHeader>
                <CardContent className="flex flex-wrap gap-2">
                  {lessons.map((l) => (
                    <Badge key={l.n} variant="outline">
                      L{String(l.n).padStart(2, "0")} · {l.title}
                    </Badge>
                  ))}
                </CardContent>
              </Card>
            );
          })}
        </div>
        <p className="mt-6">
          <Link href="/roadmap" className="font-mono text-xs uppercase tracking-wider underline decoration-signal decoration-2 underline-offset-4 hover:text-signal">
            See the full roadmap →
          </Link>
        </p>
      </Section>

      <Section
        icon={Repeat}
        numeral="III"
        eyebrow="Method"
        title="One loop, repeated fifteen times"
        description="Learning Git means doing Git. Each lesson follows the same four steps."
      >
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {loop.map(({ icon, title, text }, i) => (
            <Card key={title}>
              <CardHeader>
                <IconTile icon={icon} />
                <CardTitle className="font-heading text-2xl">
                  <span className="mr-2 font-mono text-xs text-signal">0{i + 1}</span>
                  {title}
                </CardTitle>
                <CardDescription>{text}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </Section>

      <Section
        icon={ShieldCheck}
        numeral="IV"
        eyebrow="Trust"
        title="An AI mentor that must show its sources"
        description="A written constitution forbids invented commands and one-sided advice. Every claim is labelled verified, documented or unverified."
      >
        <Card className="max-w-2xl">
          <CardHeader>
            <IconTile icon={Bot} />
            <CardTitle className="font-heading text-2xl">Read the rules</CardTitle>
            <CardDescription>
              See how the mentor verifies commands, stays unbiased and never runs destructive Git operations for you.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Link href="/mentor" className="font-mono text-xs uppercase tracking-wider underline decoration-signal decoration-2 underline-offset-4 hover:text-signal">
              Meet the mentor →
            </Link>
          </CardContent>
        </Card>
      </Section>

      <CtaSection
        icon={Rocket}
        title="Make your first commit today"
        description="Open lesson 01, set up Git and the GitHub CLI, and start your learning branch."
        href="/roadmap"
        label="Open the roadmap"
      />
    </main>
  );
}
