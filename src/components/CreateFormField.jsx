import React from "react";
import styles from "../styles/create-user-form.module.css";

export default function CreateFormField({ className, name, label, Icon, RightIcon, onClick, defaultValue, ...props }) {
  return (
    <div className={styles["create-users-form-input-container"]}>
      <p className={styles["create-users-form-input-label"]}>{label}</p>
      <div className={styles["create-users-form-input-wrapper"]}>
        {Icon && <Icon className={styles["user-icon"]} />}
        <input name={name} className={styles[`create-users-form-input-${name.toLowerCase()}`]} defaultValue={defaultValue} {...props} />
        {RightIcon && (
          <button type="button" onClick={onClick} className={styles["user-icon-right-btn"]}>
            <RightIcon className={styles["user-icon-right"]} />
          </button>
        )}
      </div>
    </div>
  );
}
