/**
 * Architecture rules for the modular monolith. Run with `pnpm arch`.
 *
 *   app/      routing only; may import modules' public API and shared
 *   modules/  self-contained feature modules; talk to each other only through index.ts
 *   shared/   cross-cutting building blocks; never import modules or app
 *
 * @type {import('dependency-cruiser').IConfiguration}
 */
module.exports = {
  forbidden: [
    {
      name: "no-circular",
      severity: "error",
      comment: "Circular dependencies make modules impossible to reason about or extract.",
      from: {},
      to: { circular: true },
    },
    {
      name: "shared-must-not-depend-on-modules-or-app",
      severity: "error",
      comment: "shared/ is the base layer. It must not know about features.",
      from: { path: "^shared/" },
      to: { path: "^(modules|app)/" },
    },
    {
      name: "modules-must-not-depend-on-app",
      severity: "error",
      comment: "app/ is the outermost layer (routing).",
      from: { path: "^modules/" },
      to: { path: "^app/" },
    },
    {
      name: "modules-use-public-api-only",
      severity: "error",
      comment:
        "A module may import another module only through its public entry points: index.ts (client-safe) or server.ts (server-only).",
      from: { path: "^modules/([^/]+)/" },
      to: { path: "^modules/([^/]+)/", pathNot: ["^modules/$1/", "^modules/[^/]+/(index|server)\\.ts$"] },
    },
    {
      name: "app-uses-public-api-only",
      severity: "error",
      comment: "Routes import modules through their index.ts only.",
      from: { path: "^app/" },
      to: { path: "^modules/[^/]+/", pathNot: "^modules/[^/]+/(index|server)\\.ts$" },
    },
    {
      name: "no-orphans",
      severity: "warn",
      from: {
        orphan: true,
        pathNot: [
          "(^|/)\\.[^/]+\\.(js|cjs|mjs|ts|json)$",
          "\\.d\\.ts$",
          "^app/(loading|error|global-error|not-found|template|layout|manifest|robots|sitemap|opengraph-image|icon)",
          "^app/api/.+/route\\.ts$",
        ],
      },
      to: {},
    },
  ],
  options: {
    tsConfig: { fileName: "tsconfig.json" },
    tsPreCompilationDeps: true,
    doNotFollow: { path: "node_modules" },
    includeOnly: "^(app|modules|shared)/",
    exclude: { path: "\\.(test|spec)\\.(ts|tsx)$" },
    enhancedResolveOptions: {
      exportsFields: ["exports"],
      conditionNames: ["import", "require", "node", "default", "types"],
    },
    reporterOptions: { text: { highlightFocused: true } },
  },
};
