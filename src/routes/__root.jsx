import styles from "../styles/root-layout.module.css";
import { createRootRoute, Link, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import { Burger, Button, Tooltip, ActionIcon, useMantineColorScheme } from "@mantine/core";
import { useDisclosure, useHover } from "@mantine/hooks";
import SunIcon from "../icons/SunIcon";
import MoonIcon from "../icons/MoonIcon";

export const Route = createRootRoute({
  component: RootLayout,
});

function RootLayout() {
  const [opened, { toggle }] = useDisclosure();

  const { colorScheme, setColorScheme } = useMantineColorScheme();
  const isLight = colorScheme === "light";

  const { hovered, ref } = useHover();
  const isTooltipVisible = !opened && hovered;

  return (
    <div>
      <div className={styles["menu-container"]}>
        {opened && <h4 className={styles["menu-title"]}>Menu</h4>}
        <Tooltip label="Menu" closeDelay={200} position="right" withArrow opened={isTooltipVisible}>
          <Burger
            ref={ref}
            opened={opened}
            onClick={toggle}
            color="rgb(216, 216, 216)"
            aria-label="Toggle navigation"
            className={opened && styles["menu-close-button"]}
          />
        </Tooltip>
      </div>

      <Tooltip label="Switching themes" position="left" withArrow>
        <ActionIcon
          onClick={() => setColorScheme(isLight ? "dark" : "light")}
          variant="default"
          size="lg"
          radius="md"
          style={{
            border: "none",
            background: "transparent",
            position: "absolute",
            top: "15px",
            right: "15px",
            zIndex: "30",
          }}
        >
          {isLight ? <MoonIcon /> : <SunIcon />}
        </ActionIcon>
      </Tooltip>

      {opened && <div className={styles["overlay"]} onClick={toggle} />}

      <nav className={`${styles["nav"]} ${opened ? styles["open"] : ""}`}>
        <Link onClick={toggle} className={styles["nav-link"]} to="/users-table">
          Users Table
        </Link>

        <Link onClick={toggle} className={styles["nav-link"]} to="/roles-table">
          Roles Table
        </Link>
      </nav>
      <Outlet />
      <TanStackRouterDevtools />
    </div>
  );
}
