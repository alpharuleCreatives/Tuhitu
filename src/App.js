import React from "react";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import AboutUs from "./components/AboutUs";
import WhyChooseUs from "./components/WhyChooseUs";
import Services from "./components/Services";
import MeetExperts from "./components/MeetExperts";
import Reviews from "./components/Reviews";
import BlogResources from "./components/BlogResources";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Header />
      <HeroSection />
      <AboutUs />
      <Services />
      <WhyChooseUs />
      <MeetExperts />
      <Reviews />
      <BlogResources />
      <Footer />
    </>
  );
};

export default App;
