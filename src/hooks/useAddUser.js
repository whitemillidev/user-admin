import { useMutation, useQueryClient } from "@tanstack/react-query";

export default function useAddUser() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data) =>
      fetch(`api/users`, {
        body: JSON.stringify(data),
        method: "POST",
      }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["users"] });
    },
  });
}
