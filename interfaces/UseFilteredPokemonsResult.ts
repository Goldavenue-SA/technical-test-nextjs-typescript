import { Pokemon } from "../interfaces/pokemon";

export interface UseFilteredPokemonsResult {
  filteredPokemons: Pokemon[];
  search: string,
  setSearch: (value: string) => void;
  power: string,
  setPower: (value: string) => void;
}
