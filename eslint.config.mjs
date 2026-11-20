import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";
import simpleImportSort from "eslint-plugin-simple-import-sort";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  globalIgnores([
    ".next/**",
    ".next-e2e/**",
    "out/**",
    "build/**",
    "coverage/**",
    "playwright-report/**",
    "test-results/**",
    "next-env.d.ts",
  ]),
  {
    plugins: { "simple-import-sort": simpleImportSort },
    rules: {
      "simple-import-sort/imports": "error",
      "simple-import-sort/exports": "error",
      "@typescript-eslint/consistent-type-imports": ["error", { fixStyle: "inline-type-imports" }],
      "no-console": ["warn", { allow: ["warn", "error"] }],
      eqeqeq: ["error", "always"],
    },
  },
  {
    // Rule: no hardcoded UI text in components. Copy lives in each module's data/ folder.
    files: ["app/**/*.tsx", "modules/**/*.tsx", "shared/components/**/*.tsx"],
    ignores: ["**/*.test.tsx"],
    rules: {
      "react/jsx-no-literals": [
        "error",
        { noStrings: false, allowedStrings: ["·", "/", "•", "→", "—", "-", ":", "(", ")", "%", "v", "L", "⌘"] },
      ],
    },
  },
  {
    // The curriculum module is pure domain content: no UI frameworks.
    files: ["modules/curriculum/**/*.ts"],
    rules: {
      "no-restricted-imports": [
        "error",
        { patterns: ["react", "react/*", "react-dom", "next", "next/*", "lucide-react", "zustand", "motion/*"] },
      ],
    },
  },
  {
    // Vendored shadcn/ui components: keep upstream code as generated.
    files: ["shared/ui/**"],
    rules: { "react-hooks/set-state-in-effect": "off", "react/jsx-no-literals": "off" },
  },
  {
    // Server-only code must never reach the client bundle.
    files: ["app/api/**/*.ts"],
    rules: { "no-console": "off" },
  },
]);

export default eslintConfig;
