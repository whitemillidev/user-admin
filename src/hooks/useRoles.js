import { useQuery, useQueryClient } from "@tanstack/react-query";
import { setRoles, useUsersStore } from "../store/users";

export default function useRoles() {
  const search = useUsersStore((state) => state.searchRoles);
  return useQuery({
    queryKey: ["roles", search],
    queryFn: () =>
      fetch(`/api/roles?roleName:contains=${search}`).then((res) => {
        if (!res.ok) {
          throw new Error("Invalid url");
        }
        return res.json();
      }),
  });
}
