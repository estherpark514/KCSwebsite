import React, { useState } from "react";
import { Button } from "../../components/Button/Button";
import { VerifyButton } from "../../components/VerifyButton/VerifyButton";
import { Dropdown } from "../../components/Dropdown/Dropdown";
import "./Signup.scss";

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [otp, setOtp] = useState("");
  const [buttonText, setButtonText] = useState("Verify");
  const [major, setMajor] = useState("");
  const [classStanding, setClassStanding] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [passwordMismatch, setPasswordMismatch] = useState(false);

  const handleButtonClick = () => {
    fetch(`${import.meta.env.VITE_API_URL}register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password, major, class_standing }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.status === 200) {
          setButtonText("Resend");
        } else {
          alert("Failed to register");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const majors = [
    "Computer Science",
    "Mechanical Engineering",
    "Industrial and Systems Engineering",
    "Electrical Computer Engineering",
    "Business",
    "Chemical and Biomolecular Engineering",
    "Others",
  ];

  const standings = ["Freshman", "Sophomore", "Junior", "Senior"];

  const handleVerifyOTP = () => {
    fetch(`${import.meta.env.VITE_API_URL}verify`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, otp }),
    })
      .then((response) => {
        if (response.ok) {
          console.log("OTP verified successfully");
        } else {
          console.error("Failed to verify OTP");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    if (!e.target.value.endsWith("@gatech.edu")) {
      setEmailError(true);
    } else {
      setEmailError(false);
    }
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
    if (password !== e.target.value) {
      setPasswordMismatch(true);
    } else {
      setPasswordMismatch(false);
    }
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
              className={`text-wrapper-2 ${emailError ? "error" : ""}`}
              placeholder="Georgia Tech email address"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                handleEmailChange(e);
              }}
            />
            <VerifyButton
              name={buttonText}
              className="white"
              onClick={handleButtonClick}
              disabled={emailError}
            />
          </div>
          {emailError && (
            <div className="text-wrapper-3" style={{ color: "red" }}>
              *Your email address must be a Georgia Tech account
            </div>
          )}
        </div>
        <div className="signup-section">
          <div className="container">
            <input
              type="text"
              className="text-wrapper-2"
              placeholder="OTP code"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
            />
            <VerifyButton
              name="Verify"
              className="white"
              onClick={handleVerifyOTP}
            />
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
              onChange={(e) => setPassword(e.target.value)} // Correct: setPassword
            />
          </div>
          <div className="text-wrapper-3">
            *Password must be at least 8 characters long
          </div>
        </div>
        <div className="signup-section">
          <div className="container">
            <input
              type="password"
              className={`text-wrapper-2 ${passwordMismatch ? "error" : ""}`}
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={handleConfirmPasswordChange}
            />
          </div>
          {passwordMismatch && (
            <div className="text-wrapper-3" style={{ color: "red" }}>
              Passwords do not match
            </div>
          )}
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
          <Dropdown options={majors} onSelect={setMajor} />
        </div>
        <div className="signup-section">
          <div className="text-wrapper-1">Class Standing</div>
          <Dropdown options={standings} onSelect={setClassStanding} />
        </div>
      </div>
      <Button name="Create an account" className="white" link="/" />
    </div>
  );
}

export default Signup;
