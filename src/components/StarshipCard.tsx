import { Star, Users, Gauge, Package, Zap } from "lucide-react";
import { Starship } from "@/types/starship";
import { useFavorites } from "@/context/FavoritesContext";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

interface StarshipCardProps {
  starship: Starship;
  index?: number;
}

export function StarshipCard({ starship, index = 0 }: StarshipCardProps) {
  const { addFavorite, removeFavorite, isFavorite } = useFavorites();
  const isFav = isFavorite(starship.url);

  const handleToggleFavorite = () => {
    if (isFav) {
      removeFavorite(starship.url);
    } else {
      addFavorite(starship);
    }
  };

  const formatValue = (value: string) => {
    if (value === "unknown" || value === "n/a") return "Unknown";
    return value;
  };

  return (
    <Card
      className="group relative overflow-hidden border-border/50 bg-card/50 backdrop-blur-sm transition-all duration-500 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5 card-glow animate-fade-in-up"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <CardHeader className="relative pb-2">
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1 min-w-0">
            <h3 className="font-display text-lg md:text-xl font-bold text-foreground tracking-wide truncate group-hover:text-primary transition-colors">
              {starship.name}
            </h3>
            <p className="text-sm text-muted-foreground mt-1 truncate">
              {starship.model}
            </p>
          </div>
          <Button
            variant="ghost"
            size="icon"
            onClick={handleToggleFavorite}
            className={`shrink-0 transition-all duration-300 ${
              isFav
                ? "text-primary hover:text-primary/80"
                : "text-muted-foreground hover:text-primary"
            }`}
          >
            <Star
              className={`h-5 w-5 transition-all duration-300 ${
                isFav ? "fill-primary" : "fill-transparent"
              }`}
            />
          </Button>
        </div>
      </CardHeader>

      <CardContent className="relative pt-0">
        <div className="mb-4">
          <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">
            Manufacturer
          </p>
          <p className="text-sm text-foreground/80 line-clamp-2">
            {formatValue(starship.manufacturer)}
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div className="flex items-center gap-2 text-sm">
            <Users className="h-4 w-4 text-primary/70" />
            <span className="text-muted-foreground">Crew:</span>
            <span className="text-foreground font-medium">
              {formatValue(starship.crew)}
            </span>
          </div>
          
          <div className="flex items-center gap-2 text-sm">
            <Gauge className="h-4 w-4 text-primary/70" />
            <span className="text-muted-foreground">Speed:</span>
            <span className="text-foreground font-medium">
              {formatValue(starship.max_atmosphering_speed)}
            </span>
          </div>

          <div className="flex items-center gap-2 text-sm">
            <Package className="h-4 w-4 text-primary/70" />
            <span className="text-muted-foreground">Cargo:</span>
            <span className="text-foreground font-medium truncate">
              {formatValue(starship.cargo_capacity)}
            </span>
          </div>

          <div className="flex items-center gap-2 text-sm">
            <Zap className="h-4 w-4 text-primary/70" />
            <span className="text-muted-foreground">Hyperdrive:</span>
            <span className="text-foreground font-medium">
              {formatValue(starship.hyperdrive_rating)}
            </span>
          </div>
        </div>

        <div className="mt-4 pt-4 border-t border-border/50">
          <div className="flex items-center justify-between text-sm">
            <span className="text-muted-foreground">Class</span>
            <span className="text-foreground font-medium capitalize">
              {formatValue(starship.starship_class)}
            </span>
          </div>
          <div className="flex items-center justify-between text-sm mt-1">
            <span className="text-muted-foreground">Cost</span>
            <span className="text-primary font-bold">
              {starship.cost_in_credits !== "unknown"
                ? `${Number(starship.cost_in_credits).toLocaleString()} credits`
                : "Unknown"}
            </span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
