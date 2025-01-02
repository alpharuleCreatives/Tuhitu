import React, { useState } from "react";
import Logo from "../assets/images/Group 1171275906.png";
import Button from "./Button"; // Import the reusable Button component
import styles from "../styles/Header.module.css";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img src={Logo} alt="Tu Hi Tu Logo" />
        <span>tuhitu</span>
      </div>
      <nav className={`${styles.nav} ${isMenuOpen ? styles.navOpen : ""}`}>
        <ul>
          <li>
            <a href="#about">About Us</a>
          </li>
          <li>
            <a href="#services">Service</a>
          </li>
          <li>
            <Button
              label="Sign In"
              variant="serviceProvider"
              size="medium"
              onClick={() => alert("Sign In clicked")}
              className={styles.signInButton}
            />
          </li>
        </ul>
      </nav>
      <div className={styles.menuToggle} onClick={toggleMenu}>
        <div className={styles.bar}></div>
        <div className={styles.bar}></div>
        <div className={styles.bar}></div>
      </div>
    </header>
  );
};

export default Header;
