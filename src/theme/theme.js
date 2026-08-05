import { createTheme } from "@mantine/core";

export const theme = createTheme({
  components: {
    TextInput: {
      defaultProps: {
        radius: "md",
      },
    },
    Select: {
      defaultProps: {
        radius: "md",
      },
    },
  },
});
