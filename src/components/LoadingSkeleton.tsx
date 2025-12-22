import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export function LoadingSkeleton() {
  return (
    <div className="grid gap-4 md:gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {Array.from({ length: 6 }).map((_, i) => (
        <Card
          key={i}
          className="border-border/50 bg-card/50 backdrop-blur-sm overflow-hidden"
          style={{ animationDelay: `${i * 100}ms` }}
        >
          <CardHeader className="pb-2">
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1 space-y-2">
                <Skeleton className="h-6 w-3/4 bg-muted/50" />
                <Skeleton className="h-4 w-1/2 bg-muted/30" />
              </div>
              <Skeleton className="h-8 w-8 rounded-full bg-muted/50" />
            </div>
          </CardHeader>
          <CardContent className="pt-0 space-y-4">
            <div className="space-y-2">
              <Skeleton className="h-3 w-24 bg-muted/30" />
              <Skeleton className="h-4 w-full bg-muted/50" />
            </div>
            <div className="grid grid-cols-2 gap-3">
              {Array.from({ length: 4 }).map((_, j) => (
                <Skeleton key={j} className="h-5 w-full bg-muted/30" />
              ))}
            </div>
            <div className="pt-4 border-t border-border/50 space-y-2">
              <Skeleton className="h-4 w-full bg-muted/30" />
              <Skeleton className="h-4 w-3/4 bg-muted/30" />
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
