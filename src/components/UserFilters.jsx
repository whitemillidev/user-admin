import React from "react";
import styles from "../styles/user-filters.module.css";

export default function UserFilters({ className, label, Icon, onChange, placeholder, ...props }) {
  return (
    <div className={styles["search-container"]}>
      {Icon && <Icon className={styles["search-icon"]} />}
      <input className={styles["input-search"]} onChange={onChange} placeholder={placeholder} {...props} />
    </div>
  );
}
