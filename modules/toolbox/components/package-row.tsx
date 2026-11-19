import type { PackageInfo } from "@/modules/toolbox/data/packages";
import { PACKAGES_NPM, PACKAGES_UI } from "@/modules/toolbox/data/toolbox";
import { Badge } from "@/shared/ui/badge";

export function PackageRow({ pkg }: { pkg: PackageInfo }) {
  return (
    <li className="space-y-1 border-t border-edge/30 pt-3 first:border-t-0 first:pt-0">
      <a
        href={`${PACKAGES_NPM.base}${pkg.name}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`${PACKAGES_NPM.label}: ${pkg.name}`}
      >
        <Badge variant="outline" className="font-code normal-case hover:bg-foreground hover:text-background">
          {pkg.name}
        </Badge>
      </a>
      <p className="text-sm">{pkg.purpose}</p>
      <p className="font-code text-xs text-muted-foreground">
        {PACKAGES_UI.usedIn}: {pkg.usedIn}
      </p>
    </li>
  );
}
