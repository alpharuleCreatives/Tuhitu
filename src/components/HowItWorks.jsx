import React from "react";
import styles from "../styles/HowItWorks.module.css";

const HowItWorks = () => {
  const steps = [
    {
      number: "1",
      title: "Sign up and share your therapy requirements.",
    },
    {
      number: "2",
      title: "Get matched with a certified therapist experienced in elder care.",
    },
    {
      number: "3",
      title: "Book therapy sessions online easily.",
    },
    {
      number: "4",
      title: "Enjoy expert care from the comfort of your home.",
    },
  ];

  return (
    <section className={styles.howItWorks}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>
            How it <span className={styles.highlight}>works ?</span>
          </h2>
          <p className={styles.subtitle}>Simplifying Therapy for Seniors</p>
        </div>

        <div className={styles.timeline}>
          <div className={styles.centerDot}></div>
          <div className={styles.dotLine}></div>
          <div className={styles.steps}>
            {steps.map((step, index) => (
              <div key={index} className={styles.step}>
                <div className={styles.stepNumber}>{step.number}</div>
                <h3 className={styles.stepTitle}>{step.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;