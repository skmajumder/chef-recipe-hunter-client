import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import MainLayout from "../layouts/Main/MainLayout";
import Home from "../pages/Home/Home";
import ChefsLayout from "../layouts/Chefs/ChefsLayout";
import AllChefs from "../pages/Chefs/AllChefs";
import SingleChef from "../pages/Chefs/SingleChef";

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
        element: <SingleChef />,
      },
    ],
  },
]);

export default router;
