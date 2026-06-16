import { useQuery, useQueryClient } from "@tanstack/react-query";
import { setRoles, useUsersStore } from "../store/users";
import { useSearch } from "@tanstack/react-router";

export default function useRoles(query = "") {

  return useQuery({
    queryKey: ["roles", query],
    queryFn: () =>
      fetch(`/api/roles?roleName:contains=${query}`).then((res) => {
        if (!res.ok) {
          throw new Error("Invalid url");
        }
        return res.json();
      }),
  });
}
