/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import Chefs from "../../../components/Chefs/Chefs";

const ChefSection = () => {
  const [chefs, setChefs] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/chefs")
      .then((response) => response.json())
      .then((data) => setChefs(data));
  }, []);
  console.log(chefs);

  return (
    <section className="section-chef">
      <div className="container px-6 py-14">
        <h3 className="text-center font-bold text-3xl mb-6">Our Chefs</h3>
        <div className="grid grid-cols-3 gap-x-6 gap-y-5">
          {chefs.map((chef) => (
            <Chefs key={chef.id} chef={chef} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ChefSection;
