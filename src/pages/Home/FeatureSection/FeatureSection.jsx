/* eslint-disable no-unused-vars */
import React from "react";
import { features } from "../../../constants/index";
import Feature from "../../../components/Feature/Feature";

const FeatureSection = () => {
  return (
    <section className="section-feature">
      <div className="container px-6 py-14">
        <h3 className="text-center font-bold text-3xl mb-6">
          Test Always Make You Fall In Love
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-5 py-4">
          {features.map((feature) => (
            <Feature key={feature.id} feature={feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
