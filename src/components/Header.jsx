import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/images/Group 1171275906.png";
import Button from "./Button"; 
import styles from "../styles/Header.module.css";

const Header = () => {
  const [dropdown, setDropdown] = useState(null);

  return (
    <header className={styles.header}>
      {/* Logo redirects to landing page */}
      <Link to="/" className={styles.logo}>
        <img src={Logo} alt="Tu Hi Tu Logo" />
        <span>tuhitu</span>
      </Link>

      <nav className={styles.nav}>
        <ul className={styles.navlist}>
          {/* About Us Dropdown */}
          <li 
            className={styles.dropdown} 
            onMouseEnter={() => setDropdown("about")}
            onMouseLeave={() => setDropdown(null)}
          >
            <span className={styles.aboutUsTitle}>About Us ▾</span>
            {dropdown === "about" && (
              <ul className={styles.dropdownMenu}>
                <li className={styles.aboutUsItem}><Link to="/about-us">Our Story</Link></li>
                <li className={styles.aboutUsItem}><Link to="/team">Our Team</Link></li>
                <li className={styles.aboutUsItem}><Link to="/mission">Our Mission</Link></li>
              </ul>
            )}
          </li>

          {/* Services Dropdown */}
          <li 
            className={styles.dropdown} 
            onMouseEnter={() => setDropdown("services")}
            onMouseLeave={() => setDropdown(null)}
          >
            <span className={styles.servicesTitle}>Services ▾</span>
            {dropdown === "services" && (
              <ul className={styles.dropdownMenu}>
                <li className={styles.servicesItem}><Link to="/elder-care">Elder Care at Home</Link></li>
                <li className={styles.servicesItem}><Link to="/patient-care">Patient Care at Home</Link></li>
                <li className={styles.servicesItem}><Link to="/icu-care">ICU Care at Home</Link></li>
                <li className={styles.servicesItem}><Link to="/live-in-care">Live-in Care</Link></li>
                <li className={styles.servicesItem}><Link to="/palliative-care">Palliative Care at Home</Link></li>
                <li className={styles.servicesItem}><Link to="/nri-family-care">NRI Family Care</Link></li>
                <li className={styles.servicesItem}><Link to="/diagnostics">Diagnostics at Home</Link></li>
                <li className={styles.servicesItem}><Link to="/ecg-home">ECG at Home</Link></li>
                <li className={styles.servicesItem}><Link to="/holter-test">Holter Test at Home</Link></li>
                <li className={styles.servicesItem}><Link to="/dialysis">Dialysis at Home</Link></li>
              </ul>
            )}
          </li>

          {/* Packages Dropdown */}
          <li 
            className={styles.dropdown} 
            onMouseEnter={() => setDropdown("packages")}
            onMouseLeave={() => setDropdown(null)}
          >
            <span className={styles.packagesTitle}>Packages ▾</span>
            {dropdown === "packages" && (
              <ul className={styles.dropdownMenu}>
                <li className={styles.packagesItem}><Link to="/healthcare-packages">HealthCare Packages</Link></li>
                <li className={styles.packagesItem}><Link to="/lab-packages">Lab Packages</Link></li>
                <li className={styles.packagesItem}><Link to="/critical-care">Critical Care</Link></li>
                <li className={styles.packagesItem}><Link to="/elderly-celebration">Elderly Celebration</Link></li>
              </ul>
            )}
          </li>

          {/* Medical Equipment Dropdown - Same Design as Other Dropdowns */}
          <li 
            className={styles.dropdown} 
            onMouseEnter={() => setDropdown("medical-equipment")}
            onMouseLeave={() => setDropdown(null)}
          >
            <span className={styles.medicalEquipmentTitle}>Medical Equipment ▾</span>
            {dropdown === "medical-equipment" && (
              <ul className={styles.dropdownMenu}>
                <li className={styles.medicalEquipmentItem}><Link to="/patient-bed">Patient Bed</Link></li>
                <li className={styles.medicalEquipmentItem}><Link to="/wheelchairs">Wheelchairs</Link></li>
                <li className={styles.medicalEquipmentItem}><Link to="/neo-bolt-scooter">Neo Bolt Scooter</Link></li>
                <li className={styles.medicalEquipmentItem}><Link to="/oxygen-concentrator">Oxygen Concentrator</Link></li>
                <li className={styles.medicalEquipmentItem}><Link to="/bipap-cpap">BiPAP / CPAP</Link></li>
                <li className={styles.medicalEquipmentItem}><Link to="/icu-setup">ICU Setup At Home</Link></li>
                <li className={styles.medicalEquipmentItem}><Link to="/respiratory-equipment">Respiratory Equipment</Link></li>
                <li className={styles.medicalEquipmentItem}><Link to="/icu-equipment">ICU Equipment</Link></li>
                <li className={styles.medicalEquipmentItem}><Link to="/other-equipment">Other Equipment</Link></li>
                <li className={styles.medicalEquipmentItem}><Link to="/accessories">Accessories</Link></li>
                <li className={styles.medicalEquipmentItem}><Link to="/bulk-order">Bulk Equipment Order</Link></li>
                <li className={styles.medicalEquipmentItem}><Link to="/estore">E-Store</Link></li>
              </ul>
            )}
          </li>

          {/* Sign In Button */}
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
    </header>
  );
};

export default Header;
