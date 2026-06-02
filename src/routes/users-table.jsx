import { createFileRoute, Outlet } from "@tanstack/react-router";
import UsersTable from "../components/UsersTable";
import UpdateUsersForm from "../components/UpdateUsersForm";
import { useUsersStore } from "../store/users";

export const Route = createFileRoute("/users-table")({
  component: RouteComponent,
});

function RouteComponent() {
  const selectedUser = useUsersStore((state) => state.selectedUser);

  return (
    <>
      <UsersTable />
      <Outlet />
    </>
  );
}
