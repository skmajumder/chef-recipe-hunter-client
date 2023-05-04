/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import { AuthContext } from "../contexts/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRouter = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  if (loading) {
    return (
      <>
        <div className="flex justify-center items-center p-10">
          <div className="radial-progress" style={{ "--value": 100 }}>
            100%
          </div>
        </div>
      </>
    );
  }

  if (!user) {
    return <Navigate to={"/login"} state={{ from: location }} replace />;
  }
  return children;
};

export default PrivateRouter;
