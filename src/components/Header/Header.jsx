/* eslint-disable no-unused-vars */
import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../../public/img/omnifood-logo.png";
import User from "../../../public/img/user-avatar.jpg";
import { AuthContext } from "../../contexts/AuthProvider";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, logout } = useContext(AuthContext);

  const userAvatar = user?.photoURL || User;

  return (
    <nav className="flex items-center justify-between flex-wrap p-6">
      <div className="flex items-center flex-shrink-0 text-white mr-6 lg:mr-72">
        <img src={Logo} className="w-100 h-6 mr-2" alt="Logo" />
      </div>
      <div className="block lg:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center px-3 py-2 rounded text-black-500 hover:text-black-400"
        >
          <svg
            className={`fill-current h-3 w-3 ${isOpen ? "hidden" : "block"}`}
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
          <svg
            className={`fill-current h-3 w-3 ${isOpen ? "block" : "hidden"}`}
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
          </svg>
        </button>
      </div>
      <div
        className={`w-full block flex-grow lg:flex lg:items-center lg:w-auto ${
          isOpen ? "block" : "hidden"
        }`}
      >
        <div className="text-sm lg:flex-grow">
          <Link
            to={"/"}
            className="block mt-4 lg:inline-block lg:mt-0 text-white-200 mr-4 font-semibold text-[17px]"
          >
            Home
          </Link>
          <Link
            to={"/chefs"}
            className="block mt-4 lg:inline-block lg:mt-0 text-white-200 mr-4 font-semibold text-[17px]"
          >
            Chefs
          </Link>
          {user && (
            <Link
              to={"/recipes"}
              className="block mt-4 lg:inline-block lg:mt-0 text-white-200 mr-4 font-semibold text-[17px]"
            >
              All Recipe
            </Link>
          )}
          <Link
            to={"/blog"}
            className="block mt-4 lg:inline-block lg:mt-0 text-white-200 mr-4 font-semibold text-[17px]"
          >
            Blog
          </Link>
        </div>
        <div>
          {user ? (
            <>
              <div className="flex justify-center items-center gap-2">
                <div className="tooltip" data-tip={user?.displayName}>
                  <label
                    tabIndex={0}
                    className="btn btn-ghost btn-circle avatar"
                  >
                    <div className="w-10 rounded-full">
                      <img src={userAvatar} />
                    </div>
                  </label>
                </div>
                <button onClick={logout} className="btn btn-sm btn-outline">
                  Logout
                </button>
              </div>
            </>
          ) : (
            <Link to={"/login"} className="btn btn-sm btn-outline">
              Login
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Header;
