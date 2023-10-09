/* eslint-disable react/prop-types */
import PlannerHeader from "./PlannerHeader";
import PlannerBox from "./PlannerBox";

import styles from "./Planner.module.css";

function Planner({ tasks, onToggleTaskForm }) {
  return (
    <div className={styles.planner}>
      <PlannerHeader onToggleTaskForm={onToggleTaskForm} />
      <PlannerBox tasks={tasks} />
    </div>
  );
}

export default Planner;
