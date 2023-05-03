/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import Chefs from "../../components/Chefs/Chefs";

const AllChefs = () => {
  const [chefs, setChefs] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/chefs")
      .then((response) => response.json())
      .then((data) => setChefs(data));
  }, []);

  const pageTitle = "All Chefs";
  return (
    <>
      <Breadcrumb pageTitle={pageTitle} />
      <section className="all-chefs mt-10">
        <div className="container px-6 py-14">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-6 gap-y-5 mb-10">
            {chefs.map((chef) => (
              <Chefs key={chef.id} chef={chef} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default AllChefs;
