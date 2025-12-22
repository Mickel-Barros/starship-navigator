import { useState } from "react";
import { Rocket } from "lucide-react";
import { useStarships } from "@/hooks/useStarships";
import { Header } from "@/components/Header";
import { StarshipCard } from "@/components/StarshipCard";
import { Pagination } from "@/components/Pagination";
import { LoadingSkeleton } from "@/components/LoadingSkeleton";
import { EmptyState } from "@/components/EmptyState";

export default function StarshipsPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const { data, isLoading, isError, error } = useStarships(currentPage);

  const totalPages = data ? Math.ceil(data.count / 10) : 0;

  const handlePrevious = () => {
    if (data?.previous) {
      setCurrentPage((prev) => prev - 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleNext = () => {
    if (data?.next) {
      setCurrentPage((prev) => prev + 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 container px-4 md:px-6 py-8">
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <Rocket className="h-8 w-8 text-primary" />
            <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground tracking-wider">
              STARSHIP <span className="text-primary text-glow">REGISTRY</span>
            </h1>
          </div>
          <p className="text-muted-foreground max-w-2xl">
            Explore the complete database of starships from the Star Wars
            universe. Browse specifications, compare vessels, and save your
            favorites.
          </p>
          {data && (
            <p className="text-sm text-primary mt-2 font-medium">
              {data.count} starships in the galaxy
            </p>
          )}
        </div>

        {isLoading && <LoadingSkeleton />}

        {isError && (
          <EmptyState
            type="error"
            message={error?.message || "Failed to load starships"}
          />
        )}

        {data && !isLoading && (
          <>
            <div className="grid gap-4 md:gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {data.results.map((starship, index) => (
                <StarshipCard
                  key={starship.url}
                  starship={starship}
                  index={index}
                />
              ))}
            </div>

            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPrevious={handlePrevious}
              onNext={handleNext}
              hasPrevious={!!data.previous}
              hasNext={!!data.next}
              isLoading={isLoading}
            />
          </>
        )}
      </main>

      <footer className="border-t border-border/50 py-6">
        <div className="container px-4 md:px-6 text-center text-sm text-muted-foreground">
          <p>
            Data provided by{" "}
            <a
              href="https://swapi.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              SWAPI
            </a>{" "}
            — The Star Wars API
          </p>
        </div>
      </footer>
    </div>
  );
}
