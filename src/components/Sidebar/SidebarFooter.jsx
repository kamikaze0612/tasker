import SliderButton from "../Button/SliderButton";

import styles from "./SidebarFooter.module.css";
import icon from "../../img/sprite.svg";

function SidebarFooter() {
  return (
    <footer className={styles.sidebarFooter}>
      <div className={styles.modeToggle}>
        <svg className={styles.icon}>
          <use xlinkHref={`${icon}#icon-sun-fill`}></use>
        </svg>
        <SliderButton />
        <svg className={styles.icon}>
          <use xlinkHref={`${icon}#icon-moon-fill`}></use>
        </svg>
      </div>
      <p className={styles.author}>
        &copy; 2023 Buyantogtokh B. All rights reserved.
      </p>
    </footer>
  );
}

export default SidebarFooter;
