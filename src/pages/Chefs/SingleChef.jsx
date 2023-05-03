/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import Recipes from "../../components/Recipes/Recipes";

const SingleChef = () => {
  const { id: chefID } = useParams();

  const [chefDetails, setChefDetails] = useState([]);
  const [chefRecipes, setChefRecipes] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:3000/chefs/${chefID}`)
      .then((response) => response.json())
      .then((data) => setChefDetails(data));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    fetch(`http://localhost:3000/chefs/recipes/${chefID}`)
      .then((response) => response.json())
      .then((data) => setChefRecipes(data));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const { id, picture, name, experience_years, bio, num_recipes, likes } =
    chefDetails;
  return (
    <>
      <Breadcrumb pageTitle={name} />
      <section className="chef-details">
        <div className="container px-6 py-10">
          <div className="hero min-h-16 bg-base-200">
            <div className="hero-content flex-col gap-12 lg:flex-row">
              <img src={picture} className="max-w-md rounded-lg shadow-2xl" />
              <div className="chef-info">
                <h1 className="text-5xl font-bold">{name}</h1>
                <p className="py-6">{bio}</p>
                <ul className="space-y-2">
                  <li>
                    <strong>Experience:</strong> {experience_years} Years
                  </li>
                  <li>
                    <strong>Numbers of recipes:</strong> {num_recipes?.length}
                  </li>
                  <li>
                    <strong>Likes:</strong> {likes}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="chef-recipes">
        <div className="container px-6 py-6">
          <div className="flex justify-center items-center mb-8">
            <h3 className="text-2xl font-semibold">Recipes</h3>
          </div>
          <div className="grid grid-cols-2 gap-x-6 gap-y-5 mb-10">
            {chefRecipes.map((recipe) => (
              <Recipes key={recipe.recipe_id} recipe={recipe} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default SingleChef;
