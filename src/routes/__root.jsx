import styles from "../styles/root-layout.module.css";
import { createRootRoute, Link, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import BurgerMenuIcon from "../icons/BurgerMenuIcon";
import useToggle from "../hooks/useToggle";
import CloseIcon from "../icons/CloseIcon";

export const Route = createRootRoute({
  component: RootLayout,
});

function RootLayout() {
  const { value, toggle } = useToggle(false);

  return (
    <div>
      <div className={styles["menu-container"]}>
        {value && <h4 className={styles["menu-title"]}>Menu</h4>}
        <button className={value ? styles["menu-close-button"] : styles["menu-burger-button"]} onClick={toggle}>
          {value ? <CloseIcon className={styles["close-icon"]} /> : <BurgerMenuIcon className={styles["burger-icon"]} />}
        </button>
      </div>

      {value && <div className={styles["overlay"]} onClick={toggle} />}

      <nav className={`${styles["nav"]} ${value ? styles["open"] : ""}`}>
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
