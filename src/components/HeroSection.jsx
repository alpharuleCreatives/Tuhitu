import React from "react";
import Button from "./Button"; // Reusable Button Component
import styles from "../styles/HeroSection.module.css";

const HeroSection = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.overlay}></div>
      <div className={styles.content}>
        <h1>Compassionate Physiotherapy Care for Elders at Home</h1>
        <p>
        Certified professionals delivering personalized therapy, ensuring comfort, mobility, and independence in your golden years
        </p>
        <div className={styles.buttons}>
          <Button
            label="Get Started"
            variant="primary"
            size="large"
            onClick={() => alert("Get Started")}
          />
          <Button
            label="Become a service provider"
            variant="serviceProvider" /* Use the new variant */
            size="large"
            onClick={() => alert("Become a service provider")}
          />
        </div>
        <div className={styles.pagination}>
          <span className={styles.dot}></span>
          <span className={`${styles.dot} ${styles.active}`}></span>
          <span className={styles.dot}></span>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
