/* eslint-disable react/prop-types */
import styles from "./BoardLabel.module.css";
import icon from "../../img/sprite.svg";

function Board({ children, isActive, onClickLabel }) {
  return (
    <div
      onClick={onClickLabel}
      className={`${styles.boardLabel} ${isActive ? "active" : ""}`}
    >
      <svg className={styles.icon}>
        <use xlinkHref={`${icon}#icon-show-sidebar`}></use>
      </svg>{" "}
      {children}
    </div>
  );
}

export default Board;
