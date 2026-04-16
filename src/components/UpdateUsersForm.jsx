import React, { use } from "react";
import styles from "../styles/update-user-form.module.css";
import UserIcon from "../icons/UserIcon";
import CalendarIcon from "../icons/CalendarIcon";
import GenderIcon from "../icons/GenderIcon";
import MailIcon from "../icons/MailIcon";
import PasswIcon from "../icons/PasswIcon";
import useUpdateUser from "../hooks/useUpdateUser";
import { setIsWatched, setSelectedUser, useUsersStore } from "../store/users";
import CloseIcon from "../icons/CloseIcon";
import UpdateFormSelect from "./UpdateFormSelect";
import RightsIcon from "../icons/RightsIcon";
import UpdateFormField from "./UpdateFormField";
import EyeIcon from "../icons/EyeIcon";
import IncognitoIcon from "../icons/IncognitoIcon";

export default function UpdateUsersForm() {
  const { mutate: updateUser } = useUpdateUser();
  const selectedUser = useUsersStore((state) => state.selectedUser);
  const isWatched = useUsersStore((state) => state.isWatched);
  console.log(isWatched);

  return (
    <div className={styles["update-users-form-container"]}>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const formData = Object.fromEntries(new FormData(e.target));
          e.target.reset();

          updateUser({
            id: selectedUser.id,
            data: formData,
          });
          setSelectedUser(null);
        }}
        className={styles["update-users-form"]}
      >
        <button
          type="button"
          className={styles["update-users-form-close-btn"]}
          onClick={() => {
            setSelectedUser(null);
            setIsWatched(false);
          }}
        >
          <CloseIcon />
        </button>
        <h2 className={styles["update-users-form-title"]}>Update Users Form</h2>

        <div className={styles["update-users-form-input-fullname"]}>
          <UpdateFormField name="firstName" label="First Name" Icon={UserIcon} type="text" placeholder="Ivan" defaultValue={selectedUser.firstName} />
          <UpdateFormField name="lastName" label="Last Name" Icon={UserIcon} type="text" placeholder="Harris" defaultValue={selectedUser.lastName} />
        </div>
        <UpdateFormField name="age" label="Age" Icon={CalendarIcon} type="number" placeholder="20" defaultValue={selectedUser.age} />
        <UpdateFormField name="gender" label="Gender" Icon={GenderIcon} type="text" placeholder="Male" defaultValue={selectedUser.gender} />
        <UpdateFormField name="email" label="Email" Icon={MailIcon} type="email" placeholder="qwerty@gmail.com" defaultValue={selectedUser.email} />
        <UpdateFormSelect name="roleId" label="Role" Icon={RightsIcon} defaultValue={selectedUser.roleId} />
        <UpdateFormField name="username" label="Username" Icon={UserIcon} type="text" placeholder="nexus_4235" defaultValue={selectedUser.username} />
        <UpdateFormField
          name="password"
          label="Password"
          Icon={PasswIcon}
          RightIcon={isWatched ? IncognitoIcon : EyeIcon}
          onClick={() => setIsWatched(!isWatched)}
          type={isWatched ? "text" : "password"}
          placeholder="••••••••"
          defaultValue={selectedUser.password}
        />

        <button className={styles["update-users-form-button"]} type="submit">
          Update user
        </button>
      </form>
    </div>
  );
}
