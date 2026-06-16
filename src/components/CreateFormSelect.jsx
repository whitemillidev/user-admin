import React from "react";
import { Select } from "@mantine/core";

export default function CreateFormSelect({ name, options, label, Icon, value, onChange, ...props }) {
  return <Select name={name} label={label} data={options} value={value} onChange={onChange} leftSection={Icon ? <Icon /> : null} {...props} />;
}
