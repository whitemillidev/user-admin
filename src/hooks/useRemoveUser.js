import { useMutation, useQueryClient } from "@tanstack/react-query";

export default function useRemoveUser() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (id) =>
      fetch(`api/users/${id}`, {
        method: "DELETE",
      }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["users"] });
    },
  });
}
