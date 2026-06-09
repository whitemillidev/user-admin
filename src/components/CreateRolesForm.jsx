import React from "react";
import styles from "../styles/create-user-form.module.css";
import CreateFormSelect from "./CreateFormSelect";
import RightsIcon from "../icons/RightsIcon";
import { useShallow } from "zustand/shallow";
import useAddRoles from "../hooks/useAddRoles";
import CreateFormCheckbox from "./CreateFormCheckbox";
import EyeIcon from "../icons/EyeIcon";
import EditIcon from "../icons/EditIcon";
import GarbageIcon from "../icons/GarbageIcon";
import CreateFormField from "./CreateFormField";
import CloseIcon from "../icons/CloseIcon";
import { useNavigate } from "@tanstack/react-router";

export default function CreateRolesForm() {
  const { mutate: addRoles } = useAddRoles();
  const navigate = useNavigate();
  return (
    <div className={styles["create-users-form-container"]}>
      <form
        onSubmit={(e) => {
          e.preventDefault();

          const formData = new FormData(e.target);

          e.target.reset();

          const roleData = {
            roleName: formData.get("roleName"),
            accesses: formData.getAll("accesses"),
          };

          addRoles(roleData);
        }}
        className={styles["create-users-form"]}
      >
        <button
          type="button"
          className={styles["create-users-form-close-btn"]}
          onClick={() => {
            navigate({
              to: "/roles-table",
            });
          }}
        >
          <CloseIcon />
        </button>
        <h2 className={styles["create-users-form-title"]}>Create Roles Form</h2>
        <CreateFormField name="roleName" label="Role" Icon={RightsIcon} type="text" placeholder="User" />

        <CreateFormCheckbox
          name="accesses"
          label="Access rights"
          Icon={RightsIcon}
          options={["create", "read", "update", "delete"]}
          OptionIcons={{
            create: EditIcon,
            read: EyeIcon,
            update: EditIcon,
            delete: GarbageIcon,
          }}
        />

        <button className={styles["create-users-form-button"]} type="submit">
          Add roles
        </button>
      </form>
    </div>
  );
}
