import { useQuery } from "@tanstack/react-query";
import { GetItemParams } from "../../../types/item";
import { getItems } from "../../../apis/items";

export const useItems = (params?: GetItemParams) => {
  const query = useQuery({
    queryKey: ["items", params?.packed],
    queryFn: () => getItems(params),
  });

  return {
    ...query,
    items: query.data ?? [],
  };
};
