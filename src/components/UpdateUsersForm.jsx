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
import { useNavigate } from "@tanstack/react-router";
import useRoles from "../hooks/useRoles";
import { Button } from "@mantine/core";

export default function UpdateUsersForm() {
  const { mutate: updateUser } = useUpdateUser();
  const [selectedUser, isWatched, firstName, lastName] = useUsersStore(
    useShallow((state) => [state.selectedUser, state.isWatched, state.firstName, state.lastName]),
  );
  const { data: roles = [] } = useRoles();
  const navigate = useNavigate();

  return (
    <div className={styles["update-users-form-container"]}>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const formData = {
            ...Object.fromEntries(new FormData(e.target)),
            fullName: `${firstName} ${lastName}`,
          };
          e.target.reset();

          navigate({
            to: "/users-table",
          });

          updateUser({
            id: selectedUser.id,
            data: formData,
          });
          setSelectedUser(null);
        }}
        className={styles["update-users-form"]}
      >
        <Button
          variant="transparent"
          color="#d0d0d0"
          type="button"
          style={{ position: "absolute", top: "10px", right: "10px" }}
          leftSection={<CloseIcon />}
          onClick={() => {
            setSelectedUser(null);
            setIsWatched(false);
            setFirstName("");
            setLastName("");

            navigate({
              to: "/users-table",
            });
          }}
        />
        <h2 className={styles["update-users-form-title"]}>Update Users Form</h2>

        <div className={styles["update-users-form-input-fullname-container"]}>
          <UpdateFormField
            w={215}
            name="firstName"
            label="First Name"
            onChange={(e) => setFirstName(e.target.value)}
            Icon={UserIcon}
            type="text"
            placeholder="Ivan"
            defaultValue={selectedUser?.firstName}
          />
          <UpdateFormField
            w={215}
            name="lastName"
            label="Last Name"
            onChange={(e) => setLastName(e.target.value)}
            Icon={UserIcon}
            type="text"
            placeholder="Harris"
            defaultValue={selectedUser?.lastName}
          />
        </div>
        <UpdateFormField w={450} name="age" label="Age" Icon={CalendarIcon} type="number" placeholder="20" defaultValue={selectedUser?.age} />
        <UpdateFormSelect
          w={450}
          name="gender"
          label="Gender"
          Icon={GenderIcon}
          options={[
            { value: "male", label: "Male     " },
            { value: "female", label: "Female   " },
          ]}
          defaultValue={selectedUser?.gender}
        />
        <UpdateFormSelect
          w={450}
          name="roleId"
          label="Role"
          Icon={RightsIcon}
          options={roles.map((role) => ({
            value: role.id,
            label: role.roleName,
          }))}
          defaultValue={selectedUser?.roleId}
        />
        <UpdateFormField
          w={450}
          name="email"
          label="Email"
          Icon={MailIcon}
          type="email"
          placeholder="qwerty@gmail.com"
          defaultValue={selectedUser?.email}
        />

        <UpdateFormField
          w={450}
          name="username"
          label="Username"
          Icon={UserIcon}
          type="text"
          placeholder="nexus_4235"
          defaultValue={selectedUser?.username}
        />
        <UpdateFormField
          w={450}
          name="password"
          label="Password"
          Icon={PasswIcon}
          RightIcon={isWatched ? IncognitoIcon : EyeIcon}
          onClick={() => setIsWatched(!isWatched)}
          type={isWatched ? "text" : "password"}
          placeholder="••••••••"
          defaultValue={selectedUser?.password}
        />

        <Button type="submit" variant="outline" color="rgb(216, 216, 216)" mt="md">
          Update user
        </Button>
      </form>
    </div>
  );
}
