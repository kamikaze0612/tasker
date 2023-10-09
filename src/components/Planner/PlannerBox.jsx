/* eslint-disable react/prop-types */
import Items from "../Item/Items";

import styles from "./PlannerBox.module.css";

function PlannerBox({ tasks }) {
  return (
    <div className={styles.plannerBox}>
      <Items color="#3bc9db" title="to do" tasks={tasks} />
      <Items color="#5f3dc4" title="doing" tasks={tasks} />
      <Items color="#ff922b" title="done" tasks={tasks} />
    </div>
  );
}

export default PlannerBox;
