import React, { useState } from "react";
import { Button } from "../../components/Button/Button";
import { Dropdown } from "../../components/Dropdown/Dropdown";
import "./Signup.scss";

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [otp, setOtp] = useState("");
  const [buttonText, setButtonText] = useState("Verify");
  const [major, setMajor] = useState("");
  const [classStanding, setClassStanding] = useState("");

  const handleButtonClick = () => {
    // Here, you would trigger the API request to send the OTP to the provided email
    // Update buttonText accordingly, maybe also disable the button for a certain time
    // Once OTP is sent, you might want to switch to a "Resend" option
    setButtonText("Resend");
  };

  const majors = [
    "Computer Science",
    "Mechanical Engineering",
    "Industrial and Systems Engineering",
    "Electrical Computer Engineering",
    "Business",
    "Chemical and Biomolecular Engineering",
    "Others"
  ];

  const standings = [
    "Freshman",
    "Sophomore",
    "Junior",
    "Senior"
  ];

  const handleVerifyOTP = () => {
    // Here, you would trigger the API request to verify the entered OTP
    // You can send the entered OTP value (otp) to the backend for verification
    // Upon successful verification, you can redirect the user to the next step or perform any other action
    // You may also want to handle error cases
    // Example:
    fetch("/verify_otp/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ otp }),
    })
      .then((response) => {
        if (response.ok) {
          // Redirect or perform other actions upon successful OTP verification
          // Example redirect: window.location.href = '/success';
        } else {
          // Handle error case
          console.error("Failed to verify OTP");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
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
              type="text"
              className="text-wrapper-2"
              placeholder="Your verification code"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
            />
            <Button
              name="Verify OTP"
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
