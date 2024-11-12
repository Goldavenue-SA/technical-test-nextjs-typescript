import React from "react";
import Link from "next/link";
import { Pokemon } from "../interfaces/pokemon";
import { calculatePower } from "../helpers/calculatePower";
import TypeBadges from "./TypeBadges";

import { TableCell, TableRow } from "@/components/ui/table";

const PokemonRow = ({ id, name, type, hp, attack, defense, special_attack, special_defense, speed }: Pokemon) => (
  <TableRow>
    <TableCell>
      <Link href={`/pokemon/${id}`} className="underline">{id}</Link>
    </TableCell>
    <TableCell>
      <Link href={`/pokemon/${id}`} className="underline">{name}</Link>
    </TableCell>
    <TableCell>
      <TypeBadges types={type} />
    </TableCell>
    <TableCell>{hp}</TableCell>
    <TableCell>{attack}</TableCell>
    <TableCell>{defense}</TableCell>
    <TableCell>{special_attack}</TableCell>
    <TableCell>{special_defense}</TableCell>
    <TableCell>{speed}</TableCell>
    <TableCell>{calculatePower({ id, name, type, hp, attack, defense, special_attack, special_defense, speed })}</TableCell>
  </TableRow>
);

export default PokemonRow;
