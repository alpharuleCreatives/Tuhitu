import React from "react";
import Button from "./Button";
import ArrowLeft from "../assets/images/arrow-left.png";
import styles from "../styles/RegisterNurseBanner.module.css";
import nurseImage from "../assets/images/NurseImg.png";

const RegisterNurseBanner = () => {
  return (
    <div className={styles.nursebannerContainer}>
      <div className={styles.nursetextSection}>
        <h1 className={styles.nurseheading}>
          Register as Nurse, Therapist or Caregiver
        </h1>
        <div className={styles.aboutUsMainButtons}>
          <button
            className={styles.nurseGetStartedButton}
            onClick={() =>
              window.open(
                "https://docs.google.com/forms/d/e/1FAIpQLSfGbBW-5-LJLLs-xB5oO0Ruki7IAGdWalsU5XZjy7oflRDELw/viewform",
                "_blank"
              )
            }
          >
            Get Started
            <img src={ArrowLeft} alt="Arrow" className={styles.arrowIcon} />
          </button>
        </div>
      </div>
      <div className={styles.nurseimageSection}>
        <img
          src={nurseImage}
          alt="Doctors"
          className={styles.nursedoctorImage}
        />
      </div>
    </div>
  );
};

export default RegisterNurseBanner;
