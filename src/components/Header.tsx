import { Link, useLocation } from "react-router-dom";
import { Rocket, Star } from "lucide-react";
import { useFavorites } from "@/context/FavoritesContext";

export function Header() {
  const location = useLocation();
  const { favorites } = useFavorites();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/50 bg-background/80 backdrop-blur-xl">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <Link to="/starships" className="flex items-center gap-3 group">
          <div className="relative">
            <Rocket className="h-7 w-7 text-primary transition-transform duration-300 group-hover:rotate-12" />
            <div className="absolute inset-0 bg-primary/20 blur-lg rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
          <span className="font-display text-lg md:text-xl font-bold text-foreground tracking-wider">
            STARSHIP <span className="text-primary text-glow">REGISTRY</span>
          </span>
        </Link>

        <nav className="flex items-center gap-2 md:gap-4">
          <Link
            to="/starships"
            className={`relative px-3 py-2 md:px-4 font-medium text-sm md:text-base transition-all duration-300 rounded-lg ${
              location.pathname === "/starships"
                ? "text-primary"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            <span className="relative z-10 flex items-center gap-2">
              <Rocket className="h-4 w-4" />
              <span className="hidden sm:inline">Starships</span>
            </span>
            {location.pathname === "/starships" && (
              <span className="absolute inset-0 bg-primary/10 rounded-lg border border-primary/30" />
            )}
          </Link>

          <Link
            to="/favorites"
            className={`relative px-3 py-2 md:px-4 font-medium text-sm md:text-base transition-all duration-300 rounded-lg ${
              location.pathname === "/favorites"
                ? "text-primary"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            <span className="relative z-10 flex items-center gap-2">
              <Star className="h-4 w-4" />
              <span className="hidden sm:inline">Favorites</span>
              {favorites.length > 0 && (
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-primary text-primary-foreground text-xs font-bold">
                  {favorites.length}
                </span>
              )}
            </span>
            {location.pathname === "/favorites" && (
              <span className="absolute inset-0 bg-primary/10 rounded-lg border border-primary/30" />
            )}
          </Link>
        </nav>
      </div>
    </header>
  );
}
