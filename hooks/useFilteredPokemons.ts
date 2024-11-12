import { useState, useMemo } from "react";
import { Pokemon } from "../interfaces/pokemon";
import { filterByName } from "../helpers/filterByName";
import { filterByPowerThreshold } from "../helpers/filterByPowerThreshold";
import { UseFilteredPokemonsResult } from "../interfaces/UseFilteredPokemonsResult";

// filters an array of pokemon according to a search field and a power field
export const useFilteredPokemons = (pokemons: Pokemon[]): UseFilteredPokemonsResult => {
  const [search, setSearch] = useState("");
  const [power, setPower] = useState("");

  const filteredPokemons = useMemo(() => {
    let result = filterByName(pokemons, search);
    if (power) {
      result = filterByPowerThreshold(result, parseInt(power, 10));
    }
    return result;
  }, [search, power, pokemons]);

  return { filteredPokemons, search, setSearch, power, setPower };
};