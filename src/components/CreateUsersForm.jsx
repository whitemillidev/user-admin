import React from "react";
import styles from "../styles/create-user-form.module.css";
import UserIcon from "../icons/UserIcon";
import CalendarIcon from "../icons/CalendarIcon";
import GenderIcon from "../icons/GenderIcon";
import MailIcon from "../icons/MailIcon";
import PasswIcon from "../icons/PasswIcon";
import useAddUser from "../hooks/useAddUser";
import { setIsWatched, useUsersStore } from "../store/users";
import CreateFormSelect from "./CreateFormSelect";
import RightsIcon from "../icons/RightsIcon";
import CreateFormField from "./CreateFormField";
import EyeIcon from "../icons/EyeIcon";
import IncognitoIcon from "../icons/IncognitoIcon";

export default function CreateUsersForm() {
  const selectedUser = useUsersStore((state) => state.selectedUser);
  const isWatched = useUsersStore((state) => state.isWatched);

  const { mutate: addUser } = useAddUser();
  return (
    <div className={styles["create-users-form-container"]}>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          addUser(Object.fromEntries(new FormData(e.target)));
          e.target.reset();

          setIsWatched(false);
        }}
        className={styles["create-users-form"]}
      >
        <h2 className={styles["create-users-form-title"]}>Create Users Form</h2>

        <div className={styles["create-users-form-input-fullname"]}>
          <CreateFormField name="firstName" label="First Name" Icon={UserIcon} type="text" placeholder="Ivan" />
          <CreateFormField name="lastName" label="Last Name" Icon={UserIcon} type="text" placeholder="Harris" />
        </div>

        <CreateFormField name="age" label="Age" Icon={CalendarIcon} type="number" placeholder="20" />
        <CreateFormField name="gender" label="Gender" Icon={GenderIcon} type="text" placeholder="Male" />
        <CreateFormField name="email" label="Email" Icon={MailIcon} type="email" placeholder="qwerty@gmail.com" />
        <CreateFormSelect name="roleId" label="Role" Icon={RightsIcon} />
        <CreateFormField name="username" label="Username" Icon={UserIcon} type="text" placeholder="nexus_4235" />
        <CreateFormField
          name="password"
          label="Password"
          Icon={PasswIcon}
          RightIcon={isWatched ? IncognitoIcon : EyeIcon}
          onClick={() => setIsWatched(!isWatched)}
          type={isWatched ? "text" : "password"}
          placeholder="••••••••"
        />
        <CreateFormField
          name="password"
          label="Password"
          Icon={PasswIcon}
          RightIcon={isWatched ? IncognitoIcon : EyeIcon}
          onClick={() => setIsWatched(!isWatched)}
          type={isWatched ? "text" : "password"}
          placeholder="••••••••"
        />

        <button className={styles["create-users-form-button"]} type="submit">
          Add user
        </button>
      </form>
    </div>
  );
}
