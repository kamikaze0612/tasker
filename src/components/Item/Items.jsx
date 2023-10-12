/* eslint-disable react/prop-types */
import Item from "./Item";
import { useTasks } from "../../contexts/TaskContext";

import styles from "./Items.module.css";

function Items({ title, color }) {
  const context = useTasks();
  const tasks = context.state[context.boardIndex].tasks;

  const curTasks = tasks ? tasks.filter((task) => task.status === title) : [];
  const numTasks = tasks ? curTasks.length : 0;

  return (
    <div className={styles.items}>
      <h2>
        <span
          className={styles.circle}
          style={{ backgroundColor: color }}
        ></span>{" "}
        {title} ({numTasks})
      </h2>
      {tasks ? (
        <ul className={styles.tasksList}>
          {curTasks.map((task) => (
            <Item
              subtasks={task.subtasks}
              key={task.taskId}
              lineColor={color}
              taskTitle={task.taskTitle}
              taskDesc={task.description}
              status={task.status}
              id={task.taskId}
            />
          ))}
        </ul>
      ) : (
        ""
      )}
    </div>
  );
}

export default Items;
