import React, { useState } from "react";
import styles from "../styles/users-table.module.css";
import useUsers from "../hooks/useUsers";
import useRemoveUser from "../hooks/useRemoveUser";
import GarbageIcon from "../icons/GarbageIcon";
import useUpdateUser from "../hooks/useUpdateUser";
import EditIcon from "../icons/EditIcon";
import { setSelectedUser, useUsersStore } from "../store/users";
import useRoles from "../hooks/useRoles";
import SearchIcon from "../icons/SearchIcon";
import DataFilters from "./DataFilters";
import { Link, useNavigate, useSearch } from "@tanstack/react-router";
import { ActionIcon, Button, Table, Tooltip } from "@mantine/core";

export default function UsersTable() {
  const selectedUser = useUsersStore((state) => state.selectedUser);
  const { data = [], isLoading, error } = useUsers();
  const { data: roles = [] } = useRoles();
  const { mutate: removeUser } = useRemoveUser();
  const { mutate: updateUser } = useUpdateUser();
  const { query = "" } = useSearch({ from: "/users-table" });
  const navigate = useNavigate();

  return (
    <div className={styles["users-table-container"]}>
      {isLoading && <div>Loading...</div>}
      {error && <div>Error: {error.message}</div>}
      <h1 className={styles["users-table-title"]}>Users table</h1>
      <div className={styles["users-table-controls"]}>
        <Tooltip label="Search Users" position="bottom" withArrow>
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
            placeholder={"Enter the user's name..."}
          />
        </Tooltip>

        <Button component={Link} to="/users-table/add-users" variant="outline" color="#b2b2b2">
          Add User
        </Button>
      </div>

      <Table style={{ width: 1800, marginBottom: "30px" }}>
        <Table.Thead>
          <Table.Tr>
            <Table.Th>First Name</Table.Th>
            <Table.Th>Last Name</Table.Th>
            <Table.Th>Gender</Table.Th>
            <Table.Th>Username</Table.Th>
            <Table.Th>Email</Table.Th>
            <Table.Th>Role</Table.Th>
            <Table.Th>Password</Table.Th>
            <Table.Th>Age</Table.Th>
            <Table.Th>Edit</Table.Th>
            <Table.Th>Delete</Table.Th>
          </Table.Tr>
        </Table.Thead>

        <Table.Tbody>
          {data.map((user) => {
            return (
              <Table.Tr key={user.id}>
                <Table.Td>{user.firstName}</Table.Td>
                <Table.Td>{user.lastName}</Table.Td>
                <Table.Td>{user.gender}</Table.Td>
                <Table.Td>{user.username}</Table.Td>
                <Table.Td>{user.email}</Table.Td>
                <Table.Td>{roles.find((role) => role.id === user.roleId)?.roleName}</Table.Td>
                <Table.Td>{user.password}</Table.Td>
                <Table.Td>{user.age}</Table.Td>

                <Table.Td>
                  <Tooltip label="Edit User" position="right" offset={10} withArrow>
                    <ActionIcon
                      component={Link}
                      variant="transparent"
                      color="#d0d0d0"
                      to="/users-table/update-users/$userId"
                      params={{ userId: user.id }}
                    >
                      <EditIcon />
                    </ActionIcon>
                  </Tooltip>
                </Table.Td> 

                <Table.Td>
                  <Tooltip label="Delete User" position="right" offset={10} withArrow>
                    <ActionIcon variant="transparent" color="#d0d0d0" onClick={() => removeUser(user.id)}>
                      <GarbageIcon />
                    </ActionIcon>
                  </Tooltip>
                </Table.Td>
              </Table.Tr>
            );
          })}
        </Table.Tbody>
      </Table>
    </div>
  );
}
