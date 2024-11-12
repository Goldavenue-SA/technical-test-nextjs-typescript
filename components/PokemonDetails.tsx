import React from "react";
import { Pokemon } from "../interfaces/pokemon";
import TypeBadges from "./TypeBadges";
import { Separator } from "./ui/separator";
import { calculatePower } from "@/helpers/calculatePower";

const PokemonDetails = (pokemon: Pokemon) => {
  const { type, hp, attack, defense, special_attack, special_defense, speed } = pokemon;
  return (
    <>
      <div className="flex flex-col items-center m-4">
        <div className="mb-4">
          <TypeBadges types={type} />
        </div>
        <div className="flex h-5 items-center space-x-4 text-sm my-6 mx-4 sm:m-2">
          <div>HP: {hp}</div>
          <Separator orientation="vertical" />
          <div>Attack: {attack}</div>
          <Separator orientation="vertical" />
          <div>Defense: {defense}</div>
          <Separator orientation="vertical" />
          <div>Special Attack: {special_attack}</div>
          <Separator orientation="vertical" />
          <div>Special Defense: {special_defense}</div>
          <Separator orientation="vertical" />
          <div>Speed: {speed}</div>
          <Separator orientation="vertical" />
          <div>Power: {calculatePower(pokemon)}</div>
        </div>
      </div>
    </>
  );
};

export default PokemonDetails;
