/* eslint-disable react/prop-types */
import Sidebar from "../Sidebar/Sidebar";
import TaskForm from "../TaskForm/TaskForm";
import Planner from "../Planner/Planner";

import { useTasks } from "../../contexts/TaskContext";
import styles from "./Main.module.css";

function Main() {
  const { showTaskForm, state } = useTasks();
  return (
    <main className={styles.main}>
      {showTaskForm && <TaskForm />}
      <Sidebar />
      {state.length > 0 ? <Planner /> : ""}
    </main>
  );
}

export default Main;
