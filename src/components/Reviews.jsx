import React, { useState } from "react";
import styles from "../styles/Reviews.module.css";
import PriyaImage from "../assets/images/priya-rana.png"; // Replace with the actual image path
import RahulImage from "../assets/images/rahul-passi.png";
import AaravImage from "../assets/images/aarav-sharma.png";

const Reviews = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const reviews = [
    {
      text: "My elderly father has been more mobile and happy thanks to their amazing service.",
      name: "Priya Rana",
      image: PriyaImage,
    },
    {
      text: "Booking a session was so simple, and the therapist was so professional. Highly recommend!",
      name: "Rahul Passi",
      image: RahulImage,
    },
    {
      text: "Thanks to Tu Hi Tu, I recovered quickly after my surgery. The care was exceptional!",
      name: "Aarav Sharma",
      image: AaravImage,
    },
  ];

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? reviews.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === reviews.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <section className={styles.reviews}>
      <h2 className={styles.title}>Hear From Our Happy Clients</h2>
      <div className={styles.reviewCard}>
        <div className={styles.quote}>"</div>
        <p className={styles.text}>{reviews[currentIndex].text}</p>
        <div className={styles.userInfo}>
          <img
            src={reviews[currentIndex].image}
            alt={reviews[currentIndex].name}
            className={styles.userImage}
          />
          <h4 className={styles.name}>{reviews[currentIndex].name}</h4>
        </div>
      </div>
      <div className={styles.navigation}>
        <button className={styles.navButton} onClick={handlePrev}>
          ❮
        </button>
        <button className={styles.navButton} onClick={handleNext}>
          ❯
        </button>
      </div>
    </section>
  );
};

export default Reviews;
