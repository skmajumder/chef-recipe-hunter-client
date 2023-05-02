/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { FcLike } from "react-icons/fc";

const Feature = ({ feature }) => {
  const { title, content, icon } = feature;
  return (
    <>
      <div className="flex justify-between items-baseline gap-2">
        <p>
          <FcLike />
        </p>
        <div>
          <p className="text-xl font-semibold text-[#222] mb-3">{title}</p>
          <p className="text-[14px] text-[#555]">{content}</p>
        </div>
      </div>
    </>
  );
};

export default Feature;
