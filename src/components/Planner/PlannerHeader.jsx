/* eslint-disable react/prop-types */
import { useTasks } from "../../contexts/TaskContext";
import Button from "../Button/Button";

import styles from "./PlannerHeader.module.css";

function PlannerHeader() {
  const { setShowTaskForm, state, boardIndex } = useTasks();

  function handleShowForm() {
    setShowTaskForm((cur) => !cur);
  }
  return (
    <header className={styles.plannerHeader}>
      <p>{state[boardIndex].boardTitle}</p>
      <Button onClick={handleShowForm} type={"primary"}>
        + Add New Task
      </Button>
    </header>
  );
}

export default PlannerHeader;
