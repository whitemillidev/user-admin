import React from "react";
import CreateUsersForm from "./components/CreateUsersForm";
import UsersList from "./components/UsersList";
import styles from "./styles/create-user-form.module.css";
import useToggle from "./hooks/useToggle";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createPortal } from "react-dom";
import UsersTable from "./components/UsersTable";

const queryClient = new QueryClient();

export default function App() {
  const { value, toggle } = useToggle(false);

  return (
    <QueryClientProvider client={queryClient}>
      <div className={styles["app"]}>
        <button onClick={toggle}>{value ? "Show Users Table" : "Show Create User Form"}</button>

        {value ? <CreateUsersForm /> : <UsersTable />}

        {/* <UsersList /> */}
        {/* <UsersTable />
        <br />
        <hr />
        <br />
        {createPortal(<CreateUsersForm />, document.body)} */}
      </div>
    </QueryClientProvider>
  );
}
