import { Pokemon } from "../interfaces/pokemon";

export const filterByName = (pokemons: Pokemon[], searchTerm: string) => {
  return pokemons.filter((pokemon) =>
    pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
};