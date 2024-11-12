import { calculatePower } from "../helpers/calculatePower";
import { filterByName } from "../helpers/filterByName";
import { filterByPowerThreshold } from "../helpers/filterByPowerThreshold";
import { mockPokemons } from "./data";

describe("calculatePower", () => {
  it("should return the correct sum of Pokémon stats", () => {
    const pokemon = { id: 0, name: "", type: [""], hp: 50, attack: 60, defense: 40, special_attack: 50, special_defense: 40, speed: 60 };
    expect(calculatePower(pokemon)).toBe(300);
  });

  it("should return zero if all stats are zero", () => {
    const pokemon = { id: 0, name: "", type: [""], hp: 0, attack: 0, defense: 0, special_attack: 0, special_defense: 0, speed: 0 };
    expect(calculatePower(pokemon)).toBe(0);
  });
});

describe("filterByName", () => {
  it("should return Pokémon whose names contain the search term, case-insensitively", () => {
    const result = filterByName(mockPokemons, "saur");
    expect(result).toEqual([mockPokemons[0], mockPokemons[1]]);
  });

  it("should return an empty array if no Pokémon match the search term", () => {
    const result = filterByName(mockPokemons, "xyz");
    expect(result).toEqual([]);
  });

  it("should return all Pokémon if the search term is an empty string", () => {
    const result = filterByName(mockPokemons, "");
    expect(result).toEqual(mockPokemons);
  });
});

describe("filterByPowerThreshold", () => {
  it("should return Pokémon with power strictly greater than the threshold", () => {
    const result = filterByPowerThreshold(mockPokemons, 320);
    expect(result).toEqual([mockPokemons[1]]);
  });

  it("should return an empty array if no Pokémon exceed the power threshold", () => {
    const result = filterByPowerThreshold(mockPokemons, 500);
    expect(result).toEqual([]);
  });

  it("should return all Pokémon if the threshold is zero", () => {
    const result = filterByPowerThreshold(mockPokemons, 0);
    expect(result).toEqual(mockPokemons);
  });
});