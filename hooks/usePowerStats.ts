import { useMemo } from "react";
import { Pokemon } from "../interfaces/pokemon";
import { calculatePower } from "../helpers/calculatePower";
import { UsePowerStatsResult } from "../interfaces/UsePowerStatsResult";

// find min and max power from a pokemon array
export const usePowerStats = (pokemons: Pokemon[]): UsePowerStatsResult => {
  const { minPower, maxPower } = useMemo(() => {
    if (pokemons.length === 0) {
      return { minPower: 0, maxPower: 0 };
    }

    const powers = pokemons.map(calculatePower);
    return {
      minPower: Math.min(...powers),
      maxPower: Math.max(...powers),
    };
  }, [pokemons]);

  return { minPower, maxPower };
};