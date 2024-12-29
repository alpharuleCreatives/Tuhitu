import React from "react";
import styles from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* Links Section */}
        <div className={styles.section}>
          <h4>Links</h4>
          <ul className={styles.list}>
            <li>About Us</li>
            <li>Service</li>
            <li>Blog</li>
            <li>Contact Us</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>

        {/* Explore Section */}
        <div className={styles.section}>
          <h4>Explore</h4>
          <ul className={styles.list}>
            <li>Resources</li>
            <li>Blog</li>
          </ul>
        </div>

        {/* Subscribe Section */}
        <div className={styles.section}>
          <h4>Subscribe</h4>
          <form className={styles.subscribeForm}>
            <input
              type="email"
              placeholder="Email address"
              className={styles.input}
            />
            <button type="submit" className={styles.submitButton}>
              →
            </button>
          </form>
          <p className={styles.subscribeText}>
            Hello, we are TU HI TU, trying to make an effort to put the right
            people for you to get the best results.
          </p>
        </div>

        {/* About Us Section */}
        <div className={styles.section}>
          <h4>About Us</h4>
          <p className={styles.aboutText}>
            Tu Hi Tu is dedicated to making professional physiotherapy care
            accessible and convenient for everyone. We specialize in delivering
            personalized therapy sessions to help you recover and regain
            mobility from the comfort of your home.
          </p>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className={styles.bottomFooter}>
        <div className={styles.logo}>tuhitu</div>
        <div className={styles.terms}>
          <span>Terms</span>
          <span>Privacy</span>
          <span>Cookies</span>
        </div>
        <div className={styles.socialIcons}>
          <i className="fab fa-linkedin"></i>
          <i className="fab fa-facebook"></i>
          <i className="fab fa-twitter"></i>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
