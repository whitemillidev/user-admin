import { useQuery, useQueryClient } from "@tanstack/react-query";
import { setRoles } from "../store/users";

export default function useRoles() {

  return useQuery({
    queryKey: ["roles"],
    queryFn: () =>
      fetch(`api/roles`).then((res) => {
        if (!res.ok) {
          throw new Error("Invalid url");
        }
        return res.json();
      }),
  });
}
