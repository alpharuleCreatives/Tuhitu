// src/components/SeniorDedication.jsx
import React from "react";
import Button from "./Button";
import styles from "../styles/SeniorDedication.module.css";

const SeniorDedication = ({
  title,
  description,
  imageSrc,
  primaryButtonText,
  secondaryButtonText,
}) => {
  return (
    <section className={styles.aboutUsMain}>
      <div className={styles.about}>
        {/* Image Section */}
        <div className={styles.image}>
          <img src={imageSrc} alt="Healthcare Professional" />
        </div>

        {/* Text Section */}
        <div className={styles.text}>
          <h2>{title}</h2>
          <p>{description}</p>

          {/* ✅ Conditionally Render Buttons Only When Props Exist */}
          <div className={styles.aboutUsMainButtons}>
            {primaryButtonText && (
              <Button label={primaryButtonText} variant="primary" />
            )}
            {secondaryButtonText && (
              <Button label={secondaryButtonText} variant="serviceProvider" />
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SeniorDedication;
