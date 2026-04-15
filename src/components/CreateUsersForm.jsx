import React from "react";
import styles from "../styles/create-user-form.module.css";
import UserIcon from "../icons/UserIcon";
import CalendarIcon from "../icons/CalendarIcon";
import GenderIcon from "../icons/GenderIcon";
import MailIcon from "../icons/MailIcon";
import FormField from "./FormField";
import PasswIcon from "../icons/PasswIcon";
import useAddUser from "../hooks/useAddUser";

export default function CreateUsersForm() {
  const { mutate: addUser } = useAddUser();
  return (
    <div className={styles["create-users-form-container"]}>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          addUser(Object.fromEntries(new FormData(e.target)));
          e.target.reset();
        }}
        className={styles["create-users-form"]}
      >
        <h2 className={styles["create-users-form-title"]}>Create Users Form</h2>

        <div className={styles["create-users-form-input-fullname"]}>
          <FormField name="firstName" label="First Name" Icon={UserIcon} type="text" placeholder="Ivan" />
          <FormField name="lastName" label="Last Name" Icon={UserIcon} type="text" placeholder="Harris" />
        </div>

        <FormField name="age" label="Age" Icon={CalendarIcon} type="number" placeholder="20" />
        <FormField name="gender" label="Gender" Icon={GenderIcon} type="text" placeholder="Male" />
        <FormField name="email" label="Email" Icon={MailIcon} type="email" placeholder="qwerty@gmail.com" />
        <FormField name="username" label="Username" Icon={UserIcon} type="text" placeholder="nexus_4235" />
        <FormField name="password" label="Password" Icon={PasswIcon} type="password" placeholder="••••••••" />
        <FormField name="password" label="Repeat password" Icon={PasswIcon} type="password" placeholder="••••••••" />

        <button className={styles["create-users-form-button"]} type="submit">
          Add user
        </button>
      </form>
    </div>
  );
}
