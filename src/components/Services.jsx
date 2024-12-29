import React from "react";
import SectionContainer from "./SectionContainer";
import PostSurgical from "../assets/icons/post-surgical.png"; // Imported images
import ChronicPain from "../assets/icons/chronic-pain.png";
import ElderlyMobility from "../assets/icons/elderly-mobility.png";
import SportsInjury from "../assets/icons/sports-injury.png";
import styles from "../styles/Services.module.css";

const Services = () => {
  const services = [
    {
      icon: PostSurgical, // Use the imported image variable
      title: "Post-Surgical Rehabilitation",
      description: "Regain strength and mobility after surgery.",
    },
    {
      icon: ChronicPain, // Use the imported image variable
      title: "Chronic Pain Management",
      description: "Effective care for long-term pain relief.",
    },
    {
      icon: ElderlyMobility, // Use the imported image variable
      title: "Elderly Mobility Support",
      description: "Helping seniors stay active and independent.",
    },
    {
      icon: SportsInjury, // Use the imported image variable
      title: "Sports Injury Recovery",
      description: "Get back in the game with expert therapy.",
    },
  ];

  return (
    <SectionContainer backgroundColor="#ffffff">
      <div className={styles.services}>
        <div className={styles.header}>
          <h2 className={styles.title}>Specialized Physiotherapy Services</h2>
          <p className={styles.subtitle}>
            We offer a wide range of services tailored to your recovery needs.
          </p>
        </div>
        <div className={styles.grid}>
          {services.map((service, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.icon}>
                <img src={service.icon} alt={service.title} />
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </SectionContainer>
  );
};

export default Services;
