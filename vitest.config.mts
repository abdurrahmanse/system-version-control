import path from "node:path";

import react from "@vitejs/plugin-react";
import { defineConfig } from "vitest/config";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname),
      // `server-only` throws outside the server runtime; tests import server modules directly.
      "server-only": path.resolve(import.meta.dirname, "tests/mocks/server-only.ts"),
    },
  },
  test: {
    environment: "jsdom",
    environmentOptions: { jsdom: { url: "http://localhost:3000" } },
    setupFiles: ["./tests/setup.ts"],
    include: ["modules/**/*.test.{ts,tsx}", "shared/**/*.test.{ts,tsx}"],
    css: false,
    coverage: {
      provider: "v8",
      include: ["modules/**/*.{ts,tsx}", "shared/**/*.{ts,tsx}"],
      exclude: ["**/*.test.*", "**/data/**", "**/views/**", "shared/ui/**", "**/index.ts"],
      reporter: ["text-summary", "html"],
    },
  },
});
