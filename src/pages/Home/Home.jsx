/* eslint-disable no-unused-vars */
import React from "react";
import Banner from "../../components/Banner/Banner";
import FeatureSection from "./FeatureSection/FeatureSection";
import ChefSection from "./ChefSection/ChefSection";
import Testimonials from "./Testimonials/Testimonials";

const Home = () => {
  return (
    <main>
      <Banner />
      <FeatureSection />
      <ChefSection />
      <Testimonials />
    </main>
  );
};

export default Home;
