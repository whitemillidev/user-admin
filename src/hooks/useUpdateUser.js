import { notifications } from "@mantine/notifications";
import { XIcon, CheckIcon } from "@phosphor-icons/react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createElement } from "react";

export default function useUpdateUser() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async ({ data, id }) => {
      const response = await fetch(`/api/users/${id}`, {
        body: JSON.stringify(data),
        method: "PUT",
      });

      if (!response.ok) {
        throw new Error("Не удалось обновить данные пользователя");
      }
      return response.json();
    },

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["users"] });
      notifications.show({
        title: "Success!",
        message: "User's data has been successfully updated!",
        color: "green",
        icon: createElement(CheckIcon),
      });
    },

    onError: () => {
      notifications.show({
        title: "Error!",
        message: "Couldn't update user data. Couldn't get a response from the database!",
        color: "red",
        icon: createElement(XIcon),
      });
    },
  });
}
