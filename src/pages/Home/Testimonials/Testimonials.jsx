/* eslint-disable no-unused-vars */
import React from "react";
import Testimonials1 from "../../../../public/img/testimonials-1.jpg";
import Testimonials2 from "../../../../public/img/testimonials-2.jpg";

const Testimonials = () => {
  return (
    <div>
      <div className="py-8">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Testimonials</h2>
          <div className="flex flex-col md:flex-row justify-center">
            <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl mb-4 md:mr-4">
              <div className="md:flex">
                <div className="md:flex-shrink-0">
                  <img
                    className="w-full h-full object-cover md:w-48"
                    src={Testimonials1}
                    alt="Chef Testimonial"
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-xl font-semibold mb-2">Kenshiro</h3>
                  <p className="text-gray-600 leading-relaxed">
                    As a lover of Japanese cuisine, I was thrilled to discover
                    this website dedicated to Japanese chefs and their recipes.
                    The dishes featured on the site are incredibly authentic and
                    the step-by-step instructions make it easy to recreate them
                    at home. Whether you're an experienced home cook or just
                    starting out, this website has something for everyone. I
                    cannot recommend it highly enough!
                  </p>
                </div>
              </div>
            </div>
            <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl mb-4 md:ml-4">
              <div className="md:flex">
                <div className="md:flex-shrink-0">
                  <img
                    className="w-full h-full object-cover md:w-48"
                    src={Testimonials2}
                    alt="Chef Testimonial"
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-xl font-semibold mb-2">Jenna ortega</h3>
                  <p className="text-gray-600 leading-relaxed">
                    This website has quickly become one of my favorites for new
                    and exciting recipes. The Japanese chefs featured are true
                    experts, sharing delicious and inspiring dishes with clear
                    instructions and helpful photos. I've been blown away by the
                    results and highly recommend it to anyone looking to expand
                    their culinary horizons.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
