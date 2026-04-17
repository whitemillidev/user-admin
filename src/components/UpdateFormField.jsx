import React from "react";
import styles from "../styles/update-user-form.module.css";

export default function UpdateFormField({ className, name, label, Icon, RightIcon, onChange, onClick, value, defaultValue, ...props }) {
  return (
    <div className={styles["update-users-form-input-container"]}>
      <p className={styles["update-users-form-input-label"]}>{label}</p>
      <div className={styles["update-users-form-input-wrapper"]}>
        {Icon && <Icon className={styles["user-icon"]} />}
        <input
          name={name}
          onChange={onChange}
          className={styles[`update-users-form-input-${name.toLowerCase()}`]}
          defaultValue={defaultValue}
          value={value}
          {...props}
        />
        {RightIcon && (
          <button type="button" onClick={onClick} className={styles["user-icon-right-btn"]}>
            <RightIcon className={styles["user-icon-right"]} />
          </button>
        )}
      </div>
    </div>
  );
}
