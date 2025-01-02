import React from "react";
import SectionContainer from "./SectionContainer";
import PostSurgical from "../assets/icons/post-surgical.png";
import ChronicPain from "../assets/icons/chronic-pain.png";
import ElderlyMobility from "../assets/icons/elderly-mobility.png";
import SportsInjury from "../assets/icons/sports-injury.png";
import FallPrevention from "../assets/icons/sports-injury.png";
import StrokeRehab from "../assets/icons/sports-injury.png";
import styles from "../styles/Services.module.css";

const Services = () => {
  const services = [
    {
      icon: PostSurgical,
      title: "Post-Surgical Rehabilitation",
      description: "Regain strength and mobility after surgery.",
    },
    {
      icon: ChronicPain,
      title: "Chronic Pain Management",
      description: "Effective care for long-term pain relief.",
    },
    {
      icon: ElderlyMobility,
      title: "Elderly Mobility Support",
      description: "Helping seniors stay active and independent.",
    },
    {
      icon: SportsInjury,
      title: "Sports Injury Recovery",
      description: "Get back in the game with expert therapy.",
    },
    {
      icon: FallPrevention,
      title: "Fall Prevention Programs",
      description: "Specialized techniques to improve safety and reduce falls.",
    },
    {
      icon: StrokeRehab,
      title: "Stroke Rehabilitation Therapy",
      description:
        "Holistic support for stroke recovery, restoring motor skills and quality of life.",
    },
  ];

  return (
    <SectionContainer backgroundColor="#ffffff">
      <div className={styles.services}>
        <div className={styles.header}>
          <h2 className={styles.title}>
            Physiotherapy for a Happier, <span className={styles.highlight}>Healthier You</span>
          </h2>
          <p className={styles.subtitle}>
            We offer a wide range of services that include specialized care focused on elder care.
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
