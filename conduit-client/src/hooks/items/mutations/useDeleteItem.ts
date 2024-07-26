import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteItem } from "../../../apis/items";

export const useDeleteItem = () => {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: ({ id }: { id: number }) => deleteItem(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["items"] });
    },
  });

  return {
    ...mutation,
    $deleteItem: mutation.mutate,
  };
};
