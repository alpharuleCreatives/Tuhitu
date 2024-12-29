import React from "react";
import Button from "./Button"; // Reusable Button component
import SectionContainer from "./SectionContainer"; // Reusable container
import AboutUsImg from "../assets/images/about-us.png";
import styles from "../styles/AboutUs.module.css";

const AboutUs = () => {
  return (
    <SectionContainer backgroundColor="#f9fcfc">
      <div className={styles.about}>
        <div className={styles.image}>
          <img
            src={AboutUsImg}
            alt="Physiotherapist"
          />
        </div>
        <div className={styles.text}>
          <h2>Who We Are</h2>
          <p>
            Tu Hi Tu is a leading platform dedicated to providing in-home
            physiotherapy services. We connect patients with certified
            physiotherapists to ensure a seamless recovery journey. From
            post-surgical rehabilitation to chronic pain management, our
            mission is to make high-quality physiotherapy accessible and
            convenient for everyone.
          </p>
          {/* Pass the custom class name here */}
          <Button
            label="Learn More"
            variant="primary"
            size="medium"
            className={styles.customButton}
          />
        </div>
      </div>
    </SectionContainer>
  );
};

export default AboutUs;
