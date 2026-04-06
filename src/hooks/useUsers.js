import { useQuery } from "@tanstack/react-query";

export default function useUsers() {
  return useQuery({
    queryKey: ["users"],
    queryFn: () =>
      fetch(`api/users`)
        .then((res) => {
          if (!res.ok) {
            throw new Error("Invalid url");
          }
          return res.json();
        })
        .catch((err) => {
          console.error(err.message);
        }),
  });
}
