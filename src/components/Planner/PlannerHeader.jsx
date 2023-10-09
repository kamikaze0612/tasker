/* eslint-disable react/prop-types */
import Button from "../Button/Button";

import styles from "./PlannerHeader.module.css";

function PlannerHeader({ onToggleTaskForm }) {
  function handleShowForm() {
    onToggleTaskForm((cur) => !cur);
  }
  return (
    <header className={styles.plannerHeader}>
      <p>Platform Launch</p>
      <Button onClick={handleShowForm} type={"primary"}>
        + Add New Task
      </Button>
    </header>
  );
}

export default PlannerHeader;
