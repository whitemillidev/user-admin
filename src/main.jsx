import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createRouter, RouterProvider } from "@tanstack/react-router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { routeTree } from "./routeTree.gen";
import { MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";
import "@mantine/notifications/styles.css";
import { theme } from "./theme/theme";
import { Notifications } from "@mantine/notifications";

const router = createRouter({ routeTree: routeTree });
const queryClient = new QueryClient();

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <MantineProvider withGlobalStyles withNormalizeCSS theme={theme}>
      <Notifications position="bottom-right" />
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </MantineProvider>
  </StrictMode>,
);
