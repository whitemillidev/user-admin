import React, { useState } from "react";
import styles from "../styles/users-table.module.css";
import useUsers from "../hooks/useUsers";
import EditIcon from "../icons/EditIcon";
import { setSearchRoles, setSelectedUser, useUsersStore } from "../store/users";
import useRoles from "../hooks/useRoles";
import useRemoveRoles from "../hooks/useRemoveRoles";
import { Link, useNavigate, useSearch } from "@tanstack/react-router";
import DataFilters from "./DataFilters";
import { ActionIcon, Button, Table } from "@mantine/core";
import SearchIcon from "../icons/SearchIcon";
import GarbageIcon from "../icons/GarbageIcon";

export default function RolesTable() {
  const search = useUsersStore((state) => state.searchRoles);
  const { query = "" } = useSearch({ from: "/roles-table" });
  const navigate = useNavigate();
  const { data = [], isLoading, error } = useRoles(query);
  const { mutate: removeRoles } = useRemoveRoles();

  return (
    <div className={styles["users-table-container"]}>
      {isLoading && <div>Loading...</div>}
      {error && <div>Error: {error.message}</div>}
      <h1 className={styles["users-table-title"]}>Roles table</h1>
      <div className={styles["users-table-controls"]}>
        <DataFilters
          value={query}
          onChange={(e) => {
            const value = e.target.value;
            navigate({
              search: value ? { query: value } : {},
              replace: true,
            });
          }}
          leftSection={<SearchIcon />}
          placeholder={"Enter the role's..."}
        />

        <Button component={Link} to="/roles-table/add-roles" variant="outline" color="#b2b2b2">
          Add Roles
        </Button>
      </div>

      <Table style={{ width: 1500, marginBottom: "30px" }}>
        <Table.Thead>
          <Table.Tr>
            <Table.Th>Roles Name</Table.Th>
            <Table.Th>Access</Table.Th>
            <Table.Th>Edit</Table.Th>
            <Table.Th>Delete</Table.Th>
          </Table.Tr>
        </Table.Thead>

        <Table.Tbody>
          {data.map((role) => {
            return (
              <Table.Tr key={role.id}>
                <Table.Td>{role.roleName}</Table.Td>
                <Table.Td>{role.accesses.join(", ")}</Table.Td>

                <Table.Td>
                  <ActionIcon variant="transparent" color="#d0d0d0">
                    <EditIcon />
                  </ActionIcon>
                </Table.Td>
                <Table.Td>
                  <ActionIcon variant="transparent" color="#d0d0d0" onClick={() => removeRoles(role.id)}>
                    <GarbageIcon />
                  </ActionIcon>
                </Table.Td>
              </Table.Tr>
            );
          })}
        </Table.Tbody>
      </Table>
    </div>
  );
}
