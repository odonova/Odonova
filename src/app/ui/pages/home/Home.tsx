import React from "react";
import Navbar from "../../components/navbar/Navbar";
import HeroSection from "./Herosection";
import ServicesSection from "./Servicessection";

const Home: React.FC = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <ServicesSection />
    </>
  );
};

export default Home;
