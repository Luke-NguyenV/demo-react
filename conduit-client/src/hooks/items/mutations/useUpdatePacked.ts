import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updatePackedItem } from "../../../apis/items";

export const useUpdatePackedItem = () => {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: ({ id, packed }: { id: number; packed: boolean }) =>
      updatePackedItem(id, packed),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["items"] });
    },
  });

  return {
    ...mutation,
    $updatePackedItem: mutation.mutate,
  };
};
