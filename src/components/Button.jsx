import React from "react";
import styles from "../styles/Button.module.css";

const Button = ({ label, onClick, variant = "primary", size = "medium", className = "" }) => {
  return (
    <button
      className={`${styles.button} ${styles[variant]} ${styles[size]} ${className}`}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default Button;
