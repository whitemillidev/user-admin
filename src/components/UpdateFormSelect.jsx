import React from "react";
import { Select } from "@mantine/core";

export default function UpdateFormSelect({ name, options, label, Icon, value, defaultValue, onChange, ...props }) {
  return (
    <Select
      name={name}
      label={label}
      data={options}
      value={value}
      defaultValue={defaultValue}
      onChange={onChange}
      leftSection={Icon ? <Icon /> : null}
      {...props}
    />
  );
}
