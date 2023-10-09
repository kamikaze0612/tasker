/* eslint-disable react/prop-types */
import styles from "./SubTaskInput.module.css";

function SubTaskInput({ id, onCloseSubTask, onAddSubtask }) {
  function handleChangeSubtask(event) {
    onAddSubtask((cur) => {
      return { ...cur, [id]: event.target.value };
    });
  }

  return (
    <div className={styles.subBox}>
      <input
        type="text"
        placeholder="e.g. Make a coffee"
        onChange={handleChangeSubtask}
      />
      <span
        onClick={() => onCloseSubTask((cur) => cur - 1)}
        className={styles.closeBtn}
      >
        &times;
      </span>
    </div>
  );
}

export default SubTaskInput;
