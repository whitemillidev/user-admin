import React from "react";
import styles from "../styles/create-user-form.module.css";
import useRoles from "../hooks/useRoles";

export default function CreateFormSelect({ className, name, label, Icon, defaultValue, ...props }) {
  const { data: roles = [] } = useRoles();

  console.log("Roles:", roles);

  return (
    <div className={styles["create-users-form-select-container"]}>
      <p htmlFor={name} className={styles["create-users-form-select-label"]}>
        {label}
      </p>
      <div className={styles["create-users-form-select-wrapper"]}>
        {Icon && <Icon className={styles["user-create-icon-select"]} />}
        <select id={name} name={name} className={styles["create-users-form-select-role"]} defaultValue={defaultValue} {...props}>
          {roles.map((role) => (
            <option key={role.id} value={role.id}>
              {role.name}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
