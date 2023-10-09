/* eslint-disable react/prop-types */
import styles from "./AddBoard.module.css";
import icon from "../../img/sprite.svg";

function AddBoard({ onToggleBoardForm }) {
  return (
    <button onClick={() => onToggleBoardForm(true)} className={styles.addBoard}>
      {" "}
      <svg className={styles.icon}>
        <use xlinkHref={`${icon}#icon-show-sidebar`}></use>
      </svg>{" "}
      + Create New Board
    </button>
  );
}

export default AddBoard;
