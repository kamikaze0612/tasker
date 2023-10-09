import styles from "./SliderButton.module.css";

function SliderButton() {
  return (
    <div className={styles.sliderBtn}>
      <div className={`${styles.slider} clicked`}></div>
    </div>
  );
}

export default SliderButton;
