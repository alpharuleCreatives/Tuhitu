import React from "react";
import Button from "./Button"; // Reusable Button Component
import styles from "../styles/HeroSection.module.css";

const HeroSection = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.overlay}></div>
      <div className={styles.content}>
        <h1>Revolutionizing Home Physiotherapy Care</h1>
        <p>
        Certified therapists, personalized care, all in the comfort of your home.
        </p>
        <div className={styles.buttons}>
          <Button
            label="Get Started"
            variant="primary"
            size="large"
            onClick={() => alert("Get Started")}
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
