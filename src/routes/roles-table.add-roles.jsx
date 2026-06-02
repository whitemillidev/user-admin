import { createFileRoute, useNavigate } from "@tanstack/react-router";
import CreateRolesForm from "../components/CreateRolesForm";

export const Route = createFileRoute("/roles-table/add-roles")({
  component: AddRolesPage,
});

function AddRolesPage() {
  const navigate = useNavigate();

  return (
    <>
      <div className="overlay" onClick={() => navigate({ to: "/roles-table" })} />
      <CreateRolesForm />
    </>
  );
}
