import React from "react";
import styles from "../styles/update-user-form.module.css";
import useRoles from "../hooks/useRoles";

export default function UpdateFormSelect({ className, name, label, Icon, defaultValue, ...props }) {
  const { data: roles = [] } = useRoles();

  return (
    <div className={styles["update-users-form-select-container"]}>
      <p htmlFor={name} className={styles["update-users-form-select-label"]}>
        {label}
      </p>
      <div className={styles["update-users-form-select-wrapper"]}>
        {Icon && <Icon className={styles["user-update-icon-select"]} />}
        <select id={name} name={name} className={styles["update-users-form-select-role"]} defaultValue={defaultValue} {...props}>
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
