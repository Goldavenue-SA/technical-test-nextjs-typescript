import React from "react";
import PokemonRow from "./PokemonRow";
import { PokemonTableProps } from "../interfaces/PokemonTableProps";

import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const PokemonTable = ({ pokemons }: PokemonTableProps) => (
  <Table>
    <TableHeader>
      <TableRow>
        <TableHead>ID</TableHead>
        <TableHead>Name</TableHead>
        <TableHead>Type</TableHead>
        <TableHead>Stats</TableHead>
        <TableHead></TableHead>
        <TableHead></TableHead>
        <TableHead></TableHead>
        <TableHead></TableHead>
        <TableHead></TableHead>
        <TableHead>Power</TableHead>
      </TableRow>
    </TableHeader>
    <TableBody>
      {pokemons.map((pokemon) => (
        <PokemonRow key={pokemon.id} {...pokemon} />
      ))}
    </TableBody>
  </Table>
);

export default PokemonTable;
