/* eslint-disable react/prop-types */
import SidebarHeader from "./SidebarHeader";
import SidebarFooter from "./SidebarFooter";
import Boards from "../Boards/Boards";

import styles from "./Sidebar.module.css";

function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <SidebarHeader />
      <Boards />
      <SidebarFooter />
    </div>
  );
}

export default Sidebar;
