import React from "react";
import { StatsDisplayProps } from "../interfaces/StatsDisplayProps";
import { Separator } from "./ui/separator";

const StatsDisplay = ({ count, minPower, maxPower }: StatsDisplayProps) => (
  <div className="flex h-5 items-center space-x-4 text-sm my-6 mx-4 sm:m-2">
    <div>Count over threshold: {count}</div>
    <Separator orientation="vertical" />
    <div>Min Power: {minPower}</div>
    <Separator orientation="vertical" />
    <div>Max Power: {maxPower}</div>
  </div>
);

export default StatsDisplay;
