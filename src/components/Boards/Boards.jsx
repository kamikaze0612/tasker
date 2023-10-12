/* eslint-disable react/prop-types */
import BoardLabel from "../BoardLabel/BoardLabel";
import AddBoard from "../AddBoard/AddBoard";

import styles from "./Boards.module.css";
import BoardForm from "../BoardLabel/BoardForm";
import { useTasks } from "../../contexts/TaskContext";

function Boards() {
  const {
    dispatch,
    state,
    boardIndex,
    setBoardIndex,
    setShowBoardForm,
    showBoardForm,
  } = useTasks();

  return (
    <div className={styles.boards}>
      <p>All boards ({state.length})</p>
      {state.length > 0
        ? state.map((board) => (
            <BoardLabel
              onClickLabel={() => setBoardIndex(board.id - 1)}
              isActive={board.id - 1 === boardIndex}
              key={board.id}
            >
              {board.boardTitle}
            </BoardLabel>
          ))
        : ""}
      {!showBoardForm && <AddBoard onToggleBoardForm={setShowBoardForm} />}
      {showBoardForm && (
        <BoardForm dispatch={dispatch} onToggleBoardForm={setShowBoardForm} />
      )}
    </div>
  );
}

export default Boards;
