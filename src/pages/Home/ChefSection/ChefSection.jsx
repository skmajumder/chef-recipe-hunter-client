/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import Chefs from "../../../components/Chefs/Chefs";

const ChefSection = () => {
  const [chefs, setChefs] = useState([]);
  const [numChefsToShow, setNumChefsToShow] = useState(6);
  const [showMoreButton, setShowMoreButton] = useState(true);

  useEffect(() => {
    fetch("https://chef-recipe-hunter-server-side-kolpodrovercel-gmailcom.vercel.app/chefs")
      .then((response) => response.json())
      .then((data) => setChefs(data));
  }, []);

  const handleShowMoreClick = () => {
    setNumChefsToShow(chefs.length);
    setShowMoreButton(false);
  };

  const handleShowLessClick = () => {
    setNumChefsToShow(6);
    setShowMoreButton(true);
  };

  return (
    <section className="section-chef">
      <div className="container px-6 py-14">
        <h3 className="text-center font-bold text-3xl mb-6">Our Chefs</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-6 gap-y-5 mb-10">
          {chefs.slice(0, numChefsToShow).map((chef) => (
            <Chefs key={chef.id} chef={chef} />
          ))}
        </div>
        {showMoreButton && numChefsToShow < chefs.length && (
          <div className="flex justify-center items-center">
            <button
              onClick={handleShowMoreClick}
              className="btn btn-primary btn-sm"
            >
              Show All
            </button>
          </div>
        )}
        {!showMoreButton && (
          <div className="flex justify-center items-center">
            <button
              onClick={handleShowLessClick}
              className="btn btn-primary btn-sm"
            >
              Show less
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default ChefSection;
