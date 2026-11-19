import { Fragment } from "react";

import { AreaArrow } from "@/modules/concepts/components/area-arrow";
import { AreaCard } from "@/modules/concepts/components/area-card";
import { AREA_ARROWS, AREAS } from "@/modules/concepts/data/concepts";

// The four places work lives, connected by the commands that move it.
export function AreasFlow() {
  return (
    <div className="flex flex-col items-stretch gap-3 md:flex-row">
      {AREAS.map((a, i) => (
        <Fragment key={a.name}>
          <AreaCard icon={a.icon} name={a.name} text={a.text} href={a.href} />
          {AREA_ARROWS[i] ? <AreaArrow command={AREA_ARROWS[i]} /> : null}
        </Fragment>
      ))}
    </div>
  );
}
