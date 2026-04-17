import { create } from "zustand";

export const useUsersStore = create(() => ({
  selectedUser: null,
  roles: [],
  isWatched: false,
  search: "",
  firstName: "",
  lastName: "",
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

export function setSearch(search) {
  useUsersStore.setState({ search });
}

export function setFirstName(firstName) {
  useUsersStore.setState({ firstName });
}

export function setLastName(lastName) {
  useUsersStore.setState({ lastName });
}
