import bundleAnalyzer from "@next/bundle-analyzer";
import type { NextConfig } from "next";

// Webpack-based analyzer: run with `pnpm analyze:webpack`. (`pnpm analyze` uses Next's built-in Turbopack analyzer.)
const withBundleAnalyzer = bundleAnalyzer({ enabled: process.env.ANALYZE === "true" });

const securityHeaders = [
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "DENY" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
];

// The e2e run builds into its own folder so it never touches the `.next` that `pnpm dev` is using.
const nextConfig: NextConfig = {
  distDir: process.env.NEXT_DIST_DIR || ".next",
  experimental: {
    agentFeedback: true,
    optimizePackageImports: ["lucide-react", "recharts", "date-fns", "motion"],
  },
  cacheComponents: true,
  reactCompiler: true,
  partialPrefetching: true,
  reactStrictMode: true,
  poweredByHeader: false,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
  async redirects() {
    return [
      { source: "/enterprise/:path*", destination: "/tracks/enterprise", permanent: true },
      { source: "/path", destination: "/tracks", permanent: true },
      { source: "/path/:level", destination: "/tracks/:level", permanent: true },
    ];
  },
  async headers() {
    return [{ source: "/:path*", headers: securityHeaders }];
  },
};

export default withBundleAnalyzer(nextConfig);
