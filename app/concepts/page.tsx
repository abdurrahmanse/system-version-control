import type { Metadata } from "next";
import {
  ArrowDown,
  ArrowRight,
  Archive,
  Cloud,
  FolderOpen,
  GitBranch,
  GitCommitHorizontal,
  GitMerge,
  Library,
  Pointer,
  Rocket,
  ScrollText,
  Terminal,
  Undo2,
  Users,
  Workflow,
  Camera,
  Tag,
} from "lucide-react";

import { CtaSection } from "@/components/site/cta-section";
import { Accent, Hero } from "@/components/site/hero";
import { IconTile, Section } from "@/components/site/section";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export const metadata: Metadata = { title: "Concepts" };

const areas = [
  { icon: FolderOpen, name: "Working directory", text: "Your files as you edit them." },
  { icon: Archive, name: "Staging area", text: "What goes into the next commit." },
  { icon: GitCommitHorizontal, name: "Local repository", text: "Saved history in .git." },
  { icon: Cloud, name: "Remote (GitHub)", text: "Shared copy for the team." },
];
const arrows = ["git add", "git commit", "git push"];

const vocab = [
  { icon: Camera, title: "Commit", text: "A snapshot of the whole project plus author, message and a link to its parent." },
  { icon: GitBranch, title: "Branch", text: "A movable pointer to a commit. Cheap to create, safe to delete." },
  { icon: Pointer, title: "HEAD", text: "Where you are now: usually the tip of your current branch." },
  { icon: GitMerge, title: "Merge", text: "Join two lines of history into one." },
  { icon: Tag, title: "Tag", text: "A fixed label on a commit, used for releases." },
  { icon: Users, title: "Pull request", text: "A GitHub feature: ask to merge your branch, with review and checks." },
];

const commands = {
  daily: ["git status -sb", "git add -p", 'git commit -m "feat: add dialog"', "git log --oneline --graph --all"],
  undo: ["git restore <file>", "git restore --staged <file>", "git revert <commit>", "git reflog"],
  collaborate: ["git fetch", "git pull", "git push -u origin HEAD", "gh pr create"],
};

export default function ConceptsPage() {
  return (
    <main>
      <Hero
        badge="Mental models"
        badgeIcon={ScrollText}
        title={
          <>
            Understand it once,
            <br />
            <Accent>type it forever.</Accent>
          </>
        }
        description="Version control is four ideas: snapshots, pointers, areas and remotes. Learn the pictures and the commands stop feeling like magic."
        primary={{ label: "Follow the roadmap", href: "/roadmap", icon: Workflow }}
      />

      <Section icon={Library} numeral="I" eyebrow="Git vs GitHub" title="Two different things">
        <div className="grid gap-4 md:grid-cols-2">
          <Card>
            <CardHeader>
              <IconTile icon={GitBranch} />
              <CardTitle className="font-heading text-2xl">Git</CardTitle>
              <CardDescription>
                A version-control tool on your computer. It stores history, branches and merges. Works offline.
              </CardDescription>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader>
              <IconTile icon={Cloud} />
              <CardTitle className="font-heading text-2xl">GitHub</CardTitle>
              <CardDescription>
                A hosting service for Git repositories, adding pull requests, issues, Actions and collaboration.
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </Section>

      <Section
        icon={Archive}
        numeral="II"
        eyebrow="The four places"
        title="Where your work lives"
        description="Every Git command moves changes from one place to another."
      >
        <div className="flex flex-col items-stretch gap-3 md:flex-row">
          {areas.map(({ icon: Icon, name, text }, i) => (
            <div key={name} className="flex flex-1 flex-col items-center gap-3 md:flex-row md:items-stretch">
              <Card className="w-full flex-1">
                <CardHeader>
                  <IconTile icon={Icon} />
                  <CardTitle className="font-heading text-xl">{name}</CardTitle>
                  <CardDescription>{text}</CardDescription>
                </CardHeader>
              </Card>
              {i < arrows.length ? (
                <div className="flex flex-col items-center justify-center gap-1 text-signal md:min-w-20">
                  <code className="font-mono text-xs">{arrows[i]}</code>
                  <ArrowRight className="hidden size-5 md:block" />
                  <ArrowDown className="size-5 md:hidden" />
                </div>
              ) : null}
            </div>
          ))}
        </div>
      </Section>

      <Section
        icon={GitMerge}
        numeral="III"
        eyebrow="History is a graph"
        title="Commits, branches and merges"
        description="Each commit points to its parent. A branch is just a label. Merging joins two lines."
      >
        <Card className="mb-8">
          <CardContent>
            <svg viewBox="0 0 720 220" role="img" aria-label="main branch with a feature branch merged back" className="w-full text-foreground">
              <g fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M30 60 H690" opacity="0.5" />
                <path d="M210 60 C250 60 250 160 290 160 H470 C510 160 510 60 550 60" className="text-signal" stroke="var(--signal)" />
              </g>
              {[30, 120, 210, 380, 550, 650].map((x) => (
                <rect key={x} x={x - 8} y={52} width="16" height="16" fill="var(--background)" stroke="currentColor" strokeWidth="2" />
              ))}
              {[330, 430].map((x) => (
                <rect key={x} x={x - 8} y={152} width="16" height="16" fill="var(--background)" stroke="var(--signal)" strokeWidth="2" />
              ))}
              <text x="30" y="36" fontSize="12" fontFamily="var(--font-jetbrains-mono)" fill="currentColor">main</text>
              <text x="320" y="196" fontSize="12" fontFamily="var(--font-jetbrains-mono)" fill="var(--signal)">feature/add-dialog</text>
              <text x="550" y="36" fontSize="12" fontFamily="var(--font-jetbrains-mono)" fill="currentColor">merge commit</text>
              <text x="620" y="96" fontSize="12" fontFamily="var(--font-jetbrains-mono)" fill="currentColor">HEAD</text>
            </svg>
          </CardContent>
        </Card>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {vocab.map(({ icon, title, text }) => (
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
        icon={Terminal}
        numeral="IV"
        eyebrow="First commands"
        title="The handful you use every day"
        description="You type them yourself. The AI mentor explains each one."
      >
        <Tabs defaultValue="daily" className="max-w-2xl">
          <TabsList>
            <TabsTrigger value="daily">
              <GitCommitHorizontal />
              Daily
            </TabsTrigger>
            <TabsTrigger value="undo">
              <Undo2 />
              Undo
            </TabsTrigger>
            <TabsTrigger value="collaborate">
              <Users />
              Collaborate
            </TabsTrigger>
          </TabsList>
          {Object.entries(commands).map(([key, lines]) => (
            <TabsContent key={key} value={key}>
              <pre className="mt-3 overflow-x-auto border-2 border-foreground bg-card p-4 font-mono text-sm shadow-[4px_4px_0_0_var(--foreground)]">
                {lines.map((line) => (
                  <div key={line} className="flex items-center gap-2">
                    <Terminal className="size-3.5 shrink-0 text-signal" />
                    {line}
                  </div>
                ))}
              </pre>
            </TabsContent>
          ))}
        </Tabs>
      </Section>

      <CtaSection
        icon={Rocket}
        title="Ready to practice?"
        description="The roadmap turns these ideas into fifteen hands-on lessons."
        href="/roadmap"
        label="Open the roadmap"
      />
    </main>
  );
}
