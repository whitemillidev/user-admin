import { createLazyFileRoute } from "@tanstack/react-router";
import CreateRolesForm from "../components/CreateRolesForm";

export const Route = createLazyFileRoute("/create-roles")({
  component: RouteComponent,
});

function RouteComponent() {
  return <CreateRolesForm />;
}
