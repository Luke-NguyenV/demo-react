import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createItem } from "../../../apis/items";

export const useCreateNewItem = () => {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: ({ name, packed }: { name: string; packed?: boolean }) =>
      createItem({ name, packed }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["items"] });
    },
  });

  return {
    ...mutation,
    $createNewItem: mutation.mutate,
  };
};
