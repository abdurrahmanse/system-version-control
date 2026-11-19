import type { LucideIcon } from "lucide-react";

type Props = { icon: LucideIcon; title: string; text: string };

// Compact horizontal card: icon on the left, text on the right.
export function ChannelCard({ icon: Icon, title, text }: Props) {
  return (
    <li className="flex items-start gap-3 border-2 border-edge bg-card p-3 shadow-[3px_3px_0_0_var(--shadow-hard)]">
      <span className="flex size-9 shrink-0 items-center justify-center border-2 border-edge bg-secondary">
        <Icon className="size-4" />
      </span>
      <span>
        <span className="block font-heading text-base font-bold">{title}</span>
        <span className="block text-sm text-muted-foreground">{text}</span>
      </span>
    </li>
  );
}
