import { useState, useMemo } from "react";
import { useStarships } from "@/hooks/useStarships";
import { Header, PageTitle } from "@/components/Header";
import { SearchBar } from "@/components/SearchBar";
import { StarshipCard } from "@/components/StarshipCard";
import { Pagination } from "@/components/Pagination";
import { LoadingSkeleton } from "@/components/LoadingSkeleton";
import { EmptyState } from "@/components/EmptyState";
import { MobileNav } from "@/components/MobileNav";

export default function StarshipsPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const { data, isLoading, isError, error } = useStarships(currentPage);

  const totalPages = data ? Math.ceil(data.count / 10) : 0;

  const filteredStarships = useMemo(() => {
    if (!data?.results) return [];
    if (!searchQuery.trim()) return data.results;
    
    return data.results.filter(
      (starship) =>
        starship.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        starship.manufacturer.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [data?.results, searchQuery]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen flex flex-col pb-20 md:pb-0">
      <Header />

      <main className="flex-1 container py-4 md:py-8">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
          <PageTitle title="Starship List" />
          <SearchBar
            value={searchQuery}
            onChange={setSearchQuery}
            placeholder="Search"
          />
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
            {filteredStarships.length === 0 ? (
              <EmptyState
                type="no-results"
                message="No starships found matching your search."
              />
            ) : (
              <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
                {filteredStarships.map((starship, index) => (
                  <StarshipCard
                    key={starship.url}
                    starship={starship}
                    index={index}
                  />
                ))}
              </div>
            )}

            {!searchQuery && (
              <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={handlePageChange}
                hasPrevious={!!data.previous}
                hasNext={!!data.next}
                isLoading={isLoading}
              />
            )}
          </>
        )}
      </main>

      <MobileNav />
    </div>
  );
}
