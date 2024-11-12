import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import HomePage from "../pages";
import { mockPokemons } from "./data";

describe("HomePage search functionality", () => {
  beforeEach(() => {
    render(<HomePage pokemons={mockPokemons} />);
  });

  it("should filter Pokémon by name", () => {
    const searchInput = screen.getByPlaceholderText("Search by name");
    fireEvent.change(searchInput, { target: { value: "Char" } });

    expect(screen.queryByText("Bulbasaur")).not.toBeInTheDocument();
    expect(screen.getByText("Charmander")).toBeInTheDocument();
  });

  it("should filter Pokémon by power threshold", () => {
    const powerInput = screen.getByPlaceholderText("Enter power threshold");

    fireEvent.change(powerInput, { target: { value: "320" } });

    expect(screen.queryByText("Bulbasaur")).not.toBeInTheDocument();
    expect(screen.queryByText("Charmander")).not.toBeInTheDocument();
    expect(screen.getByText("Ivysaur")).toBeInTheDocument();
  });

  it("should reset results when search fields are changed", () => {
    const searchInput = screen.getByPlaceholderText("Search by name");
    const powerInput = screen.getByPlaceholderText("Enter power threshold");

    fireEvent.change(searchInput, { target: { value: "Ivysaur" } });
    fireEvent.change(powerInput, { target: { value: "0" } });

    expect(screen.getByText("Ivysaur")).toBeInTheDocument();
  });

  it("should display correct count of filtered Pokémon", () => {
    const searchInput = screen.getByPlaceholderText("Search by name");
    fireEvent.change(searchInput, { target: { value: "Char" } });
    expect(screen.getByText("Count over threshold: 1")).toBeInTheDocument();
  });

  it("should calculate min and max power of filtered Pokémon", () => {
    const searchInput = screen.getByPlaceholderText("Search by name");
    fireEvent.change(searchInput, { target: { value: "Char" } });

    expect(screen.getByText("Min Power: 309")).toBeInTheDocument();
    expect(screen.getByText("Max Power: 309")).toBeInTheDocument();
  });
});
