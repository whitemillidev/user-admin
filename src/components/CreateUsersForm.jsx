import React from "react";

import { useShallow } from "zustand/shallow";
import { useNavigate } from "@tanstack/react-router";

import styles from "../styles/create-user-form.module.css";
import UserIcon from "../icons/UserIcon";
import CalendarIcon from "../icons/CalendarIcon";
import GenderIcon from "../icons/GenderIcon";
import MailIcon from "../icons/MailIcon";
import PasswIcon from "../icons/PasswIcon";
import RightsIcon from "../icons/RightsIcon";
import EyeIcon from "../icons/EyeIcon";
import IncognitoIcon from "../icons/IncognitoIcon";
import CloseIcon from "../icons/CloseIcon";

import CreateFormSelect from "./CreateFormSelect";
import CreateFormField from "./CreateFormField";

import useRoles from "../hooks/useRoles";
import useUsers from "../hooks/useUsers";
import useAddUser from "../hooks/useAddUser";
import {
  hasFormData,
  isFormValid,
  resetCreateUserForm,
  setHasError,
  setAge,
  setEmail,
  setFirstName,
  setGender,
  setIsWatched,
  setLastName,
  setPassword,
  setRoleId,
  setUsername,
  useUsersStore,
} from "../store/users";
import { Button } from "@mantine/core";
import { notifications } from "@mantine/notifications";

export default function CreateUsersForm() {
  const [hasError, selectedUser, isWatched, firstName, lastName, age, gender, roleId, email, username, password] = useUsersStore(
    useShallow((state) => [
      state.hasError,
      state.selectedUser,
      state.isWatched,
      state.firstName,
      state.lastName,
      state.age,
      state.gender,
      state.roleId,
      state.email,
      state.username,
      state.password,
    ]),
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

          if (!isFormValid()) {
            setHasError(true);
            return;
          }

          setHasError(false);

          const userData = {
            ...Object.fromEntries(new FormData(e.target)),
            fullName: `${firstName} ${lastName}`,
          };
          addUser(userData);
          e.target.reset();

          setIsWatched(false);
          setFirstName("");
          setLastName("");
          setAge("");
          setGender("");
          setRoleId("");
          setEmail("");
          setUsername("");
          setPassword("");

          navigate({
            to: "/users-table",
          });
        }}
        className={styles["create-users-form"]}
      >
        <Button
          variant="transparent"
          color="#d0d0d0"
          type="button"
          style={{ position: "absolute", top: "10px", right: "10px" }}
          leftSection={<CloseIcon />}
          onClick={() => {
            if (hasFormData()) {
              const confirmed = window.confirm("Вы действительно хотите закрыть окно? Введенные вами данные будут утеряны.");
              if (!confirmed) return;
            }

            resetCreateUserForm();
            setIsWatched(false);
            setHasError(false);

            navigate({
              to: "/users-table",
            });
          }}
        />
        <h2 className={styles["create-users-form-title"]}>Create Users Form</h2>

        <div className={styles["create-users-form-input-fullname-container"]}>
          <CreateFormField
            w={215}
            name="firstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            label="First Name"
            Icon={UserIcon}
            type="text"
            placeholder="Ivan"
          />
          <CreateFormField
            w={215}
            name="lastName"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            label="Last Name"
            Icon={UserIcon}
            type="text"
            placeholder="Harris"
          />
        </div>

        <CreateFormField
          w={450}
          name="age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          label="Age"
          Icon={CalendarIcon}
          type="number"
          placeholder="20"
        />
        <CreateFormSelect
          w={450}
          name="gender"
          value={gender}
          onChange={(value) => setGender(value)}
          label="Gender"
          Icon={GenderIcon}
          options={[
            { value: "male", label: "Male     " },
            { value: "female", label: "Female   " },
          ]}
        />
        <CreateFormSelect
          w={450}
          name="roleId"
          value={roleId}
          onChange={(value) => setRoleId(value)}
          label="Role"
          Icon={RightsIcon}
          options={roles.map((role) => ({
            value: role.id,
            label: role.roleName,
          }))}
        />
        <CreateFormField
          w={450}
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          label="Email"
          Icon={MailIcon}
          type="email"
          placeholder="qwerty@gmail.com"
        />
        <CreateFormField
          w={450}
          name="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          label="Username"
          Icon={UserIcon}
          type="text"
          placeholder="nexus_4235"
        />
        <CreateFormField
          w={450}
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          label="Password"
          Icon={PasswIcon}
          RightIcon={isWatched ? IncognitoIcon : EyeIcon}
          onClick={() => setIsWatched(!isWatched)}
          type={isWatched ? "text" : "password"}
          placeholder="••••••••"
        />
        <CreateFormField
          w={450}
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          label="Password"
          Icon={PasswIcon}
          RightIcon={isWatched ? IncognitoIcon : EyeIcon}
          onClick={() => setIsWatched(!isWatched)}
          type={isWatched ? "text" : "password"}
          placeholder="••••••••"
        />
        {hasError && <span style={{ color: "red" }}>Please fill in all required fields.</span>}
        <Button type="submit" variant="outline" color="rgb(216, 216, 216)" mt="md">
          Add user
        </Button>
      </form>
    </div>
  );
}
