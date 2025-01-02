import React from "react";
import styles from "../styles/SectionContainer.module.css";

const SectionContainer = ({
  children,
  backgroundColor = "white",
  className = "",
}) => {
  return (
    <section
      className={`${styles.container} ${className}`}
      style={{ backgroundColor }}
    >
      {children}
    </section>
  );
};

export default SectionContainer;
