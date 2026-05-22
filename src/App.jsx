import React from "react";
import CreateUsersForm from "./components/CreateUsersForm";
import UsersList from "./components/UsersList";
import useToggle from "./hooks/useToggle";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createPortal } from "react-dom";
import UsersTable from "./components/UsersTable";
import UpdateUsersForm from "./components/UpdateUsersForm";
import { useUsersStore } from "./store/users";

export default function App() {
  const { value, toggle } = useToggle(false);
  const selectedUser = useUsersStore((state) => state.selectedUser);

  return (
    <div>
      <button onClick={toggle}>{value ? "Show Users Table" : "Show Create User Form"}</button>
      {value ? <CreateUsersForm /> : <UsersTable />}
      {selectedUser && <div className="overlay" />}
      {selectedUser && <UpdateUsersForm />}
    </div>
  );
}
