import React, { useState, useContext } from "react";
import { VerifyButton } from "../../components/VerifyButton/VerifyButton";
import "./Login.scss";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../utils/AuthContext";

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
    <div className="group">
      <div className="title">Log In</div>
      <div className="login-content">
        <div className="text-wrapper-1">Email</div>
        <input
          type="email"
          className="text-wrapper-2"
          placeholder="Your email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <div className="text-wrapper-1">Password</div>
        <input
          type="password"
          className="text-wrapper-2"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        {incorrectCredentials && (
          <div className="error-message">Wrong email or password</div>
        )}
      </div>
      <VerifyButton
        name="Log In"
        className="gray"
        onClick={handleLogin}
        style={{ marginBottom: "20px" }}
      />
      <Link
        className="text-wrapper-4"
        to="/reset-password"
        onClick={handleLinkClick}
      >
        Forgot your password?
      </Link>
    </div>
  );
}

export default Login;
