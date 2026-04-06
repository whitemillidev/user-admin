import React from "react";
import styles from "../styles/users-list.module.css";

export default function UserFIeldRow({ label, name, defaultValue, ...props }) {
  return (
    <div>
      {label}
      <input name={name} className={styles["users-list-item-input"]} defaultValue={defaultValue} {...props} />
    </div>
  );
}
