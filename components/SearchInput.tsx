import React from "react";
import { SearchInputProps } from "../interfaces/SearchInputProps";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { X } from "lucide-react";

const SearchInput = ({ search, onChange }: SearchInputProps) => (
  <div className="flex items-center space-x-2 relative">
    <Label htmlFor="search">Search</Label>
    <Input id="search" type="text" value={search} onChange={(e) => onChange(e.target.value)} placeholder="Search by name" className="w-full pr-9" />
    <Button
      type="button"
      variant="ghost"
      size="icon"
      className="absolute right-1 top-1/2 -translate-y-1/2 h-7 w-7 text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100"
      onClick={() => onChange("")}>
      <X className="h-4 w-4" />
      <span className="sr-only">Clear</span>
    </Button>
  </div>
);

export default SearchInput;
