import styles from "./SidebarHeader.module.css";
import logo from "../../img/logo.png";

function SidebarHeader() {
  return (
    <header className={styles.sidebarHeader}>
      <img src={logo} alt="Task Master logo" />
      <p>tasker</p>
    </header>
  );
}

export default SidebarHeader;
