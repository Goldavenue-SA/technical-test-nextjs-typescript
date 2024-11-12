import type { NextApiRequest, NextApiResponse } from "next";
import Pokemons from "../data/pokemon.json";
import { Pokemon } from "../../../interfaces/pokemon";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Pokemon | { error: string }>
) {
  const { id } = req.query;

  const pokemonId = parseInt(id as string, 10);
  if (isNaN(pokemonId)) {
    return res.status(400).json({ error: "Invalid Pokémon ID" });
  }

  const pokemon = Pokemons.find((p) => p.id === pokemonId);

  if (pokemon) {
    res.status(200).json(pokemon);
  } else {
    res.status(404).json({ error: "Pokémon not found" });
  }
}