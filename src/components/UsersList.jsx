import React from "react";
import useFetch from "../hooks/useFetch";
import styles from "../styles/users-list.module.css";

export default function UsersList() {
  const { data } = useFetch("api/users");

  return (
    <div className={styles["users-list-container"]}>
      <h1 className={styles["users-list-title"]}>Users list</h1>
      <div className={styles["users-list"]}>
        {data.map((user) => (
          <div key={user.id}>
            <div className={styles["users-list-item"]}>
              <div className={styles["users-list-item-name"]}>
                Fullname: {user.firstName} {user.lastName}
              </div>
              <div className={styles["users-list-item-age"]}>Age: {user.age}</div>
              <div className={styles["users-list-item-gender"]}>Gender: {user.gender}</div>
              <div className={styles["users-list-item-username"]}>Username: {user.username}</div>
              <div className={styles["users-list-item-email"]}>Email: {user.email}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
