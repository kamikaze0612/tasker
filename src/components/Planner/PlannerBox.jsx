/* eslint-disable react/prop-types */
import Items from "../Item/Items";

import styles from "./PlannerBox.module.css";

function PlannerBox() {
  return (
    <div className={styles.plannerBox}>
      <Items color="#3bc9db" title="to do" />
      <Items color="#5f3dc4" title="doing" />
      <Items color="#ff922b" title="done" />
    </div>
  );
}

export default PlannerBox;
