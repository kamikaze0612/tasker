/* eslint-disable react/prop-types */
import SidebarHeader from "./SidebarHeader";
import SidebarFooter from "./SidebarFooter";
import Boards from "../Boards/Boards";

import styles from "./Sidebar.module.css";

function Sidebar({
  boards,
  index,
  onClickLabel,
  dispatch,
  onToggleBoardForm,
  showBoardForm,
}) {
  return (
    <div className={styles.sidebar}>
      <SidebarHeader />
      <Boards
        onToggleBoardForm={onToggleBoardForm}
        dispatch={dispatch}
        boards={boards}
        index={index}
        onClickLabel={onClickLabel}
        showBoardForm={showBoardForm}
      />
      <SidebarFooter />
    </div>
  );
}

export default Sidebar;
