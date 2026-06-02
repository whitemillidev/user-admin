import { useQuery } from "@tanstack/react-query";
import { useSearch } from "@tanstack/react-router";

export default function useUsers() {
  const { query = "" } = useSearch({ from: "/users-table" });

  return useQuery({
    queryKey: ["users", query],
    queryFn: () =>
      fetch(`/api/users?fullName:contains=${query}`).then((res) => {
        if (!res.ok) throw new Error("Invalid url");
        return res.json();
      }),
  });
}