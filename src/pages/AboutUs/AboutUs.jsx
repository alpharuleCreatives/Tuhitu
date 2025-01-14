import React from "react";
import HeroSection from "../../components/HeroSection";
import SeniorDedication from "../../components/SeniorDedication";
import WhyChooseUs from "../../components/WhyChooseUs";
import Services from "../../components/Services";
import MeetExperts from "../../components/MeetExperts";
import HowItWorks from "../../components/HowItWorks";
import BlogResources from "../../components/BlogResources";
import HeroImage from "../../assets/images/hero-bg.jpeg";
import NurseImage from "../../assets/images/NurseImage.png";
import PostSurgical from "../../assets/icons/post-surgical.png";
import ChronicPain from "../../assets/icons/chronic-pain.png";
import ElderlyMobility from "../../assets/icons/elderly-mobility.png";
import SportsInjury from "../../assets/icons/sports-injury.png";
import FallPrevention from "../../assets/icons/sports-injury.png";
import StrokeRehab from "../../assets/icons/sports-injury.png";
import Testimonials from "../../components/Testimonials";

const aboutServicesData = [
  {
    icon: PostSurgical,
    title: "Post-Surgical Rehabilitation",
    description: "Regain strength and mobility after surgery.",
  },
  {
    icon: ChronicPain,
    title: "Chronic Pain Management",
    description: "Effective care for long-term pain relief.",
  },
  {
    icon: ElderlyMobility,
    title: "Elderly Mobility Support",
    description: "Helping seniors stay active and independent.",
  },
  {
    icon: SportsInjury,
    title: "Sports Injury Recovery",
    description: "Get back in the game with expert therapy.",
  },
  {
    icon: FallPrevention,
    title: "Fall Prevention Programs",
    description: "Specialized techniques to improve safety and reduce falls.",
  },
  {
    icon: StrokeRehab,
    title: "Stroke Rehabilitation Therapy",
    description:
      "Holistic support for stroke recovery, restoring motor skills and quality of life.",
  },
];

const AboutUs = () => {
  return (
    <>
      <HeroSection
        title="Compassionate Physiotherapy Care for Elders at Home"
        description="Certified professionals delivering personalized therapy, ensuring comfort, mobility, and independence in your golden years"
        backgroundImage={HeroImage}
        showButtons={true}
        contentAlignment="left"
      />
      <SeniorDedication
        title="Dedicated to Senior Wellness"
        description="Tu Hi Tu is a trusted platform for in-home physiotherapy, specially designed to cater to the unique needs of seniors. We connect you with certified therapists who ensure a comfortable recovery journey. Whether it’s regaining strength after surgery or managing chronic pain, our mission is to bring health and independence back into your life with ease and dignity."
        imageSrc={NurseImage}
        primaryButtonText="Explore Services"
        secondaryButtonText="Join Our Network"
      />
      <Services
        servicesData={aboutServicesData}
        title="Physiotherapy for a Happier, Healthier You"
        description="We offer a wide range of services that includes specialized focused elder care."
        isHomePage={false}
      />
      <WhyChooseUs />
      <MeetExperts />
      <HowItWorks />
      <BlogResources />
      <Testimonials />
    </>
  );
};

export default AboutUs;
