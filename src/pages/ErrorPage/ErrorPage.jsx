/* eslint-disable no-unused-vars */
import React from "react";
import ErrorImg from "../../../public/img/error-img.png";
import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const { error, status } = useRouteError();
  return (
    <section className="section-error">
      <div className="container px-6 py-14">
        <div className="flex flex-col justify-between items-center">
          <img className="w-[30%]" src={ErrorImg} alt="" />
          <div className="text-center space-y-5">
            <h1 className="font-semibold text-red-500 text-3xl">Error {status || 404}</h1>
            <p>{error?.message}</p>
            <Link to={"/"} className="btn btn-accent btn-sm">Back to Home</Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ErrorPage;
