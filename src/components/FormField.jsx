import React from "react";
import styles from "../styles/create-user-form.module.css";

export default function FormField({ className, name, label, Icon, ...props }) {
  return (
    <div className={styles["create-users-form-input-container"]}>
      <p className={styles["create-users-form-input-label"]}>{label}</p>
      <div className={styles["create-users-form-input-wrapper"]}>
        {Icon && <Icon className={styles["user-icon"]} />}
        <input name={name} className={styles[`create-users-form-input-${name.toLowerCase()}`]} {...props} />
      </div>
    </div>
  );
}
