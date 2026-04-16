import { create } from "zustand";

export const useUsersStore = create(() => ({
  selectedUser: null,
  roles: [],
  isWatched: false,
}));

export function setSelectedUser(selectedUser) {
  useUsersStore.setState({ selectedUser });
}

export function setRoles(roles) {
  useUsersStore.setState({ roles });
}

export function setIsWatched(isWatched) {
  useUsersStore.setState({ isWatched });
}
