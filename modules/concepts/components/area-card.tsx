import type { LucideIcon } from "lucide-react";

import { InfoCard } from "@/shared/components/cards/info-card";

export function AreaCard({ icon, name, text, href }: { icon: LucideIcon; name: string; text: string; href?: string }) {
  return (
    <div className="w-full flex-1">
      <InfoCard icon={icon} title={name} text={text} href={href} />
    </div>
  );
}
