/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

// eslint-disable-next-line react/prop-types
const Recipes = ({ recipe }) => {
  const {
    // eslint-disable-next-line react/prop-types
    recipe_id,
    recipe_name,
    recipe_img,
    recipe: recipeShortDescirtion,
    ingredients,
    cooking_method,
    rating,
  } = recipe;
  return (
    <div className="card w-full bg-base-100 shadow-xl">
      <figure>
        <img src={recipe_img} alt={recipe_name} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{recipe_name}</h2>
        <p>
          <strong>Short Intro:</strong> {recipeShortDescirtion}
        </p>
        <p className="flex justify-start items-center gap-2">
          <strong>Rating:</strong>
          <Rating style={{ maxWidth: 90 }} value={rating} readOnly />
          <span>({rating})</span>
        </p>
        <p>
          <strong>Ingredients:</strong>
        </p>
        <ul className="list-disc">
          {ingredients.map((ingredient, index) => (
            <li key={index} className="ml-6">
              {ingredient}
            </li>
          ))}
        </ul>
        <p>
          <strong>Cooking Method: </strong>
          {cooking_method}
        </p>
      </div>
    </div>
  );
};

export default Recipes;
