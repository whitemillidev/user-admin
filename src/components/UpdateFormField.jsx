import React from "react";
import { TextInput, ActionIcon } from "@mantine/core";

export default function UpdateFormField({ name, label, Icon, RightIcon, onChange, onClick, value, defaultValue, ...props }) {
  return (
    <TextInput
      name={name}
      label={label}
      value={value}
      defaultValue={defaultValue}
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
