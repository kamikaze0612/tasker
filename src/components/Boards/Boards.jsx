/* eslint-disable react/prop-types */
import BoardLabel from "../BoardLabel/BoardLabel";
import AddBoard from "../AddBoard/AddBoard";

import styles from "./Boards.module.css";
import BoardForm from "../BoardLabel/BoardForm";

function Boards({
  dispatch,
  boards,
  index,
  onClickLabel,
  onToggleBoardForm,
  showBoardForm,
}) {
  return (
    <div className={styles.boards}>
      <p>All boards ({boards.length})</p>
      {boards.length > 0
        ? boards.map((board) => (
            <BoardLabel
              onClickLabel={() => onClickLabel(board.id - 1)}
              isActive={board.id - 1 === index}
              key={board.id}
            >
              {board.boardTitle}
            </BoardLabel>
          ))
        : ""}
      {!showBoardForm && <AddBoard onToggleBoardForm={onToggleBoardForm} />}
      {showBoardForm && (
        <BoardForm dispatch={dispatch} onToggleBoardForm={onToggleBoardForm} />
      )}
    </div>
  );
}

export default Boards;
