import React from "react";
import { TextInput } from "@mantine/core";

export default function DataFilters({ leftSection, onChange, placeholder, value, ...props }) {
  return (
    <TextInput
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      leftSection={leftSection}
      {...props}
      style={{ width: "400px", marginBottom: "50px" }}
    />
  );
}
