import { createLazyFileRoute } from "@tanstack/react-router";
import CreateUsersForm from "../components/CreateUsersForm";

export const Route = createLazyFileRoute("/create-users")({
  component: CreateUsers,
});

function CreateUsers() {
  return <CreateUsersForm />;
}
