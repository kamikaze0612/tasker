/* eslint-disable react/prop-types */
import { useTasks } from "../../contexts/TaskContext";
import styles from "./SliderButton.module.css";

function SliderButton() {
  const { isDarkMode, setIsDarkMode } = useTasks();

  function handleToggleDarkMode() {
    document.body.classList.toggle("light-mode");
    setIsDarkMode((cur) => !cur);
  }

  return (
    <div onClick={handleToggleDarkMode} className={styles.sliderBtn}>
      <div className={`${styles.slider} ${isDarkMode ? "clicked" : ""}`}></div>
    </div>
  );
}

export default SliderButton;
