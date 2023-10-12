/* eslint-disable react/prop-types */
import PropTypes from "prop-types";
import styles from "./Button.module.css";

Button.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.string,
  type: PropTypes.string,
};

function Button({ children, onClick, type, className, size }) {
  return (
    <button
      onClick={onClick}
      className={`${className} ${styles.btn} ${styles[type]} ${styles[size]}`}
    >
      {children}
    </button>
  );
}

export default Button;
