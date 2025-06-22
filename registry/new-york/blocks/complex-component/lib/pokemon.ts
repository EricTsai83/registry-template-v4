import { useQuery } from "@tanstack/react-query";
import { z } from "zod";

const pokemonListSchema = z.object({
  results: z.array(z.object({ name: z.string() })),
});

const pokemonSchema = z.object({
  name: z.string(),
  id: z.number(),
  sprites: z.object({
    front_default: z.string(),
  }),
  stats: z.array(
    z.object({
      base_stat: z.number(),
      stat: z.object({
        name: z.string(),
      }),
    }),
  ),
});

async function getPokemonList({ limit = 10 }: { limit?: number }) {
  const response = await fetch(
    `https://pokeapi.co/api/v2/pokemon?limit=${limit}`,
  );
  if (!response.ok) {
    throw new Error("Failed to fetch pokemon list");
  }
  return pokemonListSchema.parse(await response.json());
}

export async function getPokemon(name: string) {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
  if (!response.ok) {
    throw new Error("Failed to fetch pokemon");
  }
  return pokemonSchema.parse(await response.json());
}

export function usePokemonList(limit?: number) {
  return useQuery({
    queryKey: ["pokemon-list", limit],
    queryFn: () => getPokemonList({ limit }),
  });
}

export function usePokemon(name: string) {
  return useQuery({
    queryKey: ["pokemon", name],
    queryFn: () => getPokemon(name),
    enabled: !!name, // 只有當 name 存在時才執行查詢
  });
}
