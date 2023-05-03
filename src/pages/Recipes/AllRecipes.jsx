/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import Recipes from "../../components/Recipes/Recipes";

const AllRecipes = () => {
  const [allRecipes, setAllRecipes] = useState([]);

  useEffect(() => {
    fetch(`https://chef-recipe-hunter-server-side-kolpodrovercel-gmailcom.vercel.app/recipes`)
      .then((response) => response.json())
      .then((data) => setAllRecipes(data));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const pageTitle = "Recipes";
  return (
    <>
      <Breadcrumb pageTitle={pageTitle} />
      <section className="all-chefs mt-10">
        <div className="container px-6 py-14">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-5 mb-10">
            {allRecipes.map((recipe) => (
              <Recipes key={recipe.recipe_id} recipe={recipe} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default AllRecipes;
