import { createLazyFileRoute } from "@tanstack/react-router";
import RolesTable from "../components/RolesTable";

export const Route = createLazyFileRoute("/roles-table")({
  component: RouteComponent,
});

function RouteComponent() {
  return <RolesTable />;
}
