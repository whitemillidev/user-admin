import { createFileRoute, useNavigate } from "@tanstack/react-router";
import CreateUsersForm from "../components/CreateUsersForm";

export const Route = createFileRoute("/users-table/add-users")({
  component: AddUsersPage,
});

function AddUsersPage() {
  const navigate = useNavigate();

  return (
    <>
      <div className="overlay" />
      <CreateUsersForm />
    </>
  );
}
