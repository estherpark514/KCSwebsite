import React, { useState } from "react";
import { Button } from "../../components/Button/Button";
import "./Signup.scss";

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [buttonText, setButtonText] = useState("Verify");

  const handleButtonClick = () => {
    setButtonText("Resend");
  };

  return (
    <div className="group">
      <div className="title">Sign Up</div>
      <div className="text-wrapper-3">
        Only students with a Georgia Tech email account are eligible to create
        an account.
      </div>
      <div className="signup-content">
        <div className="signup-section">
          <div className="text-wrapper-1">Email</div>
          <div className="container">
            <input
              type="email"
              className="text-wrapper-2"
              placeholder="Your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Button
              name={buttonText}
              className="white"
              link="#"
              onClick={handleButtonClick}
            />
          </div>
          <div className="text-wrapper-3">
            *Your email address must be Georgia Tech email address
          </div>
        </div>
        <div className="signup-section">
          <div className="container">
            <input
              type="verification"
              className="text-wrapper-2"
              placeholder="Your verification code"
            />
            <Button name="verify" className="white" link="/" />
          </div>
        </div>
        <div className="signup-section">
          <div className="text-wrapper-1">Password</div>
          <div className="container">
            <input
              type="password"
              className="text-wrapper-2"
              placeholder="Password"
              value={password}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="text-wrapper-3">
            *Password must be at least 8 characters long
          </div>
        </div>
        <div className="signup-section">
          <div className="text-wrapper-1">First Name (ENG)</div>
          <div className="container">
            <input
              type="first name (eng)"
              className="text-wrapper-2"
              placeholder="First name"
            />
          </div>
        </div>
        <div className="signup-section">
          <div className="text-wrapper-1">Last Name (ENG)</div>
          <div className="container">
            <input
              type="last name (eng)"
              className="text-wrapper-2"
              placeholder="Last name"
            />
          </div>
        </div>
        <div className="signup-section">
          <div className="text-wrapper-1">Major</div>
          {/* <Dropdown options={options} /> */}
        </div>
        <div className="signup-section">
          <div className="text-wrapper-1">Class Standing</div>
          {/* <Dropdown options={options} /> */}
        </div>
      </div>
      <Button name="Create an account" className="white" link="/" />
    </div>
  );
}

export default Signup;
