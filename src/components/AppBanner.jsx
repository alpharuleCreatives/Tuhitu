// components/AppBanner.jsx
import React from 'react';
import styles from '../styles/AppBanner.module.css';
import appStoreLogo from '../assets/images/appstore.png'; 
import playStoreLogo from '../assets/images/playstore.png'; 
import doctorImage from '../assets/images/doctorImage.png'; 

const AppBanner = () => {
    return (
        <div className={styles.bannerContainer}>
            <div className={styles.imageSection}>
                <img src={doctorImage} alt="Doctors" className={styles.doctorImage} />
            </div>

            <div className={styles.textSection}>
                <h1 className={styles.heading}>Get the TUHITU App for Seamless Healthcare Services</h1>
                
                <div className={styles.storeButtons}>
                    <a href="#" className={styles.storeLink}>
                        <img src={appStoreLogo} alt="App Store" />
                    </a>
                    <a href="#" className={styles.storeLink}>
                        <img src={playStoreLogo} alt="Play Store" />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default AppBanner;
