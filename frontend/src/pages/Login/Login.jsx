import React, { useState } from "react";
import { Button } from "../../components/Button/Button";
import "./Login.scss";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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
        <div className="overlap">
          <input
            type="password"
            className="text-wrapper-2"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
      </div>
      <Button name="Log In" className="gray" link="/" style={{ marginBottom: '20px' }} />
      <div className="text-wrapper-4">Forgot your password?</div>
    </div>
  );
}

export default Login;
