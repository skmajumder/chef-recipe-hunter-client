/* eslint-disable no-unused-vars */
import React from "react";

const Banner = () => {
  return (
    <section className="banner">
      <div className="container px-6 py-14">
        <div className="flex flex-col-reverse md:flex-row md:gap-16">
          <div className="md:w-1/2">
            <h1 className="font-bold text-6xl mb-6">
              Healthy Food Makes You Feel Good
            </h1>
            <p className="text-[#555] text-[18px] font-medium leading-7 mb-6">
              Our Team Of Experts Chef Is Dedicated To Helping You Achieve Your
              Health Goals. Find your favorite Food Recipe with the best chefs
            </p>
            <button className="btn">Get Started</button>
          </div>
          <div className="md:w-1/2">
            <img
              className="w-[70%] text-right"
              src="https://omnifood.dev/img/hero.webp"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
