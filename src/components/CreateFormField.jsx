import React from "react";
import styles from "../styles/create-user-form.module.css";
import { ActionIcon, TextInput } from "@mantine/core";

export default function CreateFormField({ name, label, Icon, RightIcon, onChange, onClick, value, ...props }) {
  return (
    <TextInput
      name={name}
      label={label}
      value={value}
      onChange={onChange}
      leftSection={Icon ? <Icon /> : null}
      rightSection={
        RightIcon ? (
          <ActionIcon variant="transparent" color="#d0d0d0" onClick={onClick}>
            <RightIcon />
          </ActionIcon>
        ) : null
      }
      {...props}
    />
  );
}
