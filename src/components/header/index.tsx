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
        <nav className={styles.header_navigation}>
          <ul className={styles["header_navigation-list"]}></ul>
        </nav>
        <div className={styles.sidenav}>
          <div className={styles["sidenav-navigation"]}></div>
        </div>
      </div>
    </header>
  );
};
