import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import MainLayout from "../layouts/Main/MainLayout";
import Home from "../pages/Home/Home";
import ChefsLayout from "../layouts/Chefs/ChefsLayout";
import AllChefs from "../pages/Chefs/AllChefs";
import SingleChef from "../pages/Chefs/SingleChef";
import RecipesLayout from "../layouts/Recipes/RecipesLayout";
import AllRecipes from "../pages/Recipes/AllRecipes";
import Login from "../pages/Home/Login/Login";
import Register from "../pages/Home/Register/Register";
import PrivateRouter from "./PrivateRouter";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
  {
    path: "chefs",
    element: <ChefsLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/chefs",
        element: <AllChefs />,
      },
      {
        path: ":id",
        element: (
          <PrivateRouter>
            <SingleChef />
          </PrivateRouter>
        ),
      },
    ],
  },
  {
    path: "recipes",
    element: (
      <PrivateRouter>
        <RecipesLayout />
      </PrivateRouter>
    ),
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/recipes",
        element: <AllRecipes />,
      },
    ],
  },
]);

export default router;
