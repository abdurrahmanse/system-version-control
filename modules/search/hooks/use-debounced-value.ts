"use client";

import { useDebounce } from "use-debounce";

// Delays a fast-changing value (typing) so it does not trigger a request per keystroke.
export function useDebouncedValue<T>(value: T, delay = 250): T {
  const [debounced] = useDebounce(value, delay);
  return debounced;
}
