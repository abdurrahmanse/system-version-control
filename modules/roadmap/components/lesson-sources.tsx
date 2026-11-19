import { ExternalLink } from "@/shared/components/common/external-link";

export function LessonSources({ sources }: { sources: readonly { label: string; href: string }[] }) {
  return (
    <ul className="space-y-2 text-sm">
      {sources.map((s) => (
        <li key={s.href}>
          <ExternalLink href={s.href}>{s.label}</ExternalLink>
        </li>
      ))}
    </ul>
  );
}
