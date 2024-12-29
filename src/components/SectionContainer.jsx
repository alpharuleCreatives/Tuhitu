import React from "react";
import styles from "../styles/SectionContainer.module.css";

const SectionContainer = ({ children, backgroundColor = "white" }) => {
  return (
    <section className={styles.container} style={{ backgroundColor }}>
      {children}
    </section>
  );
};

export default SectionContainer;
