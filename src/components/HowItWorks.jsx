import React from "react";
import HIWImage from "../assets/images/howitworks-image.png";
import styles from "../styles/HowItWorks.module.css";

const HowItWorks = () => {
  const steps = [
    {
      number: "1",
      title: "Book a Service",
      description: "Choose your required service.",
    },
    {
      number: "2",
      title: "Schedule an Appointment",
      description: "Pick your preferred time slot.",
    },
    {
      number: "3",
      title: "Receive Care",
      description: "A certified professional will assist you at home.",
    },
    {
      number: "4",
      title: "Monitor Progress",
      description: "Track session details and receive reports.",
    },
  ];

  return (
    <section className={styles.howItWorks}>
      <div className={styles.container}>
        {/* Header Section */}
        <div className={styles.header}>
          <div className={styles.heading}>
            How it <span className={styles.highlight}>works?</span>
          </div>
          <div className={styles.subtitle}>Simplifying Therapy for Seniors</div>
        </div>

        {/* Timeline Section */}
        <div className={styles.timelineContainer}>
          <div className={styles.timeline}>
            <div className={styles.outerlayercenterDot}>
              <div className={styles.centerDotthird}>
                <div className={styles.centerDotsecond}>
                  <div className={styles.centerDotone}></div>
                </div>
              </div>
            </div>

            <div className={styles.dashedLine}></div>
          </div>
        </div>

        <div className={styles.mainContent}>
          {/* Steps Section */}
          <div className={styles.steps}>
            {steps.map((step, index) => (
              <div key={index} className={styles.step}>
                <div className={styles.stepCircle}>{step.number}</div>
                <div className={styles.stepContent}>
                  <div className={styles.stepTitle}>{step.title}</div>
                  <div className={styles.stepDescription}>
                    {step.description}
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* Image Section */}
          <div className={styles.imageContainer}>
            <img src={HIWImage} alt="Mobile App" className={styles.image} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
