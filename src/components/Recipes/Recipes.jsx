/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { toast } from "react-hot-toast";
import LazyLoad from "react-lazy-load";

// eslint-disable-next-line react/prop-types
const Recipes = ({ recipe }) => {
  const [isClicked, setIsClicked] = useState(false);
  const notify = () => toast.success("Recipe is added in your favorite");

  const handleClick = () => {
    setIsClicked((prevResult) => !prevResult);
    notify();
  };

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
        <LazyLoad>
          <img src={recipe_img} className="w-full h-3/6" alt={recipe_name} />
        </LazyLoad>
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
        <div>
          <button
            onClick={handleClick}
            disabled={isClicked}
            className={`${
              isClicked
                ? "btn btn-primary btn-sm btn-ghost cursor-no-drop"
                : "btn btn-primary btn-sm"
            }`}
          >
            {isClicked ? "Added" : "Add Favourite"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Recipes;
