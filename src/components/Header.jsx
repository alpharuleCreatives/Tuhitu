import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link from react-router
import Logo from "../assets/images/Group 1171275906.png";
import Button from "./Button"; 
import styles from "../styles/Header.module.css";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={styles.header}>
      {/* ✅ Updated logo to redirect to the landing page */}
      <Link to="/" className={styles.logo}>
        <img src={Logo} alt="Tu Hi Tu Logo" />
        <span>tuhitu</span>
      </Link>

      {/* ✅ Updated navigation links for proper routing */}
      <nav className={`${styles.nav} ${isMenuOpen ? styles.navOpen : ""}`}>
        <ul>
          <li>
            <Link to="/about-us">About Us</Link> {/* Changed from #about */}
          </li>
          <li>
            <Link to="/#services">Service</Link> {/* Keeping anchor for services */}
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

      {/* ✅ Mobile menu toggle remains the same */}
      <div className={styles.menuToggle} onClick={toggleMenu}>
        <div className={styles.bar}></div>
        <div className={styles.bar}></div>
        <div className={styles.bar}></div>
      </div>
    </header>
  );
};

export default Header;
