import { createFileRoute, useNavigate } from "@tanstack/react-router";
import CreateRolesForm from "../components/CreateRolesForm";

export const Route = createFileRoute("/roles-table/add-roles")({
  component: AddRolesPage,
});

function AddRolesPage() {

  return (
    <>
      <div className="overlay" />
      <CreateRolesForm />
    </>
  );
}
