import { create } from "zustand";

export const useUsersStore = create(() => ({
  selectedUser: null,
  roles: [],
  isWatched: false,
  searchUsers: "",
  searchRoles: "",
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

export function setSearchUsers(searchUsers) {
  useUsersStore.setState({ searchUsers });
}

export function setSearchRoles(searchRoles) {
  useUsersStore.setState({ searchRoles });
}

export function setFirstName(firstName) {
  useUsersStore.setState({ firstName });
}

export function setLastName(lastName) {
  useUsersStore.setState({ lastName });
}
