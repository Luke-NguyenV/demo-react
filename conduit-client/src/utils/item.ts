export const getFilterParams = (selectedFilter: { value: string }) => {
  if (selectedFilter.value === "packed") return { packed: true };
  if (selectedFilter.value === "unpacked") return { packed: false };
  return { packed: undefined };
};
