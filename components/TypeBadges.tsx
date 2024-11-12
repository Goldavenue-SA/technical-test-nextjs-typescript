import React from "react";
import TypeBadge from "./TypeBadge";
import { TypeBadgesProps } from "../interfaces/TypeBadgesProps";

const TypeBadges: React.FC<TypeBadgesProps> = ({ types }) => {
  return (
    <div className="flex w-full items-center space-x-2 justify-center">
      {types.map((type) => (
        <TypeBadge key={type} type={type} />
      ))}
    </div>
  );
};

export default TypeBadges;
