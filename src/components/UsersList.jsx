import React from "react";
import styles from "../styles/users-list.module.css";
import useUsers from "../hooks/useUsers";
import useRemoveUser from "../hooks/useRemoveUser";
import ReloadIcon from "../icons/ReloadIcon";
import GarbageIcon from "../icons/GarbageIcon";
import useUpdateUser from "../hooks/useUpdateUser";
import UserFIeldRow from "./UserFieldRow";

export default function UsersList() {
  const { data = [], isLoading, error } = useUsers();
  const { mutate: removeUser } = useRemoveUser();
  const { mutate: updateUser } = useUpdateUser();

  return (
    <div className={styles["users-list-container"]}>
      {isLoading && <div>Loading...</div>}
      {error && <div>Error: {error.message}</div>}
      <h1 className={styles["users-list-title"]}>Users list</h1>
      <div className={styles["users-list"]}>
        {data.map((user) => (
          <form
            key={user.id}
            onSubmit={(e) => {
              e.preventDefault();

              const formData = Object.fromEntries(new FormData(e.target));

              updateUser({
                id: user.id,
                data: formData,
              });
            }}
          >
            <div>
              <div className={styles["users-list-item"]}>
                <button className={styles["users-list-item-edit"]} type="submit">
                  <ReloadIcon />
                </button>
                <button type="button" className={styles["users-list-item-delete"]} onClick={() => removeUser(user.id)}>
                  <GarbageIcon />
                </button>
                <UserFIeldRow label="Firstname:" name="firstName" type="text" defaultValue={user.firstName} />
                <UserFIeldRow label="Lastname:" name="lastName" type="text" defaultValue={user.lastName} />
                <UserFIeldRow label="Age:" name="age" type="number" defaultValue={user.age} />
                <UserFIeldRow label="Gender:" name="gender" type="text" defaultValue={user.gender} />
                <UserFIeldRow label="Email:" name="email" type="text" defaultValue={user.email} />
                <UserFIeldRow label="Username:" name="username" type="text" defaultValue={user.username} />
                <UserFIeldRow label="Password:" name="password" type="text" defaultValue={user.password} />
              </div>
            </div>
          </form>
        ))}
      </div>
    </div>
  );
}
