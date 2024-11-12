import React from "react";
import { PaginationControlsProps } from "../interfaces/PaginationControlsProps";
import { Button } from "@/components/ui/button";

const PaginationControls = ({ currentPage, totalPages, onPageChange }: PaginationControlsProps) => {
  const previousDisabled = currentPage === 1;
  const nextDisabled = currentPage === totalPages;
  return (
    <div className="flex w-full items-center space-x-2 justify-end">
      <Button size="sm" onClick={() => onPageChange(1)} disabled={previousDisabled}>
        First
      </Button>
      <Button size="sm" onClick={() => !previousDisabled && onPageChange(currentPage - 1)} disabled={previousDisabled}>
        Previous
      </Button>
      <span>
        {currentPage} / {totalPages}
      </span>
      <Button size="sm" onClick={() => !nextDisabled && onPageChange(currentPage + 1)} disabled={nextDisabled}>
        Next
      </Button>
      <Button size="sm" onClick={() => onPageChange(totalPages)} disabled={nextDisabled}>
        Last
      </Button>
    </div>
  );
};

export default PaginationControls;
