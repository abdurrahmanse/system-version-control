import { CommandLine } from "@/shared/components/common/command-line";
import { StepNumber } from "@/shared/components/common/step-number";
import { Stagger, StaggerItem } from "@/shared/motion/stagger";

type Step = { title: string; text: string; command?: string };

// Ordered, animated list of numbered steps. The group is the <ol>, each item is an <li>.
export function NumberedSteps({ steps }: { steps: readonly Step[] }) {
  return (
    <Stagger as="ol" className="max-w-3xl space-y-4">
      {steps.map((s, i) => (
        <StaggerItem
          key={s.title}
          as="li"
          className="flex items-start gap-4 border-2 border-edge bg-card p-4 shadow-[3px_3px_0_0_var(--shadow-hard)]"
        >
          <StepNumber n={i + 1} />
          <div className="space-y-2">
            <p className="font-heading text-lg font-bold">{s.title}</p>
            <p className="text-sm text-muted-foreground">{s.text}</p>
            {s.command ? <CommandLine command={s.command} /> : null}
          </div>
        </StaggerItem>
      ))}
    </Stagger>
  );
}
