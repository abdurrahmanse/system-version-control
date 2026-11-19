// Liveness probe for uptime checks and deployments.
export function GET() {
  return Response.json({ status: "ok" });
}
