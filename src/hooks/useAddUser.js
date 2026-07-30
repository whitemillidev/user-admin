import { notifications } from "@mantine/notifications";
import { XIcon, CheckIcon } from "@phosphor-icons/react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createElement } from "react";

export default function useAddUser() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (data) => {
      const response = await fetch(`/api/users`, {
        body: JSON.stringify(data),
        method: "POST",
      });

      if (!response.ok) {
        throw new Error("Не удалось создать пользователя");
      }
      return response.json();
    },

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["users"] });
      notifications.show({
        title: "Success!",
        message: "User was successfully created!",
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
        message: "Failed to create a user. Couldn't get a response from the database!",
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
