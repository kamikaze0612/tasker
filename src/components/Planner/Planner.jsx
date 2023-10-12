/* eslint-disable react/prop-types */
import PlannerHeader from "./PlannerHeader";
import PlannerBox from "./PlannerBox";

import styles from "./Planner.module.css";

function Planner() {
  return (
    <div className={styles.planner}>
      <PlannerHeader />
      <PlannerBox />
    </div>
  );
}

export default Planner;
