import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../utils/AuthContext";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [incorrectCredentials, setIncorrectCredentials] = useState(false);
  const { setLoginStatus } = useContext(AuthContext);

  const handleLogin = async () => {
    try {
      const response = await fetch(`${import.meta.env.VITE_LOGIN_URL}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        setLoginStatus(true);
        window.location.href = "/";
      } else {
        setIncorrectCredentials(true);
      }
    } catch (error) {
      alert("Incorrect email address or password");
      console.error("Error logging in:", error);
    }
  };

  const handleLinkClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="flex flex-col items-center px-6 lg:px-32 py-16">
      {/* Title */}
      <h1 className="text-4xl font-bold text-gray-800 mb-8">Log In</h1>

      {/* Login Content */}
      <div className="w-full max-w-md flex flex-col gap-6">
        {/* Email */}
        <div>
          <label className="block text-lg font-semibold text-gray-700 mb-2">
            Email
          </label>
          <input
            type="email"
            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        {/* Password */}
        <div>
          <label className="block text-lg font-semibold text-gray-700 mb-2">
            Password
          </label>
          <input
            type="password"
            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        {/* Error Message */}
        {incorrectCredentials && (
          <div className="text-red-500 text-sm font-medium">
            Wrong email or password
          </div>
        )}
      </div>

      {/* Login Button */}
      <button
        onClick={handleLogin}
        className="bg-dark-gray hover:bg-lighter-gray text-white font-semibold px-6 py-2 mt-6 rounded-md shadow-md transition"
      >
        Log In
      </button>

      {/* Forgot Password Link */}
      <Link
        to="/reset-password"
        onClick={handleLinkClick}
        className="mt-4 text-dark-gray hover:underline"
      >
        Forgot your password?
      </Link>
    </div>
  );
}

export default Login;
