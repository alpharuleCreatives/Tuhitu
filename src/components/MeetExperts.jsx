import React from "react";
import styles from "../styles/MeetExperts.module.css";
import DrNehaSharma from "../assets/images/dr-neha-sharma.png"; // Replace with actual image paths
import DrAmitVerma from "../assets/images/dr-amit-verma.png";
import DrRajivDas from "../assets/images/dr-rajiv-das.png";

const MeetExperts = () => {
  const experts = [
    {
      image: DrNehaSharma,
      name: "Dr. Neha Sharma",
      specialty: "Chronic Pain Specialist",
      experience: "15+ years experience",
      reviews: "5.0(400+ Reviews)",
    },
    {
      image: DrAmitVerma,
      name: "Dr. Amit Verma",
      specialty: "Sports Rehab Expert",
      experience: "10+ years experience",
      reviews: "4.3(300+ Reviews)",
    },
    {
      image: DrRajivDas,
      name: "Dr. Rajiv Das",
      specialty: "Post-Surgical Care Specialist",
      experience: "12+ years experience",
      reviews: "4.8(200+ Reviews)",
    },
  ];

  return (
    <section className={styles.meetExperts}>
      <h2 className={styles.title}>Certified Physiotherapists You Can Trust</h2>
      <p className={styles.subtitle}>
        Our team comprises certified professionals with extensive experience in
        providing effective physiotherapy care.
      </p>
      <div className={styles.grid}>
        {experts.map((expert, index) => (
          <div key={index} className={styles.card}>
            <div className={styles.imageWrapper}>
              <img src={expert.image} alt={expert.name} />
            </div>
            <h3 className={styles.name}>{expert.name}</h3>
            <p className={styles.specialty}>{expert.specialty}</p>
            <p className={styles.experience}>{expert.experience}</p>
            <p className={styles.reviews}>
              <span className={styles.star}>⭐</span> {expert.reviews}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MeetExperts;
