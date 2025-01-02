import React from "react";
import Button from "./Button"; // Reusable Button component
import SectionContainer from "./SectionContainer"; // Reusable container
import AboutUsImg from "../assets/images/about-us.png";
import styles from "../styles/AboutUs.module.css";

const AboutUs = () => {
  return (
    <SectionContainer className={styles.aboutUsMain}>
      <div className={styles.about}>
        <div className={styles.image}>
          <img
            src={AboutUsImg}
            alt="Physiotherapist"
          />
        </div>
        <div className={styles.text}>
          <h2>Dedicated to Senior Wellness</h2>
          <p>
            Tu Hi Tu is a leading platform dedicated to providing in-home
            physiotherapy services. We connect patients with certified
            physiotherapists to ensure a seamless recovery journey. From
            post-surgical rehabilitation to chronic pain management, our
            mission is to make high-quality physiotherapy accessible and
            convenient for everyone.
          </p>
          <div className={styles.aboutUsMainButtons}>
            <Button
              label="Learn More"
              variant="primary"
              size="medium"
            />
            <Button
              label="Become a service provider"
              variant="serviceProvider" /* Use the new variant */
              size="medium"
              onClick={() => alert("Become a service provider")}
            />
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};

export default AboutUs;
