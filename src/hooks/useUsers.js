import { useQuery } from "@tanstack/react-query";
import { useUsersStore } from "../store/users";

export default function useUsers() {
  const search = useUsersStore((state) => state.search);
  return useQuery({
    queryKey: ["users", search],
    queryFn: () =>
      fetch(`api/users?fullName:contains=${search}`).then((res) => {
        if (!res.ok) {
          throw new Error("Invalid url");
        }
        return res.json();
      }),
  });
}
