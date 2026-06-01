import { useMutation, useQueryClient } from "@tanstack/react-query";

export default function useAddRoles() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data) =>
      fetch(`/api/roles`, {
        body: JSON.stringify(data),
        method: "POST",
      }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["roles"] });
    },
  });
}
