import React, { useState, useEffect } from "react";
import LocationIcon from "../assets/images/location.png";
import ArrowDown from "../assets/images/arrow-down.png";
import ProfileIcon from "../assets/images/profile-2user.png";
import styles from "../styles/SearchBar.module.css";

const SearchBar = () => {
  const [locationDropdown, setLocationDropdown] = useState(false);
  const [serviceDropdown, setServiceDropdown] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState("Location");
  const [selectedService, setSelectedService] = useState("Type of Service");
  const [selectedSpecialist, setSelectedSpecialist] = useState("");

  const locations = ["Chandigarh", "Mohali", "Panchkula", "Ludhiana", "Jalandhar"];
  const services = ["Physiotherapy", "Senior Care", "ICU Services"];

  // Closes dropdown when clicking outside (for mobile)
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest(`.${styles.dropdown}`)) {
        setLocationDropdown(false);
        setServiceDropdown(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <div className={styles.searchBarContainer}>
      {/* Heading Section */}
      <div className={styles.heading}>
        <div className={styles.mainHeading}>Search Specialists</div>
        <div className={styles.subHeading}>
          with more than 100+ specialists and therapists
        </div>
      </div>

      {/* Search Bar Section */}
      <div className={styles.searchBar}>
        {/* Location Section */}
        <div
          className={styles.dropdown}
          onMouseEnter={() => setLocationDropdown(true)}
          onMouseLeave={() => setLocationDropdown(false)}
        >
          <div
            className={styles.dropdownHeader}
            onClick={() => setLocationDropdown(!locationDropdown)}
          >
            <img src={LocationIcon} alt="Location" className={styles.icon} />
            {selectedLocation}
            <img src={ArrowDown} alt="Arrow Down" className={styles.icon} />
          </div>
          {locationDropdown && (
            <ul className={styles.dropdownList}>
              {locations.map((location, index) => (
                <li key={index} onClick={() => { setSelectedLocation(location); setLocationDropdown(false); }}>
                  {location}
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className={styles.partition}></div>

        {/* Service Dropdown */}
        <div
          className={styles.dropdown}
          onMouseEnter={() => setServiceDropdown(true)}
          onMouseLeave={() => setServiceDropdown(false)}
        >
          <div className={styles.dropdownHeader} onClick={() => setServiceDropdown(!serviceDropdown)}>
            <img src={ProfileIcon} alt="Service Icon" className={styles.icon} />
            {selectedService}
            <img src={ArrowDown} alt="Arrow Down" className={styles.icon} />
          </div>
          {serviceDropdown && (
            <ul className={styles.dropdownList}>
              {services.map((service, index) => (
                <li key={index} onClick={() => { setSelectedService(service); setServiceDropdown(false); }}>
                  {service}
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className={styles.partition}></div>

        {/* Specialist Input Section */}
        <input
          type="text"
          placeholder="Type of Specialist"
          value={selectedSpecialist}
          onChange={(e) => setSelectedSpecialist(e.target.value)}
          className={styles.specialistInput}
        />

        {/* Search Button */}
        <button className={styles.searchButton}>Search</button>
      </div>
    </div>
  );
};

export default SearchBar;
