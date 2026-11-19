import ky from "ky";

// The single HTTP client. Timeouts and GET-only retry are decided here, not at call sites.
export const httpClient = ky.create({
  timeout: 10_000,
  retry: { limit: 1, methods: ["get"] },
  headers: { Accept: "application/json" },
});
