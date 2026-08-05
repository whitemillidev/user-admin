import React, { use } from "react";
import styles from "../styles/update-user-form.module.css";
import UserIcon from "../icons/UserIcon";
import CalendarIcon from "../icons/CalendarIcon";
import GenderIcon from "../icons/GenderIcon";
import MailIcon from "../icons/MailIcon";
import PasswIcon from "../icons/PasswIcon";
import useUpdateUser from "../hooks/useUpdateUser";
import { setAge, setEmail, setFirstName, setGender, setIsWatched, setLastName, setRoleId, setUsername, useUsersStore } from "../store/users";
import CloseIcon from "../icons/CloseIcon";
import UpdateFormSelect from "./UpdateFormSelect";
import RightsIcon from "../icons/RightsIcon";
import UpdateFormField from "./UpdateFormField";
import EyeIcon from "../icons/EyeIcon";
import IncognitoIcon from "../icons/IncognitoIcon";
import { useShallow } from "zustand/shallow";
import { useNavigate, useParams } from "@tanstack/react-router";
import useRoles from "../hooks/useRoles";
import { Button } from "@mantine/core";
import useUsers from "../hooks/useUsers";

export default function UpdateUsersForm() {
  const { mutate: updateUser } = useUpdateUser();
  const [isWatched, firstName, lastName] = useUsersStore(useShallow((state) => [state.isWatched, state.firstName, state.lastName]));
  const { data: roles = [] } = useRoles();
  const { data: users = [] } = useUsers();
  const navigate = useNavigate();

  const { userId } = useParams({ from: "/users-table/update-users/$userId" });
  const user = users.find((user) => user.id === userId);

  if (!user) return <div>Loading...</div>;

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
            id: user.id,
            data: formData,
          });
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
            defaultValue={user?.firstName}
          />
          <UpdateFormField
            w={215}
            name="lastName"
            label="Last Name"
            onChange={(e) => setLastName(e.target.value)}
            Icon={UserIcon}
            type="text"
            placeholder="Harris"
            defaultValue={user?.lastName}
          />
        </div>
        <UpdateFormField
          w={450}
          name="age"
          label="Age"
          onChange={(e) => setAge(e.target.value)}
          Icon={CalendarIcon}
          type="number"
          placeholder="20"
          defaultValue={user?.age}
        />
        <UpdateFormSelect
          w={450}
          name="gender"
          label="Gender"
          onChange={(value) => setGender(value)}
          Icon={GenderIcon}
          options={[
            { value: "male", label: "Male" },
            { value: "female", label: "Female" },
          ]}
          defaultValue={user?.gender}
        />
        <UpdateFormSelect
          w={450}
          name="roleId"
          label="Role"
          onChange={(value) => setRoleId(value)}
          Icon={RightsIcon}
          options={roles.map((role) => ({
            value: role.id,
            label: role.roleName,
          }))}
          defaultValue={user?.roleId}
        />
        <UpdateFormField
          w={450}
          name="email"
          label="Email"
          onChange={(e) => setEmail(e.target.value)}
          Icon={MailIcon}
          type="email"
          placeholder="qwerty@gmail.com"
          defaultValue={user?.email}
        />

        <UpdateFormField
          w={450}
          name="username"
          label="Username"
          onChange={(e) => setUsername(e.target.value)}
          Icon={UserIcon}
          type="text"
          placeholder="nexus_4235"
          defaultValue={user?.username}
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
          defaultValue={user?.password}
        />

        <Button type="submit" variant="transparent" className={styles["update-users-form-button"]} mt="md">
          Update user
        </Button>
      </form>
    </div>
  );
}
