import React from "react";
import styles from "../styles/WhyChooseUs.module.css";
import doctorImage from "../assets/images/doctorCheckUp.png";

const WhyChooseUs = () => {
  const features = [
    {
      icon: <CircleCheckIcon />,
      title: "Certified Experts",
      description: "RSIC-certified therapists experienced in elderly care.",
    },
    {
      icon: <HomeIcon />,
      title: "Home Convenience",
      description: "Therapy sessions delivered right to your doorstep.",
    },
    {
      icon: <LockIcon />,
      title: "Secure & Transparent",
      description: "Simple booking and secure payments.",
    },
    {
      icon: <PersonIcon />,
      title: "Personalized Plans",
      description: "Tailored exercises and care routines for seniors.",
    },
    {
      icon: <FeedbackIcon />,
      title: "Feedback Driven Care",
      description: "Continuous improvements based on your experiences.",
    },
  ];

  return (
    <section className={styles.whyChoose}>
      <div className={styles.container}>
        <div className={styles.headerContent}>
          <h2 className={styles.title}>
            Why Choose <span className={styles.highlight}>Us?</span>
          </h2>
          <p className={styles.subtitle}>
            Your Trusted Partner in Elderly Care
          </p>
        </div>
        <div className={styles.content}>
          <div className={styles.textContent}>
            <div className={styles.features}>
              {features.map((feature, index) => (
                <div key={index} className={styles.feature}>
                  <div className={styles.iconWrapper}>{feature.icon}</div>
                  <div className={styles.featureText}>
                    <h3 className={styles.featureTitle}>{feature.title}</h3>
                    <p className={styles.featureDescription}>
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className={styles.imageWrapper}>
            <img
              src={doctorImage}
              alt="Healthcare professional with patient"
              className={styles.image}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

const CircleCheckIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="12" cy="12" r="11" stroke="currentColor" strokeWidth="2" />
    <path
      d="M7 12L10.5 15.5L17 9"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const HomeIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M3 12l9-9 9 9M5 10v10h14V10"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const LockIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect
      x="5"
      y="11"
      width="14"
      height="10"
      rx="2"
      stroke="currentColor"
      strokeWidth="2"
    />
    <path d="M8 11V7a4 4 0 018 0v4" stroke="currentColor" strokeWidth="2" />
  </svg>
);

const PersonIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="12" cy="8" r="4" stroke="currentColor" strokeWidth="2" />
    <path
      d="M6 21v-2a4 4 0 014-4h4a4 4 0 014 4v2"
      stroke="currentColor"
      strokeWidth="2"
    />
  </svg>
);

const FeedbackIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M21 11.5a8.5 8.5 0 11-17 0 8.5 8.5 0 0117 0z"
      stroke="currentColor"
      strokeWidth="2"
    />
    <path
      d="M8.21 13.89L7 23l4.5-5.5 4.5 5.5-1.21-9.11"
      stroke="currentColor"
      strokeWidth="2"
    />
  </svg>
);

export default WhyChooseUs;
