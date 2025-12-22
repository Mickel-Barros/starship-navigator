import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPrevious: () => void;
  onNext: () => void;
  hasPrevious: boolean;
  hasNext: boolean;
  isLoading?: boolean;
}

export function Pagination({
  currentPage,
  totalPages,
  onPrevious,
  onNext,
  hasPrevious,
  hasNext,
  isLoading,
}: PaginationProps) {
  return (
    <div className="flex items-center justify-center gap-4 py-8">
      <Button
        variant="outline"
        size="lg"
        onClick={onPrevious}
        disabled={!hasPrevious || isLoading}
        className="gap-2 border-border/50 hover:border-primary/50 hover:bg-primary/10 disabled:opacity-30"
      >
        <ChevronLeft className="h-4 w-4" />
        <span className="hidden sm:inline">Previous</span>
      </Button>

      <div className="flex items-center gap-2 px-4">
        <span className="text-sm text-muted-foreground">Page</span>
        <span className="font-display text-lg font-bold text-primary">
          {currentPage}
        </span>
        <span className="text-sm text-muted-foreground">of</span>
        <span className="font-display text-lg font-bold text-foreground">
          {totalPages}
        </span>
      </div>

      <Button
        variant="outline"
        size="lg"
        onClick={onNext}
        disabled={!hasNext || isLoading}
        className="gap-2 border-border/50 hover:border-primary/50 hover:bg-primary/10 disabled:opacity-30"
      >
        <span className="hidden sm:inline">Next</span>
        <ChevronRight className="h-4 w-4" />
      </Button>
    </div>
  );
}
