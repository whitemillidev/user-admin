import { useMutation, useQueryClient } from "@tanstack/react-query";

export default function useUpdateUser() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ data, id }) =>
      fetch(`api/users/${id}`, {
        body: JSON.stringify(data),
        method: "PUT",
      }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["users"] });
    },
  });
}
