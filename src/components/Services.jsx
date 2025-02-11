import React from "react";
import SectionContainer from "./SectionContainer";
import styles from "../styles/Services.module.css";
import homeStyles from "../pages/Home/HomeServices.module.css"; // Separate SCSS for Home Services

const Services = ({ servicesData, title, description, isHomePage = false }) => {
  return (
    <SectionContainer backgroundColor="#ffffff">
      <div className={isHomePage ? homeStyles.services : styles.services}>
        <div className={isHomePage ? homeStyles.header : styles.header}>
          <h2 className={isHomePage ? homeStyles.title : styles.title}>
            {title.split(" ").map((word, index) => {
              // For Home Component: Service in #00B3C2
              if (isHomePage && word === "Service") {
                return (
                  <span key={index} style={{ color: "#00B3C2" }}>
                    {word}{" "}
                  </span>
                );
              }
              // For AboutUs Component: Healthier You in #00B3C2
              if (!isHomePage && (word === "Healthier" || word === "You")) {
                return (
                  <span key={index} style={{ color: "#00B3C2" }}>
                    {word}{" "}
                  </span>
                );
              }
              return `${word} `;
            })}
          </h2>
          <p className={isHomePage ? homeStyles.subtitle : styles.subtitle}>
            {description}
          </p>
        </div>

        {/* ✅ Dynamic Cards Handling */}
        <div className={isHomePage ? homeStyles.grid : styles.grid}>
          {servicesData.map((service, index) => (
            <div
              key={index}
              className={isHomePage ? homeStyles.card : styles.card}
            >
              {/* ✅ If Home Page, Show Number */}
              {isHomePage ? (
                <div className={homeStyles.cardNumber}>
                  {String(index + 1).padStart(2, "0")}
                </div>
              ) : (
                <div className={styles.icon}>
                  <img src={service.icon} alt={service.title} />
                </div>
              )}

              <div className={homeStyles.headingcard}>{service.title}</div>
              {Array.isArray(service.description) ? (
                <ul className={isHomePage ? homeStyles.list : styles.list}>
                  {service.description.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              ) : (
                <p>{service.description}</p>
              )}
              {service.link && (
                <a
                  href={service.link}
                  className={
                    isHomePage ? homeStyles.serviceLink : styles.serviceLink
                  }
                >
                  {service.buttonText}
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </SectionContainer>
  );
};

export default Services;
