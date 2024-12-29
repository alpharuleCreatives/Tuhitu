import React, { useState } from "react";
import Logo from "../assets/images/Group 1171275906.png"
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
            <button className={styles.signInButton}>Sign In</button>
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
