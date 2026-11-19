import { MonoLabel } from "@/shared/components/common/mono-label";

export function LabelledText({ label, children }: { label: string; children: string }) {
  return (
    <div className="space-y-1">
      <MonoLabel className="text-[0.65rem]">{label}</MonoLabel>
      <p>{children}</p>
    </div>
  );
}
