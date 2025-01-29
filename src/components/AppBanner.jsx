import React from "react";
import ArrowLeft from "../assets/images/arrow-left.png"; // Correct path
import styles from "../styles/AppBanner.module.css";
import appStoreLogo from "../assets/images/appstore.png";
import playStoreLogo from "../assets/images/playstore.png";
import doctorImage from "../assets/images/doctorImage.png";

const AppBanner = () => {
  return (
    <div className={styles.bannerContainer}>
      <div className={styles.imageSection}>
        <img src={doctorImage} alt="Doctors" className={styles.doctorImage} />
      </div>

      <div className={styles.textSection}>
        <h1 className={styles.heading}>
          Get the TUHITU App for Seamless Healthcare Services
        </h1>

        <div className={styles.storeButtons}>
          <a href="#" className={styles.storeLink}>
            <img src={appStoreLogo} alt="App Store" />
          </a>
          <a href="#" className={styles.storeLink}>
            <img src={playStoreLogo} alt="Play Store" />
          </a>
        </div>

        <div className={styles.aboutUsMainButtons}>
          <button
            className={styles.appBannnerButton}
            onClick={() =>
              window.open(
                "https://docs.google.com/forms/d/e/1FAIpQLScUbsm56PIpntBJJd7wDc97tLpSzp2ZDlHV4FUHVoaenUCsfw/viewform",
                "_blank"
              )
            }
          >
            Start your health care program
            <img src={ArrowLeft} alt="Arrow Left" className={styles.arrowLeft} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default AppBanner;
