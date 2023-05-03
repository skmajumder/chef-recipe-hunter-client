/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthProvider";

const Login = () => {
  const { loginUser, googleSignIn, githubSignIn } = useContext(AuthContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [passwordError, setPasswordError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [loginError, setLoginError] = useState("");

  const location = useLocation();
  const navigate = useNavigate();

  const destination = location?.state?.from?.pathname || "/";

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

  const handleSubmit = (event) => {
    event.preventDefault();
    if (emailError) {
      event.target.loginEmail.focus();
      return;
    }
    if (passwordError) {
      event.target.loginPassword.focus();
      return;
    }

    const form = event.target;
    const loginEmail = form.loginEmail.value;
    const loginPassword = form.loginPassword.value;
    loginUser(loginEmail, loginPassword)
      .then((userCredential) => {
        const user = userCredential.user;
        setEmail("");
        setPassword("");
        navigate(destination);
      })
      .catch((error) => {
        const errorMessage = error.message;
        setLoginError(errorMessage);
      });
  };

  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((result) => {
        const loggedInUser = result.user;
        navigate(destination);
      })
      .catch((error) => {
        setLoginError(`Error: ${error.message}`);
      });
  };

  const handleGithubSignIn = () => {
    githubSignIn()
      .then((result) => {
        const loggedInUser = result.user;
        navigate(destination);
      })
      .catch((error) => {
        setLoginError(`Error: ${error.message}`);
      });
  };

  return (
    <section className="section-registration">
      <div className="container px-6 py-14">
        <div className="max-w-md mx-auto bg-white p-8 rounded-md shadow-md">
          <h2 className="text-xl font-medium mb-4 text-center">Login Form</h2>
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
          {loginError && (
            <p className="text-red-400 text-center font-semibold">
              {loginError}
            </p>
          )}
          <form onSubmit={handleSubmit}>
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
                name="loginEmail"
                value={email}
                onChange={handleEmail}
                placeholder="Enter your email"
                required
              />
            </div>
            <div className="mb-4">
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
                type="password"
                id="password"
                name="loginPassword"
                value={password}
                onChange={handlePassword}
                placeholder="Enter your password"
                required
              />
            </div>
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 mb-2 w-full"
              type="submit"
            >
              Log in
            </button>
            <button
              onClick={handleGoogleSignIn}
              className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 mb-2 w-full"
              type="button"
            >
              Google Sign-in
            </button>
            <button
              onClick={handleGithubSignIn}
              className="bg-gray-800 text-white px-4 py-2 rounded-md hover:bg-gray-900 mb-2 w-full"
              type="button"
            >
              GitHub Sign-in
            </button>
          </form>
          <div className="mt-4 text-center">
            <Link to={"/register"} className="text-blue-500 hover:underline">
              Don't have an account? Register
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
