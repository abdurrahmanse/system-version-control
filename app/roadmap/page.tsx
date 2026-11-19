import type { Metadata } from "next";
import { Compass, FileText, Flag, GraduationCap, Rocket, Route, Users, Zap } from "lucide-react";

import { CtaSection } from "@/components/site/cta-section";
import { Accent, Hero } from "@/components/site/hero";
import { LessonTimeline } from "@/components/site/lesson-timeline";
import { Section } from "@/components/site/section";
import { LESSONS, LEVELS } from "@/lib/lessons";

export const metadata: Metadata = { title: "Roadmap" };

const levelIcons = { Beginner: Compass, Intermediate: Users, Advanced: Zap, "Pro Max": Flag } as const;

export default function RoadmapPage() {
  return (
    <main>
      <Hero
        badge="15 lessons · 4 levels"
        badgeIcon={GraduationCap}
        title={
          <>
            The complete path,
            <br />
            <Accent>zero to Pro Max.</Accent>
          </>
        }
        description="Every lesson is a commit on your learning branch. Work in order. Each one has commands, a project task and a checkpoint. The full text lives in docs/ROADMAP.md."
        primary={{ label: "Read the concepts first", href: "/concepts", icon: FileText }}
        secondary={{ label: "Meet the AI mentor", href: "/mentor", icon: Route }}
      />

      {LEVELS.map((level) => (
        <Section
          key={level.name}
          icon={levelIcons[level.name]}
          numeral={level.numeral}
          eyebrow={`Level ${level.numeral}`}
          title={level.name}
          description={level.tagline}
        >
          <LessonTimeline lessons={LESSONS.filter((l) => l.level === level.name)} />
        </Section>
      ))}

      <CtaSection
        icon={Rocket}
        title="Finished? Go further"
        description="Capstone: ship v1.0.0 and send one pull request to an open-source project."
        href="/packages"
        label="Open the toolbox"
      />
    </main>
  );
}
