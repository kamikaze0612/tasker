/* eslint-disable react/prop-types */
import { useState } from "react";
import styles from "./Item.module.css";

function Item({ taskTitle, lineColor, subtasks, taskDesc }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const numSubtasks = subtasks?.["0"] ? Object.keys(subtasks).length : 0;

  return (
    <li onClick={() => setIsExpanded((cur) => !cur)} className={styles.item}>
      <span style={{ background: lineColor }} className={styles.line}></span>{" "}
      {taskTitle}
      {!isExpanded && (
        <p className={styles.numSubTasks}>{numSubtasks} subtasks</p>
      )}
      {isExpanded && (
        <>
          <p className={styles.taskDesc}>{taskDesc}</p>
          {numSubtasks > 0 && (
            <ul className={styles.subtaskList}>
              {Object.keys(subtasks).map((key) => (
                <li key={key} className={styles.subtask}>
                  {+key + 1}. {subtasks[key]}
                </li>
              ))}
            </ul>
          )}
        </>
      )}
    </li>
  );
}

export default Item;
