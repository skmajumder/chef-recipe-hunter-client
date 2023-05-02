/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";
import { FcIphone } from "react-icons/fc";

const Footer = () => {
  return (
    <footer className="footer bg-slate-800">
      <div className="container px-6 py-14">
        <div className="grid grid-cols-4 gap-4">
          <div className="about">
            <h4 className="text-white text-[17px] font-semibold mb-4">
              Omnifood
            </h4>
            <p className="text-white text-[14px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut
              ducimus tempore officia laudantium expedita voluptatum voluptas
              soluta a ipsa fugit.
            </p>
          </div>
          <div className="contact-info">
            <p className="text-white text-[17px] font-semibold mb-4">
              Contact Info
            </p>
            <p className="text-white">
              <strong>Street:</strong> 409-1135, Jodoji Shimominamidacho,
              Sakyo-ku-shi, Tokyo
            </p>
            <p className="flex justify-start items-center gap-1 text-white">
              <span>
                <FcIphone />
              </span>
              <a href="tel:+8182-644-0376">+8182-644-0376</a>
            </p>
            <a href="mailto:contact@omnifood.com" className="text-white">
              contact@omnifood.com
            </a>
          </div>
          <div className="footer-nav">
            <p className="text-white text-[17px] font-semibold mb-4">
              Useful Links
            </p>
            <ul>
              <li className="mb-2">
                <Link to={"/"} className="text-white font-medium text-[14px]">
                  Home
                </Link>
              </li>
              <li className="mb-2">
                <Link to={"/"} className="text-white font-medium text-[14px]">
                  Chefs
                </Link>
              </li>
              <li className="mb-2">
                <Link to={"/"} className="text-white font-medium text-[14px]">
                  Login
                </Link>
              </li>
              <li className="mb-2">
                <Link to={"/"} className="text-white font-medium text-[14px]">
                  Blog
                </Link>
              </li>
            </ul>
          </div>
          <div className="subscribe">
            <p className="text-white text-[17px] font-semibold mb-4">
              Subscribe
            </p>
            <p className="mb-2 text-white">
              Get update with latest healthy and Delicious food Recipe
            </p>
            <div className="flex justify-start items-center gap-1">
              <input
                type="email"
                placeholder="Your Email"
                className="input w-full max-w-xs border-white"
              />
              <button className="btn btn-outline border-white text-white">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
