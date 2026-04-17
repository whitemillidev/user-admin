import React, { use } from "react";
import styles from "../styles/update-user-form.module.css";
import UserIcon from "../icons/UserIcon";
import CalendarIcon from "../icons/CalendarIcon";
import GenderIcon from "../icons/GenderIcon";
import MailIcon from "../icons/MailIcon";
import PasswIcon from "../icons/PasswIcon";
import useUpdateUser from "../hooks/useUpdateUser";
import { setFirstName, setIsWatched, setLastName, setSelectedUser, useUsersStore } from "../store/users";
import CloseIcon from "../icons/CloseIcon";
import UpdateFormSelect from "./UpdateFormSelect";
import RightsIcon from "../icons/RightsIcon";
import UpdateFormField from "./UpdateFormField";
import EyeIcon from "../icons/EyeIcon";
import IncognitoIcon from "../icons/IncognitoIcon";
import { useShallow } from "zustand/shallow";

export default function UpdateUsersForm() {
  const { mutate: updateUser } = useUpdateUser();
  const [selectedUser, isWatched, firstName, lastName] = useUsersStore(
    useShallow((state) => [state.selectedUser, state.isWatched, state.firstName, state.lastName]),
  );

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
            setFirstName("");
            setLastName("");
          }}
        >
          <CloseIcon />
        </button>
        <h2 className={styles["update-users-form-title"]}>Update Users Form</h2>
        <UpdateFormField
          name="fullName"
          label="Full Name"
          Icon={UserIcon}
          type="text"
          placeholder="Ivan Harris"
          readOnly
          value={`${firstName ? firstName : selectedUser.firstName} ${lastName ? lastName : selectedUser.lastName}`}
        />

        <div className={styles["update-users-form-input-fullname-container"]}>
          <UpdateFormField
            name="firstName"
            label="First Name"
            onChange={(e) => setFirstName(e.target.value)}
            Icon={UserIcon}
            type="text"
            placeholder="Ivan"
            defaultValue={selectedUser.firstName}
          />
          <UpdateFormField
            name="lastName"
            label="Last Name"
            onChange={(e) => setLastName(e.target.value)}
            Icon={UserIcon}
            type="text"
            placeholder="Harris"
            defaultValue={selectedUser.lastName}
          />
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
