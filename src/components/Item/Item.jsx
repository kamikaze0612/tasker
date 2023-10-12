/* eslint-disable react/prop-types */
import { useState } from "react";

import Button from "../Button/Button";
import styles from "./Item.module.css";
import { useTasks } from "../../contexts/TaskContext";

function Item({ taskTitle, lineColor, subtasks, taskDesc, status, id }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [taskStatus, setTaskStatus] = useState(0);

  const { dispatch, boardIndex } = useTasks();

  const numSubtasks = subtasks?.["0"] ? Object.keys(subtasks).length : 0;

  const changeStatus =
    status === "to do" ? (
      <>
        <option value="0" disabled defaultValue={0}>
          To Do
        </option>
        <option value="doing">Doing</option>
        <option value="done">Done</option>
      </>
    ) : status === "doing" ? (
      <>
        <option value="0" disabled defaultValue={0}>
          Doing
        </option>
        <option value="to do">To Do</option>
        <option value="done">Done</option>
      </>
    ) : (
      <>
        <option value="0" disabled defaultValue={0}>
          Done
        </option>
        <option value="to do">To Do</option>
        <option value="doing">Doing</option>
      </>
    );

  function handleChangeStatus(event) {
    setTaskStatus(event.target.value);
    dispatch({
      type: "changeStatus",
      payload: { newStatus: event.target.value, id, curBoard: boardIndex },
    });
  }

  function handleDeleteTask() {
    dispatch({ type: "deleteTask", payload: { id, curBoard: boardIndex } });
  }

  return (
    <li onClick={() => setIsExpanded((cur) => !cur)} className={styles.item}>
      <span style={{ background: lineColor }} className={styles.line}></span>{" "}
      <span className={styles.taskTitle}>{taskTitle} </span>
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
          <div className={styles.changeStatus}>
            <span>Change status:</span>
            <select
              value={taskStatus}
              onChange={handleChangeStatus}
              onClick={(event) => event.stopPropagation()}
              name="change-status"
              id="change-status"
              className={styles.change}
            >
              {changeStatus}
            </select>
          </div>
          <Button
            onClick={handleDeleteTask}
            className={styles.deleteBtn}
            type="red"
            size="small"
          >
            &times; Delete Task
          </Button>
        </>
      )}
    </li>
  );
}

export default Item;
