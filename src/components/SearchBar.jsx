import React, { useState } from "react";
import LocationIcon from "../assets/images/location.png";
import ArrowDown from "../assets/images/arrow-down.png";
import ProfileIcon from "../assets/images/profile-2user.png";
import styles from "../styles/SearchBar.module.css";

const SearchBar = () => {
  const [locationDropdown, setLocationDropdown] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState("Location");
  const [selectedService, setSelectedService] = useState("Type of Service");
  const [selectedSpecialist, setSelectedSpecialist] = useState("");

  const locations = [
    "Chandigarh",
    "Mohali",
    "Panchkula",
    "Ludhiana",
    "Jalandhar",
  ];

  const toggleLocationDropdown = () => {
    setLocationDropdown(!locationDropdown);
  };

  const handleLocationSelect = (location) => {
    setSelectedLocation(location);
    setLocationDropdown(false);
  };

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
        <div className={styles.dropdown}>
          <div
            className={styles.dropdownHeader}
            onClick={toggleLocationDropdown}
          >
            <img src={LocationIcon} alt="Location" className={styles.icon} />
            {selectedLocation}
            <img src={ArrowDown} alt="Arrow Down" className={styles.icon} />
          </div>
          {locationDropdown && (
            <ul className={styles.dropdownList}>
              {locations.map((location, index) => (
                <li key={index} onClick={() => handleLocationSelect(location)}>
                  {location}
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className={styles.partition}></div>

        {/* Service Section */}
        <div className={styles.serviceDropdown}>
          <img src={ProfileIcon} alt="Service Icon" className={styles.icon} />
          <div className={styles.customSelect}>
            <select
              value={selectedService}
              onChange={(e) => setSelectedService(e.target.value)}
            >
              <option>Type of Service</option>
              <option>Physiotherapy</option>
              <option>Senior Care</option>
              <option>ICU Services</option>
            </select>
            <img src={ArrowDown} alt="Arrow Down" className={styles.icon} />
          </div>
        </div>

        <div className={styles.partition}></div>

        {/* Specialist Input Section */}
        <input
          type="text"
          placeholder="Type of Specialist"
          value={selectedSpecialist}
          onChange={(e) => setSelectedSpecialist(e.target.value)}
        />

        {/* Search Button */}
        <button className={styles.searchButton}>Search</button>
      </div>
    </div>
  );
};

export default SearchBar;
