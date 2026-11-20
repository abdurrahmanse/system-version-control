"use client";

import { AnimatePresence } from "motion/react";
import * as m from "motion/react-m";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

// A bar that slides across the top from the moment you click an internal link until the new page is there.
export function RouteLoader() {
  const pathname = usePathname();
  // The path we left when a link was clicked. Loading lasts until the path is different.
  const [leaving, setLeaving] = useState<string | null>(null);
  const loading = leaving !== null && leaving === pathname;

  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey) return;
      const anchor = (event.target as Element | null)?.closest("a");
      if (!anchor || anchor.target === "_blank" || anchor.hasAttribute("download")) return;
      const url = new URL(anchor.href, window.location.href);
      if (url.origin !== window.location.origin) return;
      if (url.pathname === window.location.pathname) return;
      setLeaving(window.location.pathname);
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  return (
    <AnimatePresence>
      {loading ? (
        <m.div
          key="route-loader"
          aria-hidden
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="pointer-events-none fixed inset-x-0 top-0 z-[61] h-1 overflow-hidden bg-signal/20"
        >
          <m.div
            className="h-full w-1/3 bg-signal"
            initial={{ x: "-100%" }}
            animate={{ x: "300%" }}
            transition={{ duration: 0.9, ease: "easeInOut", repeat: Infinity }}
          />
        </m.div>
      ) : null}
    </AnimatePresence>
  );
}
