import { render, screen } from "@testing-library/react";
import PokemonPage from "../pages/pokemon/[id]";
import { mockPokemons } from "./data";

it("should display all information of a Pokémon correctly", () => {
  const pokemon = mockPokemons[0];
  render(<PokemonPage {...pokemon} />);

  expect(screen.getByText(pokemon.name)).toBeInTheDocument();
  pokemon.type.forEach((value) => {
    expect(screen.getByText((content) => content.includes(value))).toBeInTheDocument();
  });
  expect(screen.getByText((content) => content.includes("Grass"))).toBeInTheDocument();
  expect(screen.getByText("HP: " + pokemon.hp)).toBeInTheDocument();
  expect(screen.getByText("Attack: " + pokemon.attack)).toBeInTheDocument();
  expect(screen.getByText("Defense: " + pokemon.defense)).toBeInTheDocument();
  expect(screen.getByText("Special Attack: " + pokemon.special_attack)).toBeInTheDocument();
  expect(screen.getByText("Special Defense: " + pokemon.special_defense)).toBeInTheDocument();
  expect(screen.getByText("Speed: " + pokemon.speed)).toBeInTheDocument();
});
