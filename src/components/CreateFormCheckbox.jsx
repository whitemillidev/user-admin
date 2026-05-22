import React from "react";
import styles from "../styles/create-user-form.module.css";

export default function CreateFormCheckbox({ name, label, options = [], Icon, OptionIcons = {} }) {
  return (
    <div className={styles["create-users-form-accesses-container"]}>
      <p className={styles["create-users-form-accesses-label"]}>{label}</p>

      <div className={styles["create-users-form-accesses-wrapper"]}>
        <div className={styles["create-users-form-accesses-list"]}>
          {options.map((access) => {
            const AccessIcon = OptionIcons[access];

            return (
              <label key={access} className={styles["create-users-form-accesses-item"]}>
                <input type="checkbox" name={name} value={access} className={styles["create-users-form-accesses-checkbox"]} />

                {AccessIcon && <AccessIcon className={styles["create-users-form-accesses-item-icon"]} />}

                <span className={styles["create-users-form-accesses-text"]}>{access}</span>
              </label>
            );
          })}
        </div>
      </div>
    </div>
  );
}
