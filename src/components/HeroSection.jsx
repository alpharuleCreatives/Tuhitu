import React from "react";
import Button from "./Button"; 
import styles from "../styles/HeroSection.module.css"; // Default styling for AboutUs
import homeStyles from "../pages/Home/HomeHeroSection.module.css"; // New styling for Home page
import SearchBar from "./SearchBar";

const HeroSection = ({ 
    showButtons = true, 
    backgroundImage, 
    contentAlignment = "left", 
    title, 
    description,
    variant = "default" // Using a prop to toggle styling
}) => {
  const appliedStyles = variant === "home" ? homeStyles : styles;

  return (
    <section
      className={appliedStyles.hero}
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {/* Overlay stays the same */}
      <div className={appliedStyles.overlay}></div>
      <div 
        className={`${appliedStyles.content} ${appliedStyles[contentAlignment]}`}
      >
        <h1>{title}</h1>
        <p>{description}</p>

        {showButtons && (
          <div className={appliedStyles.buttons}>
            <Button
              label="Get Started"
              variant="primary"
              size="large"
              onClick={() => alert("Get Started")}
            />
            <Button
              label="Become a service provider"
              variant="serviceProvider"
              size="large"
              onClick={() => alert("Become a Service Provider")}
            />
          </div>
        )}
      </div>
      {variant === "home" && <SearchBar />}
    </section>
  );
};

export default HeroSection;
