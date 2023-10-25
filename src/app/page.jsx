import React from "react";
import Hero from "./../components/Hero";
import HowWorks from "./../components/HowWorks";
import Stats from "./../components/Stats";
import FeaturedProject from "./../components/FeaturedProject";
import Contact from "../components/Contact";

const page = () => {
  return (
    <div>
      <Hero />
      <HowWorks />
      <Stats />
      <FeaturedProject />
      <Contact />
    </div>
  );
};

export default page;
