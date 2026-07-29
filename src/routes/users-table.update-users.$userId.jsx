import { createFileRoute, useNavigate } from "@tanstack/react-router";
import UpdateUsersForm from "../components/UpdateUsersForm";

export const Route = createFileRoute("/users-table/update-users/$userId")({
  component: UpdateUsersPage,
});

function UpdateUsersPage() {
  const navigate = useNavigate();

  return (
    <>
      <div className="overlay" />

      <UpdateUsersForm />
    </>
  );
}
