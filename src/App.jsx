import React from "react";
import CreateUsersForm from "./components/CreateUsersForm";
import UsersList from "./components/UsersList";
import styles from "./styles/create-user-form.module.css";
import useToggle from "./hooks/useToggle";

export default function App() {
  const { value, toggle } = useToggle(false);

  return (
    <div className={styles["app"]}>
      <button onClick={toggle}>{value ? "Show Create User Form" : "Show Users List"}</button>

      {value ? <UsersList /> : <CreateUsersForm />}
    </div>
  );
}
