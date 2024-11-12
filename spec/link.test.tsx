import { render, screen } from "@testing-library/react";
import HomePage from "../pages";
import { mockPokemons } from "./data";

it("should navigate to the correct detail page when clicking on Pokémon name or ID", () => {
  render(<HomePage pokemons={mockPokemons} />);

  const bulbasaurLink = screen.getByText("Bulbasaur");
  expect(bulbasaurLink.closest("a")).toHaveAttribute("href", "/pokemon/1");

  const bulbasaurIdLink = screen.getByText("1");
  expect(bulbasaurIdLink.closest("a")).toHaveAttribute("href", "/pokemon/1");
});
