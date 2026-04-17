import React from "react";
import styles from "../styles/create-user-form.module.css";

export default function CreateFormField({ className, name, label, Icon, RightIcon, onChange, onClick, value, ...props }) {
  return (
    <div className={styles["create-users-form-input-container"]}>
      <p className={styles["create-users-form-input-label"]}>{label}</p>
      <div className={styles["create-users-form-input-wrapper"]}>
        {Icon && <Icon className={styles["user-icon"]} />}
        <input name={name} onChange={onChange} className={styles[`create-users-form-input-${name.toLowerCase()}`]} value={value} {...props} />
        {RightIcon && (
          <button type="button" onClick={onClick} className={styles["user-icon-right-btn"]}>
            <RightIcon className={styles["user-icon-right"]} />
          </button>
        )}
      </div>
    </div>
  );
}
