/* eslint-disable no-unused-vars */
import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthProvider";
import { FaEyeSlash, FaEye } from "react-icons/fa";

const Register = () => {
  const { createUser, googleSignIn, githubSignIn } = useContext(AuthContext);

  // Store input value in state
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [photo, setPhoto] = useState("");

  //   For error messages
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [photoError, setPhotoError] = useState("");
  const [registerError, setRegisterError] = useState("");

  //   Show password
  const [showPassword, setShowPassword] = useState(false);

  const handleShowPassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  // Get Name Value
  const handleName = (event) => {
    const nameInput = event.target.value;
    setName(nameInput);
    if (nameInput.length < 3) {
      setNameError("Name should be 3 characters or long");
      return;
    } else {
      setNameError("");
    }
  };

  // Get Email Value
  const handleEmail = (event) => {
    const emailInput = event.target.value;
    setEmail(emailInput);
    if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(emailInput)) {
      setEmailError("Invalid email address");
      return;
    } else {
      setEmailError("");
    }
  };

  // Get Password Value
  const handlePassword = (event) => {
    const passwordInput = event.target.value;
    setPassword(passwordInput);
    if (passwordInput.length < 6) {
      setPasswordError("Password must be at least 6 characters");
      return;
    } else {
      setPasswordError("");
    }
  };

  // Get Photo URL
  const handlePhoto = (event) => {
    const photoInput = event.target.value;
    setPhoto(photoInput);
    if (photoInput.length < 0) {
      setPhotoError("Please Enter valid URL");
      return;
    } else {
      setPhotoError("");
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (nameError) {
      event.target.registerName.focus();
      return;
    }
    if (emailError) {
      event.target.registerEmail.focus();
      return;
    }
    if (passwordError) {
      event.target.registerPassword.focus();
      return;
    }
    if (photoError) {
      event.target.registerPhoto.focus();
      return;
    }

    const form = event.target;
    const registerName = form.registerName.value;
    const registerEmail = form.registerEmail.value;
    const registerPassword = form.registerPassword.value;
    const registerPhoto = form.registerPhoto.value;

    createUser(registerEmail, registerPassword)
      .then((userCredential) => {
        const user = userCredential.user;
        setName("");
        setEmail("");
        setPassword("");
        setPhoto("");
      })
      .catch((error) => {
        const errorMessage = error.message;
        setRegisterError(errorMessage);
      });
  };

  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((result) => {
        const loggedInUser = result.user;
      })
      .catch((error) => {
        setRegisterError(`Error: ${error.message}`);
      });
  };

  const handleGithubSignIn = () => {
    githubSignIn()
      .then((result) => {
        const loggedInUser = result.user;
      })
      .catch((error) => {
        setRegisterError(`Error: ${error.message}`);
      });
  };

  return (
    <section className="section-registration">
      <div className="container px-6 py-14">
        <div className="flex justify-center items-center">
          <div className="max-w-md w-[100%] md:w-[50%] mx-auto bg-white p-8 rounded-md shadow-md">
            <h2 className="text-xl font-medium mb-4 text-center">
              Registration Form
            </h2>

            {nameError && (
              <p className="text-red-400 text-center font-semibold">
                {nameError}
              </p>
            )}
            {emailError && (
              <p className="text-red-400 text-center font-semibold">
                {emailError}
              </p>
            )}
            {passwordError && (
              <p className="text-red-400 text-center font-semibold">
                {passwordError}
              </p>
            )}
            {photoError && (
              <p className="text-red-400 text-center font-semibold">
                {photoError}
              </p>
            )}
            {registerError && (
              <p className="text-red-400 text-center font-semibold">
                {registerError}
              </p>
            )}

            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label
                  className="block text-gray-700 font-medium mb-2"
                  htmlFor="name"
                >
                  Name
                </label>
                <input
                  className={`w-full border p-2 rounded-md border-gray-400 focus:outline-none focus:shadow-outline ${
                    name
                      ? nameError
                        ? "border-red-400"
                        : "border-green-400"
                      : "focus:border-gray-400"
                  }`}
                  type="text"
                  id="name"
                  name="registerName"
                  value={name}
                  onChange={handleName}
                  placeholder="Enter your name"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 font-medium mb-2"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  className={`w-full border p-2 rounded-md border-gray-400 focus:outline-none focus:shadow-outline ${
                    email
                      ? emailError
                        ? "border-red-400"
                        : "border-green-400"
                      : "focus:border-gray-400"
                  }`}
                  type="email"
                  id="email"
                  name="registerEmail"
                  value={email}
                  onChange={handleEmail}
                  placeholder="Enter your email"
                  required
                />
              </div>
              <div className="mb-4 relative">
                <label
                  className="block text-gray-700 font-medium mb-2"
                  htmlFor="password"
                >
                  Password
                </label>
                <input
                  className={`w-full border p-2 rounded-md border-gray-400 focus:outline-none focus:shadow-outline ${
                    password
                      ? passwordError
                        ? "border-red-400"
                        : "border-green-400"
                      : "focus:border-gray-400"
                  }`}
                  type={showPassword ? "text" : "password"}
                  id="password"
                  name="registerPassword"
                  value={password}
                  onChange={handlePassword}
                  placeholder="Enter your password"
                  required
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 px-2 py-1 mt-8 text-gray-700 hover:text-indigo-500 focus:outline-none focus:text-indigo-500"
                  onClick={handleShowPassword}
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 font-medium mb-2"
                  htmlFor="photo"
                >
                  Photo URL
                </label>
                <input
                  className={`w-full border p-2 rounded-md border-gray-400 focus:outline-none focus:shadow-outline ${
                    photo
                      ? photoError
                        ? "border-red-400"
                        : "border-green-400"
                      : "focus:border-gray-400"
                  }`}
                  type="url"
                  id="photo"
                  name="registerPhoto"
                  value={photo}
                  onChange={handlePhoto}
                  placeholder="Enter your photo URL"
                  required
                />
              </div>
              <div className="flex flex-col justify-between items-center mb-4">
                <button
                  className="bg-blue-500 text-white w-full px-4 py-2 rounded-md hover:bg-blue-600"
                  type="submit"
                >
                  Register
                </button>
              </div>
              <div className="flex flex-col justify-between items-center space-x-2 space-y-3">
                <button
                  onClick={handleGoogleSignIn}
                  className="bg-red-600 text-white w-full px-4 py-2 rounded-md hover:bg-red-700"
                  type="button"
                >
                  Google Sign-Up
                </button>
                <button
                  onClick={handleGithubSignIn}
                  className="bg-gray-800 text-white w-full px-4 py-2 rounded-md hover:bg-gray-900"
                  type="button"
                >
                  GitHub Sign-Up
                </button>
              </div>
            </form>
            <div className="mt-4 text-center">
              <Link to={"/login"} className="text-blue-500 hover:underline">
                Already have an account? Log in
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;
