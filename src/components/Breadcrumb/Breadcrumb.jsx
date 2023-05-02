/* eslint-disable no-unused-vars */
import React from "react";

// eslint-disable-next-line react/prop-types
const Breadcrumb = ({ pageTitle }) => {
  pageTitle ? pageTitle : "Page Title";
  return (
    <section className="section-breadcrumb bg-gray-300">
      <div className="container px-6 py-14">
        <div className="flex justify-center items-center">
          <h1 className="text-3xl font-semibold">{pageTitle}</h1>
        </div>
      </div>
    </section>
  );
};

export default Breadcrumb;
