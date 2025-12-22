import { Star, Rocket } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

interface EmptyStateProps {
  type: "favorites" | "error";
  message?: string;
}

export function EmptyState({ type, message }: EmptyStateProps) {
  if (type === "favorites") {
    return (
      <div className="flex flex-col items-center justify-center py-20 px-4 text-center">
        <div className="relative mb-6">
          <Star className="h-20 w-20 text-muted-foreground/30" />
          <div className="absolute inset-0 flex items-center justify-center">
            <Star className="h-12 w-12 text-primary/50 animate-pulse" />
          </div>
        </div>
        <h2 className="font-display text-2xl font-bold text-foreground mb-2">
          No Favorites Yet
        </h2>
        <p className="text-muted-foreground max-w-md mb-6">
          Start exploring the galaxy and add some starships to your favorites
          collection. Your favorites will appear here.
        </p>
        <Button asChild size="lg" className="gap-2">
          <Link to="/starships">
            <Rocket className="h-4 w-4" />
            Browse Starships
          </Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center py-20 px-4 text-center">
      <div className="relative mb-6">
        <Rocket className="h-20 w-20 text-destructive/30" />
      </div>
      <h2 className="font-display text-2xl font-bold text-foreground mb-2">
        Something Went Wrong
      </h2>
      <p className="text-muted-foreground max-w-md mb-6">
        {message ||
          "Failed to load starships. Please check your connection and try again."}
      </p>
      <Button
        variant="outline"
        size="lg"
        onClick={() => window.location.reload()}
      >
        Try Again
      </Button>
    </div>
  );
}
