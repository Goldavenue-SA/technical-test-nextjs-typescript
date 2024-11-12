import { Pokemon } from "../interfaces/pokemon";
import { calculatePower } from "./calculatePower";

export const filterByPowerThreshold = (pokemons: Pokemon[], threshold: number) => {
  return pokemons.filter((pokemon) => calculatePower(pokemon) > threshold);
};