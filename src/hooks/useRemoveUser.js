import { notifications } from "@mantine/notifications";
import { XIcon, CheckIcon } from "@phosphor-icons/react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import GarbageIcon from "../icons/GarbageIcon";
import { createElement } from "react";

export default function useRemoveUser() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (id) => {
      const response = await fetch(`/api/users/${id}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error("Ошибка базы данных");
      }
      return response.json();
    },

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["users"] });

      notifications.show({
        title: "Success!",
        message: "User has been deleted",
        color: "green",
        icon: createElement(CheckIcon),
        styles: {
          root: {
            backgroundColor: "#1f2937",
            color: "#fff",
            border: "1px solid #374151",
          },
          title: { 
            color: "#fff",
          },
          description: {
            color: "#d1d5db",
          },
        },
      });
    },

    onError: () => {
      notifications.show({
        title: "Error!",
        message: "Couldn't get a response from the database",
        color: "red",
        icon: createElement(XIcon),
        styles: {
          root: {
            backgroundColor: "#1f2937",
            color: "#fff",
            border: "1px solid #374151",
          },
          title: {
            color: "#fff",
          },
          description: {
            color: "#d1d5db",
          },
        },
      });
    },
  });
}
