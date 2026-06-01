import { useMutation, useQueryClient } from "@tanstack/react-query";

export default function useRemoveRoles() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (id) =>
      fetch(`/api/roles/${id}`, {
        method: "DELETE",
      }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["roles"] });
    },
  });
}
