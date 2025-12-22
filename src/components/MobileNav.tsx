import { Link, useLocation } from "react-router-dom";
import { Rocket, Heart } from "lucide-react";

export function MobileNav() {
  const location = useLocation();

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-card border-t border-border md:hidden">
      <div className="flex items-center justify-around h-16">
        <Link
          to="/starships"
          className={`flex flex-col items-center gap-1 px-6 py-2 ${
            location.pathname === "/starships"
              ? "text-primary"
              : "text-muted-foreground"
          }`}
        >
          <Rocket className="h-5 w-5" />
          <span className="text-xs">Starship List</span>
        </Link>

        <Link
          to="/favorites"
          className={`flex flex-col items-center gap-1 px-6 py-2 ${
            location.pathname === "/favorites"
              ? "text-primary"
              : "text-muted-foreground"
          }`}
        >
          <Heart className="h-5 w-5" />
          <span className="text-xs">Favorites</span>
        </Link>
      </div>
    </nav>
  );
}
