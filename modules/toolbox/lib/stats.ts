import { PACKAGE_GROUPS } from "@/modules/toolbox/data/packages";

export const getPackageCount = () => PACKAGE_GROUPS.reduce((sum, g) => sum + g.items.length, 0);
