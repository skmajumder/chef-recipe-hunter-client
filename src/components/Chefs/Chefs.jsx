/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const Chefs = ({ chef }) => {
  // eslint-disable-next-line react/prop-types
  const { id, picture, name, experience_years, bio, num_recipes, likes } = chef;
  return (
    <div className="card bg-base-100 shadow-xl">
      <figure>
        <img src={picture} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <ul className="space-y-2">
          <li>
            <strong>Experience:</strong> {experience_years} Years
          </li>
          <li>
            <strong>Numbers of recipes:</strong> {num_recipes.length}
          </li>
          <li>
            <strong>Likes:</strong> {likes}
          </li>
        </ul>
        <div className="card-actions justify-end">
          <Link to={`/chefs/${id}`} className="btn btn-primary btn-sm">
            View Recipes
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Chefs;
