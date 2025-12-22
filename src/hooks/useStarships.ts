import { useQuery } from "@tanstack/react-query";
import { StarshipsResponse } from "@/types/starship";

const fetchStarships = async (url: string): Promise<StarshipsResponse> => {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error("Failed to fetch starships");
  }
  return response.json();
};

export function useStarships(page: number) {
  const url = `https://swapi.dev/api/starships/?page=${page}`;

  return useQuery({
    queryKey: ["starships", page],
    queryFn: () => fetchStarships(url),
    staleTime: 5 * 60 * 1000, // 5 minutes
    gcTime: 30 * 60 * 1000, // 30 minutes
  });
}
