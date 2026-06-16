import styles from "../styles/root-layout.module.css";
import { createRootRoute, Link, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import { Burger } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";

export const Route = createRootRoute({
  component: RootLayout,
});

function RootLayout() {
  const [opened, { toggle }] = useDisclosure();

  return (
    <div>
      <div className={styles["menu-container"]}>
        {opened && <h4 className={styles["menu-title"]}>Menu</h4>}
        <Burger
          opened={opened}
          onClick={toggle}
          color="rgb(216, 216, 216)"
          aria-label="Toggle navigation"
          className={opened && styles["menu-close-button"]}
        />
      </div>

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
