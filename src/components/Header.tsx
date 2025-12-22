import { Link, useLocation } from "react-router-dom";
import { Heart, ArrowLeft } from "lucide-react";
import { useFavorites } from "@/context/FavoritesContext";
import { Button } from "@/components/ui/button";

export function Header() {
  const location = useLocation();
  const { favorites } = useFavorites();
  const isFavoritesPage = location.pathname === "/favorites";

  return (
    <header className="w-full py-4">
      <div className="container flex items-center justify-between">
        <Link to="/starships" className="flex items-center gap-2">
          <div className="w-10 h-10 flex items-center justify-center">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M16 2L20 12L30 14L22 22L24 32L16 26L8 32L10 22L2 14L12 12L16 2Z" fill="url(#star-gradient)" />
              <defs>
                <linearGradient id="star-gradient" x1="2" y1="2" x2="30" y2="32" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#FF6871" />
                  <stop offset="1" stopColor="#FFC22B" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </Link>

        {!isFavoritesPage && (
          <Button
            asChild
            variant="outline"
            className="gap-2 border-primary text-primary hover:bg-primary/10 rounded-full px-5"
          >
            <Link to="/favorites">
              <Heart className="h-4 w-4" />
              View Favorites
            </Link>
          </Button>
        )}
      </div>
    </header>
  );
}

export function PageTitle({ title, showBack = false }: { title: string; showBack?: boolean }) {
  return (
    <div className="flex items-center gap-3 mb-6">
      {showBack && (
        <Link
          to="/starships"
          className="w-8 h-8 flex items-center justify-center rounded-full bg-secondary hover:bg-secondary/80 transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
        </Link>
      )}
      <h1 className="text-4xl md:text-5xl font-bold text-foreground">{title}</h1>
    </div>
  );
}
