import { Pokemon } from "../interfaces/pokemon";

// We won't use data from ../pokemons.json because tests must be independent from these possibly changing data.
export const mockPokemons: Pokemon[] = [
  // Power: 318
  { id: 1, name: "Bulbasaur", type: ["Grass"], hp: 45, attack: 49, defense: 49, special_attack: 65, special_defense: 65, speed: 45 },
  // Power: 405
  { id: 2, name: "Ivysaur", type: ["Grass", "Poison"], hp: 60, attack: 62, defense: 63, special_attack: 80, special_defense: 80, speed: 60 },
  // Power: 309
  { id: 3, name: "Charmander", type: ["Fire"], hp: 39, attack: 52, defense: 43, special_attack: 60, special_defense: 50, speed: 65 },
];