import { Container } from "@/shared/components/layout/container";
import { Skeleton } from "@/shared/ui/skeleton";

// Placeholder shown while a dynamic segment (params) resolves. Same Container as every page.
export function PageSkeleton() {
  return (
    <Container role="status" aria-busy="true" className="space-y-6 py-16">
      <Skeleton className="h-10 w-1/2" />
      <Skeleton className="h-4 w-3/4" />
      <Skeleton className="h-64 w-full" />
    </Container>
  );
}
