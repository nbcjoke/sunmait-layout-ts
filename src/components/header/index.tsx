import { Navigation } from "./navigation";
import { Menu } from "./menu";

import styles from "./style.module.css";
import logo from "../../assets/logo.svg";

export const Header = () => {
  return (
    <header>
      <div className={styles.header_container}>
        <div className={styles.header_logo}>
          <a href="/">
            <img src={logo} alt="logo" />
          </a>
        </div>
        <Navigation />
        <div className={styles.sidenav}>
          <div className={styles["sidenav-navigation"]}></div>
        </div>
        <Menu />
      </div>
    </header>
  );
};
