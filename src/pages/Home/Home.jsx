import React from "react";
import HeroSection from "../../components/HeroSection";
import Services from "../../components/Services";
import CoursesSection from "../../components/CoursesSection";
import HowItWorks from "../../components/HowItWorks";
import Testimonials from "../../components/Testimonials";
import HomeImage from "../../assets/images/tuhitu-herobg.png";
import SeniorDedication from "../../components/SeniorDedication";
import CompassionateCare from "../../assets/images/compassionateCare.png";
import WhyChooseUs from "../../components/WhyChooseUs";
import AppBanner from "../../components/AppBanner";
import RegisterNurseBanner from "../../components/RegisterNurseBanner";

const homeServicesData = [
  {
    icon: "01",
    title: "Pain Management Services",
    description: [
      "Physiotherapy at Home",
      "Yoga, Acupressure, Acupuncture",
      "CBT, Neurostimulation",
    ],
    buttonText: "Book Now",
    link: "/book-service",
  },
  {
    icon: "02",
    title: "Geriatric Care Services",
    description: ["Caregiver at Home", "(Nurse Attendant, GDA)"],
    buttonText: "Book Now",
    link: "/book-service",
  },
  {
    icon: "03",
    title: "ICU Services",
    description: ["Buy/Rent ICU Equipment", "ICU at Home"],
    buttonText: "Explore More",
    link: "/explore",
  },
  {
    icon: "HealthServicesIcon",
    title: "Health Services",
    description: [
      "Lab Tests at Home",
      "Pharmacy Online Store",
      "Remote Tele-consultation",
    ],
    buttonText: "View Services",
    link: "/view-services",
  },
  {
    icon: "MentalHealthIcon",
    title: "Mental Health Services",
    description: ["Psychologist at Home", "Online Counselling"],
    buttonText: "Book a Session",
    link: "/book-session",
  },
  {
    icon: "SeniorCitizenIcon",
    title: "Senior Citizen Services",
    description: "Companion for Senior Citizens",
    buttonText: "Schedule Now",
    link: "/schedule",
  },
];

const Home = () => {
  return (
    <>
      <HeroSection
        title="Your Trusted Partner for Home-Based Healthcare Services"
        description="Experience quality care with our certified professionals for pain management, ICU care, and geriatric services at your doorstep"
        backgroundImage={HomeImage}
        showButtons={false}
        contentAlignment="center"
        variant="home" // ✅ This applies the home hero section styling
      />
      {/* ✅ Home Services with Numbered Cards Only */}
      <Services
        servicesData={homeServicesData}
        title="Top Service Categories"
        description="Find Doctors and Service providers in your City"
        isHomePage={true}
      />
      <CoursesSection />
      <SeniorDedication
        title={
          <>
            Compassionate <span style={{ color: "#00B3C2" }}>Care</span> for
            Your Loved Ones
          </>
        }
        description="Our team of certified healthcare professionals is dedicated to providing personalized care for pain management and home health services, ensuring comfort and quality recovery."
        imageSrc={CompassionateCare}
        primaryButtonText="Request an Appointment"
      />
      <HowItWorks />
      <WhyChooseUs />
      <Testimonials />
      <AppBanner />
      <RegisterNurseBanner />
    </>
  );
};

export default Home;
