import React, { useState } from "react";
import styles from "../styles/users-table.module.css";
import useUsers from "../hooks/useUsers";
import useRemoveUser from "../hooks/useRemoveUser";
import ReloadIcon from "../icons/ReloadIcon";
import GarbageIcon from "../icons/GarbageIcon";
import useUpdateUser from "../hooks/useUpdateUser";
import UserFIeldRow from "./UserFieldRow";
import EditIcon from "../icons/EditIcon";
import { setFirstName, setLastName, setSearch, setSelectedUser, useUsersStore } from "../store/users";
import useRoles from "../hooks/useRoles";
import { useShallow } from "zustand/shallow";
import CreateFormField from "./CreateFormField";
import CalendarIcon from "../icons/CalendarIcon";
import UserFilters from "./UserFilters";
import SearchIcon from "../icons/SearchIcon";

export default function UsersTable() {
  const [selectedUser, search] = useUsersStore(useShallow((state) => [state.selectedUser, state.search]));

  const { data = [], isLoading, error } = useUsers();
  const { data: roles = [] } = useRoles();
  const { mutate: removeUser } = useRemoveUser();
  const { mutate: updateUser } = useUpdateUser();

  return (
    <div className={styles["users-table-container"]}>
      {isLoading && <div>Loading...</div>}
      {error && <div>Error: {error.message}</div>}
      <h1 className={styles["users-table-title"]}>Users table</h1>
      <UserFilters onChange={(e) => setSearch(e.target.value)} Icon={SearchIcon} placeholder={"Enter the user's name..."} />
      <table className={styles["users-table"]}>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Gender</th>
            <th>Username</th>
            <th>Email</th>
            <th>Role</th>
            <th>Password</th>
            <th>Age</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>

        <tbody>
          {data.map((user) => (
            <tr key={user.id} className={styles["users-table-row"]}>
              <td>{user.firstName}</td>
              <td>{user.lastName}</td>
              <td>{user.gender}</td>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>{roles.find((role) => role.id === user.roleId)?.name}</td>
              <td>{user.password}</td>
              <td>{user.age}</td>

              <td>
                <button
                  className={styles["users-table-item-edit"]}
                  onClick={() => {
                    setSelectedUser(user);
                  }}
                >
                  <EditIcon />
                </button>
              </td>

              <td>
                <button className={styles["users-table-item-delete"]} onClick={() => removeUser(user.id)}>
                  <GarbageIcon />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
