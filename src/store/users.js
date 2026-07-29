import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

export const useUsersStore = create(
  persist(
    () => ({
      selectedUser: null,
      roles: [],
      isWatched: false,

      searchUsers: "",
      searchRoles: "",

      firstName: "",
      lastName: "",
      gender: "",
      age: "",
      roleId: "",
      email: "",
      username: "",
      password: "",
    }),

    {
      name: "users-form",
      storage: createJSONStorage(() => sessionStorage),

      partialize: (state) => ({
        selectedUser: state.selectedUser,
        firstName: state.firstName,
        lastName: state.lastName,
        gender: state.gender,
        age: state.age,
        roleId: state.roleId,
        email: state.email,
        username: state.username,
        password: state.password,
      }),
    },
  ),
);

export function hasFormData() {
  const state = useUsersStore.getState();

  return [state.firstName, 
    state.lastName, 
    state.gender, 
    state.age, 
    state.roleId, 
    state.email, 
    state.username, 
    state.password].some(
    (value) => value !== "",
  );
}

export function resetCreateUserForm() {
  useUsersStore.setState({
    selectedUser: null,
    firstName: "",
    lastName: "",
    gender: "",
    age: "",
    roleId: "",
    email: "",
    username: "",
    password: "",
    isWatched: false,
  });
}

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

export function setGender(gender) {
  useUsersStore.setState({ gender });
}

export function setAge(age) {
  useUsersStore.setState({ age });
}

export function setRoleId(roleId) {
  useUsersStore.setState({ roleId });
}

export function setEmail(email) {
  useUsersStore.setState({ email });
}

export function setUsername(username) {
  useUsersStore.setState({ username });
}

export function setPassword(password) {
  useUsersStore.setState({ password });
}
