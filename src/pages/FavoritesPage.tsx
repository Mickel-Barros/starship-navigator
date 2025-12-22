import { Star } from "lucide-react";
import { Header } from "@/components/Header";
import { FavoriteCard } from "@/components/FavoriteCard";
import { EmptyState } from "@/components/EmptyState";
import { useFavorites } from "@/context/FavoritesContext";

export default function FavoritesPage() {
  const { favorites } = useFavorites();

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 container px-4 md:px-6 py-8">
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <Star className="h-8 w-8 text-primary fill-primary" />
            <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground tracking-wider">
              YOUR <span className="text-primary text-glow">FAVORITES</span>
            </h1>
          </div>
          <p className="text-muted-foreground max-w-2xl">
            Your curated collection of starships. Add personal notes to remember
            why each vessel is special to you.
          </p>
          {favorites.length > 0 && (
            <p className="text-sm text-primary mt-2 font-medium">
              {favorites.length} starship{favorites.length !== 1 ? "s" : ""} in
              your collection
            </p>
          )}
        </div>

        {favorites.length === 0 ? (
          <EmptyState type="favorites" />
        ) : (
          <div className="grid gap-4 md:gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {favorites.map((starship, index) => (
              <FavoriteCard
                key={starship.url}
                starship={starship}
                index={index}
              />
            ))}
          </div>
        )}
      </main>

      <footer className="border-t border-border/50 py-6 mt-auto">
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
