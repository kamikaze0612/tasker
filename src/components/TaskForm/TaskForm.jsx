/* eslint-disable react/prop-types */
import { useCallback, useEffect, useState } from "react";
import Button from "../Button/Button";

import styles from "./TaskForm.module.css";
import SubTaskInput from "./SubTaskInput";

function TaskForm({ onToggleTaskForm, curBoard, dispatch }) {
  const [taskTitle, setTaskTitle] = useState("");
  const [taskDesc, setTaskDesc] = useState("");
  const [subTaskLength, setTaskLength] = useState(1);
  const [taskStatus, setTaskStatus] = useState("to do");
  const [subtasks, setSubtasks] = useState({});

  const handleCloseForm = useCallback(
    function () {
      onToggleTaskForm(false);
    },
    [onToggleTaskForm]
  );

  useEffect(() => {
    document.addEventListener("keydown", (event) => {
      if (event.code === "Escape") {
        handleCloseForm();
      }
    });

    return document.removeEventListener("keydown", (event) => {
      if (event.code === "Escape") {
        handleCloseForm();
      }
    });
  }, [handleCloseForm]);

  function handleAddSubtask(event) {
    event.preventDefault();
    setTaskLength((cur) => cur + 1);
  }

  function handleAddTask(event) {
    event.preventDefault();
    const newTask = {
      taskId: Math.floor(Math.random() * 1000000),
      taskTitle,
      description: taskDesc,
      status: taskStatus,
      subtasks,
    };

    dispatch({
      type: "addTask",
      payload: { ...curBoard, tasks: [...curBoard.tasks, newTask] },
    });
    onToggleTaskForm(false);
  }

  return (
    <div className={styles.overlay}>
      <form onSubmit={handleAddTask} className={styles.taskForm}>
        <header className={styles.taskFormHeader}>
          <h2>Add New Task</h2>
          <span onClick={handleCloseForm} className={styles.closeBtn}>
            &times;
          </span>
        </header>
        <div className={styles.inputBox}>
          <label htmlFor="title">Title</label>
          <input
            value={taskTitle}
            onChange={(event) => setTaskTitle(event.target.value)}
            id="title"
            type="text"
            placeholder="e.g. Do house chores"
          />
        </div>
        <div className={styles.inputBox}>
          <label htmlFor="description">Description</label>
          <textarea
            value={taskDesc}
            onChange={(event) => setTaskDesc(event.target.value)}
            id="description"
            type="text"
            placeholder="e.g. Wash your clothes, clean my room, go out and buy groceries"
            rows={5}
          />
        </div>
        <div className={styles.inputBox}>
          <label htmlFor="subtask">Subtasks</label>
          {Array.from(Array(subTaskLength).keys()).map((_, index) => (
            <SubTaskInput
              key={index}
              id={index}
              onAddSubtask={setSubtasks}
              onCloseSubTask={setTaskLength}
            />
          ))}
          <Button onClick={handleAddSubtask} type="white">
            + Add New Subtask
          </Button>
        </div>
        <div className={styles.inputBox}>
          <label htmlFor="status">Status</label>
          <select
            value={taskStatus}
            onChange={(event) => setTaskStatus(event.target.value)}
            name="status"
            id="status"
          >
            <option value="to do">To-Do</option>
            <option value="doing">Doing</option>
            <option value="done">Done</option>
          </select>
        </div>
        <Button type="primary">Create Task</Button>
      </form>
    </div>
  );
}

export default TaskForm;
