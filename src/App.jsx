import React from "react";
import CreateUsersForm from "./components/CreateUsersForm";
import UsersList from "./components/UsersList";
import styles from "./styles/create-user-form.module.css";
import useToggle from "./hooks/useToggle";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

export default function App() {
  const { value, toggle } = useToggle(false);

  return (
    <QueryClientProvider client={queryClient}>
      <div className={styles["app"]}>
        <button onClick={toggle}>{value ? "Show Create User Form" : "Show Users List"}</button>

        {/* {value ? <UsersList /> : <CreateUsersForm />} */}
        <UsersList />
        <br />
        <hr />
        <br />
        <CreateUsersForm />
      </div>
    </QueryClientProvider>
  );
}
