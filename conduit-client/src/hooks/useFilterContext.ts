import { useContext } from "react";
import { FilterContext } from "../context/filter";

export const useFilterContext = () => {
  const context = useContext(FilterContext);

  if (!context) {
    throw new Error(
      "useFilterContext must be used within a FilterContextProvider"
    );
  }

  return context;
};
