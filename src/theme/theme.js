import { Button, createTheme } from "@mantine/core";

export const theme = createTheme({
  components: {
    TextInput: {
      defaultProps: {
        radius: "md",
      },

      styles: {
        input: {
          backgroundColor: "rgb(20, 20, 30)",
          color: "rgb(203, 202, 202)",
          border: "1px solid rgb(63, 63, 63)",
        },

        label: {
          color: "rgb(203, 202, 202)",
        },
      },
    },

    Select: {
      styles: {
        input: {
          backgroundColor: "rgb(20, 20, 30)",
          border: "1px solid rgb(63, 63, 63)",
          color: "rgb(203, 202, 202)",
        },
        label: {
          color: "rgb(203, 202, 202)",
        },
        dropdown: {
          backgroundColor: "rgb(20, 20, 30)",
        },
        option: {
          color: "rgb(203, 202, 202)",
        },
      },
    },
  },
});
