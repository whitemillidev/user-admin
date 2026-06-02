import React, { useState } from "react";
import styles from "../styles/users-table.module.css";
import useUsers from "../hooks/useUsers";
import useRemoveUser from "../hooks/useRemoveUser";
import ReloadIcon from "../icons/ReloadIcon";
import GarbageIcon from "../icons/GarbageIcon";
import useUpdateUser from "../hooks/useUpdateUser";
import UserFIeldRow from "./UserFieldRow";
import EditIcon from "../icons/EditIcon";
import { setFirstName, setLastName, setSearchRoles, setSelectedUser, useUsersStore } from "../store/users";
import useRoles from "../hooks/useRoles";
import { useShallow } from "zustand/shallow";
import CreateFormField from "./CreateFormField";
import CalendarIcon from "../icons/CalendarIcon";
import UserFilters from "./DataFilters";
import SearchIcon from "../icons/SearchIcon";
import useRemoveRoles from "../hooks/useRemoveRoles";
import { Link } from "@tanstack/react-router";
import DataFilters from "./DataFilters";

export default function RolesTable() {
  const [selectedUser, search] = useUsersStore(useShallow((state) => [state.selectedUser, state.searchRoles]));

  const { data = [], isLoading, error } = useRoles();
  const { mutate: removeRoles } = useRemoveRoles();
  //   const { mutate: updateUser } = useUpdateUser();

  return (
    <div className={styles["users-table-container"]}>
      {isLoading && <div>Loading...</div>}
      {error && <div>Error: {error.message}</div>}
      <h1 className={styles["users-table-title"]}>Roles table</h1>
      <div className={styles["users-table-controls"]}>
        <DataFilters onChange={(e) => setSearchRoles(e.target.value)} Icon={SearchIcon} placeholder={"Enter the role name..."} />
        <Link to="/roles-table/add-roles">
          <button className={styles["add-user-btn"]}>Add role</button>
        </Link>
      </div>
      <table className={styles["users-table"]}>
        <thead>
          <tr>
            <th>Roles Name</th>
            <th>Access</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>

        <tbody>
          {data.map((role) => (
            <tr key={role.id} className={styles["users-table-row"]}>
              <td>{role.roleName}</td>
              <td>{role.accesses.join(", ")}</td>

              <td>
                <button
                  className={styles["users-table-item-edit"]}
                  onClick={() => {
                    setSelectedUser(role);
                  }}
                >
                  <EditIcon />
                </button>
              </td>

              <td>
                <button className={styles["users-table-item-delete"]} onClick={() => removeRoles(role.id)}>
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
