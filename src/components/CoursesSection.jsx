import React from "react";
import styles from "../styles/CoursesSection.module.css";
import PhysiotherapyImage from "../assets/images/physiotherapy.png";
import SeniorCareImage from "../assets/images/senior-care.png";
import LabTestImage from "../assets/images/lab-test.png";
import RatingStar from "../assets/images/Coursestar.png";

const homeCoursesData = [
  {
    image: PhysiotherapyImage,
    title: "Physiotherapy at Home",
    rating: "4.9",
    buttonText: "Book Now",
    link: "/book-physiotherapy",
  },
  {
    image: SeniorCareImage,
    title: "Senior Citizen Care",
    rating: "5.0",
    buttonText: "Book Now",
    link: "/book-senior-care",
  },
  {
    image: LabTestImage,
    title: "Lab Tests at Home",
    rating: "5.0",
    buttonText: "Book Now",
    link: "/book-lab-tests",
  },
];

const CoursesSection = () => {
  // Duplicating data to create an infinite effect
  const repeatedCourses = [...homeCoursesData, ...homeCoursesData, ...homeCoursesData, ...homeCoursesData, ...homeCoursesData, ...homeCoursesData, ...homeCoursesData];

  return (
    <section className={styles.courses}>
      <h2>Top Picks</h2>
      <p className={styles.subtitle}>
        Find Doctors and Service Providers in your City
      </p>

      <div className={styles.carouselContainer}>
        <div className={styles.carouselTrack}>
          {repeatedCourses.map((service, index) => (
            <div key={index} className={styles.card}>
              <img
                src={service.image}
                alt={service.title}
                className={styles.cardImage}
              />
              <div className={styles.titlebuttonrating}>
                <div className={styles.titlebutton}>
                  <div className={styles.title}>{service.title}</div>
                  <div href={service.link} className={styles.bookNow}>
                    {service.buttonText}
                  </div>
                </div>
                <div className={styles.rating}>
                  {service.rating} <span className={styles.star}><img src={RatingStar} alt="rating-star"/></span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;
