import React from "react";
import styles from "../styles/WhyChooseUs.module.css";
import CertifiedExperts from "../assets/images/certified-experts.png"; // Example image path
import Convenience from "../assets/images/convenience.png";
import ConvenienceSecond from "../assets/images/convenience-sec.png";
import SecureTransparent from "../assets/images/secure-transparent.png";
import PersonalizedPlans from "../assets/images/personalized-plans.png";
import FeedbackQuality from "../assets/images/feedback-quality.png";

const WhyChooseUs = () => {
  const advantages = [
    {
      image: CertifiedExperts,
      title: "Certified Experts",
      description: "All physiotherapists are RSIC-certified.",
    },
    {
      image: Convenience,
      title: "Convenience",
      description: "Therapy at your doorstep at your preferred time.",
    },
    {
      image: SecureTransparent,
      title: "Secure & Transparent",
      description: "Easy booking and secure payments.",
    },
    {
      image: PersonalizedPlans,
      title: "Personalized Plans",
      description: "Tailored therapy sessions to suit your needs.",
    },
    {
      image: ConvenienceSecond,
      title: "Convenience",
      description: "Therapy at your doorstep at your preferred time.",
    },
    {
      image: FeedbackQuality,
      title: "Feedback-Driven Quality",
      description: "Continuous improvement through patient reviews.",
    },
  ];

  return (
    <section className={styles.whyChoose}>
      <h2 className={styles.title}>The Tu Hi Tu Advantage</h2>
      <div className={styles.cards}>
        {advantages.map((advantage, index) => (
          <div key={index} className={styles.card}>
            <div className={styles.image}>
              <img src={advantage.image} alt={advantage.title} />
            </div>
            <h3 className={styles.cardTitle}>{advantage.title}</h3>
            <p className={styles.cardDescription}>{advantage.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;
