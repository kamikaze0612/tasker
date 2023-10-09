import PropTypes from "prop-types";
import styles from "./Button.module.css";

Button.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.string,
  type: PropTypes.string,
};

function Button({ children, onClick, type }) {
  return (
    <button onClick={onClick} className={`${styles.btn} ${styles[type]}`}>
      {children}
    </button>
  );
}

export default Button;
