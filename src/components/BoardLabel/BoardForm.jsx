/* eslint-disable react/prop-types */
import { useState } from "react";
import Button from "../Button/Button";

import styles from "./BoardForm.module.css";

function BoardForm({ dispatch, onToggleBoardForm }) {
  const [boardTitle, setBoardTitle] = useState("");

  function handleAddBoard(e) {
    e.preventDefault();
    onToggleBoardForm(false);
    dispatch({ type: "addBoard", payload: boardTitle });
  }

  return (
    <form onSubmit={handleAddBoard} className={styles.boardForm}>
      <h2>
        Add New Board{" "}
        <span
          className={styles.closeBtn}
          onClick={() => onToggleBoardForm(false)}
        >
          &times;
        </span>
      </h2>
      <input
        value={boardTitle}
        onChange={(event) => setBoardTitle(event.target.value)}
        type="text"
        placeholder="e.g. Platform Launch"
      />
      <Button type="primary">Add</Button>
    </form>
  );
}

export default BoardForm;
