import React from "react";
import styles from "../styles/create-user-form.module.css";
import UserIcon from "../icons/UserIcon";
import CalendarIcon from "../icons/CalendarIcon";
import GenderIcon from "../icons/GenderIcon";
import MailIcon from "../icons/MailIcon";
import PasswIcon from "../icons/PasswIcon";
import useAddUser from "../hooks/useAddUser";
import { setFirstName, setIsWatched, setLastName, useUsersStore } from "../store/users";
import CreateFormSelect from "./CreateFormSelect";
import RightsIcon from "../icons/RightsIcon";
import CreateFormField from "./CreateFormField";
import EyeIcon from "../icons/EyeIcon";
import IncognitoIcon from "../icons/IncognitoIcon";
import { useShallow } from "zustand/shallow";
import useRoles from "../hooks/useRoles";
import useUsers from "../hooks/useUsers";
import { useNavigate } from "@tanstack/react-router";
import CloseIcon from "../icons/CloseIcon";

export default function CreateUsersForm() {
  const [selectedUser, isWatched, firstName, lastName] = useUsersStore(
    useShallow((state) => [state.selectedUser, state.isWatched, state.firstName, state.lastName]),
  );
  const { data: roles = [] } = useRoles();
  const { data: users = [] } = useUsers();
  const { mutate: addUser } = useAddUser();

  const navigate = useNavigate();
  return (
    <div className={styles["create-users-form-container"]}>
      <form
        onSubmit={(e) => {
          e.preventDefault();

          const userData = {
            ...Object.fromEntries(new FormData(e.target)),
            fullName: `${firstName} ${lastName}`,
          };
          addUser(userData);
          e.target.reset();

          setIsWatched(false);
          setFirstName("");
          setLastName("");
        }}
        className={styles["create-users-form"]}
      >
        <button
          type="button"
          className={styles["create-users-form-close-btn"]}
          onClick={() => {
            navigate({
              to: "/users-table",
            });
          }}
        >
          <CloseIcon />
        </button>
        <h2 className={styles["create-users-form-title"]}>Create Users Form</h2>

        <div className={styles["create-users-form-input-fullname-container"]}>
          <CreateFormField
            name="firstName"
            onChange={(e) => setFirstName(e.target.value)}
            label="First Name"
            Icon={UserIcon}
            type="text"
            placeholder="Ivan"
          />
          <CreateFormField
            name="lastName"
            onChange={(e) => setLastName(e.target.value)}
            label="Last Name"
            Icon={UserIcon}
            type="text"
            placeholder="Harris"
          />
        </div>

        <CreateFormField name="age" label="Age" Icon={CalendarIcon} type="number" placeholder="20" />
        <CreateFormSelect
          name="gender"
          label="Gender"
          Icon={GenderIcon}
          options={[
            { value: "male", label: "Male     " },
            { value: "female", label: "Female   " },
          ]}
        />
        <CreateFormSelect
          name="roleId"
          label="Role"
          Icon={RightsIcon}
          options={roles.map((role) => ({
            value: role.id,
            label: role.roleName,
          }))}
        />
        <CreateFormField name="email" label="Email" Icon={MailIcon} type="email" placeholder="qwerty@gmail.com" />
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
